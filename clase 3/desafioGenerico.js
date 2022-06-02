/*
function mostrarLetras (palabra){

        for(let i=0;i<palabra.length;i++){                        
                 setTimeout(() => {
                      console.log(palabra[i])}
                    ,1000)
            }

        }
  */

const fin = () => console.log("Terminé")

function mostrarLetras(letras) {
        let totalLetters = letras.length;
        let letter = 0;

        let interval = setInterval(() => {
                console.log(letras[letter]);
                letter++;
                if (letter === totalLetters) {
                        clearInterval(interval, fin);
                }
        }, 1000);
}

mostrarLetras("holaaaa")