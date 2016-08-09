
////Error handling
//function divide() {
//    var numerator = Number(prompt("Enter numerator"));
//    var denominator = Number(prompt("Enter denominator"));
//
//    try {
//        if (denominator == 0) {
//            throw {
//                error: "Divide by zero error",
//                message: "Denominator cannot be zero"
//            };
//        } else {
//            alert("Result = " + (numerator / denominator));
//        }
//    } catch (e) {
//        document.write(e.error + "<br/>");
//        document.write(e.message + "<br/>");
//    }
//}
//divide();


//----------------------------------------------------------------



///* Closures 1 */
//function greet(whattosay){
//    return function(name){
//        console.log(whattosay + " " + name);
//    }
//}
//var sayHi = greet("Hi");
//sayHi("Tony");

//----------------------------------------------------------------

///* Closures 2 */
//var incrementClickCount = function(){
//    console.log("aici intra o singura data");
//    var clickCount = 0;
//    return function(){
//         return console.log(clickCount++);
//    }
//}();
//incrementClickCount();
//incrementClickCount();
//incrementClickCount();

//----------------------------------------------------------------

///* Closures 3 */
//function buildFunctions(){
//    var arr = [];
//    for(var i=0; i<3; i++){
//        arr.push(function(){
//            console.log(i);
//        });
//    }
//    return arr;
//}
//
//var fs = buildFunctions();
//fs[0]();
//fs[1]();
//fs[2]();


//function buildFunctions() {
//    var arr = [];
//    for (var i = 0; i < 3; i++) {
//        arr.push(
//            (function (j) {
//                return function () {
//                    console.log(j);
//                }
//
//
//            })(i));
//    }
//    return arr;
//}
//
//var fs = buildFunctions();
//fs[0]();
//fs[1]();
//fs[2]();


//----------------------------------------------------------------


////Properties in JavaScript - Read/Write properties - Read Only properties, Restrictions
//function Employee(name, age) {
//    var _name = name;
//    var _age = age;
//
//    Object.defineProperty(this, "age", {
//        get: function () {
//            return _age;
//        },
//        set: function (value) {
//            if (value < 1 || value > 100) {
//                alert("Invalid age value!!!");
//            } else {
//                _age = value;
//            }
//        }
//    });
//
//
//    Object.defineProperty(this, "name", {
//        get: function () {
//            return _name;
//        }
//    });
//}
//
//
//var employee = new Employee("Cosmin", 29);
//employee.age = 105;
//employee.name = "Albert";
//console.log(employee.name + " " + employee.age);


//----------------------------------------------------------------


////Static Members
//function Circle(radius){
//    this.radius = radius;
//    Circle.PI = 3.141;
//
//    this.CalculateArea = function(){
//        return Circle.PI * this.radius * this.radius; //camp static (dar metoda nu este statica)
//    }
//}
//
//var circle = new Circle(10);
//console.log("Circle area is: " + circle.CalculateArea()); //(metoda "CalculateArea" nu este statica) - deci va fi apelata cu numele instantei
//
//
//
//function Shape(shapeName){
//    this.shapeName = shapeName;
//    Shape.counter = ++Shape.counter || 1; //camp static
//
//    Shape.ShowCount = function(){//metoda statica
//        return Shape.counter;
//    }
//}
//
//var shape1 = new Shape("Circle");
//var shape2 = new Shape("Rectangle");
//var shape3 = new Shape("Triangle");
//var shape4 = new Shape("Square");
//console.log("We have created " + Shape.ShowCount() + " shapes."); //se apeleaza cu numele constructorului


//----------------------------------------------------------------


////Inheritance
//var Employee = function(name){
//    this.name = name;
//}
//Employee.prototype.getName = function(){
//    return this.name;
//}
//
//var PermanentEmployee = function(salary){
//    this.salary = salary;
//}
//
//var employee = new Employee("Cosmin");
//PermanentEmployee.prototype = employee; //PermanentEmployee il va mosteni pe employee
////PermanentEmployee.prototype = Object.create(Employee.prototype); //PermanentEmployee il va mosteni pe Employee
//
//var pe = new PermanentEmployee(5000);
//console.log(pe.getName() + " " + pe.salary);
//console.log(pe instanceof Employee);
//console.log(pe instanceof PermanentEmployee);
//console.log("employee.name " + employee.hasOwnProperty("name"));
//console.log("employee.salary " + employee.hasOwnProperty("salary"));
//console.log("pe.name " + pe.hasOwnProperty("name"));
//console.log("pe.salary " + pe.hasOwnProperty("salary"));


//----------------------------------------------------------------



////Abstract classes
//var Shape = function(){
//    this.shapeName = "none";
//    throw new Error("Cannot create an instance of an abstract class!!");
//}
//Shape.prototype.draw = function(){
//    return "Drawing " + this.shapeName;
//}
//
//var Circle = function(shapeName){
//    this.shapeName = shapeName;
//}
//Circle.prototype = Object.create(Shape.prototype); // Circle va mosteni pe Shape (subclasa: Circle | parinte: Shape)
//
//var circle = new Circle("Circle");
//console.log(circle.draw());
//console.log(circle instanceof Circle);
//console.log(circle instanceof Shape);
//var test = new Shape();


//----------------------------------------------------------------



////Polymorphism
//var Shape = function(){ }
//Shape.prototype.draw = function(){
//    return "I am a generic shape!";
//}
//
//var Circle = function(){ }
//Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype.draw = function(){
//    return "I am a Circle!";
//}
//
//var Square = function(){ }
//Square.prototype = Object.create(Shape.prototype);
//Square.prototype.draw = function(){
//    return "I am a Square!";
//}
//
//var Triangle = function(){ }
//Triangle.prototype = Object.create(Shape.prototype);
//
//
//var shapesArr = [new Shape(), new Circle(), new Square(), new Triangle()];
//
//
//shapesArr.forEach(function (shape){
//    console.log(shape.draw());
//});


