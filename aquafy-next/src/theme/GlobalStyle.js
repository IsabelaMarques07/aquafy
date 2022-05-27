export default function GlobalStyle(){
    return(
        <style global jsx>{`
            *{
                box-sizing: border-box;
                padding: 0;
                margin: 0;
            }
            body{
                font-family: 'Poppins', sans-serif;
                height: 100vh;
                background-repeat: no-repeat;
                margin: 0;
                background: linear-gradient(360deg, #181818 0%, #0B111D 0.01%, #121212 100%);
            }
            h2{
                width: 80vw;
                margin-top: 5vh;
            
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 36px;
            
                color: #FFFFFF;
            }
            
            h3{
                width: 80vw;
            
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 100;
                font-size: 16px;
                line-height: 30px;
            
                color: #FFFFFF;
            }
            .container{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .logo{
                width: 50vw;
                margin-top: 10vh;
            }
            
            .logo img{
                max-width: 100%;
            }
        `}</style>
    )
}