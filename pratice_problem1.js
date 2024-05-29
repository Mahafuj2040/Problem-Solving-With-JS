
function grade_calculation(Number){

    if (Number >=80 && Number <= 100){
        console.log("You have got  A+")
    }

    else if (Number >= 70 && Number <=79){
        console.log("You have got A")
    }

    else if(Number >= 60 && Number <= 69)
        {
            console.log("You have got A-")
        }
    
    else if(Number >= 50 && Number <= 59){
        console.log("You have got B")
    }
    else if(Number >= 40 && Number <= 49)
        {
            console.log("You have got C")
        }
    else if(Number >= 33 && Number <= 39){
        console.log("You have got D")
    }
    else{
        console.log("You are failed")
    }
}


grade_calculation(1)