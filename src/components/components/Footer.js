import React from "react";
import Pdf from "../../pdfs/tatpdf.pdf";
import Icon from "../../images/download-outline.svg";

const Footer = () => {
  return (
    <div className="App flex justify-around p-24">
      <a className="" href={Pdf} target="_blank">
        <img className="w-24" src={Icon} alt="" />
        <img src={Icon} alt="" />
      </a>
      <a className="" href={Pdf} target="_blank">
        Download Pdf
      </a>
      <a className="" href={Pdf} target="_blank">
        Download Pdf
      </a>
      <a className="" href={Pdf} target="_blank">
        Download Pdf
      </a>
    </div>
  );
};

export default Footer;
