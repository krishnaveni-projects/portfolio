import React from 'react';
import ProfileImg from '../../assets/profile-img.png';
import ShapeOne from '../../assets/shape-1.png';
import ShapeTwo from '../../assets/shape-2.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './home.css';
const Home = () => {
  return( 
  <section className='home' id='home'>
    <div className="home__wrapper">
    <div className='home__container container'>
     <p className='home__subtitle text-cs'>
        Hello, <span>My Name Is</span>
        </p>   
        <h1 className='home__title'><span>KRISHNA</span> VENI <br/>M
        </h1>
        <p className='home__job'>
          <span className="text-cs">I Am</span> <b>Java Full Stack Developer</b>
        </p>
        <div className='home__img-wrapper'>
          <div className='home__banner'>
            <img src={ProfileImg} alt="" className='home__profile'/>
          </div>
          <p className="home__data home__data-one">
            <span className="text-lg">
              2025  
              {/* <b> </b> */}
            </span>
            <span className="text-sm text-cs">
              Passed <span>Out</span>
            </span>
          </p>
          <p className="home__data home__data-two">
            <span className="text-lg">
              6 
            </span>
            <span className="text-sm text-cs">
              Completed <span>Projects</span>
            </span>
          </p>
          <img src={ShapeOne} alt="" className="shape shape__1" />
          <img src={ShapeTwo} alt="" className="shape shape__2" />
          <img src={ShapeTwo} alt="" className="shape shape__3" />
        </div>
        <p className='home__text'>
          From Sivagangai, Tamil Nadu, with a strong passion for creating responsive, user-friendly web interfaces using modern technologies
        </p>
        <div className='home__socials'>
          <a href="https://www.linkedin.com/in/krishna-veni-m-6b17a6264" 
            className='home__social-link'
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/krishnaveni-projects" 
            className='home__social-link'
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className='home__btns'>
          <a href="/KrishnaVeni_M.pdf" className='btn text-cs' download>
            Download CV
            </a>
          <a href="#skills" className='hero__link text-cs'>
            My Skills
            </a>
        </div>
    </div>
    <div className="section__deco deco__left">
      <img src={ShapeOne} alt="" className='shape' />
    </div>
    </div>
    <div className="section__bg-wrapper">
      <span className="bg__title">Java Full Stack Developer</span>
    </div>
  </section>
  );
};
export default Home;