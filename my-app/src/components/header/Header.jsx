import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {BsSun, BsMoon } from 'react-icons/bs';
import './header.css';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import ShapeOne from '../../assets/shape-1.png';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
};
const Header = () => {
      const links = [
    { name: 'Home', path: 'home' },
    { name: 'Skills', path: 'skills' },
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'Resume', path: 'resume' },
    { name: 'Contact', path: 'contact' },
  ];
  const[showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  const changeNav = () =>{
    if(window.scrollY >= 80){
      setScrollNav(true)
    }
    else{
      setScrollNav(false)
    }
  };
  const toggleTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    }
    else{
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('no-scroll', showMenu);
  }, [showMenu]);
  useEffect(() => {
    document.documentElement.className= theme;
    localStorage.setItem('theme',theme);
  }, [theme]);
  return (
    <header className={`header ${scrollNav ? 'scroll-header' : ''}`}>
        <nav className="nav">
            <Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
                Krishna Veni
            </Link>
            <div className={`${showMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
                <div className="nav__data">
                        <ul className="nav__list">
                    {links.map(({ name, path }, index) => {
                        return(
                            <li className="nav__item" key={index}>
                                <Link 
                                className='nav__link text-cs'
                                to={path}
                                spy={true}
                                hashSpy={true}
                                smooth={true}
                                offset={-150}
                                duration={500}
                                onClick={() => setShowMenu(!showMenu)}
                                >
                                {name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                    <div className='header__socials'>
                          <a href="https://www.linkedin.com/in/krishna-veni-m-6b17a6264" 
                            className='header__social-link'
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                          <a href="https://github.com/krishnaveni-projects" 
                            className='header__social-link'
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </div>
                </div>
                 <div className="section__deco deco__left header__deco">
              <img src={ShapeOne} alt="" className='shape' />
            </div>
            </div>
            <div className="nav__btns">
              <div className="theme__toggler" onClick={toggleTheme}>
                {theme === 'light-theme' ? <BsMoon/> : <BsSun/>}
              </div>
              <div 
              className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} 
              onClick={() => setShowMenu(!showMenu)}
              >
                <span></span>
                <span></span>
              </div>
            </div>
        </nav>
    </header>
  );
};

export default Header;