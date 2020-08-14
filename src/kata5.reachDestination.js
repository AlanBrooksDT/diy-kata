const reachDestination = (distance, speed) => {
   let timeToArrive = Math.ceil((distance / speed)*2)/2;
   return ("I should be there in " + timeToArrive + " hours");
};
module.exports = reachDestination;
