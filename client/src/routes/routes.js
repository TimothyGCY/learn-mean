import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/landingPage";
import Login from "../pages/login";
import MainPage from "../pages/YC_Liew/PortFolio";
import LandingKY from "../pages/ChokKahYang/landingKY";
import VinLandingPage from "../pages/ChanVinSheng/VinLandingPage";
import Timothy from "../pages/Timothy/timothy";
import TeamPlayer from "../pages/Timothy/teamPlayer";
import DotaPlayer from "../pages/Timothy/dotaPlayer";
import Dota2 from "../pages/YC_Liew/Dota2";
import itemDetails from "../pages/YC_Liew/ItemDetials";
import DotaLandingPage from "../pages/DotaAPI/DotaLandingPage";
import HeroProfile from "../pages/DotaAPI/HeroProfile";
import MatchDetail from "../pages/ChokKahYang/MatchDetail";
import ListExpense from "../pages/Timothy/components/list-expense.component";
import CreateExpense from "../pages/Timothy/components/create-expense.component";
import EditExpense from "../pages/Timothy/components/edit-expense.component";
import CreateUser from "../pages/Timothy/components/create-user.component";
import NewsFeed from "../pages/Timothy/components/newsfeed.component";

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/Timothy" component={Timothy} />
          <Route exact path="/LiewYihChan" component={MainPage} />
          <Route exact path="/ChanVinSheng" component={VinLandingPage} />
          <Route exact path="/kychok/" component={LandingKY} />
          <Route exact path="/team/:id/players" component={TeamPlayer} />
          <Route exact path="/players/:id" component={DotaPlayer} />
          <Route exact path="/Dota2" component={Dota2} />
          <Route path="/Dota2/:id" component={itemDetails} />
          <Route exact path="/DotaAPI" component={DotaLandingPage} />
          <Route
            exact
            path="/DotaAPI/HeroProfile/:id"
            component={HeroProfile}
          />
          <Route exact path="/Dota2/:id" component={itemDetails} />
          <Route exact path="/DotaAPI/match/:id" component={MatchDetail} />
          <Route path="/feed" component={NewsFeed} />
          <Route path="/budget/create" component={CreateExpense} />
          <Route path="/budget/edit/:id" component={EditExpense} />
          <Route path="/budget" component={ListExpense} />
          <Route path="/user" component={CreateUser} />
        </Switch>
      </BrowserRouter>
    );
  }
}
