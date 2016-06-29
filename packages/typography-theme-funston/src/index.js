// @flow
import type { OptionsType } from 'Types'
import gray from 'gray-percentage'

const theme: OptionsType = {
  baseFontSize: '20px',
  baseLineHeight: '28px',
  googleFonts: [
    {
      name: 'Patua One',
      styles: [
        '400',
      ],
    },
    {
      name: 'Cabin Condensed',
      styles: [
        '400',
        '700',
      ],
    },
  ],
  headerFontFamily: ['Patua One', 'sans-serif'],
  bodyFontFamily: ['Cabin Condensed', 'georgia', 'sans-serif'],
  headerGray: 13,
  bodyGray: 13,
  headerWeight: '400',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options) => ({
    html: {
      '-webkit-font-smoothing': 'antialiased',
    },
    body: {
      letterSpacing: '.03em',
    },
    a: {
      color: gray(options.bodyGray),
    },
    'a:hover': {
      color: '#3498DB',
    },
    blockquote: {
      ...adjustFontSizeTo('23px'),
      color: gray(40),
      paddingLeft: rhythm(13/16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3/16)} solid ${gray(13)}`,
    },
    '@media only screen and (max-width:480px)': {
      blockquote: {
        marginLeft: rhythm(-1/2),
        marginRight: 0,
      },
    },
  }),
}

export default theme

