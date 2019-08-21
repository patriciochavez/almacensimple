import React, { useState } from 'react';
import ThemeContext from './componentes/ThemeContext';
import Content from './componentes/Content';

const App = () => {
  const [style, setStyle] = useState("light");
  const [visible, setVisible] = useState(true);

const toggleStyle = () => {
    setStyle(style => (style === "light" ? "dark" : "light"));
  }

const toggleVisible = () => {
    setVisible(visible => !visible);
  }

  return (
    <ThemeContext.Provider
      value={{ style, visible, toggleStyle, toggleVisible }}
    >
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;