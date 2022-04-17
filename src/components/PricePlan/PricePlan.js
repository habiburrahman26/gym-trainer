import React from 'react';
import classes from './PricePlan.module.css';
import PriceCart from './PriceCart';

export const PricePlan = () => {
  return (
    <section className={classes['sectin-price']}>
      <div>
        <h2 className={classes.title}>OUR PRICING PLANS</h2>
        <div className={classes['price-container']}>
          <PriceCart className='daily' name="Daily" price="12" />
          <PriceCart className='weekly' name="Weekly" price="75" />
          <PriceCart className='monthly' name="Monthly" price="250" />
        </div>
      </div>
    </section>
  );
};
