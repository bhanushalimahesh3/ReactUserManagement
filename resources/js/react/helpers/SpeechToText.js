const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const colors = [ 'aqua' , 'red' , 'yellow', 'bisque', 'black', 'blue', 'brown'];
let grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'

let recognition = new SpeechRecognition();
let speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
//recognition.grammars = speechRecognitionList;

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
//recognition.serviceURI = 'https://google.com';


recognition.onspeechend = function(event) {
    
    recognition.stop();
   
  }
  
  recognition.onnomatch = function(event) {
    console.log("I didn't recognise that color.");
  }
  
  recognition.onerror = function(event) {
    alert('Allow mic permission');
    console.log('Error occurred in recognition: ' + event.error);
  }

  recognition.onaudiostart = function(event) {
    console.log('in audio start');
   // console.log(event);
  }

  recognition.onaudioend = function(event) {
    console.log(`on audio end `);
   // console.log(event);
  }

  recognition.onstart = function(event) {
    console.log('on start');
    //console.log(event);
  }

  recognition.onend = function(event) {
    console.log('on end');
   // console.log(event);
  }

  recognition.onsoundstart = function(event) {
    //console.log(event);
    //console.log('sound start');
  }

  recognition.onsoundend = function(event) {
    //console.log(event);
    //console.log('sound end');
  }

  recognition.onspeechstart = function(event) {
   // console.log(event);
    //console.log('on speech start');
  }

  recognition.onspeechend = function(event) {
    //console.log(event);
    //console.log('on speech end');
  }


 

export {recognition, colors };

