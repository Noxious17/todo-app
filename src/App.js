
import './App.css';
import Navbar from './My Component/Navbar';
import Header from './My Component/Header';
import TodosItem from './My Component/TodosItem';
import Footer from './My Component/Footer';


function App() {
  return (
    
    <>
    <rRouter>
      <Navbar Title ="Todos-List" About ="About us" />
      <Header title="My Todos-List"/>
      <TodosItem/>
      <Footer/>
      </rRouter>
    </>

  );
}

export default App;
