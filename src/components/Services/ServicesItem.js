import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Services.module.css';

const ServicesItem = ({id, name, price, img, shortDescription }) => {
  return (
    <div className={classes.service}>
      <img src={img} alt="" className={classes.img} />
      <div className={classes.flex}>
        <p className={classes.name}>{name}</p>
        <p className={classes.price}>${price}</p>
      </div>
      <p className={classes.desc}>{shortDescription}</p>
      <div>
        <Link to={`/checkout/${id}`} className={classes.bookLink}>Book Now</Link>
      </div>
    </div>
  );
};

export default ServicesItem;
