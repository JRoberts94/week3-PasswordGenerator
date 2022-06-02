
//Code Plan:
//-when the user clicks the button


const generateButton = document.getElementById("generate");

//code below is setting parameters for pw length, so user MUST abide by function rule/argument
function askPwLength(){
    //-ask the user how long do you want the password? between 1-128
    const pwLength = Number(prompt("Enter a number between 8 to 128 for password length"));
    console.log(pwLength);

    //can only accept number values
    //in range between 8 - 128
    //if user typed in wrong input, re ask question
   
    const pwLengthWrong = pwLength < 8 || pwLength > 128;
    const nothing = pwLength === 0;

    if(pwLengthWrong || nothing){
      return askPwLength();
    }

  return pwLength;

}

//code here is using prompt to ask the below question in boolean (true/ False)
function askCriteria(){
  //-ask the user do you want lowercase?
  const lowercaseWanted = confirm("do you want to use Lowercase?")
  console.log("Lowercase wanted:", lowercaseWanted );
 
  //-ask the user do you want uppercase
  const uppercaseWanted = confirm("do you want to use Uppercase?")
  console.log("Uppercase wanted:",uppercaseWanted);
  
  //-ask the user do you want numbers
  const numbersWanted = confirm("do you want to use Numbers?")
  console.log("Numbers wanted:",numbersWanted);

 //-ask the user do you want special chars/symbols
  const symbolsWanted = confirm("do you want to use Symbols?")
  console.log("Symbols wanted:",symbolsWanted);


//- user needs to select at least one criteria

  if (lowercaseWanted || uppercaseWanted || numbersWanted || symbolsWanted) {
    return {
      lowercaseWanted,
      uppercaseWanted,
      numbersWanted,
      symbolsWanted,

    };
  }
  
 //-if user doesnt, re ask criteria questions
  return askCriteria();
} 

//code below is creating the click event functions above, to init both functions
generateButton.addEventListener('click', function(event){

    const pwLength = askPwLength();

    const criteria = askCriteria();
    // console.log(criteria);

//-generate password
//build char set
let charSet = "";
if(criteria.lowercaseWanted){
  charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
}
if(criteria.uppercaseWanted){
  charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(criteria.numbersWanted){
  charSet += "0123456789";
}
if(criteria.symbolsWanted){
  charSet += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}
//generate the random password based on chosen criteria

let password = "";
//loop for pwLength times:
for(let index = 0; index < pwLength; index++){
  //for each choice, we want to generate a random char based on char set
  const randomChar = charSet[Math.floor(Math.random() * charSet.length)];
  //add this random char to pw
  password += randomChar;
}

//console logging the password generated
// console.log(password);


//show the generated password with targeting the html location
document.getElementById('password').value = password;
});







