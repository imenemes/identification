 
// Create a registration system
var objPeople = [
	{
		username: 'imen',
		password: 'securite'
	}
]

// login functionality
function login() {
	// retreive data from username and store in username variable
	var username = document.getElementById('nomUtil').value
	// retreive data from password and store in password variable
	var password = document.getElementById('mdp').value

	// loop through all the user objects and confrim if the username and password are correct
	for(var i = 0; i < objPeople.length; i++) {
		// check to
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + ' est conncte!!!')
			// stop the statement if result is found true
			break
		} else {
			// error if username and password don't match
			alert('Identifiant ou mot de passe incorrect')
		}
	}
}

// register functionality
function registerUser() {
	// store new users username
	var registerUsername = document.getElementById('nomUtil').value
	// store new users password
	var registerPassword = document.getElementById('mdp').value
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUsername == objPeople[i].username) {
			// alert user that the username is take
			alert('Cet identifiant est deja utilise, choisissez un autre')
			// stop the statement if result is found true
			return
		// check if new password is 8 characters or more
		} else if (!validateMDP(registerPassword)) {
			// alert user that the password is to short
			alert('Mot de passe invalide, le mot de passe doit contenir au moins 8 caracteres dont une majuscule , une minuscule et un caractere special')
			// stop the statement if result is found true
			return
		}
	}
	// push new object to the people array
	objPeople.push(newUser)
	// console the updated people array
	console.log(objPeople)
    alert(newUser.username+' enregistre')
}

function validateMDP(mdp){
    var Reg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
    return Reg.test(mdp);
}




function validate(){
    var regName = /^imen$/;
    var regMdp = /^secu$/;
    var name = document.getElementById('nomUtil').value;
    var mdp = document.getElementById('mdp').value;
    if(!regName.test(name) || !regMdp.test(mdp)){
        alert('Erreur, recommencez).');
        document.getElementById('nomUtil').focus();
        return false;
    }else{
        alert('Vous êtes connecté');
        return true;
    }
}
