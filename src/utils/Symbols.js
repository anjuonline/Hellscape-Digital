const symbols = {
  'eastSyriacCross': {
    'unicode': '\u2671',
    'htmlEntity': '&#9841;'
  },
  'kannadaLetterOO': {
    'unicode': '\u0C93',
    'htmlEntity': '&#3219;'
  }
}

export const CrossSymbol = () => {
  return (
    <>{symbols.eastSyriacCross.unicode}</>
  );
};

export const SnakeThing = () => {
  return (
    <>${symbols.kannadaLetterOO.unicode}</>
  );
};

export const RandomSymbol = () => {
  const symbolsKeys = Object.keys(symbols);
  const randomKey = symbolsKeys[Math.floor(Math.random() * symbolsKeys.length)]
  const randomSymbol = symbols[randomKey];
  return (
    <>{randomSymbol.unicode}</>
  )
}
