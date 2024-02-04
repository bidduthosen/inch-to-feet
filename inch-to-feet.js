function inchToFeet(inch){
    const remandingFeet = inch / 12;
    const currentFeet = parseInt(remandingFeet);
   // const currentInch = inch % 12;// one way in give me a inch number;

    const InchInto = currentFeet * 12; // 2nd way in give me a inch number;
    const currentInchResult = inch - InchInto;

    const currentResult = `${currentFeet} feet ${currentInchResult} inch`
    return currentResult
}
const feet = inchToFeet(75);
console.log(feet);