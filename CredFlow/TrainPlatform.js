function trainPlatform(AT, DT) {
  AT.sort((a, b) => a - b);
  DT.sort((a, b) => a - b);

  let ATpoint = 0;
  let DTpoint = 0;
  let howMany = 1;
  let Final = 1;

  while (ATpoint < AT.length && DTpoint < DT.length) {
    if (DT[DTpoint] >= AT[ATpoint]) {
      ATpoint++;
      howMany++;
    } else {
      howMany--;
      DTpoint++;
    }
    //updating Final with max number of paltform at a time
    Final = Math.max(howMany, Final);
  }
  return Final;
}

function runProgram(input) {
  // input taking part;
  input = input.split("\n");
  let AT = input[0].trim().split(" ").map(Number);
  let DT = input[1].trim().split(" ").map(Number);
  console.log(trainPlatform(AT, DT));
}
if (process.env.USERNAME === "Raj Savsani") {
  //input giving part
  //first row is arrival time
  //second row is departure time
  runProgram(`4 3 6 7 11
  9 4 10 9 14`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
