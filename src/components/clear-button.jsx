import React from "react";
import "../stylesheets/clear-button.css"

function ClearButton(props){
  return(
    <div className="clear-button"
    onClick={props.resetInput}>
      {props.children}
    </div>
  ); 
}

export default ClearButton;