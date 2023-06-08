const rgbToHex = (r, g, b) => {

  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  return hex

}

export default rgbToHex