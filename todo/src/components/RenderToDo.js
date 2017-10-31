import React from 'react';

const RenderToDo = props => {
    return(
        <div> 
            <input type = 'text' value = {props.itemTitle}  onChange = {props.changeHandler}/> 
            <button onClick = {props.addToList}> Submit </button>
            <ul> 
                {props.itemlist.map((item, i) => {
                    return <li key = {i + 1}> {item} </li>;
                })}
            </ul>
        </div>
    );
};

export default RenderToDo;