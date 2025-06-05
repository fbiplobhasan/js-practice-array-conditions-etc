const gradMarks = 90;

if (gradMarks >= 90) {
    console.log('your are A+');
}

else if (gradMarks >= 80 && gradMarks <= 89) {
    console.log('yor are A');
}
else if (gradMarks >= 70 && gradMarks <= 79) {
    console.log('yor are B');
}
else if (gradMarks >= 60 && gradMarks <= 69) {
    console.log('yor are D');
}
else {
    console.log('you are F-fail')
}