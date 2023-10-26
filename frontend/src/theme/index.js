import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import componentStyleOverrides from './compStyleOverride';

const commonPalette = {
  primary: {
    light: "#ede7f6",
    main: "#7367f0",
    dark: "#5e35b1",
    contrastText: "#fff"
  },
  secondary: {
    light: "#eef2f6",
    main: "#2196f3",
    dark: "#1e88e5",
    contrastText: "#fff"
  },
  error: {
    light: "#f44336",
    main: "#e57373",
    dark: "#d32f2f",
    contrastText: "#fff"
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "#fff"
  },
  default: {
    main: grey[600],
    light: grey[200],
    dark: grey[800],
    contrastText: grey[500],
  },
};

const palettes = {
  light: {
    mode: "light",
    background: {
      default: "#F0F0F0",
    },
    ...commonPalette
  },
  dark: {
    mode: "dark",
    background: {
      default: "#25293c",
      paper: "#2c3044",
    },
    ...commonPalette
  },
};

const shadows = {
  light: [
    "none",
    "0px 2px 4px #ddd",
    "0px 4px 8px #ddd",
    "0px 6px 12px #ddd",
    "0px 8px 16px #ddd",
  ],
  dark: [
    "none",
    "0px 2px 4px #0f142266",
    "0px 4px 8px #0f142266",
    "0px 6px 12px #0f142266",
    "0px 8px 16px #0f142266",
  ],
}

const getTheme = (mode) => {
  const themeOptions = {
    direction: 'ltr',
    mixins: {
      toolbar: {
        minHeight: '48px',
        padding: '16px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    shadows: shadows[mode],
    shape: {
      borderRadius: 8,
    },
    palette: palettes[mode],
  };

  const theme = createTheme(themeOptions);
  theme.components = componentStyleOverrides(theme);
  return theme;
}



export default getTheme;
