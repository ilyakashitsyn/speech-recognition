const msgEl = document.getElementById('msg');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and game
recognition.start();

// Capture user speak
const onSpeak = e => {
  const msg = e.results[0][0].transcript;

  writeMessage(msg);
  checkNumber(msg);
};

// Generate random number
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const randomNum = getRandomNumber();

console.log('Number:', randomNum);

// Speak result
recognition.addEventListener('result', onSpeak);
