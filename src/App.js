import React from 'react';
import { Cards, Chart } from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
       
    }
    handleCountryChange = async (country) => {    //allows for changes to the 'state' of the countries

    }
    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
          <CountrySelector handleCountryChange={this.componentWillUnmounthandleCountryChange}/> 
               
                  <Chart/>   
            </div> 
        )
    }
}


export default App; 
