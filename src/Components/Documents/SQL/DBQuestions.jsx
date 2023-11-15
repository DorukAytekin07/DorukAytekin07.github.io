import React from "react";
import QuestionBlock from "./QuestionBlocks";
import SqlQuestionsJSON from '../../../JSON/dbquestions.json'
export default class MySQLQuaries extends React.Component{
    Question = SqlQuestionsJSON.questions.map(Questions => {
        return(<QuestionBlock {...Questions}></QuestionBlock>)
    })
    render(){
        return(
            <div>
                <h2 className="document-title">Database Basics</h2>
                <p className="document-summary">In this document my purpose is teaching to you database basics, some SQL queries and MySQL commands if you are ready lets start but before dive into SQL syntax and MySQL commands I want to explain some database basics so in this part you will learn basics of database with questions.</p>
                {this.Question}
            </div>
        );
    }
}