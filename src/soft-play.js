// do not change these lines

function reset () {
  adults = 0
  children = 0
  totalAdults = 0
  totalChildren = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter(numAdults, numChildren) {

  if (numAdults < numChildren) {
    
    return false

  }

  adults += numAdults
  children += numChildren
  totalAdults +=numAdults
  totalChildren += numChildren
  return true
}


function leave(numAdults,numChildren) {
  if (numAdults < numChildren) {
    return false
    
  }
  else if (numAdults > adults || numChildren > children){
    return false
  }
  
  adults -= numAdults
  children -= numChildren

  return true
}

function occupancy() {

  return {
    adults,
    children,
  }

  function total() {
    return {
      
      adults: totalAdults,
      children:totalChildren
    }
  }

  
}
// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy,
  reset,
}
