import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      primary: '#575989',
      secondary: '#f0efff',
      blue: '#4164e3',
      cadet: '#8998a8',
      dark: '#243156',
      darkgray: '#212329',
      gray: '#a0acb9',
      green: '#36c537',
      light: '#e9ebee',
      pure: '#fafafb',
      slate: '#77889a',
      white: '#fcfdfe',
      yellow: '#ed9b13',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          p: '6',
          color: 'white',
          bg: 'brand.primary',
          _hover: { bg: 'brand.darkgray' },
          _active: { bg: 'brand.secondary' },
          _focus: { boxShadow: 'none' },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '1px',
          color: 'brand.cadet',
          borderColor: 'brand.darkgray',
          _hover: { bg: 'brand.darkgray' },
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
        ghost: {
          color: 'white',
          bg: 'rgba(0, 0, 0, 0.25)',
          _hover: { bg: 'rgba(0, 0, 0, 0.25)' },
          _active: { bg: 'rgba(0, 0, 0, 0.35)' },
          _focus: { boxShadow: 'none' },
        },
        link: {
          p: '0',
          height: 'full',
          bg: 'darkgray',
          color: 'gray.500',
          rounded: 'none',
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
})