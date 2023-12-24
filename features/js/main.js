var app = document.getElementsByClassName('typing')[0];
 
var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  cursorClassName: 'cursor' 
});
 
typewriter
  .pauseFor(100)
  .typeString('A collection of my proudest works')
  .start();

  