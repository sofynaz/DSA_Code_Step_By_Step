
function recursion_call(x) {
    console.log(x);
    if (x < 10) {
        recursion_call(x + 1)
    }
}
let data = 0;
// recursion_call(data)

function factoreal(fa) {
    console.log(fa)
    return fa

}
let data_fact = 5;
console.log(factoreal(data_fact))