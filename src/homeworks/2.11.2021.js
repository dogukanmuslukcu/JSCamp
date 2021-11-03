
const findPrime =(...numbers)=>{
    numbers.map(number =>{
         let isPrime = isNumberPrime(number)
         if(isPrime)
         console.log(number);
         
    })
}

const isNumberPrime = (number) =>{
    let isprime = true ;
    if(number<2){
        isprime = false ;
    }
    for(let i =2; i<number; i++){
        if(number%i==0){
            isprime=false ;
        }
    }
    return isprime ;
}

//findPrime(2,3,5,7,10,5)

const isFriendlyNumber= (number1,number2)=>{
    let total1=0;
    let total2=0
    for(let i =1; i<number1; i++){
       if(number1%i==0){
    total1+=i;
        }
    }
    for(let i =1; i<number2; i++){
        if(number2%i==0){
            total2+=i;
        }
    }
    if(total1==number2 &&total2==number1){
        console.log(number1+" ve "+number2+" are friendly number.");
    }else{
        console.log(number1+" ve "+number2+" aren't friendly number.");
    }
}
//isFriendlyNumber(220,284)

for (let index = 0; index < 1000; index++) {
   //findPrime(index)
}

for (let index = 1; index < 1000; index++) {
   let total=0
   for(let i =1; i<index; i++){
    if(index%i==0){
 total+=i;
     }
     
 }if(total==index){
         console.log(index);
     }
}