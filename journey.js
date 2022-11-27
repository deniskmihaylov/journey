function journey(input) {
    let budget = Number(input[0]); 
    let season = input[1];

    let expenses = 0

    switch(season) {
        
        case 'summer': 

    if (budget <= 100 ) {
        destination = 'Bulgaria'; 
        type = 'Camp'
        expenses = 0.30 * budget; 
        console.log(`Somewhere in ${destination}`)
        console.log(`${type} - ${expenses.toFixed(2)}`)
    } else if(budget > 100 && budget <= 1000) {
        destination = 'Balkans'; 
        type = 'Camp'; 
        expenses = 0.40 * budget; 
        console.log(`Somewhere in ${destination}`); 
        console.log(`${type} - ${expenses.toFixed(2)}`); 
    } else {
        destination = 'Europe'; 
        type = 'Hotel'; 
        expenses = 0.90 * budget; 
        console.log(`Somewhere in ${destination}`); 
        console.log(`${type} - ${expenses.toFixed(2)}`); 
    } break; 

    case 'winter': 
    
    if (budget <= 100 ) {
        destination = 'Bulgaria'; 
        type = 'Hotel'
        expenses = 0.70 * budget; 
        console.log(`Somewhere in ${destination}`)
        console.log(`${type} - ${expenses.toFixed(2)}`)
    } else if(budget > 100 && budget <= 1000) {
        destination = 'Balkans'; 
        type = 'Hotel'; 
        expenses = 0.80 * budget; 
        console.log(`Somewhere in ${destination}`); 
        console.log(`${type} - ${expenses.toFixed(2)}`); 
    } else {
        destination = 'Europe'; 
        type = 'Hotel'; 
        expenses = 0.90 * budget; 
        console.log(`Somewhere in ${destination}`); 
        console.log(`${type} - ${expenses.toFixed(2)}`); 
    } break;
}   
}