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
            document.getElementById('errorNameLabel').innerHTML = errors.name;
        }
    })
    
    name.addEventListener('change', function(){
        if (name.value == '') {
            errors.name =  "El nombre no puede estar vacio"
            console.log(errors.name)
            this.style.border = " 2px solid red";
            document.getElementById('errorNameLabel').innerHTML = "El nombre no puede estar vacio";
        } else if (name.value.match(validations.name)) {
            errors.name =  ""
            console.log(errors.name)
            this.style.border = " 2px solid green";
            document.getElementById('errorNameLabel').innerHTML = errors.name;
        } else {
            errors.name =  "Solo se permiten Numeros, Letras y Espacios"
            console.log(errors.name)
            this.style.border = " 2px solid red";
            document.getElementById('errorNameLabel').innerHTML = "Solo se permiten Numeros, Letras y Espacios";
        }
    })

    // ####   Validate Category   ####
    category.addEventListener('change', function(){
        if (category.value == '') {
            this.style.border = " 2px solid red";
            document.getElementById('errorCategoryLabel').innerHTML = "Selecciona una categoria";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorCategoryLabel').innerHTML = "";
        }
    })

    // ####   Validate Brand   ####
    brand.addEventListener('change', function(){
        if (brand.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorBrandLabel').innerHTML = "Selecciona una marca";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorBrandLabel').innerHTML = "";
        }
    })

    // ####   Validate Year   ####
    year.addEventListener('change', function(){
        if (year.value < 1900 || year.value > 2021) {
            this.style.border = "2px solid red";
            document.getElementById('errorYearLabel').innerHTML = "El año no corresponde";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorYearLabel').innerHTML = "";
        }
    })
        
    // ####   Validate Description   ####
    description.addEventListener('change', function(){
        if (description.value  == '') {
            this.style.border = "2px solid red";
            document.getElementById('errordescriptionLabel').innerHTML = "Debes añadir una descripción";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errordescriptionLabel').innerHTML = "";
        }
    })

    // ####   Validate Brand   ####
    features_style.addEventListener('change', function(){
        if (features_style.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorStyleLabel').innerHTML = "Selecciona un Estilo";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorStyleLabel').innerHTML = "";
        }
    })
    
    // ####   Validate Genre   ####
    features_genre.addEventListener('change', function(){
        if (features_genre.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorGenreLabel').innerHTML = "Selecciona un Genero";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorGenreLabel').innerHTML = "";
        }
    })

    // ####   Validate Usa   ####
    features_use.addEventListener('change', function(){
        if (features_use.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorUseLabel').innerHTML = "Selecciona un USo";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorUseLabel').innerHTML = "";
        }
    })

    // ####   Validate Precio   ####

    regularPrice.addEventListener('change', function(){
        if (regularPrice.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorUseLabel').innerHTML = "Inserta un Precio";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorUseLabel').innerHTML = "";
        }
    })
    regularPrice.addEventListener('change', function(){
        if (regularPrice.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorPriceLabel').innerHTML = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorPriceLabel').innerHTML = "Debes insertar el precio sin punto ni coma"
        }
    })

    // ####   Validate Descuento   ####
    specialPrice.addEventListener('change', function(){
        if (specialPrice.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorSpecialPriceLabel').innerHTML = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorSpecialPriceLabel').innerHTML = "Debes insertar el precio sin punto ni coma"
        }
    })

    // ####   Validate Delivery Time   ####
    deliveryTime.addEventListener('change', function(){
        if (deliveryTime.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorDeliveryTimeLabel').innerHTML = "Selecciona un tiempo de entrega";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorDeliveryTimeLabel').innerHTML = "";
        }
    })

    // ####   Validate Peso   ####
    weight_package.addEventListener('change', function(){
        if (weight_package.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorWeigthLabel').innerHTML = "Inserta un Peso";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorWeigthLabel').innerHTML = "";
        }
        if (weight_package.value.match(validations.number)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorWeigthLabel').innerHTML = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorWeigthLabel').innerHTML = "Debes insertar el peso en gramos sin punto ni coma"
        }
    })

    // ####   Validate Color   ####
    color_available.addEventListener('change', function(){
        if (color_available.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorColorLabel').innerHTML = "Ingresa el color del producto";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorColorLabel').innerHTML = "";
        }
        if (color_available.value.match(validations.letters)) {
            this.style.border = " 2px solid green";
            document.getElementById('errorColorLabel').innerHTML = "";
        } else {
            this.style.border = " 2px solid red";
            document.getElementById('errorColorLabel').innerHTML = "El color solo permite letras"
        }
    })

    // ####   Validate Size  ####
    size_available.addEventListener('change', function(){
        if (size_available.value == '') {
            this.style.border = "2px solid red";
            document.getElementById('errorSizeLabel').innerHTML = "Selecciona un talle para el producto";
        } else {
            this.style.border = "2px solid green";
            document.getElementById('errorSizeLabel').innerHTML = "";
        }
    })

    // ####   Validate Imagen  ####
    imageMain.addEventListener('blur', function(){
        if (imageMain.value == '') {
            this.style.border = " 2px solid red";
            document.getElementById('errorImageLabel').innerHTML = "Debes cargar una imagen";
        }
    })
    formAddProduct.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Empieza validacion final en products')
        let alertErrors = []
        for (property in errors) {
            if (`${errors[property]}` != '') {
                alertErrors.push('\n' + `${errors[property]}`);
                alert(alertErrors);
            } else {
                form.submit();
            }
        }
    })
})

