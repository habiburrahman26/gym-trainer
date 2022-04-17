import habib from '../assects/images/habib.jpg';
import classes from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <section className={classes['section-about']}>
      <div className={classes.about}>
        <div className={classes['about-image-box']}>
          <img src={habib} alt="" className={classes['about-img']} />
        </div>

        <div className={classes['about-text-box']}>
          <p className={classes['about-name']}>Hi, I'm Habibur Rahman!</p>
          <p className={classes['about-text']}>
            Currently, I am learning Web Development. In my learning path, I
            always try to learn things deeply. Now I am focus on Front-End
            development. In the future, I want to be a Full-stack web developer.{' '}
            <br />
            <br />
            With help of my skills, I want to create those types of web
            applications that can organizations increase their digital presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
