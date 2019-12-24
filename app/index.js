import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import DhlDataTable from './components/DhlDataTable'

class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                {/* <LeftMenu /> */}
                <DhlDataTable />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
