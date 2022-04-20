import React from 'react';
import "./style.css"

const Button = ({image, text, option, search})=>{
    function funcaoClicar(){
        search(option)
    }
    return(
        <div className="button">
            <a onClick={funcaoClicar}>
                <img src={image}/>
            </a>
            <p>{text}</p>
        </div>
    )

}
export default Button

