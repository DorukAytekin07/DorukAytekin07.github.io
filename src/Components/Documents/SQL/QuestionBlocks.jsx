import React from "react";

export default class QuestionBlock extends React.Component {
    render() {
        return(
            <div className="basics-container">
                <h2 className="basics-question">{this.props.question}</h2>
                <p className="basics-answer">{this.props.answer}</p>
            </div>
        );
    }
}