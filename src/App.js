import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const App = () => (
  <div className="bg-container">
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/about" component={About} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
