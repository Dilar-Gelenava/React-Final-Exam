import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './components/error-boundary';
import Navbar from './components/navbar';
import MainPage from './pages/main-page';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <Switch>
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
