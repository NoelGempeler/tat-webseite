import React, { useState } from "react";
import bild from "../../images/open-menu.svg";
import close from "../../images/close.svg";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleHamburgerClick = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="fixed z-50 w-screen bg-white">
      {isVisible && (
        <div className=" top-0 right-0 w-screen h-screen bg-white">
          <div className="">
            {" "}
            <div
              className=" absolute cursor-pointer w-8  right-0 m-10"
              onClick={handleClose}
            >
              {" "}
              <img src={close} alt=""></img>
            </div>
          </div>
          <div className="absolut flex items-center justify-center ">
            <div className="felx flex-col mt-48">
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Publikationen und Vorträge
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Aufsätze
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                {" "}
                Textausgaben
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Literarische Werke
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Übersetzungen
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Vorträge
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                Verlegerische Tätigkeit
              </div>
              <div className="hover:text-orange-500 mb-4 cursor-pointer">
                {" "}
                Weitere Tätigkeiten
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className=" flex justify-between p-10 
       "
      >
        <div className="w-3/12">
          <div className=" tracking-widest text-2xl ml-10"> Felix Giger </div>
        </div>

        <div className="cursor-pointer w-8" onClick={handleHamburgerClick}>
          <img src={bild} alt=""></img>
        </div>
      </div>
    </div>
  );
};
/* Publikationen und Vorträge

a) Aufsätze, Artikel, Besprechungen

b) Textausgaben

c) Literarische Werke

d) Übersetzungen

e) Vorträge

2. Verlegerische Tätigkeit, Lektorate,

3. Weitere Tätigkeiten */

export default Navigation;
