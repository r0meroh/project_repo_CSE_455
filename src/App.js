import React from 'react';
import { COVIDCards } from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
       
    }
  /*  handleCountryChange = async (country) => {    //allows for changes to the 'state' of the countries */       //no longer needed

    }
    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
//           <CountrySelector handleCountryChange={this.componentWillUnmounthandleCountryChange}/> 
               
//                 <Chart/>      //no longer needed (country drop-down menu and global chart)
             </div>
        )
    }
}


export default App; 
