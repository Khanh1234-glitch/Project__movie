import {Routes, Route} from 'react-router-dom'
import "antd/dist/antd.css";
import { GlobalStyles } from './GlobalStyle';
import Home from './Pages/Home/Home';
import MainTemplate from './Templates/MainTemplate';
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<MainTemplate/>}  >
              <Route index element={<Home/>}/>
            </Route>  
        </Routes> 
        <GlobalStyles/>
    </>
  );
}

export default App;
