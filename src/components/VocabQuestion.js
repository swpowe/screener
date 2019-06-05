import React, {Component} from 'react';
import VocabItem from './VocabItem';
import ProgressBar from './ProgressBar';

import questionsData from '../questionsData';
import quizQuestions from '../questionsData';

class VocabQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleDataset = this.handleDataset.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.getCurrentAudio = this.getCurrentAudio.bind(this);
        this.mapArray = this.mapArray.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this); 
    }
    state = {
        answersObj: [],
        data: questionsData[0],
        dataset: 0,
        // questionsData[this.state.dataset].answers
        tempArray: ["1","2","3"],
        // tempArray: [],
        percentage: 0,
        // highlight: {border: "10px solid white;"}
        
        wordsArray: []
    }


    

    getCurrentAudio() {
        let currentWord;
        let currentAudio;
        const trapDoor = process.env.PUBLIC_URL;
        const path = '/Assets/Audio/';
        for(var i = 0; i < this.state.data.answers.length; i++) {
            if(this.state.data.answers[i].correct === true) {
                currentWord = this.state.data.answers[i].word;
                currentAudio = trapDoor + path + currentWord + '.mp3';
            }

        }
        console.log('current audio prompt: ' + currentAudio);
        return currentAudio;
    }

   async handleDataset(newDataset) {
        this.setState({
            data: questionsData[newDataset],
            dataset: newDataset,

        })
        await this.mapArray();
        // alert("new state dataset : " + this.state.dataset);
    }

    handleProgress(percentage) {
        if(this.state.percentage === 100) return;
        this.setState({
            percentage: percentage
        })
    }

    handleHighlight() {

    }
  

    mapArray() {
        
        const { answers } = this.state.data;
        let shuffledArray = [];
        let tempArray = [];
        let target = '';

        shuffledArray = this.shuffleArray(answers)

        
        // setup simple words array pulling from shuffled array
        for(var index in shuffledArray) {
            tempArray.push(shuffledArray[index].word);
            console.log("temp array : " + tempArray)
        }

        for(var i in shuffledArray) {
            if(shuffledArray[i].correct === true) {
                target = shuffledArray[i].word
            }
        }

        this.setState({
            answersObj: shuffledArray,
            wordsArray: tempArray,
            target: target
            
        })


        return shuffledArray;
    }


    shuffleArray(objArray) {
        let currentIndex = objArray.length, temporaryValue, randomIndex;

        while(0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = objArray[currentIndex];
            objArray[currentIndex] = objArray[randomIndex];
            objArray[randomIndex] = temporaryValue;
        }
        // this.setState({answersObj: objArray}, () => {});
        this.setState({
            answersObj: objArray
        })
        // console.log("ssfe;lfa;l : " + JSON.stringify(this.state.answersObj))
        return objArray
    }
async componentDidMount() {
    await this.mapArray();
    console.log("finally : " + JSON.stringify(this.state.answersObj))
    console.log(" words array async" +  JSON.stringify(this.state.wordsArray))
}
   

    render() {
        return(
            // <div style={{
            //     backgroundColor: "aqua", width: "600px", minHeight: "200px"
            // }}>
            <div>
                {/* 
                    Play audio on load 
                    Need to swap this for a prop that says which question audio
                */}
                {/* {this.mapArray()} */}
                <audio src={this.getCurrentAudio()} autoPlay/>
                {/* {this.getCurrentAudio()}; */}
                {/* {this.setTemparrayObj()} */}
                <div className="flexContainer">
                    {/* <ul className="flexContainer"> */}
                    {/* 
                        Need to swap out the temp arrayObj for 
                        questionsData object at index [state.dataset]
                    */}
                    {this.state.wordsArray.map((value, index) => {
                        return (
                            <div className="flexItem" key={index}>
                                <VocabItem 
                                    value={index} 
                                    // questionsData={questionsData}
                                    handleDataset={this.handleDataset}
                                    dataset={this.state.dataset}
                                    percentage={this.state.percentage}
                                    handleProgress={this.handleProgress}
                                    // currentDatasetData={questionsData[this.state.dataset]}
                                    answersObj={this.state.answersObj}
                                    wordsArray={this.state.wordsArray}
                                    target={this.state.target}
                                    />
                            </div>)
                    })}
                {/* </ul> */}
                </div>
                <ProgressBar className="progress-bar" percentage={this.state.percentage}/>
            </div>
        )
    }
}

export default VocabQuestion;