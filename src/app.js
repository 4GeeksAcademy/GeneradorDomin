/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronom = ["El", "Los", "Las", "Tu"];
  let nom = ["buen", "mal", "insano", "confiable"];
  let adj = ["financiero", "fritos", "samurai", "financiero", "sofa"];
  let ext = [".com", ".es", ".net"];

  for (let i = 0; i < pronom.length; i++) {
    for (let j = 0; j < nom.length; j++) {
      for (let k = 0; k < adj.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          console.log(pronom[i] + nom[j] + adj[k] + ext[l]);
        }
      }
    }
  }

  document.querySelector("#fraseDominios").innerHTML =
    pronom[i] + nom[j] + adj[k] + ext[l];

  document.getElementById("generador").addEventListener("click", window.onload);
};
