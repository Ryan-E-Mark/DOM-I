const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Grabbing nav items 
const services = document.querySelector('nav a:nth-of-type(1)');
const product = document.querySelector('nav a:nth-of-type(2)');
const vision = document.querySelector('nav a:nth-of-type(3)');
const features = document.querySelector('nav a:nth-of-type(4)');
const about = document.querySelector('nav a:nth-of-type(5)');
const contact = document.querySelector('nav a:nth-of-type(6)');

// Updating nav items
services.textContent = siteContent["nav"]["nav-item-1"];
product.textContent = siteContent["nav"]["nav-item-2"];
vision.textContent = siteContent["nav"]["nav-item-3"];
features.textContent = siteContent["nav"]["nav-item-4"];
about.textContent = siteContent["nav"]["nav-item-5"];
contact.textContent = siteContent["nav"]["nav-item-6"];

//img src
const logoImg = document.querySelector('#logo-img');
logoImg.setAttribute('src', siteContent["nav"]["img-src"]);

// Grabbing cta items
const headerTxt = document.querySelector('h1');
const headerBttn = document.querySelector('.cta button');
const ctaImg = document.querySelector('#cta-img');

// Updating cta items
headerTxt.textContent = siteContent["cta"]["h1"];
headerBttn.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Grabbing main content

// const mainH4s = document.querySelectorAll('.main-content h4');
// mainTitlesArray = Array.from(mainH4s);
// console.log(mainTitlesArray);


const featuresTitle = document.querySelector('.top-content h4:nth-of-type(1)');
const featuresTxt = document.querySelector('.top-content p:nth-of-type(1)');
const aboutTitle = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutTxt = document.querySelector('.top-content .text-content:nth-of-type(2) p');

const midImg = document.querySelector('#middle-img');

const servicesTitle = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesTxt = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productTxt = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionTxt = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

// Updating main content
featuresTitle.textContent = siteContent["main-content"]["features-h4"];
featuresTxt.textContent = siteContent["main-content"]["features-content"];
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
aboutTxt.textContent = siteContent["main-content"]["about-content"];

midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

servicesTitle.textContent = siteContent["main-content"]["services-h4"];
servicesTxt.textContent = siteContent["main-content"]["services-content"];
productTitle.textContent = siteContent["main-content"]["product-h4"];
productTxt.textContent = siteContent["main-content"]["product-content"];
visionTitle.textContent = siteContent["main-content"]["vision-h4"];
visionTxt.textContent = siteContent["main-content"]["vision-content"];

// Grabbing contact items
const contactTitle = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

// Updating contact items
contactTitle.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

// Grabbing footer items
const copyRight = document.querySelector('footer p');

// Updating footer items
copyRight.textContent = siteContent["footer"]["copyright"];

// Changing nav text to green
const nav = document.querySelectorAll('nav a');
nav.forEach(item => item.style.color = "green");

// Adding two items to nav
const careers = contact.cloneNode(true);
careers.textContent = 'Careers';
document.querySelector('nav').appendChild(careers);

const partners = contact.cloneNode(true);
partners.textContent = 'Partners';
document.querySelector('nav').prepend(partners);