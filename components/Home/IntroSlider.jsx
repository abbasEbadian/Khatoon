import React from 'react'
import styles from '../../styles/Home.module.scss'
import Image from 'next/image'
import {base_imlink} from '../../components/utils'
import Link from 'next/link'

function IntroSlider({config}) {
  return (
    <section className={styles.intro_slider}>
        <div className={styles.intro_slider_1 + " shadow"}>
          {config?.index_main_image &&
            <Link href={config.index_main_image_link || "#"}>
              <a>
                <Image src={base_imlink(config.index_main_image)} objectFit="cover" alt="slide1" layout="fill"/>
              </a>
            </Link> 
          }
        </div>
        <div className={styles.intro_slider_2 + " shadow"}>
          {config?.index_main_image_1 &&
              <Link href={config.index_main_image_1_link || "#"}>
                <a>
                  <Image src={base_imlink(config.index_main_image_1)} objectFit="cover" alt="slide1" layout="fill"/>
                </a>
              </Link> 
            }
        </div>
        <div className={styles.intro_slider_3 + " shadow"}>
          {config?.index_main_image_2 &&
              <Link href={config.index_main_image_2_link|| "#"}>
                <a>
                  <Image src={base_imlink(config.index_main_image_2)} objectFit="cover" alt="slide1" layout="fill"/>
                </a>
              </Link> 
            }
        </div>
    </section>
  )
}

export default IntroSlider