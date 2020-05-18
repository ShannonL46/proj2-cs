import React from 'react';
import {useDispatch} from 'react-redux';
import {editMode} from './actions';


const months = ["Januray", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"];

export function Writ(props){
    const writ = props.writ;
    
    const dispatch = useDispatch();

    const onEdit = () => {
        dispatch(editMode(writ));
    }

    if(writ.editing){
        return <div>gingerale</div>;
    } else {
        return(
            <div className="writ">
                <div className="writ-left">
                    <div id = "date">
                    <span className = "date">
                        <span>{writ.year}</span>
                        <span>{months[writ.month-1]}</span>
                        <span>{writ.day}</span>
                        <button id = "edit" onClick={onEdit}>Edit</button>
                    </span>
                    </div>
                    <div id = "prompt">
                        <span className = "prompt">{writ.promp}</span> 
                    </div>  
                    <div id = "writing">
                        <span className = "writing">{writ.text}</span> 
                    </div>
                
                </div>

            </div>
        );
    }
  
}