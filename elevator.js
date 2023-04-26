class Elevator {
  constructor() {
    this.currentFloor = 1;
    this.destinationFloors = [];
  }

  requestFloor(floor) {
    if (floor === this.currentFloor) {
      console.log("You are already on floor", floor);
      return;
    }
    if (this.destinationFloors.includes(floor)) {
      console.log("Floor", floor, "has already been requested.");
      return;
    }
    this.destinationFloors.push(floor);
    //if fifo?
    // this.destinationFloors.sort();

    console.log(this.currentFloor)
    console.log(this.destinationFloors)
  }

  move() {
    //

    if (this.destinationFloors.length === 0) {
      console.log("No destination floors requested.");
      return;
    }
    if (this.currentFloor < this.destinationFloors[0]) {
      console.log("Going up...");
      while (this.currentFloor < this.destinationFloors[0]) {
        this.currentFloor++;
        console.log("Floor", this.currentFloor);
      }
    } else if (this.currentFloor > this.destinationFloors[0]) {
      console.log("Going down...");
      while (this.currentFloor > this.destinationFloors[0]) {
        this.currentFloor--;
        console.log("Floor", this.currentFloor);
      }
    }
    console.log("Arrived at floor", this.currentFloor);
    this.destinationFloors.shift();
  }
}


// const elevator = new Elevator();

// elevator.requestFloor(5);
// elevator.requestFloor(3);
// elevator.requestFloor(8);

// elevator.move();  // Elevator goes to floor 3
// elevator.move();  // Elevator goes to floor 5
// elevator.move();  // Elevator goes to floor 8

const test = new Elevator();

test.requestFloor(4);
test.move();
test.requestFloor(8);
test.requestFloor(3);
test.move();
console.log(test)

//different approch

// class ElevatorSystem {
//     #building;
//     constructor(building){
//         this.#building = building;
//     }
//     monitoring();
//     dispatcher();

//     // The ElevarSystem is a singleton class that ensures it will have only one active instance at a time
//     #system = null;
    
//     // Created a static method to access the singleton instance of ElevatorSytem class
//     getInstance() {
//         if (system == null) {
//             system = new ElevatorSystem();
//         }
//         return system;
//     }
// }

// class Building {
//     #floor;
//     #elevator; 

//     #building = null;
//     constructor(){
//         this.#floor = new Array();
//         this.#elevator = new Array();

//     }
//     getInstance() {
//         if (building == null) {
//             building = new Building();
//         }
//         return building;
//     }
// }

// //JAVA
// public class ElevatorSystem {
//     private Building building;
//     public void monitoring();
//     public void dispatcher();

//     // The ElevarSystem is a singleton class that ensures it will have only one active instance at a time
//     private static ElevatorSystem system = null;
    
//     // Created a static method to access the singleton instance of ElevatorSytem class
//     public static ElevatorSystem getInstance() {
//         if (system == null) {
//             system = new ElevatorSystem();
//         }
//         return system;
//     }
// }

// public class Building {
//     private List<Floor> floor;
//     private List<ElevatorCar> elevator; 

//     private static Building building = null;
    
//     public static Building getInstance() {
//         if (building == null) {
//             building = new Building();
//         }
//         return building;
//     }
// }