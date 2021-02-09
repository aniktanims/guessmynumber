/*
function bmiformula (x,y){
    const Mass = x, Height = y;
    const BMI = Mass / Height ** 2;
  return BMI;
}
let marksBmi = bmiformula(78,1.69);
let johnBmi = bmiformula(92,1.80);
let markHigherBMI = marksBmi > johnBmi;
console.log(markHigherBMI);

console.log(`Marks BMI is : ${marksBmi.toFixed(3)} `);
console.log(`John BMI is : ${johnBmi.toFixed(3)} `);

if (marksBmi >= johnBmi){
    console.log(`Mark's BMI (${marksBmi.toFixed(2)}) is higher than John's BMI(${johnBmi.toFixed(2)})!"`);
} else {
    console.log(`John's BMI (${johnBmi.toFixed(2)}) is higher than Marks's BMI (${johnBmi.toFixed(2)})!"`);
}
*/

/*Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins 97 + 112 + 101. Koalas 109 + 95 + 106
*/
// Program For Two Teams, if they 

document.getElementById("btn").onclick = function (){

 const Dolphins = document.getElementById("input1").value ;
 const Koalas = document.getElementById("input2").value;
 
 
 const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = 
 
 `Team 1 Average Score is: ${Dolphins} <br/>
 Team 2 Average Score is: ${Koalas}.<br/>
 And Both Team Average score is: ${Average}`
 
 // Comparing Scores
 if ( Dolphins >=100 && Koalas >=100 && Dolphins > Koalas  ){
     const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = (`Team 1 win the game by ${Dolphins}.`);
 }
 
 else if ( Koalas >=100 && Dolphins >=100 && Koalas > Dolphins ){
     const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = (`Team 2 win the game by ${Koalas}.`);
 }
 
 else if ( Dolphins >= 100 && Koalas >=100 && Dolphins === Koalas && Koalas === Dolphins ){
     const Average = (Dolphins + Koalas) / 2 ;
     document.getElementById("result").innerHTML = ("Match Draw!!");
     
 }
 
 else if (Dolphins < 100 && Koalas < 100)
 {
 
     const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = (" Both team doesn't have minimum scores of 100, Game Over.");
 
 } else if ( Dolphins < 100 && Koalas >= 100 ){
     const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = ("Team 1 Doesn't have minimum score.");
 } else if (Koalas < 100 && Dolphins >= 100){
     const Average = (Dolphins + Koalas) / 2 ;
 document.getElementById("result").innerHTML = ("Team 2 Doesn't have minimum score.");
 }
 
 else{
     
 }
 
}