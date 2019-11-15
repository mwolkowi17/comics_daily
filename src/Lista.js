import React from 'react';


export const Lista=(props)=>{
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
  <li>{number}</li>);
    return(
 <div>
     <div>Cześć {props.name} !</div>
     
     <ul>{listItems}</ul>
     </div>

 
 
     )
}
    