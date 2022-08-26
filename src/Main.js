import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Merches from './Components/MerchComponent/Merches';




function Main() {
  return (
      <div className="App">
      <div className='block'>
      <AllCategories/>
      <Cart/>
      </div>
      <div className='block'>
      <Merches/>
      </div>  
    </div>
  );
}

export default Main;
