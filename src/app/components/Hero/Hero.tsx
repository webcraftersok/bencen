import classes from './hero.module.css'


const Hero = ({ path }: any) => {

    return (
        <div className={classes.heroContainer}>
            <div className={classes.imageContainer}>
                <div className={classes.image} style={{ backgroundImage: `${path}` }}>
                </div>
            </div>
        </div>
    )
}

export default Hero