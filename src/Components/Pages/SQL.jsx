import React from "react";
import DocumentNavbar from '../DocumentNavbar'
import MySQLQuaries from "../Documents/SQL/MySqlQuaries";
import DBQuestions from '../Documents/SQL/DBQuestions'
import SQLCodes from '../Documents/SQL/SQLCodes'
import Footer from '../HomePage/Footer'
import Helmet from 'react-helmet'
export default function SQL(){
    return(
        <div>
            <Helmet>
                <title>SQL Documentation</title>
                <meta name="keywords" content="MySQL,SQL,SQL Quaries,MYSQL Quaries,Doruk Aytekin,Learn SQL,Learn MySQL,SQL Documentation,MySQL Documentation" />
                <meta name="description" content="in this sql document you wil learn mysql quaries and many sql auries such as slect order by and you will learn basics of sql" />
                <link rel="canonical" href="https://dorukdev07.web.app/sql"/>
            </Helmet>
            <DocumentNavbar></DocumentNavbar>
            <DBQuestions></DBQuestions>
            <MySQLQuaries></MySQLQuaries>
            <SQLCodes></SQLCodes>
            <Footer></Footer>
        </div>
    );
}