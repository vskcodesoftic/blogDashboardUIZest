import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PublicRoute = ({children, isLoggedIn, ...rest}) => {
    const isAuthenticated = false

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: false
});

export default connect(mapStateToProps)(PublicRoute);
