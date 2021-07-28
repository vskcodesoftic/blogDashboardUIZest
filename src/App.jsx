import React, {useEffect} from 'react';
import { Router, Route ,Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../src/store/_helpers';
import { alertActions } from '../src/store/_actions/alert.actions';
import { PrivateRoute } from './components/_components';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';

import BlogLayout from 'layouts/Blog.jsx';

import Blog from 'views/blog/Dashboard/Blog.jsx';

import indexRoutes from 'routes/index.jsx';
import PublicRoute from './routes/PublicRoute';

const  App = (props) => {
 
    
        const { alert } = props;
        return (
              <>
                   {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                    
                            
                          <Switch>
                               <Route  exact path ="/login">
                                   <LoginPage />
                               </Route>
                              { indexRoutes.map((prop,key) => {
                                                      return ( 

                                <PrivateRoute 
                                path={prop.path}
                                key={key}
                                component={prop.component}
                                />
                                );
                            })
                        } 
                    
                         </Switch>
                 
                        </Router>
          </>
        );
    
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App);
