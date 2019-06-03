import React, {Component} from 'react';
import VocabItem from './VocabItem';
import ProgressBar from './ProgressBar';

import questionsData from '../questionsData';
// import quizQuestions from '../questionsData';
// import quizQuestions from '../questionsData';

class VocabQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleDataset = this.handleDataset.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.getCurrentAudio = this.getCurrentAudio.bind(this);
    }
    state = {
        dataset: 0,
        tempArray: ["1", "2", "3"],
        percentage: 0
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
                {/* <audio src={require('../Assets/Audio/backpack.mp3')} autoPlay/> */}
                {/* {this.getCurrentAudio}; */}
                <audio src={this.getCurrentAudio()} autoPlay/>
                {/* {this.getCurrentAudio()}; */}
                <ul className="flexContainer">
                    {/* 
                        Need to swap out the temp array for 
                        questionsData object at index [state.dataset]
                    */}
                    {this.state.tempArray.map((value, index) => {
                        return (
                            <li className="flexItem" key={index}>
                                <VocabItem 
                                    value={value} 
                                    questionsData={questionsData}
                                    handleDataset={this.handleDataset}
                                    dataset={this.state.dataset}
                                    percentage={this.state.percentage}
                                    handleProgress={this.handleProgress}
                                    currentDatasetData={questionsData[this.state.dataset]}
                                    />
                            </li>)
                    })}
                </ul>
                <ProgressBar percentage={this.state.percentage}/>
            </div>
        )
    }
}

export default VocabQuestion;