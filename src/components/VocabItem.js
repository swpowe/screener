import React, {Component} from 'react';
// pass via props istead
// import quizQuestions from '../questionsData';

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
        var clickedWord = this.props.currentDatasetData.answers[this.props.value -1];
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
        // Change clicked button state / highlight / via changing className
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
                        // replace quizQuestions[this.props.dataset] with props passing the current dataset
                        // className={this.state.className}
                        // onClick={this.myFunc}
                        src={this.props.currentDatasetData.answers[this.props.value - 1].image} alt=""
                    />
                </button>
            </div>
        )
    }
}

export default VocabItem;