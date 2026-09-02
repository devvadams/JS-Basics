const student = {
 name : "Adam",
 age : 29,
 course : "Computer Science",
 score : 82,
 isGraduated : true,

}

console.log(
    `Name: ${student.name},Course: ${student.course},Score : ${student.score}`
);

function greetStudent(name){

    return `Welcome, ${name}!`;
}

console.log(greetStudent('Adam'));

//Inputs function
function getGrade(score){
    
     //validate
     if ((typeof score !=="number") || ( score < 0)) {
        
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

console.log("82:", getGrade(-1));

console.log("75:", getGrade(75));

console.log("65:", getGrade(65));

console.log("55:", getGrade(55));

console.log("45:", getGrade(45));

console.log("35:", getGrade(35));

// console.log(typeof 82);
// console.log(typeof "82");
// console.log(typeof "Adam");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

function getGraduationMessage(student){
    
    if(student.isGraduated === true ){
        return `Congratulations, ${student}! you have graduated.`;
    }
    else{
        return `${student}, Keep working hard. You have'nt graduated yet.`;
    }
}

console.log(getGraduationMessage('Adam'))