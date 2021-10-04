import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import SpotPage from "./components/Spots";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import IndividualSpotPage from "./components/Spots/individualSpot";
import CreateASpot from "./components/Spots/createSpot";
import UpdateSpot from "./components/Spots/editSpot";
import CreateImage from "./components/Spots/createImage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/spots">
            <SpotPage />
          </Route>
          <Route exact path={'/spots/:spotId(\\d+)'}>
            <IndividualSpotPage />
          </Route>
          <Route path='/spots/create'>
            <CreateASpot />
          </Route>
          <Route path={'/spots/:spotId(\\d+)/edit'}>
            <UpdateSpot />
          </Route>
          <Route path={'/spots/:id(\\d+)/images'}>
            <CreateImage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;