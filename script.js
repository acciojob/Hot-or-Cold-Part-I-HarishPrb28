//your code here
let num = document.getElementById("num")
let respond = document.getElementById("respond")
let rnum = Math.floor(Math.random()*100)
	console.log(rnum)
function guessNum(){
let guess = document.getElementById("guess").value

	if(guess == rnum){
		num.innerHTML = `You guessed right, your number was ${rnum}`
	}
	else if(guess < rnum){
		respond.innerHTML ="Hot"
	}
	else if(guess > rnum){
		respond.innerHTML ="Cold"
	}	
	else {
		num.innerHTML = "Invalid Number"
	}
}
	


