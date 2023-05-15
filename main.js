let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #D8ACD5;"> Soy estudiante de ingeniería buscando impulsar mi perfil.</span>')
  .pauseFor(180)
  .deleteChars(10)
  .start();
