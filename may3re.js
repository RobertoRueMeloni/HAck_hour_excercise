class Elevator{
  constructor(){
    this.speed = 1;
    this.currentFloor = 0;
    this.floorRequested = [];
    this.waitingPickUp = [];
    // the direction accepted are 'up' 'down' and 'idle'
    this.direction = 'idle';
  }
  //Elevator methods
  requestFloor(floor){
    // conditional statement
    if(floor === this.currentFloor){
      return;
    }
    if (this.floorRequested.includes(floor)){
      return;
    }
    else{
      this.floorRequested.push(floor);
      this.floorRequested.sort();
    }
  }
  move(){
    // const nextFloor = this.floorRequested[0];
    const nextFloor = this.findNextFloor()
    // conditional statement
    if(this.currentFloor === nextFloor){
      return `already on floor ${this.currentFloor}`
    }
    if(this.floorRequested.length === 0){
      return 'nowhere to go'
    }
    if(this.currentFloor>nextFloor){
      console.log('going down...');
      this.direction = 'down';
      while(this.currentFloor>nextFloor){
        this.currentFloor--;
      }
    }else{
      console.log('going up...');
      this.direction = 'up';
      while(nextFloor>this.currentFloor){
        this.currentFloor++;
      }
    }
    console.log(`arrived at floor ${this.currentFloor}`);
    console.log(this.floorRequested)

  this.floorRequested = this.floorRequested.filter( floor => floor !== nextFloor)
      console.log(this.direction,this.floorRequested)
    if(this.floorRequested.length === 0 && this.waitingPickUp.length === 0){
      this.direction = 'idle';
    }else if(this.floorRequested.length === 0){
      this.floorRequested = this.waitingPickUp;
    }
  }
  findNextFloor(){
    //conditional statement
    if(this.floorRequested.length === 0){
      return
    }
    const aboveFloors = this.floorRequested.filter(floor => this.currentFloor<floor);
    const belowFloors = this.floorRequested.filter(floor => floor<this.currentFloor);
    if(belowFloors.length === 0 || this.direction === 'up'&& aboveFloors.length !== 0){
      console.log(this.direction,aboveFloors)
      return aboveFloors[0];
    }
    console.log(aboveFloors.length)
    if(aboveFloors.length === 0 || this.direction === 'down'&& belowFloors.length !== 0){
      return belowFloors[belowFloors.length -1];
    }
    if(this.direction === 'idle'){
      // check which distance is less between the 2 option;
      // if(this.currentFloor - belowFloors[belowFloors.length -1]<aboveFloors[0]-this.currentFloor){
      //   return belowFloors[belowFloors.length -1];
      // }else{
      //   return aboveFloors[0]
      // }
      const distanceBelowFloors = this.currentFloor - belowFloors[belowFloors.length -1];
      const distanceAboveFloors = this.currentFloor - aboveFloors[0];

      return distanceBelowFloors < distanceAboveFloors ? belowFloors[belowFloors.length -1] : aboveFloors[0]
    }
    
  }
  BottonStatic(direction, floor){
    if(floor === this.currentFloor){
      return;
    }
    if(this.floorRequested.includes(floor)&& direction === this.direction){
      return;
    }
    if(this.direction === 'idle'){
      this.floorRequested.push(floor);
      // this.move();
    }else if(this.direction === 'up' && direction === 'up' && this.currentFloor<floor){
      this.floorRequested.push(floor);
    }else if(this.direction === 'down' && direction === 'down' && this.currentFloor>floor){
      this.floorRequested.push(floor)
    }else{
      this.waitingPickUp.push(floor);
      if(this.currentFloor>floor){
        this.waitingPickUp.sort((a,b)=> b - a);
      }else{
        this.waitingPickUp.sort();
      }
    }

  }
}

const elevator1 = new Elevator;
const elevator2 = new Elevator;
const elevators = [elevator1,elevator2]
console.log(elevators)

class Panel{
  constructor(elevators){
    this.elevators = elevators;
    this.request = [];
  }
  moveElevatorTofloor(floor){
if(elevator1.direction === 'idle'){
elevator1.requestFloor(floor)
elevator1.move()
}
  }
}

const panel = new Panel(elevators);
panel.moveElevatorTofloor(4)
console.log(panel)