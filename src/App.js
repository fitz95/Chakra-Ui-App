import React from 'react';
import { ThemeProvider, theme, ColorModeProvider, CSSReset } from '@chakra-ui/react';
import BoxDiv from './Boxdiv';
import Toggle from './Toggle';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider options={{
        useSystemColorMode: true
      }}>
        <CSSReset />
        <div>
          <BoxDiv />
          <Toggle />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
