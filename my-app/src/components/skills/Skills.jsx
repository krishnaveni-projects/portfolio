import React from 'react';
// import { skills } from '../../Data.jsx';
import './skills.css';
import ShapeOne from '../../assets/shape-1.png';
const Skills = () => {
  const skills = [
  {
    id: 1,
    name: 'HTML5',
    percentage: 90,
    description: 'Experienced in writing semantic HTML and structuring content effectively.',
  },
  {
    id: 2,
    name: 'CSS3',
    percentage: 90,
    description: 'Proficient in modern layouts using Flexbox, Grid, and responsive design techniques.',
  },
  {
    id: 3,
    name: 'JavaScript (ES6+)',
    percentage: 80,
    description: 'Strong understanding of ES6+, DOM manipulation, and browser-based logic.',
  },
  {
    id: 4,
    name: 'React.js',
    percentage: 75,
    description: 'Skilled in building component-based SPAs, using hooks, and state management.',
  },
  {
    id: 5,
    name: 'Bootstrap & Tailwind',
    percentage: 75,
    description: 'Efficient in styling with utility-first or component-based frameworks.',
  },
  {
    id: 6,
    name: 'Java (Core & OOP)',
    percentage: 75,
    description: 'Strong grasp of object-oriented programming, data structures, and algorithms.',
  },
  {
    id: 7,
    name: 'Spring Boot',
    percentage: 70,
    description: 'Experienced in building RESTful APIs, working with JPA, and layered architecture.',
  },
  {
    id: 8,
    name: 'MySQL',
    percentage: 75,
    description: 'Proficient in writing SQL queries, joins, indexing, and data modeling.',
  },
  {
    id: 9,
    name: 'JSP & Servlets',
    percentage: 70,
    description: 'Knowledge of server-side rendering and request-response lifecycle in Java.',
  },
  {
    id: 10,
    name: 'REST APIs',
    percentage: 75,
    description: 'Designed and consumed RESTful services using Spring Boot and Postman.',
  },
  {
    id: 11,
    name: 'Git & GitHub',
    percentage: 80,
    description: 'Version control, branching, pull requests, and collaborative workflow.',
  },
  {
    id: 12,
    name: 'VS Code / IntelliJ IDEA',
    percentage: 80,
    description: 'Productive using modern IDEs for frontend and backend development.',
  },
  {
    id: 13,
    name: 'Postman',
    percentage: 75,
    description: 'Hands-on experience in REST API debugging and testing workflows.',
  },
  {
    id: 14,
    name: 'Responsive Web Design',
    percentage: 75,
    description: 'Ensuring consistent UI/UX across devices using media queries.',
  },
];
  return (
   <section className="skills section" id='skills'>
   <h2 className="section__title text-cs">Professional 
    Skills
   </h2>
   <p className="section__subtitle">
    My <span>Talent</span>
   </p>
   <div className="skills__container container grid">
      {skills.map(({ name, percentage, description }, index) => {
        return(
          <div className="skills__item" key={index}>
            <div className="skills__titles">
              <h3 className="skills__name">{name}</h3>
              <span className="skills__number">
                {percentage} <span>%</span>
              </span>
            </div>
            <p className="skills__description">{description}
            </p>
            <div className="skills__bar">
              <span className="skills__percentage" style={{ width: `${percentage}%` }}
              >
                <span></span>        
              </span>
            </div>
          </div>
        );
    })}
   </div>
    <div className="section__deco deco__right">
         <img src={ShapeOne} alt="" className='shape' />
       </div>
       <div className="section__bg-wrapper">
      <span className="bg__title">Skills</span>
    </div>
   </section>
  );
};

export default Skills;