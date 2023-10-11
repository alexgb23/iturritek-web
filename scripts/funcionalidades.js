let btnTabs = document.querySelectorAll(".btn-legalidad");
let tabsContent = document.querySelectorAll(".tabs-legalidad");
let logoFter= document.querySelector('.logo-footer');
let btncontacto = document.querySelector('.contactanosbtn');
let sectfooter = document.querySelector('.piedepagina');
let home=document.querySelector('.home');




btnTabs.forEach((btnTabs, i) =>{
    btnTabs.addEventListener("click", () => {
        tabsContent.forEach(tabsContent => {
            tabsContent.style.display = "none";
        });
        tabsContent[i].style.display = "block";  
        if(btnTabs.classList.contains("alegal")){
            document.querySelector(".polypriv").style.background="rgba(185, 124, 124, 0.53)";
            document.querySelector(".alegal").style.background="rgba(254, 129, 1, 1)";
        }
        else if(btnTabs.classList.contains("polypriv")){
            document.querySelector(".alegal").style.background="rgba(185, 124, 124, 0.53)";
            document.querySelector(".polypriv").style.background="rgba(254, 129, 1, 1)";
        }
    });
});

if(btncontacto)
btncontacto.addEventListener('click', () => {
    location.href = '../pages/contactos.html'
})


if(logoFter)
logoFter.addEventListener('click', () => {
    location.href = '../index.html'
  })

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('logo-p')||e.target.classList.contains('grupoPeñascal__img8')){
        location='https://www.grupopenascal.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img9')){
        location='http://www.zurtek.net/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img10')){
        location='http://www.laiatzen.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img5')){
        location='https://lapikocatering.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img6')){
        location='https://ekoizan.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img11')){
        location='http://www.izarza.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img3')){
        location='http://eurekasolucionesadaptadas.com/'
    }
    else if(e.target.classList.contains('grupoPeñascal__img1')){
        location='https://perpetummobile.store/'
    }
})


document.addEventListener('scroll', () => {
    if(document.title === 'Iturritek'){
        if (window.scrollY > 500){
            home.style.display = 'block';
        }
        else if(window.scrollY < 500){
            home.style.display = 'none';
        }
        }
    
    if(document.title === 'Iturritek_Aviso-legal_politica'){
        if (window.scrollY > 50){
            home.style.display = 'block';
        }
        else if(window.scrollY < 50){
            home.style.display = 'none';
        }
    }
   
    })

