import JulesTextBlackWoff2 from '../assets/fonts/JulesText-Black.woff2'
import JulesTextBlackTtf from '../assets/fonts/JulesText-Black.ttf'
import JulesTextBlackEot from '../assets/fonts/JulesText-Black.eot'

export const julesText = {
  fontFamily: 'Jules Text',
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  fontWeight: 900,
  src: `
    url(${JulesTextBlackWoff2}) format('woff2'),
    url(${JulesTextBlackTtf}) format('ttf'),
    url(${JulesTextBlackEot}) format('eot'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};