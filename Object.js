function HouseKeeper( name, age, fastWorker, language) {
    this.name = name;
    this.age = age;
    this.fastWorker = fastWorker;
    this.language = language;  
} 

var houseKeeper1 = new HouseKeeper( "Jeanne", 18, true, ["en", "fr"]); 
var houseKeeper2 = new HouseKeeper( "Jean", 18, true, ["en", "fr"]); 

console.log(houseKeeper1.name)
console.log(houseKeeper2)