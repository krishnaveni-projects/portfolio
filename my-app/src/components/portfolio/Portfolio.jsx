import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import Project1 from '../../assets/project1.jpeg';
import Project2 from '../../assets/project2.jpeg';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.jpeg';
import Project5 from '../../assets/project5.png';
import Project6 from '../../assets/project6.png';
import Project7 from '../../assets/project7.jpeg';
import Project8 from '../../assets/project8.jpeg';
import ShapeOne from '../../assets/shape-1.png';
import './portfolio.css';
import { AnimatePresence } from 'framer-motion';

     const projects = [
  {
    id: 1,
    img: Project1,
    category: 'Web Development',
    title: 'MEDiVIRTUO Telemedicine Website',
    description:
      'Built responsive telemedicine platform using HTML, CSS and JavaScript with form validation and dynamic rendering.',
  },
  {
    id: 2,
    img: Project2,
    category: 'Machine Learning',
    title: 'Real - Time Human Activity Recognition for Elderly Care in Smart Home',
    description:
      'Smart home care system using Python, Flask, MySQL, KNN, REST APIs, Twilio, Matplotlib charts.',
  },
  {
    id: 3,
    img: Project3,
    category: 'AI & Accessibility',
    title: 'Multimodal Human - Computer Interaction System',
    description:
      'Contactless interface using OpenCV, voice, gesture control, blink detection and virtual keyboard input.',
  },
  {
  id: 4,
  img: Project4, 
  category: 'Web Development',
  title: 'Modern Furniture Webpage',
  description:
    'Designed a responsive furniture website using HTML, CSS and JavaScript with interactive layout and smooth UI.',
},
{
  id: 5,
  img: Project5,
  category: 'Frontend',
  title: 'Interactive Portfolio Website',
  description:
    'Developed a responsive portfolio website using HTML5, CSS3, JavaScript and React.js. Includes smooth scrolling, reusable components and interactive contact form.',
},
{
  id: 6,
  img: Project6, 
  category: 'Spring Boot',
  title: 'Student Registration System',
  description:
    'Backend app using Spring Boot, MySQL, REST APIs and HTML form with CRUD operations, tested via Postman.',
},
{
  id: 7,
  img: Project7, 
  category: 'Full Stack',
  title: 'Online Food Delivery Website',
  description:
    'Developed a full-stack food delivery website with authentication, menu, cart, orders, Razorpay payments, and MySQL-based order management.',
},
{
  id: 8,
  img: Project8, 
  category: 'Frontend',
  title: 'Netflix Clone',
  description:
    'Created a responsive Netflix clone using React, Tailwind CSS, HTML, and JavaScript with movie listings, search, and category-based navigation.',
},
];
const allNavList = [
    'all',
    ... new Set(projects.map((project) => project.category))
];
console.log(allNavList);
const Portfolio = () => {
 // Get all unique categories + "All"
 const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);

  // Filtering logic
 const filterItems = (category) => {
    if(category === 'all'){
        setMenuItems(projects);
        return;
    }
    const newProjectItems = projects.filter(
        (item) => item.category === category);
    setMenuItems(newProjectItems);
 }
  return (
    <section className='portfolio section' id='work'>
        <h2 className="section__title text-cs">Portfolio 
   </h2>
   <p className="section__subtitle">
    My <span>Projects</span>
   </p>
   <List list={navList} filterItems={filterItems} />
   <div className="portfolio__container container grid">
    <AnimatePresence initial={false}>
    <Items projectItems={projectItems} />
    </AnimatePresence>
    {/* <Items /> */}
   {/* <Items projects={portfolio} /> */}
   </div>
    <div className="section__deco deco__left">
         <img src={ShapeOne} alt="" className='shape' />
       </div>
       <div className="section__bg-wrapper">
      <span className="bg__title">Portfolio</span>
    </div>
    </section>
  );
};

export default Portfolio;