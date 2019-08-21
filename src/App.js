import React, { useState } from 'react';
import ThemeContext from './componentes/ThemeContext';
import Content from './componentes/Content';

const App = () => {
  const [style, setStyle] = useState("light");
  const [visible, setVisible] = useState(true);

  return (
    <ThemeContext.Provider
      value={{ style, visible, setVisible, setStyle }}
    >
      <Content />
    </ThemeContext.Provider>
  );
}

export default App;