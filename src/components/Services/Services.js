import React, { useEffect, useState } from 'react';
import classes from './Services.module.css';
import ServicesItem from './ServicesItem';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className={classes['servies-section']}>
      <h2 className={classes.title}>My Services</h2>
      <div className={classes.servies}>
        {services.map((s) => (
          <ServicesItem
            key={s.id}
            name={s.name}
            img={s.img}
            price={s.price}
            shortDescription={s.shortDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
