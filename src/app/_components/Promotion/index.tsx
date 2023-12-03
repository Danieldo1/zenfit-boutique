'use client'

import React, { useEffect, useState } from 'react'

import classes from './index.module.scss'

const Promotion = () => {
    const [promotion, setPromotion] = useState({
        daysLeft: 0,
        hoursLeft: 0,
        minutesLeft: 0,
        secondsLeft: 0
    })

    
    useEffect(() => {
        const getEndDate = () => {
            let endDate = localStorage.getItem('endDate');
            if (!endDate || new Date(endDate) <= new Date()) {
                const futureDate = new Date();
                futureDate.setDate(futureDate.getDate() + 5);
                endDate = futureDate.toString();
                localStorage.setItem('endDate', endDate);
            }
            return new Date(endDate);
        };
    
        let endDate = getEndDate();
    
        const interval = setInterval(() => {
            const now = new Date();
            let diff = endDate.getTime() - now.getTime();
    
            if (diff <= 0) {
                // Reset the end date since the countdown has ended
                endDate = getEndDate(); // Get or reset the end date
                diff = endDate.getTime() - now.getTime();
            }
    
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setPromotion({
                daysLeft: days,
                hoursLeft: hours,
                minutesLeft: minutes,
                secondsLeft: seconds
            });
        }, 1000);
    
        return () => clearInterval(interval);
    }, []);

  return (
    <section className={classes.promotion}>
        <div className={classes.textBox}>
            <h3 className={classes.title}>Weekly Promotion</h3>
            <p>Embark on a Week of Wellness: Discover Unbeatable Deals in Activewear, Supplements, and More with Fit Zone's Exclusive Weekly Promotions - Your Gateway to a Healthier, Happier You!</p>
        
                <ul className={classes.stats}>
                 <StatBox label="Days" value={promotion.daysLeft} />
                 <StatBox label="Hours" value={promotion.hoursLeft} />
                 <StatBox label="Minutes" value={promotion.minutesLeft} />
                 <StatBox label="Seconds" value={promotion.secondsLeft} />
                </ul>
        </div>
    </section>
  )
}

const StatBox = ({label, value}: {label: string, value: number}) => (
    <li className={classes.statBox}>
    <h4>{value}</h4>
    <p>{label}</p>
</li>
)

export default Promotion