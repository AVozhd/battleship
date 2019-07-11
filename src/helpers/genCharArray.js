const genCharArray = (first_char = "A", last_char = "J") => {
  const char_array = [];
  for (
    let current_char = first_char.charCodeAt(0),
      max_char = last_char.charCodeAt(0);
    current_char <= max_char;
    ++current_char
  ) {
    char_array.push(String.fromCharCode(current_char));
  }
  return char_array;
};

export default genCharArray;
