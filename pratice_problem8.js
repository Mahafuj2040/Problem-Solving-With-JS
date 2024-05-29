var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

function bigest_num(array){
    let biggest_number = 0;

    for(let i = 0; i< array.length; i++){
        if(array[i] > biggest_number){
            biggest_number = array[i];
        }
    }
    return biggest_number;
}

console.log(bigest_num(numbers));