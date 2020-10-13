// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import ReactBootstrap from 'react-bootstrap';
// import CountUp from 'react-countup';
// import cx from 'classnames';
// import styles from './Cards.module.css';

// const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate } }) => {
//     if(!confirmed){
//         return 'Pardon the interruption: Please wait...';
//     }

//     return (
//        <div className={styles.container}>
//            <Grid container spacing={10} justify="center">
//             <Grid item component={Card} className={cx(styles.card, styles.cases)}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>Total COVID-19 Positive Cases</Typography> 
//                   <Typography variant="h5">
//                     <CountUp start={0} end={confirmed.value} duration={3.0} separator=","/>
//                     </Typography>
//                   <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                   <Typography variant="body2">*Total current, active cases since date specified above*</Typography>
//                 </CardContent>
//             </Grid>

//             <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>Total COVID-19 Recoveries</Typography> 
//                   <Typography variant="h5">
//                     <CountUp start={0} end={recovered.value} duration={3.0} separator=","/>
//                     </Typography>
//                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                   <Typography variant="body2">*Total recoveries since date specified above*</Typography>
//                 </CardContent>
//             </Grid>

//             <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
//                 <CardContent>
//                   <Typography color="textSecondary" gutterBottom>Total COVID-19 Related Deaths</Typography> 
//                   <Typography variant="h5">
//                     <CountUp start={0} end={deaths.value} duration={3.0} separator=","/>
//                     </Typography>
//                     <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                   <Typography variant="body2">*Total death count since date specified above*</Typography>
//                 </CardContent>
//             </Grid>

//             </Grid>
//          </div>
       
//     )
// }

// export default Cards;