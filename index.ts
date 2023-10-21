import inquirer from "inquirer";


let balance = Math.floor(Math.random()*10000)
console.log(balance);

let answers = await inquirer.prompt([
    {
        type: "string",
        name: "ID",
        message: "Enter your ID"
    },
     {
        type: "number",
        name: "Password",
        message: "Enter your password"
    }, {
        type: "list",
        name: "AccountType",
        choices: ["Current" , "Saving"]
    },
      {
        type: "list",
        name: "TransactionType",
        choices: ["Fast cash" , "Withdrwl"]
    },  
    {
        type: "number",
        name: "amount",
        message:"Enter the amount",
        when(answers) {
            return answers.TransactionType == "Withdrwl"
            
        }
    },{
        type: "list",
        name: "amount",
        choices: ["1000" , "2000","3000","5000",],
        message:"Select the amount",
        when(answers) {
            return answers.TransactionType == "Fast cash"
            
        }
    }

])
let userEnteredAmount = answers.amount;
if(userEnteredAmount < balance){
    let remaining = balance - userEnteredAmount;
    console.log(`You have just debited a amount ${userEnteredAmount} and you have remaining amount of ${remaining}` );   
}
else{
    console.log("You have unsufficient balance");
    
}
