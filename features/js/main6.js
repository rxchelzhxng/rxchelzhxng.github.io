var app = document.getElementsByClassName('typing')[0];
 
var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
  cursorClassName: 'cursor' 
});
 
typewriter
  .pauseFor(100)
  .typeString('An art to the ear')
  .start();

  