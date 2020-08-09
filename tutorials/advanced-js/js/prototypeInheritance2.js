// *** Sub-Class Objects ***

// baseclass
var Job = function () {
  this.pays = true;
};

// Prototype Method
Job.prototype.print = function () {
  console.log(this.pays ? "Please hire me." : "No, thank you.");
};

// subclass
var TechJob = function (title, pays) {
  Job.call(this);
  // 1 - This line calls Job constructor function. Makes pays = true for TechJob. But prototype of Job hasn't been inherited yet.

  this.title = title;
  this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
// 2 - This line inherites Job.protoype

TechJob.prototype.constructor = TechJob;
// 3 - This line setting TechJob constructor as the constructor of the TechJob.

// *** Override print method of baseclass - Actually it doesn't override, it just shadows the baseclass' print function. When we call print function for TechJob object, whereever it finds a print function, it calls that.
TechJob.prototype.print = function () {
  console.log(
    this.pays
      ? this.title + " job is great, please hire me."
      : "I'd rather learn JavaScript."
  );
};

// Create objects from the subclass
var softwarePosition = new TechJob("JavaScript Programmer", true);
var softwarePosition2 = new TechJob("vb Programmer", false);
var generalPosition = new Job();

console.log(softwarePosition.print());
console.log(softwarePosition2.print());
console.log(generalPosition.print());

// *** Add to master object
Object.prototype.print2 = function () {
  console.log("I am executing from the Master Object");
};

console.log(softwarePosition.print2());
