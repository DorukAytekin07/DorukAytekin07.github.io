import React from "react";
import CodeBlock from "./QuariesBlocks";
import MySQLQuariesJSON from '../../../JSON/sqlcodes.json'
export default class MySQLQuaries extends React.Component{
    Quarie = MySQLQuariesJSON.codes.map(Quaries => {
        return(<CodeBlock {...Quaries}></CodeBlock>)
    })
    render(){
        return(
            <div>
                <h2 className="document-title">SQL Quaries</h2>
                <p className="document-summary">okey so far we learn database basics and important MySQL commands now time to learn most used SQL statements keywords and operators after this we discuss SQL joins and some SQL things we have to know like primary key at the finally i give a link to solving SQL problems also i give a example database schema to you for create sample database</p>
                {this.Quarie}
            </div>
        );
    }
}