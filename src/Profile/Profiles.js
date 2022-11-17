import React from "react";

const Profiles = (props) => {
    
    
  return (  
    
    <div className="profileStyle">
    <div className="disc-profile">
     <h2>{props.fullName} </h2> <p>{props.Bio}</p> <h4>{props.profission} </h4> <div>{props.image}</div>
     </div> 
     <div>
     {props.children}
     </div> 
    </div>
    
    
    
    
  );
};



export default Profiles;
