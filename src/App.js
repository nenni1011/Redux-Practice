import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import { useSelector } from 'react-redux';



function App() {
  const login = useSelector((state) => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      { !login && <Auth /> }
      { login && <UserProfile /> }
      <Counter />
    </Fragment>
    
  );
}

export default App;
