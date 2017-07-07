var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.HashRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Header = require('./Header/Header');
var Footer = require('./Footer/Footer');
var Home = require('./Home');
var About = require('./About');
var Readings = require('./Readings');
var Books = require('./Books');
var Words = require('./Words');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='app'>
                    <Header />
                    <main role="main" className="main">
                      <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/about' exact component={About} />
                          <Route path='/books' component={Books} />
                          <Route path='/readings' component={Readings} />
                          <Route path='/words' component={Words} />
                          <Route render={function(){
                              return <section><div className="container"><div className="row"><div className='col-md-12'><h1 className='center'>{'Oops'}</h1><p>{'Sorry, this page does not exist.'}</p></div></div></div></section>;
                          }} />
                      </Switch>
                      <Footer />
                    </main>
                </div>
            </Router>
        )
    }
}

module.exports = App;