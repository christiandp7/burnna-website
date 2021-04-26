import JulesTextBlackWoff2 from '../assets/fonts/JulesText-Black.woff2'
import JulesTextBlackTtf from '../assets/fonts/JulesText-Black.ttf'
import JulesTextBlackEot from '../assets/fonts/JulesText-Black.eot'

export const julesText = {
  fontFamily: 'Jules Text',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url(${JulesTextBlackWoff2}) format('woff2'),
    url(${JulesTextBlackTtf}) format('ttf'),
    url(${JulesTextBlackEot}) format('eot'),
  `,
};