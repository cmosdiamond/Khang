class Login {
    get $email () { return $('input[id="loginEmail"]'); }
    get $password () { return $('input[placeholder="Enter Password"]'); }
    get $submit () { return $('button:contains(^Login$)'); }

    login ({ email, password }) {
        this.$email.setValue(email);
        this.$password.setValue(password);

	this.$submit.click();	
	
    }
}

module.exports = Login;