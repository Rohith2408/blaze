import styles from "./Section1.module.css";
import { useEffect, useRef, useState } from "react";
import bg from '../images/Section1/bg.png'
import telegram_icon from '../images/Section1/telegram.png'
import twitter_icon from '../images/Section1/twitter.png'
import dex_icon from '../images/Section1/dex.png'
import coingecko_icon from '../images/Section1/coingecko.png'
// import sunswap_icon from '../images/Section1/sunswap.jpeg'
import dextools_icon from '../images/Section1/dextools.png'
import copy_icon from '../images/Section1/copy.png'
import image from '../images/Section1/image.png'
import banner from '../images/banner.gif'
import insta_icon from '../images/Section1/instagram.png'

const Section1=()=>{

    const socialIcons= useRef([
        { src: telegram_icon, link: "https://t.me/blazethecoin" },
        { src: twitter_icon, link: "https://x.com/Blazethecoin?s=09" },
        { src:dex_icon, link: "https://dexscreener.com/solana/hhlxpejc26jqtxn2tzjeuarkyratv3wez3zgnkzcvahx" },
        { src: dextools_icon, link: "https://www.dextools.io/app/en/solana/pair-explorer/HhLxPejC26JQtxN2TzjEuARkyraTV3wez3ZGnKZcvAHX?t=1728674999549" },
        // { src:coingecko_icon, link: "" },
        // { src:insta_icon, link: "" }
    ]).current
    const [currentbg,setCurrentBg]=useState(0)
    const interval=useRef<any>()
    const ca=useRef("8rvsopG6ZB5Nx8tRxZ5sFunnCRcCZshSTaYzC7zfpump").current

    useEffect(()=>{

    },[currentbg])

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.body}>
                    {/* <img className={styles.banner} src={banner}/> */}
                    <p className={styles.title}>$Blaze</p>
                    <div className={styles.socialWrapper}>
                    {
                        socialIcons.map((icon) => (
                            <a key={icon.src} href={icon.link} target="_blank" rel="noopener noreferrer" >
                                <img
                                    className={styles.socialicons}
                                    loading="lazy"
                                    alt=""
                                    src={icon.src}
                                />
                            </a>
                        ))}
                    </div>
                    <div className={styles.cawrapper}>
                        <p className={styles.caHeading}>CA</p>
                        <p className={styles.ca} >{ca}</p>
                        <button className={styles.copyWrapper} onClick={()=>{alert("CA has been copied");navigator.clipboard.writeText(ca)}}><img className={styles.copyIcon} src={copy_icon}></img></button>
                    </div>
                </div>
                <img className={styles.penguin}/>
            </div>
        </section>
    )
}

export default Section1