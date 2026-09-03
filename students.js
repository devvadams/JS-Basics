const student = {
 name : "Adam",
 age : 29,
 course : "Computer Science",
 score : 82,
 isGraduated : true

}
const student1 = {
 name : "Okaku",
 age : 24,
 course : "Public Admin",
 score : 34,
 isGraduated : false

}

console.log(
    
    `Name: ${student.name}
    Course: ${student.course}
    Score : ${student.score}`
);

function greetStudent(name){

    return `Welcome, ${name}!`;
}

console.log(greetStudent(student.name));

//Inputs function
function getGrade(score){
    
     //validate
     if (
        typeof score !== "number" ||  
        score < 0 || 
        score > 100
    ) {
        
        return "Invalid score";
     } 

     //Process the result
    if(score >= 70){
        return "A";
    }
    else if(score >= 60){
        return "B";
    }
    else if(score >= 50){
        return "C";
    }
    else if(score >= 45){
        return "D";
    }
   
    else {
    
        return "F";
    }

}

console.log("score:", getGrade(student.score))

function getStudentStatus(student){

    if (student.isGraduated) {

        return "Graduated.";
        
    } else {
        return "Not graduated.";
    }

}

console.log("Status:", getStudentStatus(student));

function displayStudentProfile(student) {

    return `
    ${greetStudent(student.name)} 

    Student profile
    ---------------------------
    Name: ${student.name}
    Age: ${student.age}
    Course: ${student.course}
    Score: ${student.score}   
    Grade: ${getGrade(student.score)}
    Status: ${getStudentStatus(student)}`;    
}

const profile = displayStudentProfile(student);
console.log(profile);
const profile1 = displayStudentProfile(student1);
console.log(profile1);

console.log("-1:", getGrade(-1));

console.log("75:", getGrade(75));

console.log("65:", getGrade(65));

console.log("55:", getGrade(55));

console.log("45:", getGrade(45));

console.log("35:", getGrade(35));

console.log("100:",getGrade(100));
console.log("101:",getGrade(101));
console.log("0:",getGrade(0));
console.log("-1:",getGrade(-1));
console.log("100:",getGrade("100"));
console.log("Adam:",getGrade("Adam"));

// console.log(typeof 82);
// console.log(typeof "82");
// console.log(typeof "Adam");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
