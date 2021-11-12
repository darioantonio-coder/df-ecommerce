import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd =(count)=>{
    console.log(`la cantidad es : ${count}`)
    alert(`la cantidad es : ${count}`)    
  }

  return (
    <div>
      <NavBar/> 
      <ItemListContainer/>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
}

export default App;
