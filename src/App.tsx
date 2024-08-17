import { createTheme, ThemeProvider } from '@mui/material/styles';

import BvRouter from './router';

import { ProjectProvider } from './store/projectContext';

import 'animate.css/animate.min.css';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectProvider>
      <div className='bg-customBackground min-h-screen min-w-[100vw]'>

        <BvRouter />
      </div>
      </ProjectProvider>
    </ThemeProvider>
  );
}
