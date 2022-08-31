import { btnEvento } from "./modal.js";

btnEvento.eventCadastrar()
btnEvento.eventRecuperarSenha()

class darMolde{
    static btnDarkMode = document.querySelector(".darkMode");
    static html = document.querySelector("html");

    static changeColor(){
        darMolde.btnDarkMode.addEventListener("click", ()=>{
            this.html.classList.toggle("darkMode")
            this.changeText()
        })
    }
    static changeText(){
        const agumon  = document.querySelector(".agumon")
        if(this.html.classList.contains("darkMode")){
            
            this.btnDarkMode.innerText = "Light Mode"
            
            agumon.src = "src/img/doug.ico"

        }else{
            this.btnDarkMode.innerText = "Dark Mode"
            agumon.src = "src/img/agu-preview.png"
        }
    }
}

darMolde.changeColor()