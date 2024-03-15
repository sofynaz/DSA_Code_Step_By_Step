let data = [12, 32, 55, 85, 66, 95, 65]
let temp;

function reverse_Array(data, start, end) {
    if(start<=end){
        temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        reverse_Array(data, start + 1, end - 1)
    }
   
}

console.log(reverse_Array(data, 0, data.length - 1)); 
console.log(data);