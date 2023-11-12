import React from "react";
import CodeBlock from "./CodeBlocks";
import MySqlQuariesJSON from '../../../JSON/mysqlquaries.json'
export default class MySQLQuaries extends React.Component{
    Quarie = MySqlQuariesJSON.mysql.map(Quaries => {
        return(<CodeBlock {...Quaries}></CodeBlock>)
    })
    render(){
        return(
            <div>
                <h1 className="document-title">MySQL Quaries</h1>
                {this.Quarie}
            </div>
        );
    }
}