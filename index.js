// code your solution here

function saturdayFun(activity) {
    if (activity === undefined) {activity = 'roller-skate'}
    else {activity = activity}
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(symbol = "*") {
    const innerFunction = function (thing = "special") {return `You are ${symbol}${thing}${symbol}!`};
    return innerFunction;
}