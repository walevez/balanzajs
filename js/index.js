const bruto = document.querySelector('#bruto');
const tara = document.querySelector('#tara');
const neto = document.querySelector('#neto');
const excedente = document.querySelector('#excedente');
const mensaje = document.querySelector('.mensaje');
const clearBoton = document.querySelector('#clearBtn');
const recordsBoton = document.querySelector('#recordBtn');
const bodyLoad = document.querySelector('#bodyLoad');

const fecha = new Date()

neto.setAttribute('disabled', true);

bruto.setAttribute('value', 0);
tara.setAttribute('value', 0);
excedente.setAttribute('value', 0);

// Limpiar todos los inputs
const clearInputs = ()=>{
    bruto.value = 0
    tara.value = 0
    excedente.value = 0
    neto.setAttribute('value', '')
}

// Por cada numero ingresado devuelve el resultado de la resta
const operacion = ()=>{
    const calculo = parseInt(bruto.value) - parseInt(tara.value) - parseInt(excedente.value);

    neto.setAttribute('value', calculo);
    neto.setAttribute('type', 'number')

    if (neto.value < 0 || neto.value > 60000){
        neto.style.background = "yellow"
        neto.style.color = "red"
    } else {
        neto.style.background = "green"
        neto.style.color = "white"
    }
};


// Pone un cero si el campo queda NaN
const allwaysInt = (field)=>{
    if (field.value == ""){
        field.value = 0;
        operacion()
    };
};

// Da Focus y selecciona el contenido de un input
const selectValue = (field)=>{
    field.focus();
    field.select();
};

// Limita a cinco los digitos del input
const limitCharacter = (field)=>{
    if(field.value.length > 5){
        field.value = field.value.slice(0,5)
    }
}

// Limpia el valor de los inputs
clearBoton.addEventListener('click', clearInputs);

// Por cada tecla presionada en el input se llaman las funciones 
tara.addEventListener('keyup', ()=>{
    limitCharacter(tara)
    operacion()
});
bruto.addEventListener('keyup', ()=>{
    limitCharacter(bruto)
    operacion()
});
excedente.addEventListener('keyup', ()=>{
    limitCharacter(excedente)
    operacion()
});


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

const pesadas = []

recordsBoton.addEventListener('click', ()=>{
    if(neto.value > 0){
        pesadas.push({
            Fecha : '17/02/2023',
            bruto : bruto.value,
            tara : tara.value,
            excedente : excedente.value,
            neto : neto.value
        })
        let pesada = ``
        for(let i in pesadas){
            pesada += `<tr>
                    <td>${[i]}</td>
                    <td>${fecha.toLocaleDateString()}</td>
                    <td>${pesadas[i].bruto}</td>
                    <td>${pesadas[i].tara}</td>
                    <td>${pesadas[i].excedente}</td>
                    <td>${pesadas[i].neto}</td>
                </tr>`
            }
        bodyLoad.innerHTML = pesada
        swal('Guardado', `ID ${pesadas.length-1}`, 'success')
        clearInputs()
    }else {
        swal('No se guardo!', 'Verifique los campos!', 'error')
    }
})
