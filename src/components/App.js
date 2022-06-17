import {Routes, Route} from 'react-router-dom';
import { Home, NavBar, CreatePost, PostDetail} from './index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/post/:posiId' element={<PostDetail />}/>
        <Route exact path='/create-post' element={<CreatePost />}/>
      </Routes>
    </div>
  );
}

export default App;
