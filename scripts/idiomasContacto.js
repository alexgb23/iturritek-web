let titularesAvisos=document.querySelectorAll('.titulos-avisos');
let textoAviso=document.querySelectorAll('.texto-avisos');
let idiomas=document.querySelectorAll(".nav-link");
let tituloGenAviso=document.querySelector('.alegal');
let tituloGenPolitica=document.querySelector('.polypriv');
let titGenAviso=document.querySelector('.titu-aviso');
let titGenPolitica=document.querySelector('.titu-politicas');
let titularesPolitic=document.querySelectorAll('.titulos-politicas');
let subPolitica=document.querySelectorAll('.subtitulos-politicas');
let textoPolitica=document.querySelectorAll('.politic__text');
let vinculosHeader=document.querySelectorAll(".linkscript");
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");





const mensajeTitle =[
        "Want to talk?",
        "Hitz egin nahi?"
    ];

const subTitle = [
    "Send us a message",
    "Bidaliguzu mezu bat"
];

const inputName = [
    "Name",
    "Izena"
];

const inputSur = [
    "Surnames",
    "Abizenak"
];

const inputTel = [
    "Phone number",
    "Tel. Zebakia"
];

const inputEmail = [
    "Email",
    "Posta elek."
];

const selectTitle = [
    "What service are you interested in?",
    "Zein zerbitzuan interesa duzu?"
];
const selecOp1 = [
    "Air-conditioning",
    "Aire girotua"
];

const selecOp2 = [
    "Plumbing",
    "Iturgintza"
];

const selectOp3 = [
    "Heating and gas",
    "Berogailua eta gasa"
];
const selecOp4 = [
    "Alterarions",
    "Berrriztatze"
];
const selecOp5 = [
    "Assembly",
    "Muntaia"
];
const selecOp6 = [
    "Maintenance",
    "Mantentze"
];
const textArea = [
    "Tell us",
    "Kontaiguzu"
];

const detallesTitle = [
    "Contact details",
    "Harremanetarako datuak",
];


const encabezadoNav = {
    link1: {
        en: "HOME",
        eu: "INICIO",
    },
    link2: {
        en: "ABOUT US",
        eu: "GUTAZ",
    },
    link3: {
        en: "SERVICES",
        eu: "ZERBITZUAK",
    },
    link4: {
        en: "PEÑASCAL GROUP",
        eu: "PEÑASCAL TALDEA",
    },
    link5: {
        en: "CONTACT US",
        eu: "KONTAKTUA",
    }

}



idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            espanol.style.backgroundColor="transparent";
            euskera.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEn()
           tituloGenAviso.textContent=titlebtnAviso[0];
           tituloGenPolitica.textContent=titlebtnPolitica[0];
           titGenAviso.textContent=titlebtnAviso[0];
           titGenPolitica.textContent=titlebtnPolitica[0];
           rellenarTextoALegalEn()
            headerEn()
           titularesAvisosAvisoEn()
           titularesPEn()
            subPoliticaEn()
            rellenarTextoPoliticaEn()

        }

        else if(idioma.classList.contains("eu")){
            espanol.style.backgroundColor="transparent";
            ingles.style.backgroundColor="transparent";
            idioma.style.backgroundColor="rgb(131, 190, 224)"
            titularesAvisosAvisoEu()
            tituloGenAviso.textContent=titlebtnAviso[1];
            tituloGenPolitica.textContent=titlebtnPolitica[1];
            titGenAviso.textContent=titlebtnAviso[1];
            titGenPolitica.textContent=titlebtnPolitica[1];
            rellenarTextoALegalEu()
            headerEu()      
            titularesAvisosAvisoEu()
            titularesPEu()
            subPoliticaEu()
            rellenarTextoPoliticaEu()
        }

        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})
