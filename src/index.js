import ReactDOM from 'react-dom'; //Veremos mais pra frente
import Topo from './Componentes/Topo';
import Corpo from './Componentes/Corpo';
import React from 'react';



function App() {
    return (
        <div>
                <Topo />
                <Corpo />
                
        </div>
        
    );
}

ReactDOM.render(<App/>, document.querySelector(".root"));