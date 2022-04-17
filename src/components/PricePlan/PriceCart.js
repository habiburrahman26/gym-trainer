import React from 'react';
import TickIcon from '../UI/TickIcon';
import classes from './PricePlan.module.css';

const PriceCart = ({ name, price,className }) => {
  return (
    <div className={`${classes.prices} ${classes[className]}`}>
      <h3 className={classes['plan-title']}>{name} Package</h3>
      <div className={classes.price}>
        <span className={classes.dolor}>$</span>
        <span className={classes.amount}>{price}</span>
      </div>
      <div className={classes.info}>
        <div>
          <span>
            <TickIcon />
          </span>
          <span>Free Consultation</span>
        </div>
        <div>
          <span>
            <TickIcon />
          </span>
          <span> 2 Hours Training</span>
        </div>
        <div>
          <span>
            <TickIcon />
          </span>
          <span>Full Equipment</span>
        </div>
      </div>
      <div>
        <button className={classes.btn}>Get Started</button>
      </div>
    </div>
  );
};

export default PriceCart;
