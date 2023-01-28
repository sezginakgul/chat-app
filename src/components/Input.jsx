import React from "react";
import Img from "../images/img.png";
import Attach from "../images/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img className="send-img" src={Attach} alt="" />
        <input type="file" name="" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img className="send-img" src={Img} alt="" />
        </label>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default Input;
