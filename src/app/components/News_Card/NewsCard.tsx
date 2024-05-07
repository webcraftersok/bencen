import React, { useContext } from 'react'
import classes from './newsCard.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { store } from '@/app/context/context';
import { NEWS, NEWS_BUTTON } from '../../utils/constants'

const NewsCard = (): JSX.Element => {
    const { language }: any = useContext(store)

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ]
    };

    return (
        <>
            <div className={classes.cardsContainer}>
                <div className={classes.sliderContainer}>
                    <Slider {...sliderSettings}>
                        <div className={classes.cardContainer}>
                            <div></div>
                            <div>
                                <h2>{NEWS[language][1]}</h2>
                                <p>{NEWS[language][2]}</p>
                            </div>
                            <button>{NEWS_BUTTON[language]}</button>
                        </div>
                        <div className={classes.cardContainer}>
                            <div></div>
                            <div>
                                <h2>{NEWS[language][1]}</h2>
                                <p>{NEWS[language][2]}</p>
                            </div>
                            <button>{NEWS_BUTTON[language]}</button>
                        </div>
                        <div className={classes.cardContainer}>
                            <div></div>
                            <div>
                                <h2>{NEWS[language][1]}</h2>
                                <p>{NEWS[language][2]}</p>
                            </div>
                            <button>{NEWS_BUTTON[language]}</button>
                        </div>
                        <div className={classes.cardContainer}>
                            <div></div>
                            <div>
                                <h2>{NEWS[language][1]}</h2>
                                <p>{NEWS[language][2]}</p>
                            </div>
                            <button>{NEWS_BUTTON[language]}</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}



export default NewsCard;

