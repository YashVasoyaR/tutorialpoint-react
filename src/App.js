import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import OurWork from './Component/OurWork';
import Shop from './Component/Shop';
import CoronaApi from './Component/CoronaApi';
import TodoList from './Component/ToDoList/TodoList';
import Covid from './Component/CovidApi/Covid';
import Pokemon from './Component/Pokemon Api/Pokemon';
import Git from './Component/GitHubUserData/Git';
import Error from './Component/Error/Error';
import Weather from './Component/Weather Api/Weather';
import FoodApi from './Component/FoodSearch/FoodApi';
import Footer from './Component/Footer/Footer'
import Ypay from './Component/Ypay/Ypay';

const App=()=>   {
  return (
    
    <div >
      <Switch basename="/reactprojects">
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/about' component={AboutUs} ></Route>
        <Route exact path='/workout' component={OurWork} ></Route>
        <Route exact path='/shop' component={Shop} ></Route>
        <Route exact path='/corona' component={CoronaApi}></Route>
        <Route exact path='/todo' component={TodoList}></Route>
        <Route exact path='/covid' component={Covid}></Route>
        <Route exact path='/pokemon' component={Pokemon}></Route>
        <Route exact path='/github' component={Git}></Route>
        <Route exact path='/weather' component={Weather}></Route>
        <Route exact path='/food' component={FoodApi}></Route>
        <Route exact path='/ypay' component={Ypay}></Route>
        <Route exact path='/footer' component={Footer}></Route>
        <Route component={Error}></Route>
      </Switch>
      
    </div>
  );
}

export default App;
