import classes from './Blogs.module.css';

const Blogs = () => {
  return (
    <section className={classes.blogs}>
      <div className={classes.blog}>
        <h3 className={classes['blog-title']}>
          Difference between authentication and authorization?
        </h3>
        <p>
          Authentication confirms our identity to grant access to the system. It
          is the process of validating user credentials to gain user
          access.Login system is one of the exapmle of authentication.It is done
          before the authorization process.
          <br />
          Authorization determains whether you are allow to access particular
          resources. It is the process of verifying whether access is allowd or
          not.It determains what user can and cannot access.
        </p>
      </div>
      <div className={classes.blog}>
        <h3 className={classes['blog-title']}>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          Firebase gives us lots of option to do such as authentication with
          email and password, google, facebook and github etc. Also we can
          easily host our site on firebase. Others options to implement
          authentication OneLogin, JumpCloud,Microsoft Azure Active Directory,
          Auth0 and Rippling etc.
        </p>
      </div>
      <div className={classes.blog}>
        <h3 className={classes['blog-title']}>
          What other services does firebase provide other than authentication?
        </h3>
        <p>
          Firebase provide lots of services other than authentication. Theses
          are Realtime Database, Hosting, Cloud Firestore, Cloud Functions,
          Cloud Storage, Google Analytics, Cloud Messaging, Dynamic Links and
          Remote Config
        </p>
      </div>
    </section>
  );
};

export default Blogs;
