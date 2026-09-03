const valueInput = document.querySelector("#value")
const ValueRecebido = document.querySelector(".value-recebido")
const valuePlanejedTotal = document.querySelector(".value-planejed")
const saldoDisponivel = document.querySelector(".saldo-disponivel")

function valueSalary() {
    if (valueInput.value === "" || null) {
        ValueRecebido.textContent = `R$00`
    }
    else {
        ValueRecebido.textContent = `R$ ${valueInput.value},00`
    }
}


const btnCriar = document.querySelector("#create")

btnCriar.addEventListener('click', () => {
    newPopUp();
});

let totalPlanejado = 0

function newPopUp() {
    const newDiv = document.createElement("div")
    newDiv.id = 'popup-overlay';

    const popup = document.createElement('div');
    popup.id = "popup"

    const content = document.createElement("h3")
    content.textContent = "Novo Envelope"
    content.style.marginBottom = "10px"

    const paragraphName = document.createElement("p")
    paragraphName.textContent = "Nome"

    const inputName = document.createElement("input")
    inputName.type = 'text';
    inputName.placeholder = 'Mercado';
    inputName.id = "inputName"

    const valuePlanejed = document.createElement("p")
    valuePlanejed.textContent = "Valor Planejado"

    const inputValue = document.createElement("input")
    inputValue.type = "number"
    inputValue.placeholder = 'Valor';
    inputValue.id = "inputValue"

    const btnSave = document.createElement("button")
    btnSave.textContent = "Salvar"
    btnSave.id = "saveButton"


    btnSave.addEventListener('click', () => {

        if (inputName.value === '' || null) {
            alert('Você não preencheu os valores necessarios')

        }

        else {
            totalPlanejado += Number(inputValue.value)
            valuePlanejedTotal.textContent = `R$ ${totalPlanejado}`

            const recebido = Number(valueInput.value) || 0;
            const disponivel = recebido - totalPlanejado;
            saldoDisponivel.textContent = `R$ ${disponivel}`;

            popupCreated()
        }

        newDiv.remove();
    });


    const btnCancel = document.createElement("button")
    btnCancel.textContent = "Cancelar"
    btnCancel.id = "btnCancel"

    popup.appendChild(content)
    popup.appendChild(paragraphName)
    popup.appendChild(inputName)
    popup.appendChild(valuePlanejed)
    popup.appendChild(inputValue)
    popup.appendChild(btnSave)
    popup.appendChild(btnCancel)
    newDiv.appendChild(popup)
    document.body.appendChild(newDiv)

    newDiv.addEventListener('click', (e) => {
        if (e.target === newDiv) {
            newDiv.remove();
        }
    });

    btnCancel.addEventListener('click', () => {
        newDiv.remove();
    });
};


const sectionCard = document.querySelector(".iten-created")

function popupCreated() {
    const divCreated = document.createElement("div")
    divCreated.id = "cardDiv"

    const contentDiv = document.createElement("div")
    contentDiv.id = "contentitens"

    const title = document.createElement("h3")
    title.textContent = inputName.value
    title.style.marginBottom = "16px"

    const planejed = document.createElement("p")
    planejed.textContent = "Planejado"

    const valuePlanejed = document.createElement("p")
    valuePlanejed.textContent = `R$ ${inputValue.value}`

    const nameGasto = document.createElement("p")
    nameGasto.textContent = "Gasto"
    nameGasto.style.marginTop = "12px"

    const valueGasto = document.createElement("p")
    valueGasto.textContent = "R$ 0"
    valueGasto.style.marginBottom = "12px"

    const btnAdcGasto = document.createElement("button")
    btnAdcGasto.textContent = "Adicionar Gasto"
    btnAdcGasto.id = "btnAdcGasto"

    contentDiv.appendChild(title)
    contentDiv.appendChild(planejed)
    contentDiv.appendChild(valuePlanejed)
    contentDiv.appendChild(nameGasto)
    contentDiv.appendChild(valueGasto)
    contentDiv.appendChild(btnAdcGasto)
    divCreated.appendChild(contentDiv)
    sectionCard.appendChild(divCreated)
}
