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
let espanol=document.querySelector(".es");
let ingles=document.querySelector(".en");
let euskera=document.querySelector(".eu");



addEventListener("load", ()=> {
    espanol.style.backgroundColor="rgb(131, 190, 224)";
})


const titlebtnAviso= ["LEGAL WARNING", "LEGEEN ABISUA"]
const titlebtnPolitica= ["POLICIES AND PRIVACY","POLITIKAK ETA PRIVATUTASUNA"]

const titAvisosEn=[
    "Legislation", "Content and use",
    "Intellectual and industrial property",
    "Links"
]
const titAvisosEu=[
    "Legeria", "Edukia eta erabilera",
    "Jabetza intelektuala eta industriala",
    "Estekak"
]

const titlePoliticaEn=[
    "WHO IS RESPONSIBLE FOR THE PROCESSING OF THE DATA?",
    "WHAT IS THE DATA CONSERVATION PERIOD?",
    "WHAT INFORMATION DO WE COLLECT?",
    "ORIGIN OF DATA",
    "WHAT DO WE USE YOUR INFORMATION?",
    "HOW DO WE PROTECT YOUR INFORMATION?",
    "DO WE DISCLOSE INFORMATION TO THIRD PARTIES?",
    "Google (to send our email newsletter)",
    "Facebook (for targeted advertising)",
    "Active campaign (for the use of the electronic newsletter)",
    "THIRD PARTY LINKS",
    "MINORS",
    "YOUR CONSENT",
    "CHANGES TO OUR PRIVACY POLICY",
]
const titlePoliticaEu=[
    "NOR DA DATUEN TRATAMENDUAREN ARDURADUNA?",
    "ZEIN DA DATUAK KONTSERBATZEKO EPEA?",
    "ZEIN INFORMAZIO BILDU DUGU?",
    "DATUEN JATORRIA",
    "ZER ERABILTZEN DUGU ZURE INFORMAZIOA?",
    "ZER ERABILTZEN DUGU ZURE INFORMAZIOA?",
    "INFORMAZIOA HIRUGARREN PERTSONEI IKUSLATZEN AL DIEGU?",
     "Google (to send our email newsletter)",
    "Facebook (zuzendutako iragarkietarako)",
    "Kanpaina aktiboa (buletin elektronikoa erabiltzeko)",
    "HIRUGARRENEN LOTURAK",
    "ADIN GABEKOAK",
    "ZURE ADOSTASUNA",
    "GURE PRIBATUTASUN POLITIKAN ALDAKETAK",
 ]


const subTitlePoliticaEn=[
    "To manage subscriptions and purchases",
    "To personalize your experience",
    "To improve our website",
    "To improve customer service",
    "To process transactions",
    "To administer a contest, promotion, survey, or other site feature",
    "To send periodic emails",
    "Note:",
]
const subTitlePoliticaEu=[
    "Harpidetzak eta erosketak kudeatzeko",
    "Zure esperientzia pertsonalizatzeko",
    "Gure webgunea hobetzeko",
    "Bezeroarentzako zerbitzua hobetzeko",
    "Transakzioak prozesatzeko",
    "Lehiaketa, promozio, inkesta edo guneko beste eginbide bat kudeatzeko",
    "Aldizkako mezu elektronikoak bidaltzeko",
    "Oharra:"  
]


