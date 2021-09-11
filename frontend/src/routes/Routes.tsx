import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
