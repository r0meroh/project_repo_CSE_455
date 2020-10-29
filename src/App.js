import React from 'react';
import  COVIDCards  from './landingComponents/Cards/COVIDCards';
import styles from './App.module.css';
import {fetchData} from './api';  //for retrieving data for COVID stats cards
import EthnicityPieChart from './nivoComponents/PieChart/EthnicityPieChart';


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

             <div style={{ height: 400 }}>
            <EthnicityPieChart />
          </div> 
                 
                 </div>
        );
        }
      }


export default App; 