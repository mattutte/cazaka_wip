window.addEventListener("load", function () {
    let first_name = document.querySelector('[name="first_name"]');
    let last_name = document.querySelector('[name="last_name"]');
    let country = document.querySelector('[name="pais"]');
    let face_pic = document.getElementById("facepic");
    let cancelButton = document.getElementById("cancel-button");
    let erroresformulario = [];
  
    let form = document.getElementById("form");
    let submitButton = document.querySelector("#signup-button");
  
    // function emailIsValid(email) {
    //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // }
  
    // let email = document.querySelector("#email-input");
    // email.addEventListener("blur", function () {
    //   console.log(email.value);
  
    //   if (email.value == "" || !emailIsValid(email.value)) {
    //     console.log("hay problemas con el emaiil");
    //     this.style.border = " 2px solid red";
    //     document.querySelector("#comentario-email").innerText =
    //       "Email invalido o vacio. ";
    //   } else {
    //     console.log("no hay problemas con el emaiil");
    //     this.style.border = " 2px solid green";
    //     document.querySelector("#comentario-email").innerText = "";
    //   }
    // });
  
    //Validaciones para password
    let psw = document.querySelector("#password-input");
    console.log(psw.value);
    psw.addEventListener("blur", function () {
      if (psw.value == "" || psw.value.length < 8) {
        //password.classList.add('psw-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-psw").innerText =
          "Debe completar una password de al menos 8 caracteres. ";
      } else {
        //email.classList.remove('psw-invalido');
        this.style.border = " 2px solid green";
        document.querySelector("#comentario-psw").innerText = "";
      }
    });
  
    psw.addEventListener("focus", function () {
      this.style.border = " 2px solid blue";
      document.querySelector("#comentario-psw").innerText = "";
    });
  
    //Validaciones para Repeat Password
    let pswrepeat = document.querySelector('[name="pswrepeat"]');
    console.log(pswrepeat.value);
    pswrepeat.addEventListener("blur", function () {
      if (
        (pswrepeat.value === "" && psw.value != "") ||
        (pswrepeat.value != psw.value && psw.value != "")
      ) {
        //passwordRepeat.classList.add('pswrepeat-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-pswrepeat").innerText =
          "Debe repetir la clave y que coincidan. ";
      } else {
        //email.classList.remove('pswrepeat-invalido');
        if (psw.value === "") {
          this.style.border = "";
        } else {
          this.style.border = " 2px solid green";
        }
        document.querySelector("#comentario-pswrepeat").innerText = "";
      }
    });
  
    pswrepeat.addEventListener("focus", function () {
      this.style.border = " 2px solid blue";
      document.querySelector("#comentario-pswrepeat").innerText = "";
    });
  
    //Validaciones para Nombre
    first_name.addEventListener("blur", function () {
      console.log(first_name.value);
      if (first_name.value == "" || first_name.value.length < 2) {
        //first_name.classList.add('first_name-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-first_name").innerText =
          "Debe completar con un nombre de al menos dos caracteres. ";
      } else {
        //email.classList.remove('first_name-invalido');
        this.style.border = " 2px solid green";
        document.querySelector("#comentario-first_name").innerText = "";
      }
    });
  
    first_name.addEventListener("focus", function () {
      this.style.border = " 2px solid blue";
      document.querySelector("#comentario-first_name").innerText = "";
    });
  
    //Validaciones para Apellido
    last_name.addEventListener("blur", function () {
      console.log(last_name.value);
      if (last_name.value == "" || last_name.value.length < 2) {
        //last_name.classList.add('last_name-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-last_name").innerText =
          "Debe completar con un apellido de al menos dos caracteres. ";
      } else {
        //email.classList.remove('last_name-invalido');
        this.style.border = " 2px solid green";
        document.querySelector("#comentario-last_name").innerText = "";
      }
    });
  
    last_name.addEventListener("focus", function () {
      this.style.border = " 2px solid blue";
      document.querySelector("#comentario-last_name").innerText = "";
    });
  
    //Validaciones para Pais
    country.addEventListener("blur", function () {
      console.log(country.value);
      if (country.value == "" || country.value.length < 2) {
        //last_name.classList.add('country-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-pais").innerText =
          "Debe completar con un pais valido. ";
      } else {
        //email.classList.remove('country-invalido');
        this.style.border = " 2px solid green";
        document.querySelector("#comentario-pais").innerText = "";
      }
    });
  
    country.addEventListener("focus", function () {
      this.style.border = " 2px solid blue";
      document.querySelector("#comentario-pais").innerText = "";
    });
  
    face_pic.addEventListener("change", function () {
      console.log(face_pic.value);
      var fname = face_pic.value;
      var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
  
      if (face_pic.name == "" || !re.exec(fname)) {
        //last_name.classList.add('face_pic-invalido');
        this.style.border = " 2px solid red";
        document.querySelector("#comentario-face_pic").innerText =
          "Debe completar con una foto con formato jpg, jpeg, png o tif ";
      } else {
        //email.classList.remove('face_pic-invalido');
        this.style.border = " 2px solid blue";
        document.querySelector("#comentario-face_pic").innerText = "";
      }
    });
  
  
    //Validacion del boton Submit
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("empieza validacion final en el submit");
      console.log(document.querySelector("#comentario-email").innerText);
      if (
        document.querySelector("#comentario-email").innerText != "" ||
        document.querySelector("#comentario-psw").innerText != "" ||
        document.querySelector("#comentario-pswrepeat").innerText != "" ||
        document.querySelector("#comentario-first_name").innerText != "" ||
        document.querySelector("#comentario-last_name").innerText != "" ||
        document.querySelector("#comentario-pais").innerText != "" ||
        document.querySelector("#comentario-face_pic").innerText != ""
      ) {
      
        alert("Todavia quedan errores en el formulario");
      } else {
              console.log('ahora hago el submit')
              form.submit();
              }
          });
      
  });
  