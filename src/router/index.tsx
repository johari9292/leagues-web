import React from "react";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import { Login } from "../pages";
import { Register } from "../pages";
import HomeScreen from "../pages/Home/WebsiteHome";
import { AppRouter } from "./components/AppRouter";
import { RootState } from "../interfaces/redux/store";
import { useSelector } from "react-redux";
const ProtectedRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AppRouter />
      </Switch>
    </BrowserRouter>
  );
};

const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

const Router = () => {
  const isAuthenticated = useSelector<RootState>(
    (state) => state.auth.isLoggedIn
  );

  return <>{isAuthenticated ? <ProtectedRouter /> : <AuthRouter />}</>;
};

export default Router;
