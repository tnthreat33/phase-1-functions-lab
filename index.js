// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
   let blocks = someValue - 42 
   return Math.abs(blocks)
  }

  function distanceFromHqInFeet(someValue) {
   let blocks = distanceFromHqInBlocks(someValue);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    return blocks * 264
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    let distance = (start - destination)
    let feet = distance * 264
    return Math.abs(feet) 
    
  }

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400){
       return  0
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02
    }else if (distance > 2000 && distance <= 2500){
        return 25 
    } else {
        return 'cannot travel that far' 
    }
    //returns the fare for the customer
  }

