import React from 'react';
import classes from './PricePlan.module.css';
import TickIcon from '../UI/TickIcon';

export const PricePlan = () => {
  return (
    <section className={classes['sectin-price']}>
      <div>
        <h2 className={classes.title}>OUR PRICING PLANS</h2>
        <div className={classes['price-container']}>
          <div className={`${classes.prices} ${classes.daily}`}>
            <h3 className={classes['plan-title']}>Daily Package</h3>
            <div className={classes.price}>
              <span className={classes.dolor}>$</span>
              <span className={classes.amount}>12</span>
            </div>
            <div className={classes.info}>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
            </div>
            <div>
              <button className={classes.btn}>Get Started</button>
            </div>
          </div>
          <div className={`${classes.prices} ${classes.weekly}`}>
            <h3 className={classes['plan-title']}>Daily Package</h3>
            <div className={classes.price}>
              <span className={classes.dolor}>$</span>
              <span className={classes.amount}>12</span>
            </div>
            <div className={classes.info}>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
            </div>
            <div>
              <button className={classes.btn}>Get Started</button>
            </div>
          </div>

          <div className={`${classes.prices} ${classes.monthly}`}>
            <h3 className={classes['plan-title']}>Daily Package</h3>
            <div className={classes.price}>
              <span className={classes.dolor}>$</span>
              <span className={classes.amount}>12</span>
            </div>
            <div className={classes.info}>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
              <p>
                <span>
                  <TickIcon />
                </span>{' '}
                <span>Free Consultation</span>
              </p>
            </div>
            <div>
              <button className={classes.btn}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
