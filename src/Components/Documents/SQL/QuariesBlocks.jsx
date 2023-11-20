import React from "react";

export default class CodeBlock extends React.Component {
    render(){
        return(
            <div className="sql-quarie-container">
                <h2 className="sql-quarie-title">{this.props.title}</h2>
                <div>
                    <code className="sql-quaire-code">{this.props.code}</code>
                </div>
                <p className="sql-quarie-explanation">{this.props.explanation}</p>
            </div>
        );
    }
}