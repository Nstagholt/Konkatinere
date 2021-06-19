//function combineArray(array1, array2) {
  //return [...array1, ...array2]; 
//}
 

class myClass {
    constructor(array1, array2){
        this.array1 = array1
        this.array2 = array2
    }
    get getCombined(){
        return this.combineArray();
    }
    combineArray() {
       let result = [];

       for(let index in this.array1){
          result.push(this.array1[index]) 
       }
       for(let index in this.array2) {
        result.push(this.array2[index]);
       }
       return result;
    }
}

let calc = new myClass([1,2,3],[4,5,6]);
console.log(calc.getCombined);