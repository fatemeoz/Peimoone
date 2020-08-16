import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie';

function PrivateRoute ({component: Component, ...rest}) {
    const [cookies, setCookie] = useCookies('cookie-name')

    return (
      <Route
        {...rest}
        render={(props) => cookies['auth-token'] !== undefined
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
  }

  export default PrivateRoute;