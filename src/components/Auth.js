import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
  const login = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler} >
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
