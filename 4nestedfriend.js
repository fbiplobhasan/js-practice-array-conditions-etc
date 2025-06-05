// const sefScore = 80;
// const friendScore = 30;

// if( sefScore >= 80 && friendScore >=80){
//     console.log('go for lunch');
// } else if(friendScore < 80 && friendScore >60){
//     console.log('good luch next time');
// } else if(friendScore <60 && friendScore >= 40){
//     console.log('message unseen');
// } else if(friendScore <= 40){
//     console.log('block you');
// } else if(sefScore <80){
//     console.log('go to home and sleep and act sad');
// } 

const sefScore = 80;
const friendScore = 30;

if (sefScore >= 80) {
    if (friendScore > 80) {
        console.log('go for lunch');
    } else if (friendScore >= 60) {
        console.log('good luck next time');
    } else if (friendScore >= 40) {
        console.log('message unseen');
    } else {
        console.log('block your friend');
    }
} else {
    console.log('go to home and sleep and act sad');
}
