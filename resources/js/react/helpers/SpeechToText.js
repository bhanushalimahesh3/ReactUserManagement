const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const colors = [ 'aqua' , 'red' , 'yellow', 'bisque', 'black', 'blue', 'brown'];
let grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onspeechend = function(event) {
    console.log(event);
    recognition.stop();
    console.log('stop');
  }
  
  recognition.onnomatch = function(event) {
    console.log("I didn't recognise that color.");
  }
  
  recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error);
  }

 

export {recognition, colors };

