'use client'

import React, { useContext } from 'react';
import classes from './clientCard.module.css';
import { store } from '@/app/context/context';
import { PROJECTS_CARD, INTEGRATEDSERVICES } from '../../utils/constants';
import Image from 'next/image';

export interface IntegratedServices {
    english: {
        category: string;
        data: IntegratedServicesData[];
    };
    spanish: {
        category: string;
        data: IntegratedServicesData[];
    };
}

export interface IntegratedServicesData {
    id: number;
    title: string;
    year: string;
    description: string;
    location: string;
    src: string;
}

const ClientCard = () => {
    const { language }: any = useContext(store)

    const IntegratedServices: IntegratedServices | any = INTEGRATEDSERVICES

    return (
        <div className={classes.clientCardsContainer}>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={`${IntegratedServices.english.data[4].src}`} width={200} height={176} alt={'sevicio'} />
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{IntegratedServices[language].data[4].title}</h1>
                    <p>{IntegratedServices[language].data[4].description}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={`${INTEGRATEDSERVICES.english.data[0].src}`} width={200} height={176} alt={'sevicio'} />
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{IntegratedServices[language].data[0].title}</h1>
                    <p>{IntegratedServices[language].data[0].description}</p>
                </div>
            </div>
            <div className={classes.clientCardContainer}>
                <div className={classes.imageContainer}>
                    <Image className={classes.image} src={`${INTEGRATEDSERVICES.english.data[5].src}`} width={200} height={176} alt={'sevicio'} />
                </div>
                <div className={classes.paragraphContainer}>
                    <h1>{IntegratedServices[language].data[5].title}</h1>
                    <p>{IntegratedServices[language].data[5].description}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientCard