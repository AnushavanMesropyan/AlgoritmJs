/***********************************
* Js  Algoritm sort array numbers  *
* **********************************/
var num = [1, 25, 2, 8, 3, 70, 97, 42];
function sortArr(arr) {
    len = arr.length;
    for(i = len-1;i>=0;i--){
        for (j = 1;j <= i;j++){
            if(arr[j-1]<arr[j]){
                var temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr)
}
sortArr(num);
/****************************************
 * End Js  Algoritm sort array numbers  *
 ****************************************/


/****************************************
 * Js  Algoritm  simple and complicated  *
 ****************************************/

function isPrime(n){
    var divisor = 2;

    while (n > divisor){
        if(n % divisor == 0){
            //return false;
            return 'complicated';
        }
        else
            divisor++;
    }
    //return true;
    return 'simple';
}
console.log(isPrime(11));
/*********************************************
 * End Js  Algoritm  simple and complicated  *
 *********************************************/