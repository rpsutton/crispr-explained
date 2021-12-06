import React from "react";
import "./../styles/global.scss";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import SourcesPage from "./sources";
import "./../util/analytics";
import Footer from "./../components/Footer";

function App(props) {
  return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/sources" component={SourcesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </>
        <Footer
            bg="black"
            textColor="white"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://www.nicepng.com/png/full/271-2714759_temple-university-university-of-tennessee-logo-black.png"
          />
      </Router>
  );
}

export default App;
