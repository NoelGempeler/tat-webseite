import React, {useState} from 'react'
import bild from "../../images/open-menu.svg"
import close from "../../images/close.svg"

 const Navigation = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleHamburgerClick = () => {
         setIsVisible(true);
    }

    const handleClose = () => {
         setIsVisible(false)
    }


    return (
   
<div className="fixed z-50 w-screen bg-white">

             {isVisible && <div className=" top-0 right-0 w-screen h-screen bg-white">
             <div className="  cursor-pointer w-8 items-end top-0 right-0" onClick={handleClose}> <img src={close} alt=""></img></div>
             <div className="absolut flex items-center justify-center ">
                  <div className="felx flex-col mt-48">
                      <div className="hover:text-orange-500 mb-4">Publikationen und Vorträge</div>
                      <div className="hover:text-orange-500 mb-4">Aufsätze</div>
                      <div className="hover:text-orange-500 mb-4"> Textausgaben</div>
                      <div className="hover:text-orange-500 mb-4">Literarische Werke</div>
                      <div className="hover:text-orange-500 mb-4">Übersetzungen</div>
                      <div className="hover:text-orange-500 mb-4">Vorträge</div>
                      <div className="hover:text-orange-500 mb-4">Verlegerische Tätigkeit</div>
                      <div className="hover:text-orange-500 mb-4"> Weitere Tätigkeiten</div>
                      </div>
                      </div>
                
             </div> }  
             

             <div className=" flex justify-between p-6 ">
             
                 <div className="w-3/12">
                      <div className=" tracking-widest text-xl"> Felix Giger </div>
                 </div>
               

    <div className="cursor-pointer w-8" onClick={handleHamburgerClick}><img src={bild} alt=""></img></div>

                 
                
           </div>
</div>
      
    )
}
/* Publikationen und Vorträge

a) Aufsätze, Artikel, Besprechungen

b) Textausgaben

c) Literarische Werke

d) Übersetzungen

e) Vorträge

2. Verlegerische Tätigkeit, Lektorate,

3. Weitere Tätigkeiten */

export default Navigation;