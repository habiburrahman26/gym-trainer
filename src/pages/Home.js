import React from 'react';
import classes from './Home.module.css';
import background from '../assects/images/banner1.jpg';

const Home = () => {
  return (
    <div>
      <section className={classes.hero}>
        <div>
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co/K79K2wZ/banner2.jpg")`,objectFit:'cover'
            }}
          >
            Hello World
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
