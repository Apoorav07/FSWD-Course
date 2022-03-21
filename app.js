let car={
  name:"c class",
  manufacturer:"mercedes",
  print:function(){
    console.log(`${this.name} was created by ${this.manufacturer}`)
  }
}

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car.hasOwnProperty('manufacturer'))
