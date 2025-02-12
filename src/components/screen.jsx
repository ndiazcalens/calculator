import React from "react";
import "../stylesheets/screen.css";


function Screen({ input }){

    const maxInputLength = 12;
    const limitedInput = input.length > maxInputLength ? input.slice(0, maxInputLength) : input;

    return (
        <div className="inputContainer">
          {limitedInput}
        </div>
    );
}

export default Screen;