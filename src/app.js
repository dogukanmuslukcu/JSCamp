//console.log("Hello world");
let sayi1 =10 ;
 sayi1 = "doğukan";
 let student= 
{
    id:1 , name :"doğukan"
}
//console.log(student);
function save(ogrenci ,puan=10 ,sac =10) {
    console.log(ogrenci.name+ " " + puan+" "+sac);
}
//save(student,undefined,50);
 let students = ["Doğukan Muslukçu","Berfin Muslukçu","Filiz Muslukçu"];
 //console.log(students);
 let students1 = [student,{id:2 , name :"doğukan"},"İzmir",{city:"Ankara"}]
  //console.log(students1);

//rest
  let showProducts = function (id,...products) {
      console.log(id);
      console.log(products[0]);
  }
   //console.log( typeof showProducts);
   //showProducts(10,["elma","armut","kiraz"]);
   //spread
  // let points = [0,2,4,5,6,54,56,12];
   //console.log(Math.max(...points));
   //console.log(..."abc","d","efgh",..."hjklm");

   //Destructing
   let poppulations =[10000,20000,30000,[40000,50000]];
   let [small,medium,high,[veryHigh,maximum]] = poppulations;
   console.log(small);
   console.log(medium);
   console.log(high);
   console.log(veryHigh);
   console.log(maximum); 

   function name1([small1],number) {
       console.log(small1);
   }
   name1(poppulations);

   let category={id :1 ,name :"içecek"}

  console.log(category["name"])
  let {id,name} = category;
  console.log(id);