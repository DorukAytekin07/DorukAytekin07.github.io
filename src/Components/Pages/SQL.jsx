import React from "react";
import DocumentNavbar from '../DocumentNavbar'
import MySQLQuaries from "../Documents/SQL/MySqlQuaries";
import SQlQuestions from '../Documents/SQL/SQLQuestions'
import Helmet from 'react-helmet'
export default function SQL(){
    return(
        <div>
            <Helmet>
                <title>SQL Documentation</title>
                <meta name="keywords" content="MySQL,SQL,SQL Quaries,MYSQL Quaries,Doruk Aytekin,Learn SQL,Learn MySQL,SQL Documentation,MySQL Documentation" />
                <meta name="description" content="in this sql document you wil learn mysql quaries and many sql auries such as slect order by and you will learn basics of sql" />
                <link rel="canonical" href="https://dorukaytekin07.github.io/#/sql"/>
            </Helmet>
            <DocumentNavbar></DocumentNavbar>
            <MySQLQuaries></MySQLQuaries>
            <SQlQuestions></SQlQuestions>
        </div>
    );
}