import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default function Option(props){
return(
    <div className="language-select">
    <select 
      className="form-control bg-success" style={{color: 'white' ,fontWeight: 'bold'}}
      value={props.language}
      onChange={e => props.handleSetLanguage(e.target.value)}
    >
      <option value="English">English</option>
      <option value="Hindi">Hindi</option>
    </select>
  </div>

)

}
