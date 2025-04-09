import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomexcuse() {
  let who = ['Mi abuela', 'Mi perro', 'Mi padre', 'Mi vecino'] 
  let action = ['se ha comido', 'rompió', 'tiro']
  let what = ['mis deberes', 'mi teléfono', 'mi coche', 'mi moto']
  let when = ['despues de clase', 'cuando estaba durmiendo', 'mientra estaba comprando', 'cuando salia de casa']

  const randomWho = Math.floor(Math.random() * who.length);
  const randomAction = Math.floor(Math.random() * action.length)
  const randomWhat = Math.floor(Math.random() * action.length)
  const randomWhen = Math.floor(Math.random() * when.length)

  return `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;

}


window.onload = function() {
    const excuseElement = document.getElementById('excuse')
    excuseElement.innerHTML = randomexcuse();

  console.log("Hello Rigo from the console!");
};