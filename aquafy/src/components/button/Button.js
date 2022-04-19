import React from 'react';
import "./style.css"

const Button = ({image, text})=>{
    function funcaoClicar(){
        console.log('clicou')
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

