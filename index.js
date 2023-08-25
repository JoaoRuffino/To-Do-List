

const tarefa = document.getElementById('tarefa')
const addArea = document.querySelector('.addArea')




function adicionar(){
    
    const novaTarefa = document.createElement('div') //Cria a div da tarefa
    novaTarefa.classList.add('tarefa-item') //Vai dar uma classe a div criada
    
    //texto da tarefa
    const textoTarefa = document.createElement('span')
    textoTarefa.textContent = tarefa.value // adiciona ao texto, o valor passado em tarefa

    textoTarefa.textContent = tarefa.value // adiciona ao texto, o valor passado em tarefa

    //criar done
    const done = document.createElement('img')
    done.classList.add('done')
    done.src = 'images/done.png'
    //criar apagar
    const apagar = document.createElement('img')
    apagar.classList.add('delete')
    apagar.src = 'images/delete.png'

    //ligar a o texto da tarefa a div criada
    novaTarefa.appendChild(textoTarefa)
    novaTarefa.appendChild(done)
    novaTarefa.appendChild(apagar)

    //adicionar a div tarefa na area de tarefas do html
    addArea.appendChild(novaTarefa)

    //risca a tarefa
    done.addEventListener('click', ()=>{
        textoTarefa.classList.toggle('feito')
    })

    apagar.addEventListener('click', ()=>{
        addArea.removeChild(novaTarefa)
    })
    

    tarefa.value = ''
}


//Dark-Mode

const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const labelDark = document.getElementById('label-dark')

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');

    if (body.classList.contains('modo-escuro')) {
        labelDark.innerHTML = '<img src="images/light-mode.png" class="img-dark">';
    } else {
        labelDark.innerHTML = '<img src="images/dark-mode.png" class="img-dark">';
    }
});

