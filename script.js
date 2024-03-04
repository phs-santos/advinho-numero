document.getElementById('numeroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let numero = document.getElementById('numero').value;

    document.getElementById('loading').style.display = 'block';

    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('resultado').classList.remove('hidden');
        document.getElementById('numero-escolhido').innerText = numero;
        document.getElementById('numeroForm').style.display = 'none';
    }, 2000);
});