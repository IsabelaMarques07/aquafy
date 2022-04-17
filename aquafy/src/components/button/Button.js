import React from 'react';
import "./style.css"
const Button = ()=>{
    function funcaoClicar(){
        console.log("clicou")
    }
    return(
        <div className="button">
            <a onClick={funcaoClicar()}>
                <img src="" alt="Ícone de fone de ouvido"/>
            </a>
            <p>Seus artistas mais escutados</p>
        </div>
    )

}
export default Button

