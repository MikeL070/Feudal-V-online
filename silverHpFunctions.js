
     
function reduceSilver(amount, reason)
{
	var total = sessionStorage.silver;
	var hitPoints =sessionStorage.hitPoints;
	var weaponStatus = sessionStorage.getItem('weapon');
	var knowStatus = sessionStorage.getItem('knowledge');
	var armourStatus = sessionStorage.getItem('armour');
	var trainStatus = sessionStorage.getItem('training');
	var hpBoost=20;
	
	
	if(reason=='sword')
	{
		if(weaponStatus=='yes')
		{
			alert("You already have a sword");
		}
		else
		{
			if(Number(amount) > Number(total))
			{
				alert("You don't have enough silver for this!");
				
			}
			else{
			var newTotal =  Number(total) - Number(amount);
			sessionStorage.setItem('silver', newTotal);
			
			var moneySound = new Audio('moneySound.wav');
			moneySound.play();	
	
			alert('Success! You have gained a sword');
			sessionStorage.setItem('weapon', 'yes')
			}
		}
	}
	else if(reason=='armour')
	{
		var hpTotal = Number(hitPoints) + Number(hpBoost);
		
		if(armourStatus=='yes')
		{
			alert("You already have armour");
		}
		else
		{
			if(Number(amount) > Number(total))
			{
				alert("You don't have enough silver for this!");
				
			}
			else
			{
				var newTotal =  Number(total) - Number(amount);
				sessionStorage.setItem('silver', newTotal);
				
				var moneySound = new Audio('moneySound.wav');
				moneySound.play();				
				
				alert('Success! You have gained armour');
				sessionStorage.setItem('hitPoints', hpTotal);
				sessionStorage.setItem('armour', 'yes');
			}
		}
	}	
	else if(reason=='knights')
	{
		var hpTotal = Number(hitPoints) + Number(hpBoost);
		if(trainStatus=='yes')
		{
			alert("You have trained to the best of your ability");
		}
		else
		{
			if(Number(amount) > Number(total))
			{
				alert("You don't have enough silver for this!");
				
			}
			else
			{
				var newTotal =  Number(total) - Number(amount);
									
				sessionStorage.setItem('silver', newTotal);
				
				var moneySound = new Audio('moneySound.wav');
				moneySound.play();		
				
				alert('Success! You are now harder to kill');
				sessionStorage.setItem('hitPoints', hpTotal);
				sessionStorage.setItem('training', 'yes');
					
			}
		}
	}
	else
	{	
		if(knowStatus=='yes')
		{
			alert("You already know the location of the camp");
		}
		else
			{
				if(Number(amount) > Number(total))
				{
					alert("You don't have enough silver for this!");
					
				}
				else
				{
					var newTotal =  Number(total) - Number(amount);
					alert('Success! You have learned the exact location of the bandit camp');
					
					var moneySound = new Audio('moneySound.wav');
					moneySound.play();			
					
					sessionStorage.setItem('knowledge', 'yes');
					sessionStorage.setItem('silver', newTotal);
				}
			}
	}
};

function reduceHp(amount)
{
	var total = sessionStorage.hitPoints;
	var newTotal =  Number(total) - Number(amount);
	sessionStorage.setItem('hitPoints', newTotal);
	
	
	var alertStart= "OUCH! you took ";
	var alertEnd= " damage";
	alert(alertStart+  amount  +alertEnd);
	
	var hurtSound = new Audio('Ouch.wav');
	hurtSound.play();	
	
};


function increaseHp(amount)
{
	var total = sessionStorage.hitPoints;

	var newTotal =  Number(total) + Number(amount);
	sessionStorage.setItem('hitPoints', newTotal);
	
	
	alert("You are now able to take more damage");
	
};

function deadCheck()
{
	var total = sessionStorage.hitPoints;
	
	if(Number(total) <= 0)
	{
		alert('You have died!');
		window.location.replace('death.html');
	}	
};







  


