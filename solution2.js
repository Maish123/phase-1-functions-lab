//the solutions are here
function distanceFromHqInBlocks(someValue) {
  if (someValue > 42) {
    return someValue - 42;
  } else {
    42 - someValue;
  }
}
// distance from scubber in feet

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

//calculate the distanc etravelled in feet
function distanceTravelledInFeet(start, destination) {
  if (start > destination) {
    return (start - destination) * 264;
  } else {
    return (destination - start) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.2;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
