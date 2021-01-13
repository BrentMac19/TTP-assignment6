import './App.css';
import './style.css'
import ZipForm from"./Components/ZipForm.js"
import CitySearch from "./Components/CitySearch.js"

function App() {

    return (
        <div style={{
          backgroundImage: "url('https://cff2.earth.com/uploads/2017/11/21113836/City-life-is-still-dictated-by-sunrise-and-sunset.jpg')"
        }}>
          <div class="city-container"><CitySearch/></div>
          {/* <div class="zip-conatiner"><ZipForm/></div> */}
        </div>
      
    );
  }


export default App;
