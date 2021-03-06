import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../Routes/Main";
import TagPost from "../Routes/TagPost";
import UserPost from "../Routes/UserPost";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/tagPost/:hashTag" component={TagPost} />
            <Route path="/userPost/:hashTag/:togglePage/:url" component={UserPost} />
            <Redirect from="*" to="/" />
        </Switch>
    );
};

export default Routes;