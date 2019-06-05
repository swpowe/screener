import React, {Component} from 'react';
import VocabItem from './VocabItem';
import ProgressBar from './ProgressBar';

import questionsData from '../questionsData';
import { thisTypeAnnotation } from '@babel/types';

class Question extends Component {
    constructor(props) {
        super(props);

        // methods binding
        this.getAudioPrompt = this.getAudioPrompt.bind(this);

    }
    state = {
        data: questionsData[0],
        dataset: 0,
        // question array
        percentage: 0,
        targetWord: '',
    }

    getAudioPrompt() {
        const trapDoor = process.env.PUBLIC_URL;
        const path = '/Assets/Audio/';
        let word = '';
        let audioPath = '';

        for(var i = 0; i < this.state.data.answers.length; i++) {
            // check data for the target word then set the path and state
            if(this.state.data.answers[i].correct === true) {
                word = this.state.data.answers[i].word;
                audioPath = trapDoor + path + word + '.mp3';
                this.setState({
                    targetWord: word
                })
            };

        };
        return audioPath;
    }

    handleDataset() {
        this.setState({
            data: questionsData[this.state.dataset ++],
            dataset: this.state.dataset ++
        })
        console.log("new dataset : " + this.state.dataset)
    }

    handleProgress(percentage) {
        if(this.state.percentage === 100) return;
        this.setState({
            percentage: percentage
        })
    }

    // Main Render Fucntion
    render() {
        return(
            <div>
                {/* get the audio prompt for the current quesiton */}
                <audio src={this.getAudioPrompt()} autoPlay />
                <div className="flexContainer">
                {/* map function */}
                    return(
                        <div className="flexItem" key={index}>
                            {this.state.data.type === 'Vocab'
                                ? <VocabItem
                                    data={this.state.data}
                                    dataset={this.state.dataset}
                                    handleDataset={this.handleDataset}
                                    handleProgress={this.handleProgress} 
                                />
                                : <ListeningItem 
                                />
                            }
                        </div>
                        
                    )
                    

                </div>
                <ProgressBar className="progressBar" percentage={this.state.percentage} />
            </div>
        )
    }
}

export default Question;

