import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

// Components
import Home from './Home';

export default function App() {
      return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
      );
}