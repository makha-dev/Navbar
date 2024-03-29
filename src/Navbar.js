import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    linksContainerRef.current.style.height = show ? `${linksHeight}px` : '0';
  }, [show])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className='nav-toggle' onClick={handleClick}>
            <FaBars></FaBars>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const {id, url, icon} = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  
  )
}

export default Navbar
