// Code your solution in this file!
const hq = 42;
const block=264;

function distanceFromHqInBlocks(location) {
  return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
  const noOfBlocks=distanceFromHqInBlocks(location)
  return noOfBlocks*block;
}

function distanceTravelledInFeet(start, end) {
    const noOfBlocks=Math.abs(end-start);
    return noOfBlocks*block;
}

function calculatesFarePrice(start, end) {
    const feetDistance=distanceTravelledInFeet(start, end) 
    if(feetDistance <= 400){
        return 0;
    }
    else if(feetDistance > 400 && feetDistance <= 2000) {
        return (feetDistance - 400) * 0.02;
    }
    else if(feetDistance > 2000 && feetDistance <= 2500) {
        return 25;
    }
    else if(feetDistance > 2500) {
        return "cannot travel that far"
    }
}