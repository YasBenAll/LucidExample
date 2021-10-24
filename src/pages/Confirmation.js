import React from "react";

export default function Confirmation(test) {

  if (test) {
    return (
      <div>TEST</div>
    ); 
  }
  else {
    return (
      <div>Congratulations, you paid!</div>
    );    
  }

}
