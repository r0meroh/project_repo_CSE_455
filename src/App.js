import React from 'react';
import { COVIDCards } from './landingComponents';
import styles from './App.module.css';
import {fetchData} from './api';  //for retrieving data for COVID stats cards


class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
       
    }

    
    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <COVIDCards data={data} />
                 </div>
        );
        }
      }


export default App; 