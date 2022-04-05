const DuybButton = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
  },
  sizes: {
    lg: {
      fontSize: 'lg',
      px: 9,
      py: 6,
    },
    md: {
      fontSize: 'md',
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
    sm: {
      px: 3,
      py: 1,
      fontSize: 'sm',
    },
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
    primary: {
      border: '2px solid',
      bgColor: 'blue.500',
      borderColor: 'blue.100',
      color: 'white',
    },
    danger: {
      bg: 'red.500',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

export default DuybButton;
