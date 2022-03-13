import React from 'react'
import Link from "next/link";
import { useState } from "react";
import styles from '../../styles/ContactUsOptions.module.css'
function ContactUsOptions(props) {
    return (
        <div className={styles.BoxContact}>
            <Link href="">
                <a >
                    <div>
                        <h5>{props.title}</h5>
                        <span>{props.details}</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ContactUsOptions