import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/main-page';
import AuthPage from './pages/auth-page';
import ProfilePage from './pages/profile-page/ProfilePage';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/auth">
              <AuthPage />
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
