/*
 * Global style overrides
 * @Author: Duyb
 * @Date: 2022-04-03 21:04:09
 * @Last Modified by: Duyb
 * @Last Modified time: 2022-04-08 18:15:16
 */

const styles = {
  global: (props) => ({
    // styles for the `body`
    body: {
      bg: props.colorMode === 'dark' ? 'gray.600' : 'gray.100',
    },
    // styles for the `a`
    a: {
      color: 'teal.500',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
};

export default styles;
