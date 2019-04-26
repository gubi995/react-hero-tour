import React from 'react';

import image from '../../assets/images/page-not-found.png';
import classes from './PageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={classes.PageNotFound}>
      <h1 className={classes.Caption}>404</h1>
      <h2>Oops! Page not found</h2>
      <img className={classes.Image} src={image} alt="Page not found" />
    </div>
  );
};

export default PageNotFound;
