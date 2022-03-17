const text= document.querySelector('.texts');
const seccionA = document.getElementById("seccionA");
const seccionB = document.getElementById("seccionB");
const seccionC = document.getElementById("seccionC");
const seccionD = document.getElementById("seccionD");
const seccionE = document.getElementById("seccionE");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e)=>{ 
    const text = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
console.log(text);
if(e.results[0].isFinal){
    if (text.includes('Prende foco kari')  )
    seccionA.styles.background = "url(./bulb_on.jpg)";
    
} 
if(e.results[0].isFinal){
    if (text.includes('Cancela  foco kari') )
    seccionA.styles.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Prende foco heri') )
    seccionB.styles.background = "url(./bulb_on.jpg)";
} 
if(e.results[0].isFinal){
    if (text.includes('Cancela foco heri')  )
    seccionB.styles.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Prende foco dani') )
    seccionC.styles.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Cancela foco dani')  )
    seccionC.styles.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Prende foco robe')  )
    seccionD.styles.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Cancela  foco robe')  )
    seccionD.styles.background = "url(./bulb_off.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Prende foco rosa')  )
    seccionE.styles.background = "url(./bulb_on.jpg)";
} 

if(e.results[0].isFinal){
    if (text.includes('Cancela  foco rosa')  )
    seccionE.styles.background = "url(./bulb_off.jpg)";
} 
});

recognition.addEventListener('end', ()=>{
    recognition.start();
  })
  
  recognition.start();