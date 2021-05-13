import Navbar from "./Components/Navbar";
import Projects from "./container/Projects";
import "./style/index.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./container/Home";
import Contact from "./container/Contact";
import NotFound from "./container/NotFound";
import Skill from "./container/Skill";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Navbar />
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/serylPortefolio/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/skill" component={Skill} />
          <Route path="/" component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
