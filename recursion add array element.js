let sum = 0;
let i = 0;
function addArrayElement() {
    let arr = [1, 2, 3, 4, 5, 6];
    if (i != arr.length) {


        sum = sum + arr[i];
        i++;
        addArrayElement();
    }

}

addArrayElement();
console.log(sum);