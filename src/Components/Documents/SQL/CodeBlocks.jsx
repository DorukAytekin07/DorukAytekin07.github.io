import React from "react";
export default class CodeBlock extends React.Component {
    render(){
        return(
            <div className="quarie-container">
                <div className="text-container">
                    <code className="quaire-code">{this.props.code}</code>
                    <p className="quarie-explanation">{this.props.explanation}</p>
                </div>
                <img className="code-image" src={this.props.img} loading="lazy" title={"MySQL " + this.props.code + " Quarie"} alt="MySQl Quaries" width={1000} height={517}/>
            </div>
        );
    }
}