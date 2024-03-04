import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"

const sleep = ()=>{
    return new Promise((res)=>{
    setTimeout(res,2000)
    
     } )
}

async function start () {
    let gameTITLE = chalkAnimation.rainbow("Let's play a game !")
    await sleep()
    gameTITLE.stop
}
/*async function loop (){
    const playNum = await inquirer.prompt([
        {
            type:"number",
            name:"loop",
            message:"How many times you want to play:"
        }
    ])
for (let i = 0 ; i < playNum.loop.length ;i++){
    console.log(guessNumber(),i)
}

}*/



async function guessNumber() {
  
    await start()
    //await loop()
    const systemGen = (Math.floor (Math.random()*10))
    const personGuess = 
  await  inquirer .prompt([
         {type:"number",
        name :"GuessNum",
         message:"Write a number between 1 to 10:"


}

   ])

   const printSystem= systemGen;
   const user = personGuess.GuessNum
   console.log(`System Generated number = ${printSystem}`)
   console.log(`Your guess = ${user}`)
if (systemGen==personGuess.GuessNum){
 console.log(chalk.bgBlueBright("YOHOO CONGRATULATIONS ! YOU WON"))
 console.log("You got 10 points")
}

else (
    console.log(chalk.bgMagentaBright("TRY! NEXT TIME "))
)

}


//guessNumber()

async function restart() {
    

do {
   await guessNumber()
   var again=  await inquirer
   .prompt([
    {
        type:"input",
        name : "restart",
        message:chalk.red("Do You want to continue Press y :")
    }
   ])
 } while(again.restart=="yes"||again.restart=="Yes"||again.restart=="y"||again.restart=="Yes")

}

restart()