import React, { useContext } from "react";
import ThemeContext from './ThemeContext';

const Content = () => {
    const { style, visible, toggleStyle, toggleVisible } = useContext(
      ThemeContext
    );
  
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