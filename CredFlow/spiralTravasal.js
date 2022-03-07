function spiralTravasal(mat, N, M) {
    //storing element here
  let spiralOrder = [];

  let count = 0;
  let left = 0,
    right = M - 1,
    top = 0,
    bottom = N - 1;
  while (count < N * M) {
    //traversing left side
    for (let i = top; i <= bottom && count < N * M; i++) {
      spiralOrder.push(mat[i][left]);
      count++;
    }
    left++;

    //traversing bottom side
    for (let i = left; i <= right && count < N * M; i++) {
      spiralOrder.push(mat[bottom][i]);
      count++;
    }
    bottom--;

    //traversing right side
    for (let i = bottom; i >= top && count < N * M; i--) {
      spiralOrder.push(mat[i][right]);
      count++;
    }
    right--;

     //traversing top side
    for (let i = right; i >= left && count < N * M; i--) {
      spiralOrder.push(mat[top][i]);
      count++;
    }
    top++;

  }
  return spiralOrder;
}

function runProgram(input) {
  // input taking part is here;

  input = input.split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let mat = [];
  let line = 1;
  for (let i = 0; i < n; i++) {
    mat.push(input[line++].trim().split(" ").map(Number));
  }
  console.log(spiralTravasal(mat, n, m));
}
if (process.env.USERNAME === "Raj Savsani") {
  // n = 3,  m = 5  matrix input giving part is here;
  runProgram(`3 5
    9 8 1 5 4
    5 9 4 8 9
    5 5 4 7 4`);
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
