import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth'

const Header = () => {
  const login = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  const navBarConditionalElements = 
  <>
  <li>
  <a href='/'>My Products</a>
</li>
<li>
  <a href='/'>My Sales</a>
</li>
</>

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>

          { login && navBarConditionalElements } 
          <li>
          { login && <button onClick = { logoutHandler }>Logout</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
