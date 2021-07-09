import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/main-page';
import AuthPage from './pages/auth-page';
import ProfilePage from './pages/profile-page/ProfilePage';
import UsersPage from './pages/users-page/UsersPage';
import SeedsPage from './pages/seeds-page/SeedsPage';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/seeds">
              <SeedsPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
