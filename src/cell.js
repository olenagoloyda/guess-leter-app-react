import { useState } from "react";

export default function Cell({currentLeter, showLeters, onClick, showAll}) {
     const [celltLeter, setCurentLeter] = useState(currentLeter)
     const [isActive, setActive] = useState(false)
     
    


     const handleClick = () => {
       setActive(onClick(celltLeter)) 
     }

     return (
          <button className='button' onClick={handleClick}>
               {showAll ? <span className={showLeters ? '' : 'hideLetter'}>{currentLeter}</span> : <span className={showLeters && isActive ? '' : 'hideLetter'}>{currentLeter}</span>}</button>
     );

}