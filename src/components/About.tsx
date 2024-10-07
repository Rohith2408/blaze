import styles from "./About.module.css";
import image from '../images/Section1/gif.gif'
import banner from '../images/banner.gif'

const About=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <img className={styles.banner} src={banner}/>
                <div className={styles.image_wrapper}><img src={image} className={styles.image}/></div>
                <div className={styles.body_wrapper}>
                    <p className={styles.title}>The rise of Blaze</p>
                    <p className={styles.text}>
                    Meet Blaze, a feisty little dinosaur with a flaming tail and a shiny crown perched on his head. Blaze is the king of mischief in the meme-coin world, always cooking up some playful chaos! He's a symbol of wild fun and unpredictable energy, igniting excitement wherever he goes. His flame represents the fiery rise of meme coins, and his crown? A cheeky nod to his ambition of ruling the meme market. Small in size but big in attitude, Blaze is ready to blaze his trail, leaving a trail of laughter and profit in his wake!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About