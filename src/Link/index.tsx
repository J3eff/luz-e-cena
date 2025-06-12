import styles from './Link.module.css'
import React from 'react';



const Link = ({ children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
   <a {...rest} className={styles.link}>{children}</a>
  )
}

export default Link