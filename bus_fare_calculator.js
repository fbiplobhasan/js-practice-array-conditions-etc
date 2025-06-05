const age = 70;
const isStudent = false;
const ticketFare = 800;
let finalFare;

if(age < 10){
    finalFare = 0;
}

else if(isStudent){
    finalFare = ticketFare * 0.5;
} 

else if( age >= 60) {
finalFare = ticketFare * 0.85;
}

else {
    finalFare = ticketFare;
}

console.log('Your ticket fare is:', finalFare, 'tk');