import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { SpotifyUserProvider } from "./context/SpotifyUserContext";
import MainLayout from "./components/MainLayout";
import { LoginPage, SearchPage, SavedAlbumsPage } from "./pages";
import './App.css';

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function App() {
  return (
    <SpotifyUserProvider>
      <Router>
        <Switch>
          <RouteWrapper exact path="/search" component={SearchPage} layout={MainLayout} />
          <RouteWrapper exact path="/saved-albums" component={SavedAlbumsPage} layout={MainLayout} />
          <RouteWrapper path="/" component={LoginPage} layout={MainLayout} />
        </Switch>
      </Router>
    </SpotifyUserProvider>
  );
}

export default App;
