// Your code here
class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr
    this.count = this.sidesArr.length
  }
  get countSides() {
    return this.sidesArr.length;
  }
  get perimeter() {
    if(!Array.isArray(this.sidesArr)) return;
    let sum=0;
    for(let i=0; i<this.sidesArr.length ; i++){
      sum+=this.sidesArr[i];
    }
    return sum;
  }
}

class Triangle extends Polygon {
  get isValid(){
    
  }
}
