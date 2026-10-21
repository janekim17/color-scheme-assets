import {paletteNotes} from './palette-notes.mjs';
export const paletteSearchDescriptions=Object.fromEntries(Object.entries(paletteNotes).map(([slug,[heading,intro]])=>[slug,intro.split(/(?<=[.!?])\s/)[0]+' Copy five HEX and RGB colours and preview the palette.']));
