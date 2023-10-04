let idiomas=document.querySelectorAll(".nav-link");
let tituloHeader=document.querySelector(".Cont-header__presentIturritek-title");
let textoHeader=document.querySelector(".Cont-header__presentIturritek-text");
let vinculosHeader=document.querySelectorAll(".linkscript");
let btnContact=document.querySelector(".contactanosbtn");
let sobreNosotrosTitle=document.querySelectorAll(".aboutUs__article--title");
let sobreNosotrosParrafo=document.querySelectorAll(".aboutUs__article--info");
let compSocialTitulo=document.querySelector(".socialPromise__article--title");
let compSocialParrafo=document.querySelector(".socialPromise__article--paragraph");


const encabezadoNav1= {
    en:"ABOUT US",
    eu:"GUTAZ",
}
const encabezadoNav2={
    en:"SERVICES",
    eu:"Zerbitzuak",
}
const encabezadoNav3={
    en:"PEÑASCAL GROUP",
    eu:"Peñascal",
}
const encabezadoTitle={
    en:"2O YEARS OF EXPERIENCE",
    eu:"20 urteko esperientzia",
}
const encabezadoText={
    en:"Iturritek is an entrepreneurial reality that punishes projects and installations, maintenance and"
    +"mountings as a reference and that contributes to the generation of wealth and employment in our society, from "
    +"considerations, values and social styles.",
    eu:"Iturritek enpresa-errealitate liderra da, Proiektu eta Instalazio, Mantentze eta Muntatze aldetik eta gure gizartean aberastasuna eta enplegua sortzen laguntzen duena, gizarte-gogoeta, balore eta estilo batzuetatik abiatuta.",
}
const encabezadoBtn={
    en:"Contact Us",
    eu:"Deitu iezadazu", 
}

const aboutUsTitle={
    title0:{
     en:"WE WANT...",
     eu:"NAHI DUGU",
    },
    title1:{
     en:"WE PRETEND...",
     eu:"SAIATZEN GARA",
    },
    title2:{
     en:"WE COMMIT...",
     eu:"HITZA EMATEN",
    },
 }
 const aboutUsText={
     text0:{
         en:"to be a business project supervised by Peñascal S.Cooperativa, which is based on people, and which seeks to promote job insertion and the creation of employment and social wealth.",
         eu:"Peñascal S.Cooperativa-k gainbegiratzen duen enpresa-proiektua izan nahi dugu, pertsonengan oinarritzen dena. Lan-txertaketa eta enplegua eta gizarte-aberastasuna sortzea sustatu nahi duena.",
     },
     text1:{
        en:"To be the vehicle that enables the social and labor insertion of groups at risk of exclusion in the professional construction sectors.",
        eu:"eraikuntzaren sektore profesionaletan bazterketa arriskuan dauden kolektiboak gizarteratzeko eta laneratzeko aukera ematen duen ibilgailua izatea.",
    },
     text2:{
        en:"To provide quality service and work, train competent professionals, generate employment and enable social integration.",
        eu:"dugu Kalitatezko zerbitzua eta lana eskaintzera, profesional konpetenteak prestatzera, enplegua sortzera eta gizarteratzea ahalbidetzera",
     }
 }

 const compSocialTitle={
     en:"SOCIAL COMMITMENT",
     eu:"Konpromiso Soziala",
 }
 const compSocialText={
     en:"The Iturritek company is a business initiative created and supervised by Peñascal S.Coop. Aim to be a job creation experience that enables the social and labor insertion of groups in a situation or at risk of exclusion or in the professional construction sectors.",
     eu:"Iturritek Peñascal S.Coop sortu eta gainbegiratzen duen enpresa-ekimena da. Bazterketa egoeran edo arriskuan dauden edo eraikuntzaren sektore profesionaletan dauden kolektiboak gizarteratzeko eta laneratzeko aukera ematen duen enplegua sortzeko esperientzia izan nahi du.",
 }


idiomas.forEach((idioma)=>{
    idioma.addEventListener("click",()=>{
        if(idioma.classList.contains("en")){
            headerEn()
            aboutEn()
            compSocialEn()
        }
        else if(idioma.classList.contains("eu")){
            headerEu();
            aboutEu();
            compSocialEu();

        }
        else if(idioma.classList.contains("es")){
            location.reload()
        }
    })
   
})

function headerEn(){
    for (let i=0;i<vinculosHeader.length;i++){
        vinculosHeader[0].textContent=encabezadoNav1.en
        vinculosHeader[1].textContent=encabezadoNav2.en
        vinculosHeader[2].textContent=encabezadoNav3.en
     }
     tituloHeader.textContent=encabezadoTitle.en;
     textoHeader.textContent=encabezadoText.en;
     btnContact.textContent=encabezadoBtn.en;
}

function aboutEn(){
    for (let i=0;i<sobreNosotrosTitle.length;i++){
        sobreNosotrosTitle[0].textContent=aboutUsTitle.title0.en
        sobreNosotrosTitle[1].textContent=aboutUsTitle.title1.en
        sobreNosotrosTitle[2].textContent= aboutUsTitle.title2.en
     }
    for (let i=0;i<sobreNosotrosParrafo.length;i++){
        sobreNosotrosParrafo[0].textContent=aboutUsText.text0.en
        sobreNosotrosParrafo[1].textContent=aboutUsText.text1.en
        sobreNosotrosParrafo[2].textContent=aboutUsText.text2.en
     }
}

function compSocialEn(){
   compSocialTitulo.textContent=compSocialTitle.en;
   compSocialParrafo.textContent=compSocialText.en;
}

/**EUSKERA**/

function headerEu(){
    for (let i=0;i<vinculosHeader.length;i++){
        vinculosHeader[0].textContent=encabezadoNav1.eu
        vinculosHeader[1].textContent=encabezadoNav2.eu
        vinculosHeader[2].textContent=encabezadoNav3.eu
     }
     tituloHeader.textContent=encabezadoTitle.eu;
     textoHeader.textContent=encabezadoText.eu;
     btnContact.textContent=encabezadoBtn.eu;
}

function aboutEu(){
    for (let i=0;i<sobreNosotrosTitle.length;i++){
        sobreNosotrosTitle[0].textContent=aboutUsTitle.title0.eu
        sobreNosotrosTitle[1].textContent=aboutUsTitle.title1.eu
        sobreNosotrosTitle[2].textContent= aboutUsTitle.title2.eu
     }
    for (let i=0;i<sobreNosotrosParrafo.length;i++){
        sobreNosotrosParrafo[0].textContent=aboutUsText.text0.eu
        sobreNosotrosParrafo[1].textContent=aboutUsText.text1.eu
        sobreNosotrosParrafo[2].textContent=aboutUsText.text2.eu
     }
}

function compSocialEu(){
   compSocialTitulo.textContent=compSocialTitle.eu;
   compSocialParrafo.textContent=compSocialText.eu;
}

