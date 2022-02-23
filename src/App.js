
import NextPage from './nextPage';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import FirstPage from './FirstPage';


function App() {
  

  return (
    <div className="App">
  
      
          <BrowserRouter>
      <Routes>
      <Route  path="/" element={<FirstPage/>}> </Route>
      <Route  path="/NextPage" element={<NextPage/>}> </Route>
      
      </Routes>     
      </BrowserRouter>
    </div>
  
    
  );
}

export default App;
