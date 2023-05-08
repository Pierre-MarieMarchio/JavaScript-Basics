function HouseKeeper(name, age, fastWorker, language) {
  this.name = name;
  this.age = age;
  this.fastWorker = fastWorker;
  this.language = language;
  this.clean = () => {
    console.log("and the magic word");
  };
  this.cleanPlease = () => {
    console.log("cleaning in progress");
  };
}

var houseKeeper1 = new HouseKeeper("Jeanne", 18, true, ["en", "fr"]);
var houseKeeper2 = new HouseKeeper("Jean", 18, true, ["en", "fr"]);

houseKeeper1.clean();
houseKeeper1.cleanPlease();
