import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Pathakankit688@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/katomekichi62?igshid=NTc4MTIwNjQ2YQ==">   <Insta color="white" size={"3rem"} /></a>
          <a href="https://github.com/ankitpathak62"> <Gitub color="white" size={"3rem"} /></a>

          <a href="https://www.facebook.com/profile.php?id=100089194056287&mibextid=LQQJ4d"><Facebook color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
