import React from 'react'
import { useState } from 'react';
import styles from "../styles/navbar.module.css"

const Navbar = (props) => {

    const [active, setActive] = useState("");

    return (
        <>
            <div
                className={
                    (props.scroll ? "nav-header scrolled " : "nav-header ") + active
                }
            >

                <div className={styles.navbar}>
                    <ul>
                        <li>About</li>
                        <li>Find Talent</li>
                        <li>Find Work</li>
                        <li>Blogs</li>
                        <li className={styles.active}>Let's Connect</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar