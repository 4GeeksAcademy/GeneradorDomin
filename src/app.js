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
  let dom = [".com", ".es", ".net"];

  function generatorDom() {
    for (let i = 0; i < pronom.length; i++) {
      for (let j = 0; j < nom.length; j++) {
        for (let k = 0; k < adj.length; k++) {
          for (let l = 0; l < dom.length; l++) {
            console.log(pronom[i] + nom[j] + adj[k] + dom[l]);
            document.querySelector("generatorDom").innerHTML =
              pronom[i] + nom[j] + adj[k] + dom[l];
            document
              .getElementById("generador")
              .addEventListener("click", window.onload);
          }
        }
      }
    }
  }
};
