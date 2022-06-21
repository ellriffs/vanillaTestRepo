export const handleTextInput = (e) => {
  const input = document.getElementById('input');
  input.addEventListener(e.target.value);
};

module.exports = handleTextInput;
