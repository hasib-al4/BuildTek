import 'src/global.css';

import React, { useEffect } from 'react';

import Fab from '@mui/material/Fab';

import { ThemeProvider } from './theme/theme-provider';

import { Iconify } from './components/iconify';

import ShopList from './components/ShopList'; // Adjust path if needed

// Optional: useScrollToTop hook
function useScrollToTop() {
  // If you don't have usePathname, just use window.scrollTo on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

function App() {
  useScrollToTop();

  const githubButton = () => (
    <Fab
      size="medium"
      aria-label="Github"
      href="https://github.com/minimal-ui-kit/material-kit-react"
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 20,
        width: 48,
        height: 48,
        position: 'fixed',
        bgcolor: 'grey.800',
      }}
    >
      <Iconify width={24} icon="socials:github" sx={{ '--color': 'white' }} />
    </Fab>
  );

  return (
    <ThemeProvider>
      <div>
        <h1>Shop Management Dashboard</h1>
        <ShopList />
      </div>
      {githubButton()}
    </ThemeProvider>
  );
}

export default App;
