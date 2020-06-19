import * as fs from "fs";
/**
 * This version passes all the online tests but runs too slowly locally
 **/
function lineReader() {
  var lines = fs
    .readFileSync("roller_coaster.harder", "utf-8")
    .split("\n")
    .filter(Boolean);
  let i = 0;
  return function () {
    console.log("read", i);
    const line = lines[i];
    console.log("line", line);
    i++;
    return line;
  };
}
const readline = lineReader();

var inputs: string[] = readline().split(" ");
const numberOfPlaces: number = parseInt(inputs[0]);
const maxDailyRides: number = parseInt(inputs[1]);
const numberOfGroups: number = parseInt(inputs[2]);
const groups = [];
for (let i = 0; i < numberOfGroups; i++) {
  const pi: number = parseInt(readline());
  groups.push(pi);
}

let result = 0;
let currentIndex = 0;

// 1. Loop until maximum daily rides attained
for (let count = 0; count < maxDailyRides; count++) {
  let partialResult = 0;
  let groupsBoarded = 0;
  while (groupsBoarded < numberOfGroups) {
    if (currentIndex >= numberOfGroups) {
      currentIndex = 0;
    }
    if (partialResult + groups[currentIndex] > numberOfPlaces) {
      break;
    }
    partialResult += groups[currentIndex];
    currentIndex++;
    groupsBoarded++;
  }
  result += partialResult;
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(result);
