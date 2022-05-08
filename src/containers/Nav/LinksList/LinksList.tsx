import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { Routes } from '../../../App';
import CloseIcon from '@material-ui/icons/Close';
import { Hidden } from '@material-ui/core';
import useStyles from './linksList.makeStyles';
// import theme from '../../../styles/themes/theme';
import classNames from 'classnames';

interface LinksListProps {
  isLoggedIn: boolean;
  isAdmin: boolean;
  handleLogout: () => void;
  closeDrawer?: () => void;
}

const LinksList: React.FC<LinksListProps> = ({
  isLoggedIn,
  isAdmin,
  handleLogout,
  closeDrawer,
}) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  return (
    <List className={classes.list}>
      <Hidden smUp>
        <ListItem className={classes.item}>
          <CloseIcon onClick={closeDrawer} />
        </ListItem>
      </Hidden>

      <ListItem className={classes.item}>
        <Link
          to={Routes.products}
          className={classNames(classes.itemLink, {
            [classes.active]: location === Routes.products,
          })}
        >
          Products
        </Link>
      </ListItem>

      {isLoggedIn && isAdmin ? (
        <ListItem className={classes.item}>
          <Link
            to={Routes.admin}
            className={classNames(classes.itemLink, {
              [classes.active]: location === Routes.admin,
            })}
          >
            Admin
          </Link>
        </ListItem>
      ) : null}
      {isLoggedIn ? (
        <ListItem className={classes.item}>
          <Link
            to={Routes.cart}
            className={classNames(classes.itemLink, {
              [classes.active]: location === Routes.cart,
            })}
          >
            Cart
          </Link>
        </ListItem>
      ) : null}
      {isLoggedIn ? (
        <ListItem className={classes.item}>
          <a href="#" className={classes.itemLink} onClick={handleLogout}>
            Log out
          </a>
        </ListItem>
      ) : null}
    </List>
  );
};

export default LinksList;
