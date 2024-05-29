
function Sort_ary(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}


let arr = [1, 5, 4, 3, 2, 9, 8, 6, 7, 20, 19, 16, 18, 17, 10, 12, 11, 13, 15, 14]
let sortedArr = Sort_ary(arr);
console.log("Sorted array:", sortedArr);
