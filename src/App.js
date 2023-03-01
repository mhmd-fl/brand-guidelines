import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";

function App() {
  const [fontSize, setFontSize] = useState(16); // default font size is 16px
  const [fontFamily, setFontFamily] = useState("Calibri"); // default font family is Calibri
  const [fonts, setFonts] = useState([]); // array to store fetched fonts
  const [color, setColor] = useState("#000000"); // default text color is black
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog."); // default text

  useEffect(() => {
    // fetch fonts from Google Fonts API using environment variable for API key
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const fontFamilies = data.items.map((item) => item.family);
        setFonts(fontFamilies);
      });
  }, []);

  const handleFontSizeChange = (event) => {
    setFontSize(parseInt(event.target.value));
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // load selected font from Google Fonts using WebFontLoader
    WebFont.load({
      google: {
        families: [fontFamily],
      },
    });
  }, [fontFamily]);

  return (
    <div>
      <textarea
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
          color: color,
          height: "150px",
          width: "75%"
        }}
        value={text}
        onChange={handleTextChange}
      />
      <div>
        <label htmlFor="font-size-slider">Font Size:</label>
        <input
          type="range"
          id="font-size-slider"
          name="font-size-slider"
          min="8"
          max="72"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
        <span style={{ marginLeft: "10px" }}>Current Font Size: {fontSize}px</span>
      </div>
      <div>
        <label htmlFor="font-family-dropdown">Font Family:</label>
        <select
          id="font-family-dropdown"
          name="font-family-dropdown"
          value={fontFamily}
          onChange={handleFontFamilyChange}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="color-picker">Color:</label>
        <input
          type="color"
          id="color-picker"
          name="color-picker"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default App;
