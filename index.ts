import * as fs from 'fs'

function lineReader(file: string) {
  var lines = fs.readFileSync(file, 'utf-8')
    .split('\n')
    .filter(Boolean);
  let i = 0
  return function () {
    const line = lines[i]
    i++
    return line
  }
}

export function run(file: string) {
  const readline = lineReader(file)

  var inputs: string[] = readline().split(' ');
  const numberOfPlaces: number = parseInt(inputs[0]);
  const maxDailyRides: number = parseInt(inputs[1]);
  const numberOfGroups: number = parseInt(inputs[2]);
  const groups: Array<number> = []
  for (let i = 0; i < numberOfGroups; i++) {
    const pi: number = parseInt(readline());
    groups.push(pi)
  }

  function compute(numberOfPlaces: number, maxDailyRides: number, numberOfGroups: number, groups: Array<number>) {
    let cached: number[] = [] // same length as numberOfGroups
    let currentIndex = 0;
    for (let configuration = 0; configuration < numberOfGroups; configuration++ ){
      let p: number = 0;
      let currentNumberOfGroups: number = 0;
      while (currentNumberOfGroups < numberOfGroups) {
        if (currentIndex >= numberOfGroups) {
          currentIndex = 0
        }
        if (p + groups[currentIndex] > numberOfPlaces) {
          break
        }
        p += groups[currentIndex]
        currentIndex++
        currentNumberOfGroups++
      }
      cached[configuration] = p
    }
    let result = 0
    for (let i = 0; i < maxDailyRides; i++) {
      result += cached[i % numberOfGroups]
    }
    return result
  }


  return compute(numberOfPlaces, maxDailyRides, numberOfGroups, groups)
}