const avisoTextAEn=[
    "This legal notice (hereinafter, the “Legal Notice”) regulates the use of the Internet portal service www.iturritek.com (hereinafter, the “Website”) of Iturritek SL with CIF B95325445 with registered office Plaza Belategi 1 Bj 48002 - (Bilbao) - Vizcaya.",
    "In general, the relations between Peñascal Kooperatiba with the Users of its telematic services, present on the website, are subject to Spanish legislation and jurisdiction. The parties expressly renounce any jurisdiction that may apply to them and expressly submit to the Courts and Tribunals of Vizcaya to resolve any controversy that may arise in the interpretation or execution of these contractual conditions.",
    "The User is informed, and accepts, that access to this website does not imply, in any way, the beginning of a commercial relationship with Peñascal Kooperatiba. The owner of the website does not identify itself with the opinions expressed therein by its collaborators. Peñascal Kooperatiba reserves the right to make without prior notice any modifications it deems appropriate to its Website, and may change, delete or add the contents and services that are included. provided through it as the way in which they appear presented or located on their servers.",
    "The intellectual property rights of the content of the web pages, their graphic design and codes are owned by Peñascal Kooperatiba and, therefore, their reproduction, distribution, public communication, transformation or any other activity that may be carried out with the contents of the website is prohibited. its web pages or even citing the sources, except with the written consent of Apodaka studio. All trade names, brands or distinctive signs of any kind contained on the Company's websites are the property of their owners and are protected by law.",
    "The presence of links on the Peñascal Kooperatiba web pages is for informational purposes only and in no case does it imply a suggestion, invitation or recommendation regarding them."
]
const avisoTextAEu = [
        "Lege-ohar honek (aurrerantzean, “Lege Oharra”) Iturritek SLren www.iturritek.com Interneteko atariaren zerbitzuaren erabilera (aurrerantzean, “Webgunea”) arautzen du B95325445 IFK duen egoitza Plaza Belategi 1 Bj 48002 - (Bilbo). ) - Bizkaia.",
        "Oro har, Peñascal Kooperatibak bere zerbitzu telematikoen Erabiltzaileekin dituen harremanak, webgunean daudenak, Espainiako legediaren eta jurisdikzioaren mende daude. Alderdiek berariaz uko egiten diote aplika dakiekeen eskumenari, eta espresuki Bizkaiko Epaitegi eta Auzitegien esku jartzen dira kontratu-baldintza hauek interpretatzean edo betetzean sor daitekeen edozein eztabaida ebazteko.",
        "Erabiltzaileari jakinarazten zaio, eta onartzen du, webgune honetara sartzeak ez duela esan nahi, inola ere, Peñascal Kooperatibarekin harreman komertzial bat hastea. Webgunearen jabea ez da bere kolaboratzaileek bertan adierazitako iritziekin identifikatzen, Peñascal Kooperatibak bere webgunean egokitzat jotzen dituen aldaketak aldez aurretik jakinarazi gabe egiteko eskubidea du, eta dauden edukiak eta zerbitzuak aldatu, ezabatu edo gehi ditzake. barne, bere zerbitzarietan aurkeztuta edo kokatuta agertzeko modu gisa emana.",
        "Web orrietako edukien jabetza intelektualaren eskubideak, diseinu grafikoa eta kodeak Peñascal Kooperatibarena dira eta, beraz, horien erreprodukzio, banaketa, komunikazio publiko, eraldaketa edo webguneko edukiekin egin daitekeen beste edozein jarduera. debekatuta dago bere web orriak edo iturriak aipatzea, Apodaka estudioaren idatzizko baimena izan ezik. Konpainiaren webguneetan jasotako merkataritza-izen, marka edo zeinu bereizgarri guztiak haien jabeen jabetzakoak dira eta legeak babestuta daude.",
        "Peñascal Kooperatiba web orrietan estekak egoteak informazio-helburua baino ez du eta inola ere ez du esan nahi horien inguruko iradokizun, gonbidapen edo gomendiorik."
]

