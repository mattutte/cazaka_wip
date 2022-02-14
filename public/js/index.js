if(window.location.href != 'http://localhost:3001/signin' && window.location.href != 'http://localhost:3001/signup'){
window.addEventListener("load", function() {

    //Definicion de variables
    let loginBox = document.querySelector('#login_box');
    let loginCloseButton = document.querySelector('#closingButton');
    let loginView = document.querySelector('#loginView');

    let email = document.querySelector('[name="email"]');
    let emailBox = document.querySelector(".login-box-text-input");
    let emailError = document.querySelector(".emailAddress .error");

    let password = document.querySelector('[name="psw"]');
    let passwordError = document.querySelector(".passwordField .error");
    let passwordBox = document.querySelector(".login-box-text-input-password");

    let keepMeLoggedInCheckbox = document.querySelector(".keepMeLoggedIn");
    let checkbox = document.querySelector(".keepMeLoggedIn input");
    
    let submitButton = document.querySelector(".login-box-submit-button");
    let formulario = document.querySelector(".login-box form");
    let email_sent = getCookie("email_sent");
    console.log('email_sent vale: ', email_sent)
    document.cookie = "email_sent   = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

    //Creacion de funciones
    function switchModal() {
        loginBox.classList.toggle('is-active');
        if (loginCloseButton.style.display === 'none') {
            loginCloseButton.style.display = 'block';
          } else {
            loginCloseButton.style.display = 'none';
          };
        
        if (loginView.style.display === 'none') {
          loginView.style.display = 'block';
        } else {
          loginView.style.display = 'none';
        };
        
        loginView.style.display = 'block';
    };
    function resetModal() {
        let password = document.querySelector('[name="psw"]');
        let email = document.querySelector('[name="email"]');
        let emailBox = document.querySelector(".login-box-text-input");
        let passwordBox = document.querySelector(".login-box-text-input-password");

        password.value = null;
        email.value = null;
        passwordBox.classList.remove('invalid');
        emailBox.classList.remove('invalid');
        checkbox.checked = true;
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
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    function validateEmail(inputText){

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(inputText.value == ''){
            return false;
        }

        if(inputText.value.match(mailformat)){
            return true;
        } else {
            return false;
            }
    };
    function emailIsValid (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    };


    console.log('ejecuto scrip de signin en header');
    console.log('la cookie de urlTo vale: ', getCookie("urlTo"))
    console.log('la cookie de errorType vale: ', getCookie("loginErrorType"))

    //Preparacion del Modal segun error recibido del controlador
    let errorType = getCookie("loginErrorType");
    console.log('el errorTyle enviado desde el backend es: ', getCookie("loginErrorType"))
    let modalMode = false;
    email.value = email_sent? email_sent : '';
    if (getCookie("urlTo") != undefined){
        let errorFrom = getCookie("urlTo");
        console.log('el error viene de: ', errorFrom)
        modalMode = !errorFrom.includes("signin");
        console.log("modalMode es:")
        console.log(modalMode);
    }
    console.log('errorType vale: ', errorType)
    if(errorType != undefined && modalMode){
        if(errorType == 1){
            //El usuario no existe
            switchModal();
            emailBox.classList.toggle('invalid');
            emailError.innerHTML = "El usurario ingresado no coincide con nuestra base de datos";
        } else {
            //La contraseña es erronea
            console.log('entró donde debia');
            passwordBox.classList.toggle('invalid');
            passwordError.innerHTML = "La contraseña ingresada es erronea";
            email.setAttribute('value', getCookie("email_sent"));
            document.cookie = "email_sent" + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
        if(modalMode){
            switchModal();
        }
    }
    // console.log("el valor del modalMode desde el index es:")
    // console.log(modalMode);
    if(!modalMode){
        document.cookie = "loginErrorType   = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }
    // console.log("el valor del modalMode desde el index es:")
    // console.log(modalMode);
    // console.log("la cookie de error en index da:")
    // console.log(getCookie("loginErrorType"));


    //Cambio de formato de inputs
    if(getCookie('usuarioRecordado') == undefined){
        let signinButton = document.querySelector(".nav-right-menu #signin a");
        signinButton.addEventListener("click", function(e){
            console.log("entró al evento");
            e.preventDefault();
            switchModal();
        });
    }
    loginCloseButton.addEventListener("click", function(e){
        switchModal();
        resetModal();
    });
    keepMeLoggedInCheckbox.addEventListener("click", function(e){
        console.log('entro a la validacion de loggedin')
        if(checkbox.checked){
            checkbox.checked = false;
        }else {
            checkbox.checked = true;
        }
    });

    //Cookies a ejecutar cuando el eventlistener del submit está desactivado
    setCookie('urlFrom', window.location.href, 60000);

    //Validaciones para Email
    email.addEventListener('blur', function(){
        if(email.value == '' || !emailIsValid(email.value)){
            emailBox.classList.toggle('invalid')
        }else {
            emailBox.classList.remove('invalid')
        }
    })
    email.addEventListener('focus', function(){
        email.removeAttribute('value');
        if(email.value == '' || !emailIsValid(email.value)){
            emailBox.classList.remove('invalid');
            emailError.innerHTML = "Ingresa una dirección de correo electrónico válida";
        }
    })
    email.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Validaciones para password
    password.addEventListener('blur', function(){
        if(password.value == ''){
            passwordBox.classList.toggle('invalid')
        }else {
            passwordBox.classList.remove('invalid')
        }
    })
    password.addEventListener('focus', function(){
        if(password.value == ''){
            passwordBox.classList.remove('invalid');
            passwordError.innerHTML = "Ingresa una contraseña";
        }
    })
    password.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Validacion del Submit

    submitButton.addEventListener('click', function(e){

        e.preventDefault();

        let validEmail = 0;
        let validPassword = 0;

        if(email.value == '' || !emailIsValid(email.value)){
            emailBox.classList.add('invalid')
            emailError.innerHTML = "Ingresa una dirección de correo electrónico válida";

        }else {
            validEmail = 1;
        };

        if(password.value == ''){
            passwordBox.classList.add('invalid');
            passwordError.innerHTML = "Ingresa una contraseña";
        } else {
            validPassword = 1;
        };

        if(validEmail * validPassword == 1){
            console.log('todo bien');
            console.group('entrando al fetch');
            //const password_given = bcrypt.hashSync(password.value, 10);
            password_given = password.value
            fetch("http://localhost:3001/api/usuarios/" + email.value)
                .then(function(respuesta){
                    console.log('entro al primer then');
                    return respuesta.json();                    
                })
                .then(function(informacion){
                    console.log(informacion.usuario)
                    if(informacion.usuario!=null){
                        // let correct_password = informacion.passwd
                        //const check = bcrypt.compareSync(password_given, correct_password);
                        // const check = (correct_password == password_given)
                        // console.log('contraseñas: ');
                        // console.log('correct_password: ' + correct_password);
                        // console.log('password given: ' + password_given);
                        // if(check){
                        //     console.log('todo ok');
                        //     //formulario.submit();
                        // } else {
                        //     console.log('contraseña incorrecta');
                        //     passwordBox.classList.toggle('invalid');
                        //     passwordError.innerHTML = "La contraseña ingresada es incorrecta";
                        // }

                        setCookie('email_sent', email.value, 1);
                        setCookie('urlFrom', window.location.href, 0.007);
                        setCookie('keepMeLoggedIn', checkbox.checked, 0.007);//10min de duracion
                        console.log("valor grabado en la cookie desde submit:");
                        console.log(getCookie("urlFrom"));
                        console.log('el email_sent agregado a la cookie es: ', email.value)
                        console.log(document.cookie)
                        formulario.submit();

                    } else {
                        console.log('usuario incorrecto');
                        emailBox.classList.toggle('invalid');
                        emailError.innerHTML = "La dirección de correo ingresada no coincide con ninguna en nuestra base de datos";
                    }
                });


            
        }


    })

})
}
