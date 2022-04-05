import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
// Component style overrides
import Button from './components/button';

const config = {
  // initialColorMode: 'light',
  useSystemColorMode: true,
};

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const components = {
  Button,
};

const theme = extendTheme({
  config,
  styles,
  colors,
  breakpoints,
  components,
});
console.log('theme :', theme);

export default theme;
