import React from 'react'
import { pageLinks, socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => {
          // const { id, href, text } = pageLink
          return (
            // <li key={id}>
            //   <a href={href} className="footer-link">
            //     {text}
            //   </a>
            // </li>
            <PageLinks
              key={pageLink.id}
              {...pageLink}
              itemClass="footer-link"
            />
          )
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          // const { id, href, icon } = socialLink
          return (
            // <li key={id}>
            //   <a href={href} target="_blank" className="footer-icon">
            //     <i className={icon}></i>
            //   </a>
            // </li>
            <SocialLinks
              key={socialLink.id}
              {...socialLink}
              itemClass="footer-icon"
            />
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer
