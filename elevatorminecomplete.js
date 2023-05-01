class Elevator {
  constructor(){
    this.speed = 1;
    this.currentFloor = 0;
    this.floorRequested = [];
  }

  move(){
    if (this.currentFloor === this.floorRequested[0]) return `${this.currentFloor} is the floor you are in`;
    if (this.floorRequested.length === 0) return 'nowhere to go!';

    if (this.floorRequested[0]>this.currentFloor){
      console.log('going up');
      while(this.currentFloor !== this.floorRequested[0]){
        console.log('here');
        this.currentFloor++;
      }
      this.floorRequested.shift();
      console.log(`arrived at floor ${this.currentFloor}`);
    }else{
      console.log('going down');
      while(this.currentFloor!==this.floorRequested[0]){
        console.log('here')
        this.currentFloor--;
      }
      this.floorRequested.shift();
      console.log(`arrived at floor ${this.currentFloor}`);
    }
  }
  requestFloor(floor){
    if(this.currentFloor === floor) return `you are currently on floor ${floor}`;
    if(this.floorRequested.includes(floor)) return ` we are already going to floor ${floor}`;
    else{
      this.floorRequested.push(floor);
      this.floorRequested.sort();
    }
    return this.floorRequested;
  }
  assignFloor(){
    
  }
}

const elevator = new Elevator;
elevator.requestFloor(3);
elevator.requestFloor(1);
console.log(elevator.requestFloor(1));
console.log(elevator.requestFloor(5));
// console.log(elevator.move())
elevator.move()
elevator.move()
elevator.requestFloor(1)
elevator.move()
console.log(elevator)