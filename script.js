let navLink = document.querySelectorAll(".nav-link");
let cammonH = document.getElementsByTagName("h1");
let cammonP = document.getElementsByTagName("p");
let titleSecond = document.getElementsByTagName("h2");
let titleThird = document.getElementsByTagName("h3");
let titleFourth = document.getElementsByTagName("h4");
let titleFifth = document.getElementsByTagName("h5");
let titleSixth = document.getElementsByTagName("h6");
let linkTag = document.querySelectorAll(".dropdown-item");
let langBtn = document.querySelector(".lang");
let button = document.querySelectorAll(".change-lang-btn");
let combo = document.querySelectorAll(".mini-info");
let cardLink = document.querySelectorAll(".card-link");
let footerLink = document.querySelectorAll(".footer-link");
const data = {
  en: {
    cardLink: ["Learn More", "Learn More", "Learn More", "Learn More"],
    navBar: ["Home", "Contact", "Pages", "Blog", "Blocks", "Dacumentation"],
    title: [
      "We bring solutions to make life easier",
      "Here are a few reasons why our customers choose Sandbox.",
      "We are trusted by over 5000+ clients. Join them now and grow your business.",
    ],
    paragraph: [
      "We are a creative company that focuses on long term relationships with customers.",
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
      "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
      "Why Choose Sandbox?",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo,tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam quis risus eget urna.",
      "Save Time and Money",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium maxime saepe at rem tempora laudantium placeat deleniti incidunt soluta similique.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, sunt.",
      "Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    ],
    secondParg: [
      "Save your time and money by choosing our professional team.",
      "Check out some of our awesome projects with creative ideas and great design.",
      "We bring solutions to make life easier for our customers",
    ],
    thirdParg: ["Collect Idea"],
    fourthParg: [
      "Creativity",
      "Rapid Solutions",
      "Innovative",
      "Top-Notch Support",
    ],
    fifthParg: [
      "Content Marketing",
      "Social Engagement",
      "Identity & Branding",
      "Product Design",
      "Collect Ideas",
      "Data Analysis",
      "Finalize Product",
      "Cras Fermentum Sem",
      "Card title",
      "Lorem ipsum",
      "Lorem ipsum",
      "Card title",
      "Lorem ipsum",
    ],
    sixthParg: ["Company name", "Products", "Useful links", "Contact"],
    moreLink: [
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
      "Action",
      "Another action",
      "Something else here",
      "Separated link",
    ],
    buttonIn: ["Read More", "Learn More", "Get Started"],
    comboInfo: [
      " Aenean eu leo quam. Pellentesque ornare.",
      " Aenean eu leo quam. Pellentesque ornare.",
      " Aenean eu leo quam. Pellentesque ornare.",
    ],
    footer: ["Your Account", "Become an Affiliate", "Shipping Rates", "Help"],
  },
  az: {
    cardLink: ["Daha Cox", "Daha Cox", "Daha cox", "Daha cox"],
    navBar: ["Ana Sehife", "Elaqe", "Səhifələr", "Blog", "Bloklar", "Senedler"],
    title: [
      "Biz həyatı asanlaşdırmaq üçün həllər təqdim edirik",
      "Müştərilərimizin Sandbox-u seçməsinin bir neçə səbəbi bunlardır.",
      "Bizə 5000-dən çox müştəri etibar edir. İndi onlara qoşulun və biznesinizi inkişaf etdirin.",
    ],
    secondParg: [
      "Peşəkar komandamızı seçərək vaxtınıza və pulunuza qənaət edin.",
      "Yaradıcı ideyaları və gözəl dizaynı olan bəzi möhtəşəm layihələrimizə baxın.",
      "Müştərilərimizin həyatını asanlaşdırmaq üçün həllər təqdim edirik",
    ],
    thirdParg: ["Idea topla"],
    paragraph: [
      "Biz müştərilərlə uzunmüddətli münasibətlərə diqqət yetirən kreativ şirkətik.",
      "Heç bir həyat təbliğatın titrəməsindən azad deyil. O vaxta qədər sabahdan narahat olmaq lazım deyil.",
      "Heç bir həyat təbliğatın titrəməsindən azad deyil. O vaxta qədər sabahdan narahat olmaq lazım deyil.",
      "Heç bir həyat təbliğatın titrəməsindən azad deyil. O vaxta qədər sabahdan narahat olmaq lazım deyil.",
      "Heç bir həyat təbliğatın titrəməsindən azad deyil. O vaxta qədər sabahdan narahat olmaq lazım deyil.",
      "Niye SandBoxu secek?",
      "Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir.",
      "Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir.",
      "Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir.",
      "Hətta şəbəkəyə giriş qapısının böyük və yumşaq olması gözlənilir. Eflatirə qədər, aktor fringilladan qorxum yoxdur, aslan gülüşündən, qapıdan və qapıdan, vestibüldən və yerdən xəstəyəm. Fusce dapibus, tellus ac curso commodo, tortor mauris condimentum nibh, belə ki, maya kütləsi yalnız amet risklidir. Heç kimə gülmək lazım deyil.",
      "Vaxtini ve Pulunu qoru",
      "Müştəri çox ağıllıdırsa, istədiyi nəticəni əldə edə bilər. Çox vaxt var, amma təriflərin vaxtı, lütfən, tenderlər boşalır və s.",
      "Müştəri çox ağıllıdır.",
      "Müştəri çox ağıllıdır.",
      "Müştəri çox ağıllıdır.",
      "Müştəri çox ağıllıdır.",
      "Müştəri çox ağıllıdır.",
      "Müştəri çox ağıllıdır.",
      "Salam, piylərdən qurtulmaq çox çətindir. Çünki onlar.",
      "Salam, piylərdən qurtulmaq çox çətindir. Çünki onlar.",
      "Salam, piylərdən qurtulmaq çox çətindir. Çünki onlar.",
      "Salam, piylərdən qurtulmaq çox çətindir. Çünki onlar.",
      "Burada altbilgi məzmununuzu təşkil etmək üçün sətir və sütunlardan istifadə edə bilərsiniz. Müştərinin adipisinq prosesinə diqqət yetirməsi çox vacibdir",
    ],
    fourthParg: [
      "Kreativlik",
      "Celd Hell",
      "Innovativ",
      "Ən yüksək səviyyəli dəstək",
    ],
    fifthParg: [
      "Mezmun Marketinqi",
      "Sosial Istirak",
      "Kimlik və Brendləşmə",
      "Mehsul Dizayni",
      "Yigim Ideayasi",
      "Data Analizi",
      "Mehsul Analizi",
      "internetin özü",
      "Card Basligi",
      "internetin özü",
      "internetin özü",
      "Card Basligi",
      "internetin özü",
    ],
    sixthParg: ["Sirket Adi", "Mehsullar", "Faydali Linkler", "Elaqe"],
    moreLink: [
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
      "Hereketler",
      "Diger Herektler",
      "Diger seyler",
      "Linkler",
    ],
    buttonIn: ["Daha Cox", "Daha Cox", "Basla"],
    comboInfo: [
      "Aenean futbol komandası. Uşaqları bəzəyin.",
      " Aenean futbol komandası. Uşaqları bəzəyin.",
      " Aenean futbol komandası. Uşaqları bəzəyin",
    ],
    footer: ["Hesabin", "Affiliate olun", "Çatdırılma tarifləri", "Komek"],
  },
};

const changeLang = () => {
  if (langBtn.innerHTML === "AZ") {
    data.az.navBar.map((item, index) => {
      navLink[index].innerHTML = item;
    });
    data.az.title.map((item, index) => {
      cammonH[index].innerHTML = item;
    });
    data.az.paragraph.map((item, index) => {
      cammonP[index].innerHTML = item;
    });

    data.az.secondParg.map((item, index) => {
      titleSecond[index].innerHTML = item;
    });
    data.az.thirdParg.map((item, index) => {
      titleThird[index].innerHTML = item;
    });
    data.az.fourthParg.map((item, index) => {
      titleFourth[index].innerHTML = item;
    });
    data.az.fifthParg.map((item, index) => {
      titleFifth[index].innerHTML = item;
    });
    data.az.sixthParg.map((item, index) => {
      titleSixth[index].innerHTML = item;
    });
    data.az.moreLink.map((item, index) => {
      linkTag[index].innerHTML = item;
    });
    data.az.buttonIn.map((item, index) => {
      button[index].innerHTML = item;
    });
    data.az.comboInfo.map((item, index) => {
      combo[index].innerHTML = item;
    });
    data.az.cardLink.map((item, index) => {
      cardLink[index].innerHTML = item;
    });
    data.az.footer.map((item, index) => {
      footerLink[index].innerHTML = item;
    });
    langBtn.innerHTML = "EN";
  } else {
    data.en.navBar.map((item, index) => {
      navLink[index].innerHTML = item;
    });
    data.en.title.map((item, index) => {
      cammonH[index].innerHTML = item;
    });
    data.en.paragraph.map((item, index) => {
      cammonP[index].innerHTML = item;
    });
    data.en.secondParg.map((item, index) => {
      titleSecond[index].innerHTML = item;
    });
    data.en.thirdParg.map((item, index) => {
      titleThird[index].innerHTML = item;
    });
    data.en.fourthParg.map((item, index) => {
      titleFourth[index].innerHTML = item;
    });
    data.en.fifthParg.map((item, index) => {
      titleFifth[index].innerHTML = item;
    });
    data.en.sixthParg.map((item, index) => {
      titleSixth[index].innerHTML = item;
    });
    data.en.moreLink.map((item, index) => {
      linkTag[index].innerHTML = item;
    });
    data.en.buttonIn.map((item, index) => {
      button[index].innerHTML = item;
    });
    data.en.comboInfo.map((item, index) => {
      combo[index].innerHTML = item;
    });
    data.en.cardLink.map((item, index) => {
      cardLink[index].innerHTML = item;
    });
    data.en.footer.map((item, index) => {
      footerLink[index].innerHTML = item;
    });
    langBtn.innerHTML = "AZ";
  }
};

langBtn.addEventListener("click", changeLang);

let darkModeBtn = document.querySelector(".dark-mode");
let header = document.querySelector(".container-item");
let mainDiv = document.querySelector(".body-div");

darkModeBtn.onclick = () => {
  if (darkModeBtn.innerHTML === "Dark") {
    header.attributes[0].value = "second-container-item";
    mainDiv.attributes[0].value = "dark-main-div";
    darkModeBtn.innerHTML = "Light";
    darkModeBtn.style.color = "white";
    darkModeBtn.style.backgroundColor = "black";
    darkModeBtn.style.transition = "0.6s";
  } else {
    header.attributes[0].value = "container-item";
    mainDiv.attributes[0].value = "body-div";
    darkModeBtn.innerHTML = "Dark";
    darkModeBtn.style.color = "black";
    darkModeBtn.style.backgroundColor = "white";
  }
};


