import React from 'react';
import Card from './Card';
import './resume.css';
import ShapeOne from '../../assets/shape-1.png';

const Resume = () => {
   const cv = [
  {
    id: 1,
    title: 'B.E. Computer Science and Engineering',
    subtitle: 'KLN College of Engineering, Sivaganga',
    date: '2021 - 2025',
    description:
      'Studying core subjects including Data Structures, Algorithms, Web Development and AI/ML with a CGPA of 8.0.',
    category: 'education',
  },
  {
    id: 2,
    title: 'Higher Secondary',
    subtitle: 'Oxford Matrix Hr. Sec. School, Sivaganga',
    date: '2020- 2021',
    description:
    'Completed Higher Secondary with focus on Mathematics, Physics, Computer Science and secured 83%.',
    category: 'education',
  },
{
    id: 3,
    title: 'Full Stack Java Developer Training',
    subtitle: 'FITA Academy',
    date: '2025',
    description:
      'Covered Java, Spring Boot, MySQL, JSP, Servlets, REST APIs, HTML5, CSS3, JavaScript, React.js and Bootstrap.',
    category: 'certifications/training',
  },
{
    id: 4,
    title: 'AWS Cloud Foundation',
    subtitle: 'ICT Academy',
    date: '2024',
    description:
      'Completed AWS Cloud Foundation course, gaining knowledge in cloud services, deployment and infrastructure basics.',
    category: 'certifications/training',
  },
];
  return (
    <section className="resume section" id='resume'>
    <h2 className="section__title text-cs">Resume 
   </h2>
   <p className="section__subtitle">
    My <span>Story</span>
   </p>
   <div className="resume__container container grid">
    <div className="resume__group">
      <h3 className="resume__heading">Education</h3>
      <div className="resume__items">
        {cv.map((val, id) => {
          if(val.category === 'education'){
            return(
                <Card 
                  key={id} 
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description} 
                /> 
                  );  
          }
        })}
      </div>
    </div>
      <div className="resume__group">
      <h3 className="resume__heading">Certifications / Training</h3>
      <div className="resume__items">
        {cv.map((val, id) => {
          if(val.category === 'certifications/training'){
            return(
                <Card 
                  key={id} 
                  title={val.title}
                  subtitle={val.subtitle}
                  date={val.date}
                  description={val.description} 
                /> 
                  );  
          }
        })}
      </div>
    </div>
   </div>
    <div className="section__deco deco__right">
         <img src={ShapeOne} alt="" className='shape' />
       </div>
       <div className="section__bg-wrapper">
      <span className="bg__title">History</span>
    </div>
    </section>
  );
};

export default Resume