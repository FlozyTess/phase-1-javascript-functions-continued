function saturdayFun (activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}
console.log (saturdayFun())
function mondayWork (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log (mondayWork())
function wrapAdjective(flair = '*'){
    return function (adjective ="special"){
    return `You are ${flair}${adjective}${flair}!`
    };
}
const wrapWithStars = wrapAdjective('*');
console.log(wrapWithStars("a hard worker"));
const wrapWithPipes = wrapAdjective('||');
console.log(wrapWithPipes("a dedicated programmer"));
