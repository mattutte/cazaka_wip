window.addEventListener("load", function() {

    // Cargo variables

    let errorsController = document.querySelector(".signin-errors");

    let email = document.querySelector("#username");
    let emailInput = document.querySelector(".input-label.email");
    let emailError = document.querySelector(".form-container .error.email");

    let password = document.querySelector('#password');
    let passwordInput = document.querySelector(".input-label.password");
    let passwordError = document.querySelector(".form-container .error.password");

    let keepMeLoggedIn = document.querySelector("#remember-me");
    let rememberLabel = document.querySelector(".remember-me-label");
    let rememberSVG = document.querySelector(".remember-me-label .check-svg");

    let formulario = document.querySelector(".panel-content form");
    let submitButton = document.querySelector(".submit-button");

    let email_sent = getCookie("email_sent");
    console.log('email_sent vale: ', email_sent)
    document.cookie = "email_sent   = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

    //Creacion de funciones
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    };
    function getCookie(cname) {

        var allcookies = document.cookie;
        var arrayb = allcookies.split("; ");
        for (let i = 0; i<arrayb.length; i++){
            if (arrayb[i].startsWith(cname)){
                return arrayb[i].replace(cname+"=","");
            }
        }
    };

    // console.log("el error enviado desde el controlador es:");
    // console.log(getCookie("loginErrorType"));

    //Cargo tipo de error enviado desde controlador
    let errorType2 = "";
    if(getCookie("loginErrorType") != undefined){
        errorType2 = getCookie("loginErrorType");
    }

    // console.log(document.cookie);
    // console.log("el errorType2 desde signin:");
    // console.log(errorType2);
    document.cookie = "loginErrorType= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

    //Inicializo errores
    console.log('el errorType vale: ', errorType2)
    email.value = email_sent? email_sent : '';
    if(errorType2 != ""){
        let email_sent = getCookie("email_sent");
        console.log('email sent vale: ', email_sent)
        email.setAttribute('value', email_sent? email_sent : '');
        document.cookie = "email_sent= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

        if(email.value != '' && password.value != ''){
            if(errorType2 == 1){
                emailError.innerHTML = 'El usurario ingresado no coincide con nuestra base de datos';
                emailInput.classList.add('invalid');
            } else {
                passwordInput.classList.add('invalid');
                passwordError.innerHTML = 'La contrase??a ingresada es erronea';
            }
        } else {
            emailInput.classList.add('invalid');
            passwordInput.classList.add('invalid');
        }
    }else{
        email.setAttribute('value', "");
    }

    //Validaciones para Email
    email.addEventListener('focus', function(){
        console.log(email.value);
        errorsController.classList.remove('invalid');
        email.removeAttribute('value');
        emailInput.classList.add('clicked');
        emailInput.classList.remove('invalid');
        emailError.innerHTML = "";
    });
    email.addEventListener('blur', function(){
        console.log('validacion email:');
        console.log(email.value);
        console.log(emailIsValid(email.value));
        if(email.value == '' || !emailIsValid(email.value)){
            emailInput.classList.add('invalid')
            emailError.innerHTML = "Ingresa una direcci??n de correo electr??nico v??lida";
        }else {
            emailInput.classList.remove('invalid')
            emailInput.classList.remove('clicked');
        }
    });
    email.addEventListener('keyup', function(event){
        // El n??mero 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Validaciones para Password
    password.addEventListener('focus', function(){
        errorsController.classList.remove('invalid');
        password.removeAttribute('value');
        passwordInput.classList.add('clicked');
        passwordInput.classList.remove('invalid')
        passwordError.innerHTML = "";
    });
    password.addEventListener('blur', function(){
        if(password.value == ''){
            passwordInput.classList.add('invalid')
            passwordError.innerHTML = "Ingresa una contrase??a";
        }else {
            passwordInput.classList.remove('invalid')
            passwordInput.classList.remove('clicked');
        }
    });
    password.addEventListener('keyup', function(event){
        // El n??mero 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Funcionalidad para recordar usuario
    keepMeLoggedIn.addEventListener("click", function(e){
        if(rememberLabel.classList.contains("clicked")){
            keepMeLoggedIn.checked = false;
        }else {
            keepMeLoggedIn.checked = true;
        }
        rememberLabel.classList.toggle("clicked");
        rememberSVG.classList.toggle("clicked");
    });

    //Guardo pagina de origen en caso de que eventlistener de submit no funcione
    setCookie('urlFrom', window.location.href, 0.007);

    //Validacion del boton Submit
    submitButton.addEventListener('click', function(e){

        e.preventDefault();

        let validEmail = 0;
        let validPassword = 0;

        if(email.value == '' || !emailIsValid(email.value)){
            emailInput.classList.add('invalid')
            emailError.innerHTML = "Ingresa una direcci??n de correo electr??nico v??lida";

        }else {
            validEmail = 1;
        };

        if(password.value == ''){
            passwordInput.classList.add('invalid');
            passwordError.innerHTML = "Ingresa una contrase??a";
        } else {
            validPassword = 1;
        };

        if(validEmail * validPassword == 1){
            console.log('todo bien');
            console.group('entrando al fetch');
            password_given = password.value
            fetch("http://localhost:3001/api/usuarios/" + email.value)
                .then(function(respuesta){
                    console.log('entro al primer then');
                    return respuesta.json();                    
                })
                .then(function(informacion){
                    if(informacion.usuario!=null){
                        // let correct_password = informacion.passwd
                        //const check = bcrypt.compareSync(password_given, correct_password);
                        // const check = (correct_password == password_given)
                        // console.log('contrase??as: ');
                        // console.log('correct_password: ' + correct_password);
                        // console.log('password given: ' + password_given);
                        // if(check){
                        //     console.log('todo ok');
                        //     //formulario.submit();
                        // } else {
                        //     console.log('contrase??a incorrecta');
                        //     passwordBox.classList.toggle('invalid');
                        //     passwordError.innerHTML = "La contrase??a ingresada es incorrecta";
                        // }
                        setCookie('email_sent', email.value, 1);
                        setCookie('urlFrom', window.location.href, 0.007);
                        setCookie('keepMeLoggedIn', keepMeLoggedIn.checked, 0.007);//10min de duracion
                        console.log("valor grabado en la cookie desde submit:");
                        console.log(getCookie("urlFrom"));
                        console.log(document.cookie)
                        formulario.submit();
                    } else {
                        console.log('usuario incorrecto');
                        emailInput.classList.toggle('invalid');
                        emailError.innerHTML = "La direcci??n de correo ingresada no coincide con ninguna en nuestra base de datos";
                    }
                }).catch(function(error) {
                    // print the error details
                    console.log('error');
                });


            
        }


    })

/*     submitButton.addEventListener('click', function(e){
        formulario.submit();
    })
 */
});

