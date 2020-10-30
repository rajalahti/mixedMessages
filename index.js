const getRandomOption = require("./options");
const getRandomSentence = require("./fillableSentence");

const mixedMessage = () => {
  let sentence = getRandomSentence();
  const chars = sentence.split("");
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "_") {
      chars[i] = getRandomOption();
      count++;
    }
  }
  sentence = chars.join('');
  if (count === 0) {
    sentence = `${sentence} ${getRandomOption()}`;
  }
 
  return sentence;
};

console.log(mixedMessage());
