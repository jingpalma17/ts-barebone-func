let cache:any = {};
const hundredTimes = (param: number): number => {
  if (param in cache) {
    console.log('Fetching from cache');
    return cache[param];
    }
    else {
    console.log('Calculating result');
    let result = param * 100;
    cache[param] = result;
    return result;
  }
}

console.log(hundredTimes(1))
//=> 100
console.log(hundredTimes(1)) // cached result should be retunrned intead of calculating again.
//=> 100
console.log(hundredTimes(2))
//=> 200
console.log(hundredTimes(2)) // the same thing for this.
//=> 200
console.log(hundredTimes(1)) // cached result should be returned again.
//=> 100