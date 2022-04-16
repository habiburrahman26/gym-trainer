import React from 'react';
import classes from './Services.module.css';

const ServicesItem = ({ name, price, img, shortDescription }) => {
  return (
    <div className={classes.service}>
      <img src={img} alt="" className={classes.img} />
      <div className={classes.flex}>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price}</p>
      </div>
      <p className={classes.desc}>{shortDescription}</p>
      <div>
        <button className={classes.bookBtn}>Book Now</button>
      </div>
    </div>
  );
};

export default ServicesItem;
