window.addEventListener("load", function() {

    // Cargo variables

    let firstName = document.querySelector("#firstName-input");//acá va el valor del campo
    let firstNameBox = document.querySelector(".form-item.first-name");//acá va el clicked
    let firstNameLabel = document.querySelector(".form-item.first-name .form-label");//acá va el clicked y el valid
    let firstNameField = document.querySelector(".form-item.first-name .field-input");//acá va el invalid
    let firstNameErrorScriptActive = document.querySelector("#firstName-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let firstNameErrorContrCancel = document.querySelector(".form-item.first-name ul");//acá se activa el error
    let firstNameError = document.querySelector("#firstName-helper-text-script .caption");//acá va el mensaje de error

    let lastName = document.querySelector("#lastName-input");//acá va el valor del campo
    let lastNameBox = document.querySelector(".form-item.last-name");//acá va el clicked
    let lastNameLabel = document.querySelector(".form-item.last-name .form-label");//acá va el clicked y el valid
    let lastNameField = document.querySelector(".form-item.last-name .field-input");//acá va el invalid
    let lastNameErrorScriptActive = document.querySelector("#lastName-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let lastNameErrorContrCancel = document.querySelector(".form-item.last-name ul");//acá se activa el error
    let lastNameError = document.querySelector("#lastName-helper-text-script .caption");//acá va el mensaje de error

    let email = document.querySelector("#email-input");//acá va el valor del campo
    let emailBox = document.querySelector(".form-item.email");//acá va el clicked
    let emailLabel = document.querySelector(".form-item.email .form-label");//acá va el clicked y el valid
    let emailField = document.querySelector(".form-item.email .field-input");//acá va el invalid
    let emailErrorScriptActive = document.querySelector("#email-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let emailErrorContrCancel = document.querySelector(".form-item.email ul");//acá se activa el error
    let emailError = document.querySelector("#email-helper-text-script .caption");//acá va el mensaje de error

    let password = document.querySelector("#password-input");//acá va el valor del campo
    let passwordBox = document.querySelector(".form-item.password");//acá va el clicked
    let passwordLabel = document.querySelector(".form-item.password .form-label");//acá va el clicked y el valid
    let passwordField = document.querySelector(".form-item.password .field-input");//acá va el invalid
    let passwordErrorScriptActive = document.querySelector("#password-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let passwordErrorContrCancel = document.querySelector(".form-item.password ul");//acá se activa el error
    let passwordError = document.querySelector("#password-helper-text-script .caption");//acá va el mensaje de error

    let password2 = document.querySelector("#password-repeat-input");//acá va el valor del campo
    let password2Box = document.querySelector(".form-item.password-repeat");//acá va el clicked
    let password2Label = document.querySelector(".form-item.password-repeat .form-label");//acá va el clicked y el valid
    let password2Field = document.querySelector(".form-item.password-repeat .field-input");//acá va el invalid
    let password2ErrorScriptActive = document.querySelector("#password-repeat-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let password2Error = document.querySelector("#password-repeat-helper-text-script .caption");//acá va el mensaje de error

    let country = document.querySelector("#country-input");//acá va el valor del campo
    let countryBox = document.querySelector(".form-item.country");//acá va el clicked
    let countryLabel = document.querySelector(".form-item.country .form-label");//acá va el clicked y el valid
    let countryField = document.querySelector(".form-item.country .field-input");//acá va el invalid
    let countryErrorScriptActive = document.querySelector("#country-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let countryErrorContrCancel = document.querySelector(".form-item.country ul");//acá se activa el error
    let countryError = document.querySelector("#country-helper-text-script .caption");//acá va el mensaje de error

    let caracteres_min = 2;

/*     let marketCheckLabel = document.querySelector(".market .checkbox-span");//acá va el click
    let marketCheckInput = document.querySelector("#market");//acá va el valor */
    
    let keepMeLoggedIn = document.querySelector("#keepMeLoggedIn");//acá va el valor de check

    let addPicture = document.querySelector("#add-pic");//acá va el valor
    let addPictureErrorControllerActive =document.querySelector(".options .add-picture ul");//acá se activa el errorFromController)
    let addPictureErrorControllerField = document.querySelectorAll(".options .add-picture ul .helper-text.controller");//acá va el invalid
    let addPictureErrorScriptActive = document.querySelector(".options #addPicture-helper-text-script");//acá se activa el error (invalid y errorFromScript)
    let addPictureError = document.querySelector(".options #addPicture-helper-text-script .caption");//acá va el mensaje de error
    let addPictureFileInfo = document.querySelector(".options .file-text");//acá va la clase info

    let formulario = document.querySelector(".panel-content form");
    let submitButton = document.querySelector("#signup-submit");

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

    //Funcionalidad de check para "recordar usuario"
/*     keepMeLoggedIn.addEventListener("click", function(e){
        if(rememberLabel.classList.contains("clicked")){
            keepMeLoggedIn.checked = false;
        }else {
            keepMeLoggedIn.checked = true;
        }
        rememberLabel.classList.toggle("clicked");
        rememberSVG.classList.toggle("clicked");
    }); */


    //Validaciones para Nombre

    if(firstName.value != ''){
        firstNameLabel.classList.add('clicked');
    }

    firstName.addEventListener('focus', function(){
        firstNameErrorContrCancel.classList.remove('errorFromController');
        firstName.removeAttribute('value');
        firstNameBox.classList.add('clicked');
        firstNameLabel.classList.add('clicked');
        firstNameField.classList.remove('invalid');
        firstNameErrorScriptActive.classList.remove('errorFromScript')
        firstNameError.innerHTML = "";
        firstNameLabel.classList.remove('valid');
    });
    firstName.addEventListener('blur', function(){
        if(firstName.value === '' || firstName.value.length < caracteres_min){
            firstNameField.classList.add('invalid');
            firstNameErrorScriptActive.classList.add('errorFromScript');
            if(firstName.value == ''){
                firstNameError.innerHTML = "Ingresa tu nombre";
            }else{
                firstNameError.innerHTML = "Tu nombre debe tener al menos " + caracteres_min + " caracteres";
            }
        }else {
            firstNameField.classList.remove('invalid')
            firstNameErrorScriptActive.classList.remove('errorFromScript')
            firstNameBox.classList.remove('clicked');
            firstNameLabel.classList.remove('clicked');
            firstNameLabel.classList.add('valid');

        }
    });

    firstName.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })


    //Validaciones para Apellido

    if(lastName.value != ''){
        lastNameLabel.classList.add('clicked');
    }

    lastName.addEventListener('focus', function(){
        lastNameErrorContrCancel.classList.remove('errorFromController');
        lastName.removeAttribute('value');
        lastNameBox.classList.add('clicked');
        lastNameLabel.classList.add('clicked');
        lastNameField.classList.remove('invalid');
        lastNameErrorScriptActive.classList.remove('errorFromScript')
        lastNameError.innerHTML = "";
        lastNameLabel.classList.remove('valid');
    });
    lastName.addEventListener('blur', function(){
        if(lastName.value == '' || lastName.value.length < caracteres_min){
            lastNameField.classList.add('invalid');
            lastNameErrorScriptActive.classList.add('errorFromScript');
            if(lastName.value == ''){
                lastNameError.innerHTML = "Ingresa tu apellido";
            }else{
                lastNameError.innerHTML = "Tu apellido debe tener al menos " + caracteres_min + " caracteres";
            }
        }else {
            lastNameField.classList.remove('invalid')
            lastNameErrorScriptActive.classList.remove('errorFromScript')
            lastNameBox.classList.remove('clicked');
            lastNameLabel.classList.remove('clicked');
            lastNameLabel.classList.add('valid');

        }
    });

    lastName.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })    


    //Validaciones para Email

    if(email.value != ''){
        emailLabel.classList.add('clicked');
    }

    email.addEventListener('focus', function(){
        emailErrorContrCancel.classList.remove('errorFromController');
        console.log(email.value);
        email.removeAttribute('value');
        emailBox.classList.add('clicked');
        emailLabel.classList.add('clicked');
        emailField.classList.remove('invalid');
        emailErrorScriptActive.classList.remove('errorFromScript')
        emailError.innerHTML = "";
        emailLabel.classList.remove('valid');
    });
    email.addEventListener('blur', function(){
        console.log('validacion email:');
        console.log(email.value);
        console.log(emailIsValid(email.value));
        if(email.value == '' || !emailIsValid(email.value)){
            emailField.classList.add('invalid');
            emailErrorScriptActive.classList.add('errorFromScript');
            emailError.innerHTML = "Ingresa una dirección de correo electrónico válida";
        }else {
            emailField.classList.remove('invalid')
            emailErrorScriptActive.classList.remove('errorFromScript')
            emailBox.classList.remove('clicked');
            emailLabel.classList.remove('clicked');
            emailLabel.classList.add('valid');

        }
    });

    email.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Validaciones para Password

    if(password.value != ''){
        passwordLabel.classList.add('clicked');
    }

    password.addEventListener('focus', function(){
        passwordErrorContrCancel.classList.remove('errorFromController');
        console.log(password.value);
        password.removeAttribute('value');
        passwordBox.classList.add('clicked');
        passwordLabel.classList.add('clicked');
        passwordField.classList.remove('invalid');
        passwordErrorScriptActive.classList.remove('errorFromScript')
        passwordError.innerHTML = "";
        passwordLabel.classList.remove('valid');
    });
    password.addEventListener('blur', function(){
        console.log('validacion password:');
        console.log(password.value);
        if(password.value == '' || password.value.length < 8){
            passwordField.classList.add('invalid');
            passwordErrorScriptActive.classList.add('errorFromScript');
            passwordErrorScriptActive.classList.add('invalid');
            if(password.value == ''){
                passwordError.innerHTML = "Debes ingresar una contraseña";
            }else{
                passwordError.innerHTML = "La contraseña debe tener al menos 8 dígitos";
            };
        }else {
            passwordField.classList.remove('invalid')
            passwordErrorScriptActive.classList.remove('errorFromScript')
            passwordBox.classList.remove('clicked');
            passwordLabel.classList.remove('clicked');
            passwordLabel.classList.add('valid');
        }
    });

    password.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    //Validaciones para Password Repeat
    password2.addEventListener('focus', function(){
        console.log(password.value);
        password2.removeAttribute('value');
        password2Box.classList.add('clicked');
        password2Label.classList.add('clicked');
        password2Field.classList.remove('invalid');
        password2ErrorScriptActive.classList.remove('errorFromScript')
        password2Error.innerHTML = "";
        password2Label.classList.remove('valid');
    });
    password2.addEventListener('blur', function(){
        console.log('validacion password:');
        console.log(password.value);
         if(password.value != '' && (password2.value == '' || password2.value != password.value)){
            password2Field.classList.add('invalid');
            password2ErrorScriptActive.classList.add('errorFromScript');
            password2ErrorScriptActive.classList.add('invalid');
            if(password2.value == ''){
                password2Error.innerHTML = "Debes ingresar una contraseña";
            }else{
                password2Error.innerHTML = "Las contraseñas ingresadas no coinciden";
            };
        }else {
            password2Field.classList.remove('invalid')
            password2ErrorScriptActive.classList.remove('errorFromScript')
            password2Box.classList.remove('clicked');
            password2Label.classList.remove('clicked');
            if(password.value != ''){
                password2Label.classList.add('valid');
            }
        }
    });


    //Validaciones para Pais o region

    if(country.value != ''){
        countryLabel.classList.add('clicked');
    }

    country.addEventListener('focus', function(){
        countryErrorContrCancel.classList.remove('errorFromController');
        country.removeAttribute('value');
        countryBox.classList.add('clicked');
        countryLabel.classList.add('clicked');
        countryField.classList.remove('invalid');
        countryErrorScriptActive.classList.remove('errorFromScript')
        countryError.innerHTML = "";
        countryLabel.classList.remove('valid');
    });
    country.addEventListener('blur', function(){
        if(country.value === '' || country.value.length < caracteres_min){
            countryField.classList.add('invalid');
            countryErrorScriptActive.classList.add('errorFromScript');
            if(country.value == ''){
                countryError.innerHTML = "Ingresa un país";
            }else{
                countryError.innerHTML = "El país debe tener al menos " + caracteres_min + " caracteres";
            }
        }else {
            countryField.classList.remove('invalid')
            countryErrorScriptActive.classList.remove('errorFromScript')
            countryBox.classList.remove('clicked');
            countryLabel.classList.remove('clicked');
            countryLabel.classList.add('valid');

        }
    });

    country.addEventListener('keyup', function(event){
        // El número 13 es el "Enter" en el teclado
        if (event.keyCode === 13) {
            event.preventDefault();
            submitButton.click();
        }
    })

    addPicture.addEventListener('change', function(){
        addPictureErrorControllerActive.classList.remove('erroFromController');
        addPictureErrorControllerField.forEach(function(element){
            element.classList.remove('invalid');
        })
        if(addPicture.value != ''){
            console.log('entró para elminar error de foto')
            addPictureErrorScriptActive.classList.remove('invalid');
            addPictureErrorScriptActive.classList.remove('errorFromScript');
            addPictureError.classList.add('inform')
            addPictureFileInfo.classList.add('info');
            addPictureFileInfo.innerHTML = addPicture.value.split(/(\\|\/)/g).pop();
        } else {
            console.log('entró a generar error de foto')
            addPictureErrorScriptActive.classList.add('invalid');
            addPictureErrorScriptActive.classList.add('errorFromScript');
            addPictureError.innerHTML = "Debe seleccionar una foto";
        }
    });


/*     marketCheckLabel.addEventListener("click", function(e){
        if(marketCheckLabel.classList.contains("clicked")){
            marketCheckInput.checked = false;
        }else {
            marketCheckInput.checked = true;
        }
        marketCheckLabel.classList.toggle("clicked");
    }); */


    //Validacion del boton Submit
    submitButton.addEventListener('click', function(e){

        e.preventDefault();

        let validFirstName = false;
        let validLastName = false;
        let validEmail = false;
        let validPassword = false;
        let validCountry = false;
        let validPicture = false;

        //Valido first name
        if(firstName.value == '' || firstName.value.length < caracteres_min){
            firstNameField.classList.add('invalid');
            firstNameErrorScriptActive.classList.add('errorFromScript');
            if(firstName.value == ''){
                firstNameError.innerHTML = "Ingresa tu nombre";
            }else{
                firstNameError.innerHTML = "Tu nombre debe tener al menos " + caracteres_min + " caracteres";
            }
        }else{
            validFirstName = true;
        };

        //Valido last name
        if(lastName.value == '' || lastName.value.length < caracteres_min){
            lastNameField.classList.add('invalid');
            lastNameErrorScriptActive.classList.add('errorFromScript');
            if(lastName.value == ''){
                lastNameError.innerHTML = "Ingresa tu apellido";
            }else{
                lastNameError.innerHTML = "Tu apellido debe tener al menos " + caracteres_min + " caracteres";
            }
        }else{
            validLastName = true;
        }

        //Valido email
        if(email.value == '' || !emailIsValid(email.value)){
            emailField.classList.add('invalid');
            emailErrorScriptActive.classList.add('errorFromScript');
            emailError.innerHTML = "Ingresa una dirección de correo electrónico válida";
        }else {
            validEmail = true;
        };

        //Valido Password
        if(password.value == '' || password.value.length < 8){
            passwordField.classList.add('invalid');
            passwordErrorScriptActive.classList.add('errorFromScript');
            passwordErrorScriptActive.classList.add('invalid');
            if(password.value == ''){
                passwordError.innerHTML = "Debes ingresar una contraseña";
            }else{
                passwordError.innerHTML = "La contraseña debe tener al menos 8 dígitos";
            };
        }else{
            validPassword = true;
        }

        //Valido pais
        if(country.value == ''){
            countryField.classList.add('invalid');
            countryErrorScriptActive.classList.add('errorFromScript');
            countryError.innerHTML = "Ingresa un país";
        }else {
            validCountry = true;
        };

        //Valido subir foto
        if(addPicture.value == '') {
            addPictureErrorScriptActive.classList.add('errorFromScript');
            addPictureErrorScriptActive.classList.add('invalid');
            addPictureError.innerHTML = 'Por favor seleccionar una foto';

        }else {
            validPicture = true;
            console.log('la foto subida');
            console.log(addPicture.value);
        };

        if(validFirstName && validLastName && validEmail && validPassword && validCountry && validPicture){
            fetch("http://localhost:3001/api/usuarios/" + email.value)
                .then(function(respuesta){
                    return respuesta.json();                
                })
                .then(function(informacion){
                    console.log('informacion vale: ', informacion.usuario) 
                    if(informacion.usuario == null){
/*                         setCookie('email_sent', email.value, 1);
                        setCookie('urlFrom', window.location.href, 0.007);
                        setCookie('keepMeLoggedIn', keepMeLoggedIn.checked, 0.007);//10min de duracion */
                        console.log('va a hacer el submit')
                        console.log('el formulario es: ', formulario)
                        formulario.submit();
                    } else {
                        emailField.classList.add('invalid');
                        emailErrorScriptActive.classList.add('errorFromScript');
                        emailError.innerHTML = "La dirección de correo ingresada ya existe en nuestros registros";
                    }
                }).catch(function(error) {
                    // print the error details
                    console.log('error');
                })
        }else{
            console.log('algun campo tiene un error');
        }


    })

});

