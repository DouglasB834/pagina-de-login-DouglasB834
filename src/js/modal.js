


export class Modal {
   
    static body         = document.querySelector("body");

    static modalCadastrar(event){

        console.log(this.body)

        const tagDiv                    = document.createElement("div")
        const tagForm                   = document.createElement("form")

        tagDiv.classList.add("section_cadastra__modal")
        tagForm.classList.add("form__cadastra")


        const tagH2                     = document.createElement("h2")
        tagH2.innerText                 = "Sing up!"

        const tagLabelLogin             = document.createElement("label")
        const tagInputLogin             = document.createElement("input")

        tagLabelLogin.for ="login"
        tagLabelLogin.innerText         = "login"

        tagInputLogin.classList.add("login")
        tagInputLogin.type              = "text"
        tagInputLogin.name              = "login"
        tagInputLogin.placeholder       = "Type yourlogin"
        tagInputLogin.required          = true


        const tagLabelPassword          = document.createElement("label")
        const tagInputPassword          = document.createElement("input")
        tagLabelPassword.for            = "password";
        tagLabelPassword.innerText      = "password";

        tagInputPassword.classList.add("password")
        tagInputPassword.type           = "password"  
        tagInputPassword.placeholder    = "Type your password"
        tagInputPassword.required       = true
        tagInputPassword.name           = "passsword"

        const taglabelEmail             = document.createElement("label")
        const tagInputEmail             = document.createElement("input")
        taglabelEmail.for               = "email"
        taglabelEmail.innerText         = "Email"

        tagInputEmail.classList.add("password")
        tagInputEmail.type              = "email"
        tagInputEmail.id                = "email"
        tagInputEmail.nome              = "email"
        tagInputEmail.required          = true
        tagInputEmail.placeholder       = "Type your e-mail"    


        const tagBtnCadastrar           = document.createElement("button")
        const tagbtnVoltar              = document.createElement("span")

        tagBtnCadastrar.classList.add("btnCadastra")
        tagbtnVoltar.classList.add("btnVoltar")

        tagBtnCadastrar.type            = "submit"
        tagBtnCadastrar.innerText       = "Register"
        tagbtnVoltar.innerText          = "Back login"
           
        tagbtnVoltar.addEventListener("click", ()=>{
            window.location.reload()
        })
        
        console.log("awe")

        tagForm.append(tagH2, tagLabelLogin, tagInputLogin, tagLabelPassword, tagInputPassword, taglabelEmail, tagInputEmail, tagBtnCadastrar, tagbtnVoltar)

        tagDiv.append(tagForm)
        this.body.append(tagDiv)
      
        
    }
    
    static modalRecuperarLogin(){

        const tagDiv                    = document.createElement("div")
        const tagForm                   = document.createElement("form")
        const tagH2                     = document.createElement("h2")
        tagH2.innerText                 = "Sing up!"

        tagDiv.classList.add("section_cadastra__modal")
        tagForm.classList.add("form__cadastra")
        // tagInputEmail.classList.add("login")

        const taglabelEmail             = document.createElement("label")
        const tagInputEmail             = document.createElement("input")

        taglabelEmail.innerText         =  "Email or nickname"
        tagInputEmail.type              = "email"
        tagInputEmail.name              = "Recovering password"
        tagInputEmail.placeholder       = "Type your email or login"
        tagInputEmail.required          = true
        

        const tagBtnCadastrar           = document.createElement("button")
        const tagbtnVoltar              = document.createElement("span")
        tagBtnCadastrar.classList.add("btnCadastra")
        tagbtnVoltar.classList.add("btnVoltar")
        tagBtnCadastrar.innerText       = "Recover Password"
        tagbtnVoltar.innerText          = "Back login"


        tagbtnVoltar.addEventListener("click", ()=>{
            window.location.reload()
        })

        tagBtnCadastrar.addEventListener("click" ,()=>{
            //chamaria a API para enviar email 
            window.location.reload()

        })
        tagForm.append(tagH2, taglabelEmail, tagInputEmail, tagBtnCadastrar, tagbtnVoltar)
        tagDiv.append(tagForm)
        this.body.append(tagDiv)

        /*
           
       <div class="section_cadastra__modal">
           
            <form class="form__cadastra">
                
                <h2>Sing up!</h2>    

                <label for="email">email</label>
                <input class="password"  type="email" name="password" required placeholder="Digite seu Email ou nick"/>
    
                <button class="btnCadastra" type="submit">Recover Password</button>
                <span class="btnVoltar" type="submit" >Back login</span>
            </form>

        </div> 
        
        */
    }
}


export class btnEvento{
    static form__Pagesignup     = document.querySelector(".form__Pagesignup")
    static btnCadastrar         = document.querySelector(".cadastrar");

    static eventCadastrar(){
        this.form__Pagesignup .addEventListener("click", () =>{     
            Modal.modalCadastrar()
    
        })

    }

    static eventRecuperarSenha(){
        this.btnCadastrar.addEventListener("click", ()=>{
            Modal.modalRecuperarLogin()
            console.log("oi")


        })

    }




}