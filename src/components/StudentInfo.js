import React, {Component} from 'react';


class StudentInfo extends Component {
    constructor(props) {
        super(props);
    }

    state ={

    }

    render() {
        return(
            <div>
                <form>
                    <ul className="wrapper">
                        <li className="form-row">
                            <label for="student_name">
                                Student Name:
                            </label>
                            <input type="text" id="student_name"/>
                        </li>
                        <li className="form-row">
                            <label for="parent_name">
                                Parent's Name:
                            </label>
                            <input type="text" id="parent_name"/>
                        </li>
                        <li className="form-row">
                            <label for="student_birthday">
                                Student's Birthday:
                            </label>
                            <input type="text" id="student_birthday"/>
                        </li>
                        <li className="form-row">
                            <button type="submit">Begin Screener</button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default StudentInfo;