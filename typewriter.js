
const typewriter = function(mySentence) {
  let delay = 0;
  for (const char of mySentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;

  }
  setTimeout(() => {
    console.log('');
  }, delay);
};

const sentence = "hello there from lighthouse labs";
typewriter(sentence);
