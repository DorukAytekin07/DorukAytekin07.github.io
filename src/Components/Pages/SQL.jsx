import React from "react";
import DocumentNavbar from '../DocumentNavbar'
import MySQLQuaries from "../Documents/SQL/MySqlQuaries";
export default function SQL(){
    return(
        <div>
            <DocumentNavbar></DocumentNavbar>
            <MySQLQuaries></MySQLQuaries>
        </div>
    );
}