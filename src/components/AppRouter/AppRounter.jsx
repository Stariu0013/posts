import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes/routes";
import {AuthContext} from "../../context/authContext";
import Loader from "../UI/Loader/Loader";

function AppRouter() {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader />
    }

    return <div>
        {
            isAuth
                ? <Switch>
                    {privateRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    )}
                    <Redirect to='/posts'/>
                </Switch>
                : <Switch>
                    {publicRoutes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    )}
                    <Redirect to='/login'/>
                </Switch>
        }
    </div>
}

export default AppRouter;