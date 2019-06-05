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
        highlight: {outline: "10px solid white"},
        targetWord: ''
    }

    myAlert() {
        var clickedWord = this.props.answersObj[this.props.value];
        console.log("clicked word:" + clickedWord.word);

        // Advance Progress Menu
        this.props.handleProgress(this.props.percentage + 10);
        this.setState({
            className: "imageButton",
        })

        
        // Check to see if the clicked was correct or not
        if(clickedWord.correct === true) {
            // a call back to the parent vocab question to advance the dataset
            console.log("RS_dataset " + this.props.dataset + " correct.");
            console.log("RS_correct word clicked : " + this.props.target)
        }else {
            console.log("RS_dataset " + this.props.dataset + " incorrect.")
            console.log("RS_clicked : " + clickedWord.word);
            console.log("RS_correct word is : " + this.props.target)
        }
        this.props.handleDataset(this.props.dataset + 1);
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
        // need to refactor the "alert" as it's currently delaying the logs which may not matter
        //  but the delay is for the highlight and next question.
        this.myAlert();
    }

    // did mount only runs once
    // update runs too frequently
    // async componentDidMount() {
    //     for(var i in this.props.answersObj) {
    //         if(this.props.answersObj[i].correct === true) {
    //             this.state.targetWord = this.props.answersObj[i].word;
    //         }
    //     }
    //     await console.log("RS_target word :" + this.props.target)
    // }

    render(props) {
        return (
            // could probably bypass this aqua color
            <div style={{
                // backgroundColor: "aqua"
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
                        src={this.props.answersObj[this.props.value].image} alt=""
                    />
                </button>
            </div>
        )
    }
}

export default VocabItem;