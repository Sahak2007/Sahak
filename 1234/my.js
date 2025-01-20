const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Modal functionality
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", function() {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carouselInner = document.querySelector(".carousel-inner");

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");

prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

nextBtn.addEventListener("click", function() {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
const langContent = {
    hy: {
        header: "WebMasters",
        navHome: "Գլխավոր",
        navAbout: "Մեր մասին",
        navServices: "Ծառայություններ",
        navTestimonials: "Կարծիքներ",
        navContact: "Կապ",
        heroTitle: "Բարի գալուստ WebMasters",
        heroSubtitle: "Մենք ներկայացնում ենք առաջատար տեխնոլոգիաներ և դիզայն՝ ձեր բիզնեսի հաջողության համար",
        btnContact: "Կապվեք մեզ հետ",
        aboutTitle: "Մեր մասին",
        aboutContent: "WebMasters ընկերությունը զբաղվում է վեբ տեխնոլոգիաների զարգացումով և դիզայնով: Մենք ստեղծում ենք կայքեր և ծրագրեր, որոնք սպասարկում են ձեր կարիքները և ոգևորում հաճախորդներին:",
        servicesTitle: "Ծառայություններ",
        service1: "Վեբ-կայքերի մշակում",
        service1Desc: "Մենք ստեղծում ենք ժամանակակից, հարմարավետ և արագ բեռվող կայքեր՝ ձեր բիզնեսի զարգացման համար:",
        service2: "Գրաֆիկ դիզայն",
        service2Desc: "Մենք տրամադրում ենք գեղարվեստական բարձրորակ դիզայնի ծառայություններ՝ տարբեր մեդիա գործիքների համար:",
        service3: "Ծրագրային լուծումներ",
        service3Desc: "Մշակում ենք հարմարեցված ծրագրեր, որոնք համապատասխանում են ձեր բիզնեսի կարիքներին:",
        testimonialsTitle: "Կարծիքներ",
        contactTitle: "Կապ",
        footer: "© 2025 WebMasters | Բոլոր իրավունքները պաշտպանված են"
    },
    en: {
        header: "WebMasters",
        navHome: "Home",
        navAbout: "About Us",
        navServices: "Services",
        navTestimonials: "Testimonials",
        navContact: "Contact",
        heroTitle: "Welcome to WebMasters",
        heroSubtitle: "We present leading technologies and design for your business success",
        btnContact: "Contact Us",
        aboutTitle: "About Us",
        aboutContent: "WebMasters is engaged in the development of web technologies and design. We create websites and applications that cater to your needs and delight customers.",
        servicesTitle: "Services",
        service1: "Web Development",
        service1Desc: "We create modern, user-friendly, and fast-loading websites for your business growth.",
        service2: "Graphic Design",
        service2Desc: "We provide high-quality artistic design services for various media tools.",
        service3: "Software Solutions",
        service3Desc: "We develop custom programs that meet your business needs.",
        testimonialsTitle: "Testimonials",
        contactTitle: "Contact",
        footer: "© 2025 WebMasters | All rights reserved"
    },
    ru: {
        header: "WebMasters",
        navHome: "Главная",
        navAbout: "О нас",
        navServices: "Услуги",
        navTestimonials: "Отзывы",
        navContact: "Контакты",
        heroTitle: "Добро пожаловать в WebMasters",
        heroSubtitle: "Мы представляем ведущие технологии и дизайн для вашего бизнеса",
        btnContact: "Связаться с нами",
        aboutTitle: "О нас",
        aboutContent: "Компания WebMasters занимается разработкой веб-технологий и дизайна. Мы создаем веб-сайты и приложения, которые соответствуют вашим потребностям и радуют клиентов.",
        servicesTitle: "Услуги",
        service1: "Веб-разработка",
        service1Desc: "Мы создаем современные, удобные и быстро загружающиеся веб-сайты для роста вашего бизнеса.",
        service2: "Графический дизайн",
        service2Desc: "Мы предоставляем услуги по высококачественному художественному дизайну для различных медиа-инструментов.",
        service3: "Программные решения",
        service3Desc: "Мы разрабатываем индивидуальные программы, которые соответствуют потребностям вашего бизнеса.",
        testimonialsTitle: "Отзывы",
        contactTitle: "Контакты",
        footer: "© 2025 WebMasters | Все права защищены"
    }
};
function setLanguage(lang) {
    const content = langContent[lang];

    document.querySelector('header h1').textContent = content.header;
    document.querySelector('a[href="#about"]').textContent = content.navAbout;
    document.querySelector('a[href="#services"]').textContent = content.navServices;
    document.querySelector('a[href="#carousel"]').textContent = content.navTestimonials;
    document.querySelector('a[href="#contact"]').textContent = content.navContact;

    // Փոխում ենք Hero բաժնի տեքստը
    document.querySelector('.hero h2').textContent = content.heroTitle;
    document.querySelector('.hero p').textContent = content.heroSubtitle;
    document.querySelector('.btn-primary').textContent = content.btnContact;

    // Փոխում ենք "Մեր մասին" բաժինը
    document.querySelector('#about h3').textContent = content.aboutTitle;
    document.querySelector('#about p').textContent = content.aboutContent;

    // Փոխում ենք "Ծառայություններ" բաժինը
    document.querySelector('#services h3').textContent = content.servicesTitle;
    document.querySelectorAll('.service h4')[0].textContent = content.service1;
    document.querySelectorAll('.service p')[0].textContent = content.service1Desc;
    document.querySelectorAll('.service h4')[1].textContent = content.service2;
    document.querySelectorAll('.service p')[1].textContent = content.service2Desc;
    document.querySelectorAll('.service h4')[2].textContent = content.service3;
    document.querySelectorAll('.service p')[2].textContent = content.service3Desc;


    document.querySelector('#testimonials h3').textContent = content.testimonialsTitle;

    document.querySelector('#contact h3').textContent = content.contactTitle;

    document.querySelector('footer p').textContent = content.footer;
}
document.addEventListener('DOMContentLoaded', function() {
    setLanguage('hy');
});
