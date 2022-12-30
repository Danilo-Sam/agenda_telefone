const form = document.getElementById('form-contato');
    let linhas = '';

    form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputnome = document.getElementById('nome');
    const inputcontato = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputcontato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputnome.value = '';
    inputcontato.value ='';
});