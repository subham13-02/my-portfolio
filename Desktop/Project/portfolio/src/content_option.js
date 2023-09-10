import ShoppingApp from './assets/images/LandingPages/ShoppingApp.jpg'
import BlinkIt from './assets/images/LandingPages/BlinkIt.jpg'
import BookStore from './assets/images/LandingPages/BookStore.jpg'
import CRUD from './assets/images/LandingPages/crud.jpg'

const logotext = "Subham's Portfolio";
const meta = {
    title: "Subham's Portfolio",
    description: "I’m Subham Sahu data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Subham Sahu",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "Looking for Job opportunities",
    },
    description:"Eager software engineering student with a robust understanding of coding principles and a genuine enthusiasm for developing dynamic solutions. Aiming to secure an entry-level position to contribute my skills to creating efficientand user-centric software applications.",

    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a recent B.Tech graduate with a specialization in Electronics & Telecommunication Engineering, and I'm enthusiastic about pursuing a career as a Frontend Developer. I've cultivated a strong skill set in web development, including proficiency in HTML, CSS, JavaScript, and React, during my academic journey. I've also gained hands-on experience through internships and personal projects, where I've contributed to creating responsive and visually appealing user interfaces. As a passionate and dedicated individual, I'm now actively seeking opportunities to apply my frontend development skills, collaborate on exciting projects, and contribute to crafting engaging digital experiences."};
// const worktimeline = [
//     {
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
//     },
// ];

const skills = [
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Java",
        value: 80,
    },
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "Python",
        value: 60,
    },
];

// const services = [
//     {
//         title: "UI & UX Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const dataportfolio = [{
        img: ShoppingApp,
        description: "E-commerce web app: Simplifies online shopping with product listings, secure payments and personalized recommendations for buyers and sellers.",
        link: "https://subham13-02.github.io/Shopping-Cart/",
    },
    {
        img: BlinkIt,
        description: "A Blinkit clone project using HTML and CSS recreates a simple web page with animated text and images.",
        link: "https://subham13-02.github.io/Blikit-clone/",
    },
    {
        img: BookStore,
        description: "A bookstore project combines HTML, CSS, and JavaScript to create a web-based platform for browsing and Reading books online.",
        link: "https://subham13-02.github.io/book-store/",
    },
    {
        img: CRUD,
        description: "A CRUD student data management project using HTML, CSS and JavaScript replicates a basic student database interface for data manipulation.",
        link: "https://subham13-02.github.io/Student-Management-CRUD/",
    }
];

const contactConfig = {
    YOUR_EMAIL: "sahu21019@gail.com",
    YOUR_FONE: "+91-7735 561 901",
    description: "",  
    YOUR_SERVICE_ID: "service_e28uez6",
    YOUR_TEMPLATE_ID: "template_pe04t32",
    YOUR_USER_ID: "VLcfXzzHGbs3dNLWm",
};

const socialprofils = {
    github: "https://github.com/subham13-02",
    instagram: "https://www.instagram.com/_shubham._.13/",
    linkedin: "https://www.linkedin.com/in/subham-sahu-96258b231",
};
export {
    meta,
    dataabout,
    dataportfolio,
    // worktimeline,
    skills,
    // services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};