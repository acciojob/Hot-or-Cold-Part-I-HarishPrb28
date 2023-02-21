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
	else if(guess > rnum && guess <100) {
		respond.innerHTML ="Hot"
	}
	else if(guess < rnum && guess >1) {
		respond.innerHTML ="Cold"
	}	
	else{
		respond.innerHTML = "It should be between 1 and 100"
	}
}
	


