import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import EditPostForm from './features/posts/EditPostForm'

import SinglePostPage from './features/posts/SinglePostPage'
import Home from './pages/Home'

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default AppRoutes
