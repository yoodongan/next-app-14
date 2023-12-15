"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "../css/NavBar.module.css";



const NavBar = () => {
    const pathName = usePathname();
  return (
    <nav>
        <Link legacyBehavior href="/">
            <a className={pathName === "/" ? styles.active : ""}>Home </a>
        </Link>
        <Link legacyBehavior href="/about">
            <a className={pathName === "/about" ? styles.active : ""}>About</a>
        </Link>
    </nav>
  )
}

export default NavBar