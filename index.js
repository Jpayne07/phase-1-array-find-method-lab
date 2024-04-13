// code your solution here
function superbowlWin(record){
    const result  =  record.find(record => record.result  === "W")
  if (result) {
    return result.year;
  } else {
    return undefined;
  }

 // return year;

    
}

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

  console.log(superbowlWin(record))