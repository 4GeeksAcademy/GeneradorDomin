/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // variables para los dominios
  let pronom = ["El", "Los", "Las", "Tu"];
  let nom = ["buen", "mal", "insano", "confiable"];
  let adj = ["financiero", "fritos", "samurai", "financiero", "sofa"];
  let dom = [".com", ".es", ".net"];

  //un let para la variable fraseDominios con el id del h5 y otro let para definir la variable fraseGenerada
  let fraseDominios = document.getElementById("fraseDominios");
  let fraseGenerada = "";

  // bucle
  for (let i = 0; i < pronom.length; i++) {
    for (let j = 0; j < nom.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          fraseGenerada += pronom[i] + nom[j] + adj[k] + dom[l] + " ";
        }
      }
    }
  }
  fraseDominios.innerHTML = fraseGenerada;
};
