import React from 'react'
//import { pageLinks } from '../data'

const PageLinks = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  )
}

export default PageLinks
