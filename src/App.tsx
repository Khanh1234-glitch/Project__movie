import {Routes, Route} from 'react-router-dom'

import { GlobalStyles } from './GlobalStyle';
import Home from './Pages/Home/Home';
import MainTemplate from './Templates/MainTemplate';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<MainTemplate/>}  >
              <Route index element={<Home/>}/>
              {/* <Route path="/asd" element={<p>ádadasd</p>}/> */}
            </Route>  
        </Routes> 
        <GlobalStyles/>
    </>
  );
}

export default App;
