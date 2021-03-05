class Login {
    get $email () { return $('input[id="loginEmail"]'); }
    get $password () { return $('input[placeholder="Enter Password"]'); }
    get $submit () { return $('button[type="submit"]'); }

    login ({ email, password }) {
        this.$email.setValue(email);
        this.$password.setValue(password);

	this.$submit.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      document.querySelector('form').submit();
    }});
	
	
    }
}

module.exports = Login;