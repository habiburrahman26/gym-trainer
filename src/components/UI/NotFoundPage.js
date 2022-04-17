import notFound from '../../assects/images/notFound.jpg';
import classes from './NotFound.module.css'

const NotFoundPage = () => {
  return (
    <div className={classes['img-box']}>
      <img src={notFound} alt="" className={classes.img}/>
    </div>
  );
};

export default NotFoundPage;