//----------------------------------------------------------------


////Creating custom Pseudo-Class Selector
//    $.extend($.expr[":"], {
//        isRed: function (elem) {
//            return $(elem).hasClass("red");
//        }
//    });
//
//    $("p:isRed").on("click", function() {
//        alert("The paragraph has red color!!!");
//    });


//----------------------------------------------------------------


////The Inheritance Pattern
//function Beverage(name, temperature){
//    this.name = name;
//    this.temperature = temperature;
//}
//Beverage.prototype.drink = function(){
//    console.log("I'm drinking " + this.name);
//}
//
//function Cofee(type){
//    Beverage.call(this, "cofee", "HOOOOOOOOOT");
//    this.type = type;
//}
//Cofee.prototype = Object.create(Beverage.prototype);
//
//Cofee.prototype.sip = function(){
//    console.log("Sipping some awesome " + this.temperature + " " + this.type + " " + this.name);
//}
//
//var water = new Beverage("water", "cold");
//var cofee = new Cofee("bold dark roast");

//----------------------------------------------------------------


////Mixins
//function Person(name) {
//    this.name = name;
//}
//function Dog(name) {
//    this.name = name;
//}
//var speaker = {
//    speak: function () {
//        return this.name + " is speaking!"
//    }
//}
//var mover = {
//    walk: function () {
//        return this.name + " is walking!"
//    },
//    run: function () {
//        return this.name + " is running!"
//    }
//}
//var math = {
//    multiply: function () {
//        return this.name + " is doing Math!"
//    }
//}
//$.extend(Person.prototype, speaker, mover, math);
//$.extend(Dog.prototype, speaker, mover);
//var john = new Person("John Doe");
//var fido = new Dog("Fido");


//----------------------------------------------------------------


////Module Pattern
//var dom = (function(){
//    var _counter = 0;
//    return{
//        generateId: function(){
//            return "customId" + _counter++;
//        },
//        create: function(tagName, id){
//            var el = document.createElement(tagName);
//            el.id = id || this.generateId();
//            return el;
//        }
//    }
//}());
//
//var dom = (function(){
//    var _counter = 0;
//    function generateId(){
//        return "customId" + _counter++;
//    }
//    function create(tagName, id){
//        var el = document.createElement(tagName);
//        el.id = id || generateId();
//        return el;
//    }
//    return{
//        generteId: generateId,
//        create: create
//    }
//}());


//----------------------------------------------------------------

////Singleton Pattern
//var dom = (function(){
//    var _counter = 0;
//    var instance;
//
//    function generateId(){
//        return "customId" + _counter++;
//    }
//    function create(tagName, id){
//        var el = document.createElement(tagName);
//        el.id = id || generateId();
//        return el;
//    }
//    function createInstance(){
//        return{
//            generteId: generateId,
//            create: create
//        }
//    }
//    return{
//        getInstance: function(){
//            return instance || (instance = createInstance());
//        }
//    }
//}());


//----------------------------------------------------------------

////Factory Pattern
//function makeGladiator(name, attack, defense, hitPoints){
//    return{
//        name: name,
//        attack: attack,
//        defense: defense,
//        hitPoints: hitPoints,
//        sayName: function(){
//            console.log('Hello, my name is ' + this.name);
//        }
//    }
//}
//var jesse = makeGladiator("Jesse", 10, 12, 10);
//var john = makeGladiator("John", 12, 10, 12);
//
//function makeGladiator(name, attack, defense, hitPoints) {
//    var temp = {};
//    temp.name = name;
//    temp.attack = attack;
//    temp.defense = defense;
//    temp.hitPoints = hitPoints;
//    temp.sayName = function () {
//        console.log('Hello, my name is ' + this.name);
//    }
//    return temp;
//}
//var jesse = makeGladiator("Jesse", 10, 12, 10);
//var john = makeGladiator("John", 12, 10, 12);


//----------------------------------------------------------------


////Constructor Pattern / Dynamic Prototype (inner method)
//function Gladiator(name, attack, defense, hitPoints) {
//    this.name = name;
//    this.attack = attack;
//    this.defense = defense;
//    this.hitPoints = hitPoints;
//    if(typeof this.sayName !== "function"){
//        Gladiator.prototype.sayName = function () {
//            console.log('Hello, my name is ' + this.name);
//        }
//    }
//}
//var jesse = new Gladiator("Jesse", 10, 12, 10);
//var john = new Gladiator("John", 12, 10, 12);

//----------------------------------------------------------------


////Call, Bind, Apply
//var person = {
//    firstname: 'John',
//    lastname: 'Doe',
//    getFullName: function() {
//        var fullname = this.firstname + ' ' + this.lastname;
//        return fullname;
//    }
//}
//
//var logName = function(lang1, lang2) {
//    console.log('Logged: ' + this.getFullName());
//    console.log('Arguments: ' + lang1 + ' ' + lang2);
//    console.log('-----------');
//}
//
//var logPersonName = logName.bind(person);
//logPersonName('en', 'ro');
//logName.call(person, 'en', 'fr');
//logName.apply(person, ['en', 'gr']);
//
//// function borrowing
//var person2 = {
//    firstname: 'Jane',
//    lastname: 'Doe'
//}
//console.log(person.getFullName.apply(person2));
//
//// function currying
//function multiply(a, b) {
//    return a*b;   
//}
//
//var multipleByTwo = multiply.bind(this, 2);
//console.log(multipleByTwo(4));
//
//var multipleByThree = multiply.bind(this, 3);
//console.log(multipleByThree(4));

//----------------------------------------------------------------



