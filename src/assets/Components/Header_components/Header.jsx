import React, { useState } from 'react'
import styles from './Header_styles.module.css'
import { FaGraduationCap, FaHome, FaMoon, FaProjectDiagram, FaSun, FaTools } from 'react-icons/fa'


export const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className={styles.header}>
        <nav id='navbar' className={styles.navbar}>
          <ul>
            <li><a href="#"><FaHome /></a></li>
            <li><a href="#"><FaTools/></a></li>
            <li><a href="#"><FaProjectDiagram/></a></li>
            <li><a href="#"><FaGraduationCap/></a></li>
            <li onClick={() => setDarkMode(!darkMode)}>
              <a href="#">
                {darkMode ? <FaSun/> : <FaMoon/>}
              </a>
            </li>
          </ul>
        </nav>
    </header>

  )
}
