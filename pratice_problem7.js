var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function remove_duplicate(numbers){

    let unique_vale = [];

    for(let i = 0; i< numbers.length; i++){

        let not_duplicate = true;
        for(let j = 0; j< unique_vale.length; j++){

            if(numbers[i] === unique_vale[j]){
                not_duplicate = false;
                break;
            }
        }

        if(not_duplicate == true){
            unique_vale.push(numbers[i])
        }
    }
    return unique_vale;
} 


console.log(remove_duplicate(numbers))
