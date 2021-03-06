import React, {Component} from 'react';
import VocabItem from './VocabItem';
import ProgressBar from './ProgressBar';

import questionsData from '../questionsData';

class VocabQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleDataset = this.handleDataset.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.getCurrentAudio = this.getCurrentAudio.bind(this);
        this.setTemparrayObj = this.setTemparrayObj.bind(this);
    }
    state = {
        dataset: 0,
        // questionsData[this.state.dataset].answers
        // tempArray: ["1","2","3"],
        tempArray: [],
        percentage: 0,
        // highlight: {border: "10px solid white;"}
    }


    

    getCurrentAudio() {
        console.log("in get audio")
        let currentWord;
        let currentAudio;
        const trapDoor = process.env.PUBLIC_URL;
        const path = '/Assets/Audio/';
        for(var i = 0; i < questionsData[this.state.dataset].answers.length; i++) {
            if(questionsData[this.state.dataset].answers[i].correct === true) {
                currentWord = questionsData[this.state.dataset].answers[i].word;
                currentAudio = trapDoor + path + currentWord + '.mp3';
            }

        }
        console.log('current audio : ' + currentAudio);
        return currentAudio;
    }

    handleDataset(newDataset) {
        this.setState({
            dataset: newDataset
        })
        alert("new state dataset : " + this.state.dataset);
    }

    handleProgress(percentage) {
        if(this.state.percentage === 100) return;
        this.setState({
            percentage: percentage
        })
    }

    handleHighlight() {

    }
    setTemparrayObj() {
        let arrayObj = [];
        let wordArray = [];
        arrayObj = [...arrayObj, ...questionsData[this.state.dataset].answers]
        for(const key in arrayObj) {
           wordArray.push(arrayObj[key].word) 
        }
        this.setState({
            tempArray: wordArray
        })

        // this.setState({
        //     tempArray: [ ...this.state.tempArray, ...questionsData[this.state.dataset].answers]
            
        //   })
        // this.setState(state => {

        // })
          console.log(" array word : " + wordArray)
          console.log(" state array : " + this.state.tempArray)
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
                <audio src={this.getCurrentAudio()} autoPlay/>
                {/* {this.getCurrentAudio()}; */}
                {this.setTemparrayObj()}
                <div className="flexContainer">
                    {/* <ul className="flexContainer"> */}
                    {/* 
                        Need to swap out the temp arrayObj for 
                        questionsData object at index [state.dataset]
                    */}
                    {this.state.tempArray.map((value, index) => {
                        return (
                            <div className="flexItem" key={index}>
                                <VocabItem 
                                    value={value} 
                                    questionsData={questionsData}
                                    handleDataset={this.handleDataset}
                                    dataset={this.state.dataset}
                                    percentage={this.state.percentage}
                                    handleProgress={this.handleProgress}
                                    currentDatasetData={questionsData[this.state.dataset]}
                                    />
                            </div>)
                    })}
                {/* </ul> */}
                </div>
                <ProgressBar className="progressBar" percentage={this.state.percentage}/>
            </div>
        )
    }
}

export default VocabQuestion;