import React, { useState } from "react";

function Meme() {
  function handleClick() {
    console.log("Click");
  }

  return (
    <main>
      <div className="form font">
        <input
          className="form--input font"
          type="text"
          placeholder="Top text"
        ></input>
        <input
          className="form--input font"
          type="text"
          placeholder="Bottom text"
        ></input>
        <button type="button" className="font" onClick={handleClick}>
          Generate new image 🖼
        </button>
      </div>
    </main>
  );
}
export default Meme;
