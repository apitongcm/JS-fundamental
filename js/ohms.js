//FUNCTIONS 
//OHM's Law 
function FindVoltage(Resistance,Current){
    return Resistance*Current; //return the voltage of the circuit.
}

function FindCurrent(Voltage,Resistance){
    return Voltage/Resistance;
}
function FindCurrentP(Power,Voltage){
    return Power/Voltage; 
}

function FindResistance(Voltage,Current){
    return Voltage/Current; 
}
function FindResistanceP(Power,Current){
    return Power /(Current ** 2);
}


console.log(FindVoltage(30,10) + " volts");  //will print the voltage of the circuit. 
console.log(FindCurrent(12,400) + " amperes"); //will print the current of the circuit.
console.log(FindCurrentP(100,20) + " amperes"); ////will print the current of the circuit.
console.log(FindResistanceP(100,0.03) + "ohms");


//OBJECTS 
const Circuit = {  // Creating Object 
    voltage:12,    // parameters of the Objects 
    current:2, 
    resistance:5000,
    size:50,
    color:"green",
    brand:"AMC"
}; 

console.log(Circuit); // Print the Circuit info 
console.log(Circuit.voltage); // print individually

const Resistor = { 
    bands: 3,
    firstColor:"red", 
    secondColor:"orange",
    Multiplier:"yellow",
    Tolerance:"Silver", 
    Value:230000    
}

// document.getElementById("test").innerHTML = JSON.stringify(Resistor);
 // I use the code JSON.stringify to print all the parameters inside my object


//OBJECT METHODS
//student information sheet 
const Student =[
    {

        firstName:"Carl",
        lastName:"De vera",
        age: 19,
        course:"BS Electronics Engineering",
        year:"2nd",
        location:"Taiwan",
        idNum:01234,
        fullName:function(){
            return this.firstName + " " + this.lastName;
        }
       
    },
    
    {
        firstName:"Quenchie",
        lastName:"Armenia",
        age: 21,
        course:"BS in Computer Science",
        year:"4nd",
        location:"Philippines",
        idNum:11234,
        fullName:function() {
            return this.firstName + " " + this.lastName;
         }
     }
]

//Print inside the HTML file the information of student named Carl. since array count starts at 0.
document.getElementById("fullName").innerHTML = JSON.stringify(Student[0].fullName());
document.getElementById("infoAge").innerHTML = JSON.stringify(Student[0].age);
document.getElementById("infoLoc").innerHTML = JSON.stringify(Student[0].location);
document.getElementById("infoID").innerHTML = JSON.stringify(Student[0].idNum);
document.getElementById("infoCourse").innerHTML = JSON.stringify(Student[0].course);
document.getElementById("infoYear").innerHTML = JSON.stringify(Student[0].year);
 
//Print in the console what course Quenchie is currently taking. 
console.log(Student[1].course);
console.log(Student[0]);

console.log(Student[1].fullName());

//EVENTS 
//JavaScripts lets you execute code when events are detected. 
function colorChange(){
    var element = document.body;
    element.classList.toggle("dark-theme");
}

document.getElementById("Time").innerHTML = Date();

function showTime(){

    let notice = document.getElementById("Time");
    if (notice.style.display === "none"){
        notice.style.display = "block";
    } else {
        notice.style.display = "none";
    }  
}