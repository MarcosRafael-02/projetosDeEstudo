const botaoAdicionar = document.querySelector("#botaoAdd")
const btnCriar = document.querySelector("#create")

btnCriar.addEventListener('click', () => {
    newPopUp();
});

function newPopUp() {
    const newDiv = document.createElement("div")
    newDiv.id = 'popup-overlay';
    newDiv.style.position = 'fixed';
    newDiv.style.top = '0';
    newDiv.style.left = '0';
    newDiv.style.width = '100%';
    newDiv.style.height = '100%';
    newDiv.style.background = 'rgba(0, 0, 0, 0.5)';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'center';

    const popup = document.createElement('div');
    popup.style.background = '#fff';
    popup.style.padding = '24px';
    popup.style.borderRadius = '8px';
    popup.style.width = '250px';

    const content = document.createElement("h3")
    content.textContent = "Novo Envelope"
    content.style.marginBottom = "10px"

    const paragraphName = document.createElement("p")
    paragraphName.textContent = "Nome"

    const inputName = document.createElement("input")
    inputName.type = 'text';
    inputName.placeholder = 'Descrição';
    inputName.style.margin = "10px 0 10px"
    inputName.style.borderRadius = "5px"
    inputName.style.border = "1px solid black"
    inputName.style.padding = "8px"

    const valuePlanejed = document.createElement("p")
    valuePlanejed.textContent = "Valor Planejado"

    const inputValue = document.createElement("input")
    inputValue.type = "number"
    inputValue.placeholder = 'Valor';
    inputValue.style.margin = "10px 0 10px"
    inputValue.style.borderRadius = "5px"
    inputValue.style.border = "1px solid black"
    inputValue.style.padding = "8px"

    const btnSave = document.createElement("button")
    btnSave.textContent = "Salvar"
    btnSave.style.padding = "10px"
    btnSave.style.border = "none"
    btnSave.style.background = "transparent"
    btnSave.style.backgroundColor = "#252d48"
    btnSave.style.color = "white"
    btnSave.style.borderRadius = "10px"
    btnSave.style.fontWeight = "600"

    btnSave.addEventListener('click', () => {

        if (inputName.value === '' || null) {
            alert('Você não preencheu os valores necessarios')
        }
        
        else {
            const novoGasto = {
                descricao: inputName.value,
                valor: inputValue.value
            }

            console.log(novoGasto)
        }

        newDiv.remove();
    });


    const btnCancel = document.createElement("button")
    btnCancel.textContent = "Cancelar"
    btnCancel.style.marginLeft = "10px"
    btnCancel.style.border = "none"
    btnCancel.style.background = "transparent"
    btnCancel.style.backgroundColor = "#252d48"
    btnCancel.style.padding = "10px"
    btnCancel.style.color = "white"
    btnCancel.style.borderRadius = "10px"
    btnCancel.style.fontWeight = "600"

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
