import React, { useState } from 'react'
import styles from './Header_styles.module.css'
import { FaBrain, FaGraduationCap, FaHome, FaMoon, FaProjectDiagram, FaSun, FaTools } from 'react-icons/fa'
import { FaHouse, FaHouseChimneyCrack } from 'react-icons/fa6'


export const Header = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <header className={`${darkMode ? styles.dark_header : styles.header}`}>
        <nav id='navbar' className={`${darkMode ? styles.dark_navbar : styles.navbar}`}>
          <ul>
            <li><a href="#"><FaHouse/></a></li>
            <li><a href="#"><FaBrain/></a></li>
            <li><a href="#"><FaGraduationCap/></a></li>
            <li><a href="#"><FaProjectDiagram/></a></li>
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
