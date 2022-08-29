import Image from "next/image";
import React from "react";
import logoUrl from '../../../public/images/logo.svg'

const Logo = (()=>{
    return(
        <Image 
            alt="Logo do Aquafy"
            src={logoUrl}
        />
    )
})

export default Logo;