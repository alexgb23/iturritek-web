let idiomas=document.querySelectorAll(".nav-link");
let vinculosHeader=document.querySelectorAll(".linkscript");
let tituloGral=document.querySelector(".contact-title");
let subtitulosContact=document.querySelector(".titulos-card_contacto");
let pararafo=document.querySelector(".contact-paragraph");
let subtitulosForm=document.querySelector(".titulos-card_contacto");
let phone=document.querySelector(".phone");
let mail=document.querySelector(".mail");
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");

const encabezadoNav={

    link1:{
        en:"HOME",
        eu:"INICIO",
    },
    link2:{
        en:"ABOUT US",
        eu:"GUTAZ",
    },
    link3:{
        en:"SERVICES",
        eu:"ZERBITZUAK",
    },
    link4:{
        en:"PEÑASCAL GROUP",
        eu:"PEÑASCAL TALDEA",
    },
  
} 

addEventListener("load", ()=> {
    espanol.style.backgroundColor="rgb(131, 190, 224)";
})


idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            espanol.style.backgroundColor="transparent";
            euskera.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            headerEn()
            idiomaIngles()
          
          
        }

        else if(idioma.classList.contains("eu")){
            espanol.style.backgroundColor="transparent";
            ingles.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
          
            headerEu()
         

    
        }

        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})

function headerEn(){
    for (let i=0;i<vinculosHeader.length;i++){
        vinculosHeader[0].textContent=encabezadoNav.link1.en
        vinculosHeader[1].textContent=encabezadoNav.link2.en
        vinculosHeader[2].textContent=encabezadoNav.link3.en
        vinculosHeader[3].textContent=encabezadoNav.link4.en
     }
}

function headerEu(){
    for (let i=0;i<vinculosHeader.length;i++){
        vinculosHeader[0].textContent=encabezadoNav.link1.eu
        vinculosHeader[1].textContent=encabezadoNav.link2.eu
        vinculosHeader[2].textContent=encabezadoNav.link3.eu
        vinculosHeader[3].textContent=encabezadoNav.link4.eu
     }
}


function idiomaIngles(){
   tituloGral.textContent=" ¿WANT TO TALK?";
   subtitulosContact.textContent="Contact details";
   pararafo.textContent="Belategi, 1 48002 BILBO.";
   phone.textContent="Phone";
   subtitulosForm.textContent="Send us a message";
}