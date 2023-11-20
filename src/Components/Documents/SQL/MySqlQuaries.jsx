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
                <h2 className="document-title">MySQL Commands</h2>
                <p className="document-summary">you understand the database basics we can continue with important mysql commands these commands can run at PostgreSQL or Oracle databases not only for MySQL therefore ignore to title then lets start if you are ready</p>
                {this.Quarie}
            </div>
        );
    }
}