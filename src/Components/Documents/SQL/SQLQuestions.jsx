import React from "react";
import QuestionBlock from "./QuestionBlocks";
import SqlQuestionsJSON from '../../../JSON/sqlquestions.json'
export default class MySQLQuaries extends React.Component{
    Question = SqlQuestionsJSON.questions.map(Questions => {
        return(<QuestionBlock {...Questions}></QuestionBlock>)
    })
    render(){
        return(
            <div>
                <h2 className="document-title">SQL Basics</h2>
                <p className="document-summary">Before dive into SQL syntax you must know sql and database basics therefore in this part you will learn basics of SQL and databases with questions</p>
                {this.Question}
            </div>
        );
    }
}