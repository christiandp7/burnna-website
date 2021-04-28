import JulesTextBlackWoff from '../assets/fonts/JulesText-Black.woff'
import JulesTextBlackWoff2 from '../assets/fonts/JulesText-Black.woff2'
import JulesTextBlackTtf from '../assets/fonts/JulesText-Black.ttf'
import JulesTextBlackEot from '../assets/fonts/JulesText-Black.eot'

import proximaNovaCondensedWoff from '../assets/fonts/Proxima-Nova-Condensed-Regular.woff'

export const julesText = {
  fontFamily: 'Jules Text',
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  fontWeight: 900,
  src: `
    url('${JulesTextBlackEot}?#iefix') format('embedded-opentype'),
    url('${JulesTextBlackWoff}') format('woff'),
    url('${JulesTextBlackWoff2}') format('woff2'),
    url('${JulesTextBlackTtf}') format('truetype')
  `,
};

export const proximaNovaCondensed = {
  fontFamily: 'Proxima Nova Condensed',
  fontStyle: 'normal',
  // fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    url('${proximaNovaCondensedWoff}') format('woff'),
  `,
};