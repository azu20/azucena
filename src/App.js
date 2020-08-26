import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Contact from "./components/Card/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Container } from './components/Grid';
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer/Footer";
import NewPortfolio from "./pages/NewPortfolio";
// import HomepageLayout from "./pages/IntroPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// function App() {  
//     return (
//       // <HashRouter >
//       <div>      
//         <Navbar />
//       <Container> 
//         <Switch>

//           <Route exact path="/" component={Home} />
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/portfolio" component={Portfolio} />
//           <Route exact path="/contact" component={Contact} />
//           <Route exact path="/NewPortfolio" component={NewPortfolio} />
//           {/* <Route component={HomepageLayout} /> */}
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>  
//         </Container> 
//         <Footer />       
//       </div>
//     // </HashRouter >
//     );

// }

// export default App;
