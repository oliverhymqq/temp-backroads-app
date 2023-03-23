import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data.js'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              // <li>
              //   <a href={link.href} className="nav-link">
              //     {link.text}
              //   </a>
              // </li>
              <PageLinks key={link.id} {...link} itemClass="nav-link" />
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            // const { id, href, icon } = link
            return (
              // <li key={id}>
              //   <a href={href} target="_blank" className="nav-icon">
              //     <i className={icon}></i>
              //   </a>
              // </li>
              <SocialLinks key={link.id} {...link} itemClass="nav-icon" />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
