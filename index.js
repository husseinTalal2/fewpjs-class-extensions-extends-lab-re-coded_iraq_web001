// Your code here
class Polygon {
  constructor(sidesArr){
    this.sidesArr = sidesArr
  }
  get countSides() {
    return this.sidesArr.length;
  }
  get perimeter() {
    if(!Array.isArray(this.sidesArr)) return;
    let sum=0;
    for(let i=0; i<this.countSides() ; i++){
      sum+=this.sidesArr[i];
    }
    return sum;
  }
}
