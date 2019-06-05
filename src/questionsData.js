import VocabItem from "./components/VocabItem";

const trapDoor = process.env.PUBLIC_URL;
const path = '/Assets/Art/Icons/';


var quizQuestions = [
    {   
        type: 'Vocab',
        dataSet: 0,
        answers: [
            {
                word: "teacher",
                correct: true,
                image: trapDoor + path + 'teacher.png'
            },
            {
                word: "backpack",
                correct: false,
                image: trapDoor + path + 'backpack.png'
            },
            {
                word: "paper",
                correct: false,
                image: trapDoor + path + 'paper.jpg'
            }
        ]
    },
    {   
        type: 'Vocab',
        dataSet: 1,
        answers: [
            {
                word: "ball",
                correct: true,
                image: trapDoor + path + 'ball.png'
            },
            {
                word: "blocks",
                correct: false,
                image: trapDoor + path + 'blocks.png'
            },
            {
                word: "kite",
                correct: false,
                image: trapDoor + path + 'kite.jpg'
            }
        ]
    },
    {   type: 'Vocab',
        dataSet: 3,
        answers: [
            {
                word: "shoes",
                correct: true,
                image: trapDoor + path + 'shoes.svg'
            },
            {
                word: "ball",
                correct: false,
                image: trapDoor + path + 'ball.png'
            },
            {
                word: "water",
                correct: false,
                image: trapDoor + path + 'water.jpg'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 4,
        answers: [
            {
                word: "girl",
                correct: true,
                image: trapDoor + path + 'girl.png'
            },
            {
                word: "paper",
                correct: false,
                image: trapDoor + path + 'paper.jpg'
            },
            {
                word: "bed",
                correct: false,
                image: trapDoor + path + 'bed.png'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 5,
        answers: [
            {
                word: "bike",
                correct: true,
                image: trapDoor + path + 'bike.png'
            },
            {
                word: "pizza",
                correct: false,
                image: trapDoor + path + 'pizza.svg'
            },
            {
                word: "orange",
                correct: false,
                image: trapDoor + path + 'orange.svg'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 6,
        answers: [
            {
                word: "jump",
                correct: true,
                image: trapDoor + path + 'jump.jpg'
            },
            {
                word: "draw",
                correct: false,
                image: trapDoor + path + 'draw.svg'
            },
            {
                word: "bike",
                correct: false,
                image: trapDoor + path + 'bike.png'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 7,
        answers: [
            {
                word: "mouth",
                correct: true,
                image: trapDoor + path + 'mouth.jpg'
            },
            {
                word: "blocks",
                correct: false,
                image: trapDoor + path + 'blocks.png'
            },
            {
                word: "rice",
                correct: false,
                image: trapDoor + path + 'rice.jpg'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 8,
        answers: [
            {
                word: "eyes",
                correct: true,
                image: trapDoor + path + 'eyes.svg'
            },
            {
                word: "paper",
                correct: false,
                image: trapDoor + path + 'paper.jpg'
            },
            {
                word: "bus",
                correct: false,
                image: trapDoor + path + 'bus.png'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 9,
        answers: [
            {
                word: "book",
                correct: true,
                image: trapDoor + path + 'book.svg'
            },
            {
                word: "mom",
                correct: false,
                image: trapDoor + path + 'mom.png'
            },
            {
                word: "paper",
                correct: false,
                image: trapDoor + path + 'paper.jpg'
            }
        ]
    },
    {
        type: 'Vocab',
        dataSet: 10,
        answers: [
            {
                word: "water",
                correct: true,
                image: trapDoor + path + 'water.jpg'
            },
            {
                word: "hair",
                correct: false,
                image: trapDoor + path + 'hair.svg'
            },
            {
                word: "desk",
                correct: false,
                image: trapDoor + path + 'desk.jpg'
            }
        ]
    }
  ];
  
  export default quizQuestions;
  