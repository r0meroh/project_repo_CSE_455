//graph reducer 
const defaultState = {
    
    data: {
        labels: [],
        datasets: [{
            label: "DEATHS",
            
            data: [],
            fill: true,
            backgroundColor: 'rgba(76,29,73, 0.4)',
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)'
        
        },
        {
             label: "cases",
            
            data: [],
            fill: true,
            backgroundColor: 'rgba(219,144,238, 0.4)',
            borderColor: 'rgba(238,175,0, 0.5)',
            pointBorderColor: 'rgba(238,175,0, 0.7)'

        }]
    }
};




const graphReducer = (state = defaultState.data,  action ) =>{
    const {type, payload } = action;
    switch(action.type){
        case "GRAPH":
            return {...state,
            data: {
                labels: payload.labels,
                datasets: [
                    {
                        label: "Total DEATHS in LOS ANGELELS",
                       
                       data: payload.deathData,
                       fill: true,
                       backgroundColor: 'rgba(83,0,0, 0.9)',
                       borderColor: 'rgba(238,175,0, 0.5)',
                       pointBorderColor: 'rgba(238,175,0, 0.7)'
           
                   },
                   {
                    label: "Total CASES in LOS ANGELES",
                    
                    data: payload.data,
                    fill: true,
                    backgroundColor: 'rgba(250,94,100, 0.8)',
                    borderColor: 'rgba(238,175,0, 0.5)',
                    pointBorderColor: 'rgba(238,175,0, 0.7)'
                
                }
                ]}
            };
        case 'ERASE':
            return {...state,  
                data: {
                labels: [],
                datasets: [{
                    label: "DEATHS",
                    
                    data: [],
                    fill: true,
                    backgroundColor: 'rgba(76,29,73, 0.4)',
                    borderColor: 'rgba(238,175,0, 0.5)',
                    pointBorderColor: 'rgba(238,175,0, 0.7)'
                
                },
                {
                     label: "cases",
                    
                    data: [],
                    fill: true,
                    backgroundColor: 'rgba(219,144,238, 0.4)',
                    borderColor: 'rgba(238,175,0, 0.5)',
                    pointBorderColor: 'rgba(238,175,0, 0.7)'
        
                }]}
            }
        default: 
            return state = defaultState.data;
    }
};

export default graphReducer;