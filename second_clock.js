/*

Write a clock class, with two methods: start and stop.

----------
start: upon invocation, invokes a callback (this.cb, defined in the constructor)
on an argument every second, with the argument to the callback being:

1, 2, 3,... 59, 60, 1, 2, 3,... 59, 60, 1, 2, 3, etc.

In other words, the callback gets invoked every second on the "seconds hand" of
the clock. Always start with 1 and don't utilize the seconds value the current
clock time.

The first "tick" with value 1 occurs 1 second after the initial "secondClock" invocation.
The second "tick" with value 2 occurs 2 seconds after the initial "secondClock" invocation.
...
The sixtieth "tick" with value 60 occurs 60 seconds after the initial "secondClock" invocation.
The sixty-first "tick" with value 1 occurs 61 seconds after the initial "secondClock" invocation.
The sixty-second "tick" with value 2 occurs 62 seconds after the initial "secondClock" invocation.
etc.

----------
reset: upon invocation, completely stops the "clock".
Also resets the time back to the beginning.

Hint: look up setInterval and clearInterval.

*/

// class SecondClock {
//   constructor(cb) {
//     this.cb = cb;
//   }

//   start() {
    
//     if(this.cb<60){
//       this.cb++;
//     }
//     else this.cb =0
//     return setInterval(start(), this.cb*10000 )
//   }


//   stop() {}
// }
// const x = new SecondClock(0);
// x.start()
// //setInterval(x.start(),this.cb*1000)
// module.exports = { SecondClock };

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.count = 1;
    this.intervalID;
  }
​
  start() {
    this.intervalID = setInterval(() => {
      if (this.count === 61) this.count = 1;
      this.cb(this.count++);
    }, 1000);
  }
​
  stop() {
    this.count = 1;
    clearInterval(this.intervalID);
  }
}