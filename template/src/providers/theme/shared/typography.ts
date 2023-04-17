import { formatFontWeight } from 'utils/helpers'

const FAMILY_FONT = 'Avenir'
const black = '#000000'

const typography: Typography = {
  themeFont: {
    fontFamily: FAMILY_FONT,
  },
  h1: {
    fontFamily: FAMILY_FONT,
    fontSize: 26,
    fontWeight: formatFontWeight(700),
    color: black,
    lineHeight: 39,
  },
  h2: {
    fontFamily: FAMILY_FONT,
    fontSize: 18,
    fontWeight: formatFontWeight(700),
    color: black,
    lineHeight: 27,
  },
  h3: {
    fontFamily: FAMILY_FONT,
    fontSize: 16,
    fontWeight: formatFontWeight(700),
    color: black,
    lineHeight: 24,
  },
  h4: {
    fontFamily: FAMILY_FONT,
    fontSize: 12,
    fontWeight: formatFontWeight(700),
    color: black,
    lineHeight: 18,
  },
  title: {
    fontFamily: FAMILY_FONT,
    fontSize: 14,
    fontWeight: formatFontWeight(500),
    color: black,
    lineHeight: 21,
  },
  title1: {
    fontFamily: FAMILY_FONT,
    fontSize: 12,
    fontWeight: formatFontWeight(500),
    color: black,
    lineHeight: 18,
  },
  title2: {
    fontFamily: FAMILY_FONT,
    fontSize: 10,
    fontWeight: formatFontWeight(500),
    color: black,
    lineHeight: 21,
  },
  titleBig: {
    fontFamily: FAMILY_FONT,
    fontSize: 16,
    fontWeight: formatFontWeight(500),
    color: black,
    lineHeight: 24,
  },
  titleBold: {
    fontFamily: FAMILY_FONT,
    fontSize: 14,
    fontWeight: formatFontWeight(600),
    color: black,
    lineHeight: 21,
  },
  p: {
    fontFamily: FAMILY_FONT,
    fontSize: 14,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 21,
  },
  p1: {
    fontFamily: FAMILY_FONT,
    fontSize: 12,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 18,
  },
  p2: {
    fontFamily: FAMILY_FONT,
    fontSize: 10,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 15,
  },
  link: {
    fontFamily: FAMILY_FONT,
    fontSize: 16,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 24,
  },
  link1: {
    fontFamily: FAMILY_FONT,
    fontSize: 14,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 21,
  },
  link2: {
    fontFamily: FAMILY_FONT,
    fontSize: 12,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 18,
  },
  link3: {
    fontFamily: FAMILY_FONT,
    fontSize: 10,
    fontWeight: formatFontWeight(400),
    color: black,
    lineHeight: 15,
  },
}

export default typography
