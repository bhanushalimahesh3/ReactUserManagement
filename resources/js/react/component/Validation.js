function validateSignup({name, email, pwd, cpwd}) {
        let errorCount = 0;
        const errors  =  {
                            name: {
                                valid: true,
                                message: ''
                            },
                            email: {
                                valid: true,
                                message: ''
                            },
                            pwd: {
                                valid: true,
                                message: ''
                            },
                            cpwd: {
                                valid: true,
                                message: ''
                            }
                        };

        if(name == '' || name.length == 0){
            errors.name = {
                valid:false,
                message:'Name field is required'
            };
            errorCount += 1;
        }else{
            errors.name = {
                valid:true,
                message:''
            };
        }

        if(email == '' || email.length == 0){
            errors.email = {
                valid:false,
                message:'Email field is required'
            };
            errorCount += 1;

        }else{
            errors.email = {
                valid:true,
                message:''
            };
        }

        if(pwd == '' || pwd.length == 0){
            errors.pwd = {
                valid:false,
                message:'Password field is required'
            };
            errorCount += 1;
        }else{
            errors.pwd = {
                valid:true,
                message:''
            };
        }

        if(cpwd == '' || cpwd.length == 0 || pwd != cpwd){
            errors.cpwd = {
                valid:false,
                message:'Confirm password field is required. Password & Confirm password mismatch'
            };
            errorCount += 1;
        }else{
            errors.cpwd = {
                valid:true,
                message:''
            };
        }

        return {errors, errorCount};
    }
function validateSignin({email, pwd}) {
		let errorCount = 0;
		const errors  =  {
							email: {
								valid: true,
								message: ''
							},
							pwd: {
								valid: true,
								message: ''
							}
						};


		if(email == '' || email.length == 0){
			errors.email = {
				valid:false,
				message:'Email field is required'
			};
			errorCount += 1;

		}else{
			errors.email = {
				valid:true,
				message:''
			};
		}

		if(pwd == '' || pwd.length == 0){
			errors.pwd = {
				valid:false,
				message:'Password field is required'
			};
			errorCount += 1;
		}else{
			errors.pwd = {
				valid:true,
				message:''
			};
		}

		return {errors, errorCount};
	}    

export {validateSignup, validateSignin};    