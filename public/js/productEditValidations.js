window.addEventListener("load", function() {

    let validations = {
        name: /^[a-zA-Z0-9\s]{1,40}$/,
        number: /^[0-9]{1,40}$/,
        letters: /^[a-zA-Z\s]{1,40}$/
    }

    let name = document.getElementById('name');
    let category = document.getElementById('category');
    let brand = document.getElementById('brand');
    let description = document.getElementById('description');
    let year = document.getElementById('year');
    let features_style = document.getElementById('features_style');
    let features_genre = document.getElementById('features_genre');
    let features_use = document.getElementById('features_use');
    let regularPrice = this.document.getElementById('regularPrice')
    let specialPrice = this.document.getElementById('specialPrice')
    let deliveryTime = this.document.getElementById('deliveryTime')
    let weight_package = this.document.getElementById('weight_package')
    let color_available = this.document.getElementById('color_available')
    let size_available = this.document.getElementById('size_available')
    let imageMain = this.document.getElementById('image-main')
    let imageFront = this.document.getElementById('image-front')
    let imageBack = this.document.getElementById('image-back')
    let formAddProduct = document.getElementById('formAddProduct')
    let form = document.getElementById("formAddProduct")

    var errors = {
/*         name: 'Falta completar el campo del nombre',
        category: 'Falta completar el campo de la categoria',
        brand: 'Falta completar el campo de la marca',
        description: 'Falta completar el campo de la descripcion',
        year: 'Falta completar el campo del año',
        features_style: 'Falta completar el campo del estilo',
        features_genre: 'Falta completar el campo del genero',
        features_use: 'Falta completar el campo del uso',
        regularPrice: 'Falta completar el campo del precio',
        specialPrice: '',
        deliveryTime: 'Falta completar el campo del tiempo de entrega',
        weight_package: 'Falta completar el campo del peso del paquete',
        color_available: 'Falta completar el campo del color disponible',
        size_available: 'Falta completar el campo de la talla disponible',
        imageMain: 'Falta completar la imagen principal' */
    }

    // ####   Validate Name   ####
    name.addEventListener('blur', function(){
        if (name.value == '') {
            errors.name =  "El nombre no puede estar vacio"
            console.log(errors.name)
            this.style.border = " 2px solid red";
            document.getElementById('errorNameLabel').innerText = "El nombre no puede estar vacio";
        }
    })
    
    name.addEventListener('blur', function(){
        if (name.value == '') {
            errors.name =  "El nombre no puede estar vacio"
            console.log(errors.name)
            this.style.border = " 2px solid red";
            document.getElementById('errorNameLabel').innerText = "El nombre no puede estar vacio";
        } else if (name.value.match(validations.name)) {
            errors.name =  ""
            console.log(errors.name)
            this.style.border = " 2px solid green";
            document.getElementById('errorNameLabel').innerText = "";
        } else {
            errors.name =  "Solo se permiten Numeros, Letras y Espacios"
            console.log(errors.name)
            this.style.border = " 2px solid red";
            document.getElementById('errorNameLabel').innerText = "Solo se permiten Numeros, Letras y Espacios";
        }
    })

    // ####   Validate Category   ####
    category.addEventListener('blur', function(){
        if (category.value == '') {
            this.style.border = " 2px solid red";
            document.getElementById('errorCategoryLabel').innerText = "Selecciona una categoria";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorCategoryLabel').innerText = "";
        }
    })

    // ####   Validate Brand   ####
    brand.addEventListener('blur', function(){
        if (brand.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorBrandLabel').innerText = "Selecciona una marca";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorBrandLabel').innerText = "";
        }
    })

    // ####   Validate Year   ####
    year.addEventListener('blur', function(){
        if (year.value < 1900 || year.value > 2021) {
            this.style.border = "2px solid red";
            document.getElementById('errorYearLabel').innerText = "El año no corresponde";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorYearLabel').innerText = "";
        }
    })
        
    // ####   Validate Description   ####
    description.addEventListener('blur', function(){
        if (description.value  == '') {
            this.style.border = "2px solid red";
            document.getElementById('errordescriptionLabel').innerText = "Debes añadir una descripción";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errordescriptionLabel').innerText = "";
        }
    })

    // ####   Validate Brand   ####
    features_style.addEventListener('blur', function(){
        if (features_style.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorStyleLabel').innerText = "Selecciona un Estilo";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorStyleLabel').innerText = "";
        }
    })
    
    // ####   Validate Genre   ####
    features_genre.addEventListener('blur', function(){
        if (features_genre.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorGenreLabel').innerText = "Selecciona un Genero";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorGenreLabel').innerText = "";
        }
    })

    // ####   Validate Usa   ####
    features_use.addEventListener('blur', function(){
        if (features_use.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorUseLabel').innerText = "Selecciona un USo";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorUseLabel').innerText = "";
        }
    })

    // ####   Validate Precio   ####

    regularPrice.addEventListener('blur', function(){
        if (regularPrice.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorUseLabel').innerText = "Inserta un Precio";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorUseLabel').innerText = "";
        }
    })
    regularPrice.addEventListener('blur', function(){
        if (regularPrice.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorPriceLabel').innerText = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorPriceLabel').innerText = "Debes insertar el precio sin punto ni coma"
        }
    })

    // ####   Validate Descuento   ####
    specialPrice.addEventListener('blur', function(){
        if (specialPrice.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorSpecialPriceLabel').innerText = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorSpecialPriceLabel').innerText = "Debes insertar el precio sin punto ni coma"
        }
    })

    // ####   Validate Delivery Time   ####
    deliveryTime.addEventListener('blur', function(){
        if (deliveryTime.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorDeliveryTimeLabel').innerText = "Selecciona un tiempo de entrega";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorDeliveryTimeLabel').innerText = "";
        }
    })

    // ####   Validate Peso   ####
    weight_package.addEventListener('blur', function(){
        if (weight_package.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorWeightLabel').innerText = "Inserta un Peso";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorWeightLabel').innerText = "";
        }
        if (weight_package.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorWeightLabel').innerText = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorWeightLabel').innerText = "Debes insertar el peso en gramos sin punto ni coma"
        }
    })

    // ####   Validate Color   ####
    color_available.addEventListener('blur', function(){
        if (color_available.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorColorLabel').innerText = "Ingresa el color del producto";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorColorLabel').innerText = "";
        }
        if (color_available.value.match(validations.letters)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorColorLabel').innerText = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorColorLabel').innerText = "El color solo permite letras"
        }
    })

    // ####   Validate Size  ####
    size_available.addEventListener('blur', function(){
        if (size_available.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorSizeLabel').innerText = "Selecciona un talle para el producto";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorSizeLabel').innerText = "";
        }
    })

    // ####   Validate Imagen  ####
    // imageMain.addEventListener('blur', function(){
    //     if (imageMain.value == '') {
    //         this.style.border = " 2px solid red";
    //         document.getElementById('errorImageLabel').innerText = "Debes cargar una imagen";
    //     }
    // })

    imageMain.addEventListener("change", function () {
        console.log(imageMain.value);
        var fname = imageMain.value;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    
        if (imageMain.name == "" || !re.exec(fname)) {
          
          this.style.border = " 2px solid red";
          document.getElementById('errorImageLabel').innerText =
            "Debe completar con una imagen con formato jpg, jpeg, png o tif ";
        } else {
          
          this.style.border = " 2px solid blue";
          document.getElementById('errorImageLabel').innerText = "";
        }
      })

      imageFront.addEventListener("change", function () {
        console.log(imageFront.value);
        var fname = imageFront.value;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    
        if (!re.exec(fname)) {
          
          this.style.border = " 2px solid red";
          document.getElementById('errorImageFrontLabel').innerText =
            "Debe completar con una imagen con formato jpg, jpeg, png o tif ";
        } else {
          
          this.style.border = " 2px solid blue";
          document.getElementById('errorImageFrontLabel').innerText = "";
        }
      })

      imageBack.addEventListener("change", function () {
        console.log(imageBack.value);
        var fname = imageBack.value;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
    
        if (!re.exec(fname)) {
          
          this.style.border = " 2px solid red";
          document.getElementById('errorImageBackLabel').innerText =
            "Debe completar con una imagen con formato jpg, jpeg, png o tif ";
        } else {
          
          this.style.border = " 2px solid blue";
          document.getElementById('errorImageBackLabel').innerText = "";
        }
      })



    formAddProduct.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Empieza validacion final en products')

        if (
            document.getElementById('errorNameLabel').innerText != "" ||
            document.getElementById('errorCategoryLabel').innerText != "" ||
            document.getElementById('errorBrandLabel').innerText != "" ||
            document.getElementById('errordescriptionLabel').innerText != "" ||
            document.getElementById('errorYearLabel').innerText != "" ||
            document.getElementById('errorStyleLabel').innerText != "" ||
            document.getElementById('errorGenreLabel').innerText != "" ||
            document.getElementById('errorUseLabel').innerText != "" ||
            document.getElementById('errorPriceLabel').innerText != "" ||
            document.getElementById('errorSpecialPriceLabel').innerText != "" ||
            document.getElementById('errorDeliveryTimeLabel').innerText != "" ||
            document.getElementById('errorWeightLabel').innerText != "" ||
            document.getElementById('errorColorLabel').innerText != "" ||
            document.getElementById('errorSizeLabel').innerText != "" ||
            
            
            document.getElementById('errorImageLabel').innerText != "" ||
            document.getElementById('errorImageFrontLabel').innerText != "" ||
            document.getElementById('errorImageBackLabel').innerText != ""
          ) {
          
            alert("Todavia quedan errores en el formulario");
        //   }

        // let alertErrors = []
        // for (property in errors) {
        //     if (`${errors[property]}` != '') {
        //         alertErrors.push('\n' + `${errors[property]}`);
        //         alert(alertErrors);
            } else {
                console.log('ahora hago el submit')
                form.submit();
            }
        
    })
})

