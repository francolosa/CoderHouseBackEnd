function randoms(howManyNumbers) {
  let randomNumbers = []
    for(var i=0; i<howManyNumbers; i++){
      let randomNumber = Math.round( (Math).random() * 1000 - 1 )
      let numberData = {
        randomNumber: randomNumber,
        times: 1
      }
      if(randomNumbers.indexOf(numberData.randomNumber) > 0){
        numberData.times++
      }

      randomNumbers.push(numberData);
    }
    return randomNumbers
  }
  
  process.on("message", (msg) => {
    if (msg.name == "start") {
      if(!msg.howManyNumbers){
        msg.howManyNumbers = 1000000000
      }
      let numbers = {
        howManyNumbers: randoms(msg.howManyNumbers)
      }
      process.send(JSON.stringify(numbers.howManyNumbers));
    }
  });