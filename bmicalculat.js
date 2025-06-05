const bmiWeight = 50;

if(bmiWeight < 18.5){
    console.log('you are under weight.');
}
else if(bmiWeight >= 18.5 && bmiWeight <= 24.9){
    console.log('you are normal weight.');
}
else if(bmiWeight >= 25 && bmiWeight <= 29.9){
    console.log('you are overweight.');
}
else{
    console.log('Otherwise, your are obese.');
}