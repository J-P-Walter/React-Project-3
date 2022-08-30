import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  function handleClick() {
    console.log("Click");
  }

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form font">
        <input
          className="form--input font"
          type="text"
          placeholder="Top text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          className="form--input font"
          type="text"
          placeholder="Bottom text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        ></input>
        <button type="button" className="font" onClick={getMemeImage}>
          Generate new image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
export default Meme;
