const bruto = document.querySelector('#bruto');
const tara = document.querySelector('#tara');
const neto = document.querySelector('#neto');
const excedente = document.querySelector('#excedente');
const mensaje = document.querySelector('.mensaje');

neto.setAttribute('disabled', true);

bruto.setAttribute('value', 0);
tara.setAttribute('value', 0);
excedente.setAttribute('value', 0);


// Por cada numuero ingresa devuelve el resultado de la resta
const operacion = ()=>{
    const calculo = parseInt(bruto.value) - parseInt(tara.value) - parseInt(excedente.value);
    neto.setAttribute('value', calculo);
    if (neto.value < 0 || neto.value > 60000){
        neto.style.background = "yellow";
    } else {
        neto.style.background = "azure"
    }
};

// Llama a la funcion cada vez que se presiona una tecla dentro del input
bruto.addEventListener('keyup', operacion);
tara.addEventListener('keyup', operacion);
excedente.addEventListener('keyup', operacion);


// Esta funcion pone un cero si el campo queda NaN
const allwaysInt = (field)=>{
    if (field.value == ""){
        field.value = 0;
    };
};

// Llama a la funcion cada vez que el input pierde el focus
bruto.addEventListener('blur', ()=>{
    allwaysInt(bruto);
});
tara.addEventListener('blur', ()=>{
    allwaysInt(tara);
});
excedente.addEventListener('blur', ()=>{
    allwaysInt(excedente);
});


// Da Focus y selecciona el contenido de un input
const selectValue = (field)=>{
    field.focus();
    field.select();
};


// Llama a la funcion cada vez que se hace click en el input
bruto.addEventListener('click', ()=>{
    selectValue(bruto);
});
tara.addEventListener('click', ()=>{
    selectValue(tara);
});
excedente.addEventListener('click', ()=>{
    selectValue(excedente);
});