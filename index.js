const getRandomOption = require("./options");
const getRandomSentence = require("./fillableSentence");

// This functiong is used for sentence formatting. It looks at the current index at the caracter array to determine 
// proper formatting of an option that will be added to the sentence.

const formatOption = (index, chars, option) => {
    if (index === 0) {
        option = option.charAt(0).toUpperCase() + option.slice(1);
    }
    if (index >=2) {
        const previousCharacter = chars[index - 2];
        const nextCharacter = chars[index + 1];
        if(previousCharacter !== '.' && previousCharacter !== '?' && previousCharacter !== ':') {
            option = option.charAt(0).toLowerCase() + option.slice(1);
        } else {
            option = option.charAt(0).toUpperCase() + option.slice(1);
        }
        if (nextCharacter === '.' && option.charAt(option.length - 1) === '.') {
            option = option.slice(0, -1);
        }
    }
    if (index <= chars.length -3 && option.charAt(option.length - 1) === '.') {
        option = option.slice(0, -1);
    }
    return '[' + option + ']';
};

const mixedMessage = () => {
  let sentence = getRandomSentence();
  const chars = sentence.split("");
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "_") {
      chars[i] = formatOption(i, chars, getRandomOption());
      count++;
    }
  }
  sentence = chars.join('');
  if (count === 0) {
    sentence = `${sentence} [${getRandomOption()}]`;
  }
 
  return sentence;
};

console.log(mixedMessage());
