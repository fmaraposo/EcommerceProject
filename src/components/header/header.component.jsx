import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT{' '}
          </div>
        ) : (
          <Link className="option" to="/signin">
            {' '}
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {/* If its hidden = true, render nothing. If hidden = false render the component */}
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this function should return an object
  //the property should be the value we pass in the component and the value the value of it.
  //In this case in this function we want to get the state object. The state here is the root reducer
  currentUser: selectCurrentUser(state),
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
