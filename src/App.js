import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

// Components
import Home from './Home';
import Navbar from './Layout/components/Navbar';

export default function App() {
      return (
            <div className="App">
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
      );
}