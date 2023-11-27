import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage";
import MeetPage from "../components/MeetPage";
import MatchesPage from "../components/MatchesPage";
import ProfilePage from "../components/ProfilePage";


function NavRoutes () {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <BrowserRouter>

          <Route exact path="/">
            <Homepage />
          </Route>


          <Route exact path="/meet">
            <MeetPage />
          </Route>

          <Route exact path="/matches">
            <MatchesPage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>

        </BrowserRouter>
      </div>
  );
}

export default NavRoutes;
