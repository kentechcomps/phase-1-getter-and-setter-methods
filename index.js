// Add your Circle class here
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  const myCircle = new Circle(5); 
  
  console.log(myCircle.diameter); // Output: 10
  console.log(myCircle.circumference); // Output: 31.41592653589793
  console.log(myCircle.area); // Output: 78.53981633974483
  
  myCircle.diameter = 14;
  console.log(myCircle.radius); // Output: 7
  
  myCircle.circumference = 50;
  console.log(myCircle.radius); // Output: 7.957747154594767
  
  myCircle.area = 154;
  console.log(myCircle.radius); // Output: 7.861498055755336
 
  
  const myCircle = new Circle(5); // Creating a circle with radius 5

  
  
  
  
  
