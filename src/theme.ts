import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6A8CAF', // Azul suave para elementos principais
    },
    secondary: {
      main: '#FF6F61', // Cor vermelha para botões e elementos de destaque
    },
    background: {
      default: 'rgba(0, 0, 0, 0.85)', // Cor de fundo escura com transparência
      paper: 'rgba(255, 255, 255, 0.1)', // Fundo para elementos como cartões e papéis
    },
    text: {
      primary: '#FFFFFF', // Cor principal do texto
      secondary: '#B0BEC5', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.5,
      color: '#FFFFFF',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#B0BEC5',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      color: '#B0BEC5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          textTransform: 'none',
          padding: '8px 16px',
        },
        contained: {
          backgroundColor: '#FF6F61',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#E65E57',
          },
        },
        outlined: {
          borderColor: '#FF6F61',
          color: '#FF6F61',
          '&:hover': {
            backgroundColor: 'rgba(255, 111, 97, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        },
      },
    },
  },
})

export default theme
