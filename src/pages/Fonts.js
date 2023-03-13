import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import './Fonts.css';

function Fonts() {
  const [fontSize, setFontSize] = useState(16); // default font size is 16px
  const [fontFamily, setFontFamily] = useState('Calibri'); // default font family is Calibri
  const [fonts, setFonts] = useState([]); // array to store fetched fonts
  const [color, setColor] = useState('#000000'); // default text color is black
  const [text, setText] = useState(
    'The quick brown fox jumps over the lazy dog.'
  ); // default text
  const [textCase, setTextCase] = useState('default');
  const [lineHeight, setLineHeight] = useState(1.2);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const dropDownClass = "bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md border border-gray-700 flex justify-between items-center cursor-pointer w-48 transition duration-300 ease-in-out"

  useEffect(() => {
    // fetch fonts from Google Fonts API using environment variable for API key
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )
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

  const handleTextCaseChange = (event) => {
    setTextCase(event.target.value);
  };

  const handleLineHeightChange = (event) => {
    setLineHeight(parseFloat(event.target.value));
  };

  const handleLetterSpacingChange = (event) => {
    setLetterSpacing(parseFloat(event.target.value));
  };

  let displayText = text;

  switch (textCase) {
    case 'default':
      displayText = text;
      break;
    case 'capitalize':
      displayText = text
        .toLowerCase()
        .split(' ')
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');
      break;
    case 'uppercase':
      displayText = text.toUpperCase();
      break;
    case 'lowercase':
      displayText = text.toLowerCase();
      break;
    default:
      displayText = text;
      break;
  }

  useEffect(() => {
    // load selected font from Google Fonts using WebFontLoader
    WebFont.load({
      google: {
        families: [fontFamily],
      },
    });
  }, [fontFamily]);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <textarea
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
          color: color,
          height: '50%',
          width: '75%',
          lineHeight: lineHeight,
          letterSpacing: `${letterSpacing}px`,
        }}
        className="p-4 border-2 border-gray-300"
        value={displayText}
        onChange={handleTextChange}
      />
      <div>
        <label htmlFor="font-size-slider">Font Size:</label><br/>
        <input
          type="range"
          id="font-size-slider"
          name="font-size-slider"
          min="8"
          max="72"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="appearance-none w-3/4 h-3 bg-gray-200 rounded-md outline-none cursor-pointer"
          style={{
            "--range-color": "#4F46E5",
            "--thumb-color": "#4F46E5",
            "--thumb-color-hover": "#1D1D1D",
          }}
        /><br/>
        <span>
          Current Font Size: {fontSize}px
        </span>
      </div>
      <br/>
      <div>
      
        <label htmlFor="font-family-dropdown">Font Family:</label><br/>
        <select
          id="font-family-dropdown"
          name="font-family-dropdown"
          value={fontFamily}
          onChange={handleFontFamilyChange}
          className={dropDownClass}
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <br/>
      <div>
        <label htmlFor="color-picker">Select Text Color:</label><br/>
        <input
          type="color"
          id="color-picker"
          name="color-picker"
          value={color}
          onChange={handleColorChange}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md border border-gray-700 flex justify-between items-center cursor-pointer w-48 transition duration-300 ease-in-out"
        />
      </div>
      <br/>
      <div>
        <label htmlFor="text-case-dropdown">Text Case:</label><br/>
        <select
          id="text-case-dropdown"
          name="text-case-dropdown"
          value={textCase}
          onChange={handleTextCaseChange}
          className={dropDownClass}
        >
          <option value="default">Default</option>
          <option value="capitalize">Capitalize</option>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
        </select>
      </div>
      <br/>
      <div>
        <label htmlFor="line-height-slider">Line Height:</label><br/>
        <input
          id="line-height-slider"
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={lineHeight}
          onChange={handleLineHeightChange}
          className="appearance-none w-3/4 h-3 bg-gray-200 rounded-md outline-none cursor-pointer"
          style={{
            "--range-color": "#4F46E5",
            "--thumb-color": "#4F46E5",
            "--thumb-color-hover": "#1D1D1D",
          }}
        />
        <span>{lineHeight.toFixed(1)}</span>
      </div>
      <br/>
      <div>
        <label htmlFor="letter-spacing-slider">Letter Spacing:</label><br/>
        <input
          id="letter-spacing-slider"
          type="range"
          min="-1"
          max="1"
          step="0.1"
          value={letterSpacing}
          onChange={handleLetterSpacingChange}
          className="appearance-none w-3/4 h-3 bg-gray-200 rounded-md outline-none cursor-pointer"
          style={{
            "--range-color": "#4F46E5",
            "--thumb-color": "#4F46E5",
            "--thumb-color-hover": "#1D1D1D",
          }}
        />
        <span>{letterSpacing.toFixed(1)}</span>
      </div>
    </div>
  );
}

export default Fonts;
