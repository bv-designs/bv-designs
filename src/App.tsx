import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

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
      <div className='bg-customBackground min-h-screen min-w-[100vw] flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='py-3 text-gray-600 '>Welcome to BV design</h1>
          <Box
            component='img'
            sx={{
              height: 500,
              width: 600,
              maxHeight: { xs: 200, md: 500 },
              maxWidth: { xs: 200, md: 600 },
              borderRadius: '8px',
              boxShadow: 3,
            }}
            alt='BV Logo'
            src='/assets/logo.png'
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
