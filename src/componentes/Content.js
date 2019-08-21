import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Content = () => {
    const { style, visible, setVisible, setStyle } = useContext(
      ThemeContext
    );

const toggleStyle = () => {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }

  const toggleVisible = () => {
    setVisible( visible => !visible);
  }


    return (
      <div>
        <p>
          The theme is <em>{style}</em> and state of visibility is
          <em> {visible.toString()}</em>
        </p>
        <button onClick={toggleStyle}>Change Theme</button>
        <button onClick={toggleVisible}>Change Visibility</button>
      </div>
    );
  }

export default Content;