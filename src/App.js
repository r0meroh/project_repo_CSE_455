import React from 'react';
//import COVIDCards from './landingComponents/Cards/COVIDCards';
import styles from './App.module.css';
//import { useSelector } from 'react-redux';
//import { fetchData } from './reactapi';  //for retrieving data for COVID stats cards
import EthnicityPieChart from './nivoComponents/PieChart/EthnicityPieChart';

// class App extends React.Component {
//     state = {
//         data: {},
//     }


function App() {
    return (
        <div className={styles.container}>
            {/* <COVIDCards data={data} /> */}
            <div style={{ height: 400 }}>
                <EthnicityPieChart />
            </div>
        </div>
    );
}



// async componentDidMount() {
//     const fetchedData = await fetchData();

//     this.setState({ data: fetchedData });

// }

// class App extends React.Component {
//     state = {
//         data: {},
//     }
//     render() {
//         const { data } = this.state;
//         return (
//             <div className={styles.container}>
//                 {/* <COVIDCards data={data} /> */}

//                 <div style={{ height: 400 }}>
//                     <EthnicityPieChart data={data} />
//                 </div>
//             </div>
//         );
//     }

export default App; 