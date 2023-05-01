class Elevator {
  constructor(){
    this.speed = 3;
    this.currentFloor = 0;
    this.floorRequestedList = [];
  }
  requestFloor(floor){
    if(this.currentFloor === floor) return `${floor} is the floor you are in`;
    if(this.floorRequestedList.includes(floor)) return `${floor} already requested`;
    else{
      this.floorRequestedList.push(floor);
      //sort
      this.floorRequestedList.sort();
    }
  }
  move(){
    if(this.floorRequestedList.length===0) return 'no where to go'
    if(this.currentFloor===this.floorRequestedList[0]) return 'already here';
    if(this.currentFloor>this.floorRequestedList[0]){
      console.log(`going down to floor${this.floorRequestedList[0]}`);
      while(this.currentFloor!==this.floorRequestedList[0]){
        this.currentFloor--;
      }
    }
    else{
      console.log(`going up to floor ${this.floorRequestedList[0]}`);
      while(this.currentFloor!==this.floorRequestedList[0]){
        this.currentFloor++;
      }
    }
    this.floorRequestedList.shift();
  }
}

const elevator = new Elevator
console.log(elevator.requestFloor(1))
console.log(elevator.requestFloor(3))
console.log(elevator.requestFloor(2))
// console.log(elevator.move())
// console.log(elevator.move())
// console.log(elevator.move())
// console.log(elevator.move())
elevator.move()
elevator.move()
elevator.move()

elevator.move()

console.log(elevator)