const politicTextAEn=[
    "Our Privacy Policy is designed to help you understand how we collect and use the personal information you provide to us and to help you make informed decisions when using our website. When you visit our website, you may provide us with two types of information: personal information that you deliberately choose to disclose that is collected on an individual basis, and website usage information collected on an aggregate basis as you and others browse our website.",
    "The Privacy Policy of Iturritek SL, hereinafter “the company”, is governed by compliance with current legislation on the protection of personal data: REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 27 April 2016 (hereinafter, RGPD), and by Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), as well as by Organic Law 15/1999, of December 13, on Protection of Personal Data and its implementing regulations while it remains in force. At the company we are committed to ensuring the privacy of our users' personal data. This policy, in accordance with the principle of active responsibility, will be applicable in the event that users decide to fill out a form on their website where personal data is collected, without prejudice to what is indicated in the “Privacy Clause” applicable to each form. concrete.",
    "Company Name: Iturritek SL",
    "CIF B95325445",
    "Registered office: Plaza Belategi 1 Bj 48002 - (Bilbao) - Vizcaya.",
    "Contact Data Protection Officer (DPO): XXX@XXX",
    "In compliance with the principle of limitation of the conservation period, the data collected by the company is processed only for the time necessary and for the specific purposes for which it was collected. For all of the above and in generic terms, the company will keep your data for the duration of the contractual relationship (in the case of subscription or participation in a contest or raffle) and thereafter, only for the purpose of complying with legal obligations and responsibilities derived from such treatments depending on the applicable regulations. Once these limitation periods have expired, your data will be deleted. On the other hand, regarding the processing of your data for promotional purposes, or for sending information or newsletters, we will retain the data until we receive opposition to the contrary.",
    "We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.", 
    "When placing an order or registering on our site, as applicable, you may be asked to enter your: name or email address. However, you can visit our site anonymously.",
    "The data processed in the company has been provided by the interested party himself.",
    "Any information we collect may be used in one of the following ways:",
    "Your information helps us manage the subscriptions and purchases you make through the company website.",
    "Your information helps us better respond to your individual needs.",
    "We continually strive to improve our website offerings based on the information and feedback we receive from you.",
    "Your information helps us respond more effectively to your customer service requests and support needs.",
    "Your information, whether public or private, will not be sold, exchanged, transferred or given to any other company for any reason, without your consent, other than for the express purpose of delivering the requested product or service.",
    "The email address you provide for order processing may be used to send you information and updates related to your order, as well as to receive occasional company news, updates, information related to products or services, etc.",
    "If at any time you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.",
    "The company undertakes to adopt the necessary technical and organizational measures to guarantee the security of personal data and prevent its alteration, loss, processing or unauthorized access, taking into account the state of technology, in accordance with what is established by the RGPD and by the still current LOPD and its RLOPD. Even if the company cannot guarantee the absolute impregnability of the Internet network and therefore the violation of data through fraudulent access to it by third parties, it undertakes to carry out the risk analyzes required by law and Impact Assessments. that are necessary in your case.",
    "We do not store any credit or debit card details on any of our systems.",
    "To operate effectively as a business, we may need to pass your information to selected and trusted third parties. The third parties with whom we may share information are:",
    "Additionally, any third party to whom we need to disclose personal information in order to comply with our legal, regulatory and legal obligations. This may be as part of a legal process (for example, in response to a court order or in response to a request from a law enforcement agency, or when they deem it necessary). This could be to investigate, prevent, or take action regarding illegal activities, suspected fraud, or situations involving potential threats to the physical safety, property, or rights of any person. It could also include breaching the rules of our website, or as otherwise permitted or by a third party to which you have given your consent.",
    "Please be assured that when we outsource any process, we ensure that any supplier or contractor has adequate safeguards in place. We will also require them to comply with the privacy principles as part of our contract with them.",
    "From time to time, at our discretion, we may include or offer third party products or services on our website. These third-party sites have separate and independent privacy policies. Therefore, we have no responsibility for the content and activities of these linked sites. However, we seek to protect the integrity of our site and welcome any feedback about these sites.",
    "We will not knowingly allow anyone under the age of 16 to provide us with any personally identifiable information on our website; If you are under 16 years of age, please do not provide information about yourself on this website. In the event that we become aware that we have collected personal information from a child under the age of 16, we will delete that information from our database as quickly as possible.",
    "By using our site, you agree to the privacy policy of our websites.",
    "If we decide to change our privacy policy, we will post those changes on this page and/or update the Privacy Policy modification date below.",
    "This policy was reviewed/modified in December 2020.",




]
const politicTextAEu=[
    "Gure Pribatutasun-politika eskaintzen diguzun informazio pertsonala nola biltzen eta erabiltzen dugun ulertzen laguntzeko eta gure webgunea erabiltzean erabaki informatuak hartzen laguntzeko diseinatuta dago. Gure webgunea bisitatzen duzunean, bi informazio mota eman diezagukezu: nahita jakinaraztea aukeratzen duzun informazio pertsonala, banaka biltzen dena, eta webgunearen erabilerari buruzko informazioa, zuek eta besteek gure webgunea arakatzen duzunean, modu agregatuan jasotakoa.",
    "Iturritek SLren Pribatutasun Politika, aurrerantzean “enpresa”, datu pertsonalak babesteari buruzko indarreko legeria betetzeak arautzen du: 2016ko apirilaren 27ko EUROPAKO PARLAMENTUAREN ETA KONTSEILUAREN 2016/679 ARAUA (EB) (aurrerantzean, RGPD). ), eta uztailaren 11ko 34/2002 Legeak, Informazioaren Gizarteko Zerbitzuei eta Merkataritza Elektronikoari buruzkoak (LSSI-CE), bai eta Datu Pertsonalak Babesteari buruzko abenduaren 13ko 15/1999 Lege Organikoak eta haren garapen-araudiak ere. indarrean jarraitzen du. Enpresan gure erabiltzaileen datu pertsonalen pribatutasuna bermatzeko konpromisoa hartzen dugu. Politika hau, erantzukizun aktiboaren printzipioaren arabera, erabiltzaileek datu pertsonalak jasotzen dituzten bere webguneko formulario bat betetzea erabakitzen duten kasuetan izango da, bakoitzari aplikatzen zaion “Pribatutasun Klausula”-an adierazitakoari kalterik egin gabe. forma.hormigoia.",
    "Sozietatearen izena: Iturritek SL",
    "B95325445 CIF",
    "Egoitza soziala: Plaza Belategi 1 Bj 48002 - (Bilbo) - Bizkaia.",
    "Harremanetarako Datuak Babesteko Arduraduna (DPO): XXX@XXX",
    "Kontserbazio-epearen muga-printzipioa betez, enpresak bildutako datuak behar den denborarako eta bildutako helburu zehatzetarako soilik tratatzen dira. Aurreko guztiagatik eta termino generikoetan, enpresak zure datuak gordeko ditu kontratu-harremanak irauten duen bitartean (harpidetza edo lehiaketa edo zozketa batean parte hartzen bada) eta hortik aurrera, legezko betebeharrak betetzeko eta soilik. tratamendu horietatik eratorritako erantzukizunak aplikatu beharreko araudiaren arabera. Muga-epe hauek igarotakoan, zure datuak ezabatu egingo dira. Bestalde, zure datuak sustapen-helburuetarako, edo informazioa edo buletinak bidaltzeko tratamenduari dagokionez, datuak gordeko ditugu kontrako kontrakoa jaso arte.",
    "Zure informazioa biltzen dugu gure webgunean erregistratzen zarenean, eskaera bat egiten duzunean, gure buletinera harpidetzen zarenean, inkesta bati erantzuten duzunean edo formulario bat betetzen duzunean.",
    "Eskaera bat egiterakoan edo gure webgunean erregistratzean, hala dagokionean, zure: izena edo helbide elektronikoa idazteko eskatuko dizugu. Hala ere, gure webgunea modu anonimoan bisita dezakezu.",
    "Enpresan tratatutako datuak interesdunak berak eman ditu.",
    "Biltzen dugun edozein informazio modu hauetako batean erabil daiteke:",
    "Zure informazioak konpainiaren webgunearen bidez egiten dituzun harpidetzak eta erosketak kudeatzen laguntzen digu.",
    "Zure informazioak zure beharretara hobeto erantzuten laguntzen digu.",
    "Etengabe saiatzen gara gure webgunearen eskaintza hobetzen, zuregandik jasotzen ditugun informazio eta iritzietan oinarrituta.",
    "Zure informazioa, publikoa edo pribatua izan, ez da beste edozein enpresari saldu, trukatu, transferituko edo emango inolako arrazoirengatik, zure baimenik gabe, eskatutako produktu edo zerbitzua emateko berariazko xedearekin izan ezik.",
    "Eskaerak prozesatzeko ematen duzun helbide elektronikoa zure eskaerari lotutako informazioa eta eguneraketak bidaltzeko erabil daiteke, baita noizbehinka enpresaren albisteak, eguneraketak, produktu edo zerbitzuekin lotutako informazioa eta abar jasotzeko ere.",
    "Etorkizuneko mezu elektronikoak jasotzetik harpidetza kendu nahi baduzu noizbait, harpidetza kentzeko jarraibide zehatzak sartzen ditugu mezu elektroniko bakoitzaren behealdean.",
    "Enpresak konpromisoa hartzen du datu pertsonalen segurtasuna bermatzeko eta horiek aldatzea, galtzea, tratatzea edo baimenik gabeko sarbidea ekiditeko beharrezko neurri teknikoak eta antolakuntzakoak hartzeko, teknologiaren egoera kontuan hartuta, RGPDk eta RGPDk ezarritakoaren arabera. oraindik gaur egungo LOPD eta bere RLOPD. Enpresak ezin badu ere bermatu Interneteko sarearen erabateko erasoezintasuna eta, beraz, hirugarrenek iruzurrezko sarbidearen bidez datuen urraketa, legeak eta Inpaktuaren Ebaluazioak eskatzen dituen arrisku-analisiak egiteko konpromisoa hartzen du zure kasuan.",
    "Enpresak konpromisoa hartzen du datu pertsonalen segurtasuna bermatzeko eta horiek aldatzea, galtzea, tratatzea edo baimenik gabeko sarbidea ekiditeko beharrezko neurri teknikoak eta antolakuntzakoak hartzeko, teknologiaren egoera kontuan hartuta, RGPDk eta RGPDk ezarritakoaren arabera. oraindik gaur egungo LOPD eta bere RLOPD. Enpresak ezin badu ere bermatu Interneteko sarearen erabateko erasoezintasuna eta, beraz, hirugarrenek iruzurrezko sarbidearen bidez datuen urraketa, legeak eta Inpaktuaren Ebaluazioak eskatzen dituen arrisku-analisiak egiteko konpromisoa hartzen du zure kasuan.",
    "Ez dugu kreditu- edo zordunketa-txartelen xehetasunik gordetzen gure sistemetan.",
    "Negozio gisa eraginkortasunez funtzionatzeko, baliteke zure informazioa hirugarren pertsona hautatuei eta fidagarriei helarazi behar diegu. Informazioa partekatu dezakegun hirugarrenak hauek dira:",
    "Gainera, gure legezko, arauzko eta legezko betebeharrak betetzeko informazio pertsonala ezagutarazi behar dion hirugarren edozein. Prozesu juridiko baten barruan egon daiteke hori (adibidez, epailearen agindu bati erantzunez edo legea betearazteko agentzia baten eskaerari erantzunez edo beharrezkotzat jotzen dutenean). Hau izan daiteke legez kanpoko jarduerak, ustezko iruzurrak edo edozein pertsonaren segurtasun fisikorako, jabetzarako edo eskubideetarako mehatxu potentzialak dituzten egoerak ikertzeko, prebenitzeko edo neurriak hartzeko. Gure webguneko arauak urratzea ere izan daiteke, edo bestela baimenduta edo zure baimena eman diozun hirugarren batek.",
    "Ziurtatu edozein prozesu azpikontratatzen dugunean, edozein hornitzaile edo kontratistak babes egokiak dituela bermatzen dugula. Gainera, pribatutasun-printzipioak bete ditzatela eskatuko diegu haiekin dugun kontratuaren zati gisa.",
    "Noizean behin, gure erabakiz, hirugarrenen produktuak edo zerbitzuak gure webgunean sartu edo eskain ditzakegu. Hirugarrenen gune hauek pribatutasun politika bereizi eta independenteak dituzte. Beraz, ez dugu estekatutako gune horien edukiaren eta jardueren erantzukizunik. Hala ere, gure gunearen osotasuna babesten saiatzen gara eta gune horiei buruzko iritziak ongi etorriak ematen dizkiogu.",
    "Ez diogu nahita utziko 16 urtetik beherako inori gure webgunean pertsonalki identifika daitekeen informaziorik ematea; 16 urte baino gutxiago badituzu, mesedez ez eman zeure buruari buruzko informaziorik webgune honetan. 16 urtetik beherako ume baten informazio pertsonala bildu dugula jakiten badugu, informazio hori gure datu-basetik ahalik eta azkarren ezabatuko dugu.",
    "Gure webgunea erabiltzean, gure webguneen pribatutasun politika onartzen duzu.",
    "Gure pribatutasun-politika aldatzea erabakitzen badugu, aldaketa horiek orrialde honetan argitaratuko ditugu eta/edo beheko Pribatutasun-politika aldatzeko data eguneratuko dugu.",
    "Politika hau 2020ko abenduan berrikusi/aldatu zen."

    
]

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


