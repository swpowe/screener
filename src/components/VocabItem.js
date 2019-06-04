import React, {Component} from 'react';

class VocabItem extends Component {
    constructor(props) {
        super(props);
        this.myAlert = this.myAlert.bind(this);
        this.myFunc = this.myFunc.bind(this);
        this.handleHighlightAdd = this.handleHighlightAdd.bind(this);
        this.handleHighlightRemove = this.handleHighlightRemove.bind(this);
    }
    state = {
        className: "imageButton",
        highlight: {outline: "10px solid white"}
    }

    myAlert() {
        var clickedWord = this.props.currentDatasetData.answers[this.props.value -1];
        console.log(clickedWord.word);
        console.log(this.props.value);

        // Advance Progress Menu
        this.props.handleProgress(this.props.percentage + 10);
        this.setState({
            className: "imageButton",
        })

        // Check to see if the clicked was correct or not
        if(clickedWord.correct === true) {
            // a call back to the parent vocab question to advance the dataset
            this.props.handleDataset(this.props.dataset + 1);
        }
    }

    myFunc() {
        // Change clicked button state / highlight / via changing className
        if(this.state.highlight === {border: "10px solid white"}) {
            this.setState({
                highlight: {border: "10px solid yellow"}
            });
        }else {
            this.setState({
                highlight: {border: "10px solid white"}
            });
        }
        
        // setTimeout(this.myAlert, 500);
    } 
    
    // Add the highlight around the object that was clicked
    // and hold for 1sec
    handleHighlightAdd() {
        this.setState({
            highlight: {outline: "5px solid yellow"}
        })
        setTimeout(this.handleHighlightRemove, 1000);
    }

    // Remove highlight around object
    handleHighlightRemove() {
        this.setState({
            highlight: {outline: "5px solid white"}
        })
        this.myAlert();
    }

    render() {
        return (
            // could probably bypass this aqua color
            <div style={{
                backgroundColor: "aqua"
            }}>
                 <button 
                    className="flexItemContainer"
                    onClick={this.handleHighlightAdd}
                    style={this.state.highlight}
                >
                    <img 
                        // replace quizQuestions[this.props.dataset] with props passing the current dataset
                        className={this.state.className}
                        // onClick={this.myFunc}
                        src={this.props.currentDatasetData.answers[this.props.value - 1].image} alt=""
                    />
                </button>
            </div>
        )
    }
}

export default VocabItem;