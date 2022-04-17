import React from 'react';
import Footer from '../components/Footer/Footer';
import { PricePlan } from '../components/PricePlan/PricePlan';
import Services from '../components/Services/Services';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.container}></div>
        <div className={classes.content}>
          <h1 className={classes.heading}>
            <p>Keep your body</p>
            <p className={classes.color}>fit and strong</p>
          </h1>
          <div>
            <button className={classes['hero-btn']}>More about health</button>
          </div>
        </div>
      </section>
      {/* services section */}
      <Services />
      {/* Price plan section */}
      <PricePlan />
      {/* Footer section */}
      <Footer />
    </>
  );
};

export default Home;