/////////////////////////funciones de traduccion de Avisos////////////////////////

function titularesAvisosAvisoEn(){
    for(let i=0;i<titAvisosEn.length;i++){
        titularesAvisos[i].textContent=titAvisosEn[i];
    }         
}
function titularesAvisosAvisoEu(){
    for(let i=0;i<titAvisosEu.length;i++){
        titularesAvisos[i].textContent=titAvisosEu[i];
    }         
}

function rellenarTextoALegalEn(){
    for(let i=0;i<avisoTextAEn.length;i++){
        textoAviso[i].textContent=avisoTextAEn[i];
    }
}

function rellenarTextoALegalEu(){
    for(let i=0;i<avisoTextAEu.length;i++){
        textoAviso[i].textContent=avisoTextAEu[i];
    }
}

/////////////////////////funciones de traduccion de politica////////////////////////
function titularesPEn(){
 for(let i=0;i<titlePoliticaEn.length;i++){
     titularesPolitic[i].textContent=titlePoliticaEn[i];
 }       
}
function titularesPEu(){
   for(let i=0;i<titlePoliticaEu.length;i++){
       titularesPolitic[i].textContent=titlePoliticaEu[i];
   }
}

function subPoliticaEn(){
     for(let i=0;i<subTitlePoliticaEn.length;i++){
         subPolitica[i].textContent=subTitlePoliticaEn[i];
     }
}
function subPoliticaEu(){
         for(let i=0;i<subTitlePoliticaEu.length;i++){
             subPolitica[i].textContent=subTitlePoliticaEu[i];
         }
}

function rellenarTextoPoliticaEn(){
   for(let i=0;i<politicTextAEn.length;i++){
       textoPolitica[i].textContent=politicTextAEn[i];
   }
}

function rellenarTextoPoliticaEu(){
    for(let i=0;i<politicTextAEu.length;i++){
        textoPolitica[i].textContent=politicTextAEu[i];
    }
}
