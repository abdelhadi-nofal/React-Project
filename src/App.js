import React ,{Component} from 'react';
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Contact from './component/Conatct';
import Index from './component/Index';



class App extends Component {

  render(){

    return(
    
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/contact' element= {<Contact/>} />   
          </Routes>
      </BrowserRouter>

        
      
    )
  }
}

export default App;
