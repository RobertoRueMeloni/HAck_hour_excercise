class Elevator{
  constructor(){
    this.speed = 3;
    this.currentFloor = 0;
    this.requestedFloor = [];
  }
  requestFloor(floor){
    if(floor === this.currentFloor) return `${floor} this is the current floor`
    else if(this.requestedFloor.includes(floor)) return`${floor} is already being requested`
    else this.requestedFloor.push(floor);
    //sort if needed
    this.requestedFloor.sort()
  }
  move(){
    if(this.requestedFloor.length === 0) return console.log(`no destination requested`)
    else if(this.requestedFloor[0]>this.currentFloor){
      console.log(`going up`);
      while(this.currentFloor<this.requestedFloor[0]){
        this.currentFloor++
      }
    }
     if(this.requestedFloor[0]<this.currentFloor){
      console.log(`going down`);
      while(this.currentFloor>this.requestedFloor[0]){
        this.currentFloor --
      }
    }
    this.requestedFloor.shift();
    console.log(`arrived at floor ${this.currentFloor}`)
  }
  findNextFloor(){
    
  }
}
const elevator = new Elevator
console.log(elevator.requestFloor(1))
console.log(elevator.requestFloor(3))
console.log(elevator.requestFloor(2))
// elevator.move()
// elevator.move()
// elevator.move()
// elevator.move()

console.log(elevator)