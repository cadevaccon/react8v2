import './App.css';
import Edittask from './Component/ListTask';
import AddTask from './Component/AddTask';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  


  return (
    <div >
      <div className="container">
        <div className="row">
        <div className="col-12" style={{backgroundColor:"#426dc2",
        textAlign:"center",
        fontFamily:"serif",
        fontWeight:"bolder"
      }}>React--Redux</div>
        </div>
        <div className="row">
        <div className="col-12" style={{backgroundColor:"#2b718d",
        textAlign:"center",
        fontFamily:"serif",
        fontWeight:"bolder",
        color:"wheat"
      }}>Task Project</div>
        </div>
        </div>
     <AddTask/>

    <Edittask/>
    </div>
  );
}

export default App;
