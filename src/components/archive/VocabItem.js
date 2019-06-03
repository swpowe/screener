import React, {Component} from 'react';
import quizQuestions from '../questionsData';

class VocabItem extends Component {
    constructor(props) {
        super(props);
        this.myAlert = this.myAlert.bind(this);
        this.myFunc = this.myFunc.bind(this);
    }
    state = {
        className: "imageButton",
        
    }

    myAlert() {
        var clickedWord = quizQuestions[this.props.dataset].answers[parseInt(this.props.value) -1];
        console.log(clickedWord.word);
        console.log(this.props.value);

        // Advance Progress Menu
        this.props.handleProgress(this.props.percentage + 20);

        // Check to see if the clicked was correct or not
        if(clickedWord.correct === true) {
            // a call back to the parent vocab question to advance the dataset
            this.props.handleDataset(this.props.dataset + 1);
        }
    }

    myFunc() {
        this.setState({
            className: "imageButtonClicked"
        });
        setTimeout(this.myAlert, 500);
    }           

    render() {
        return (
            <div>
                 <button
                    className={this.state.className}
                    onClick={this.myFunc}
                >
                    <img
                        src={quizQuestions[this.props.dataset].answers[parseInt(this.props.value) - 1].image} alt=""
                    />
                </button>
                Test without props
            </div>
        )
    }
}

export default VocabItem;