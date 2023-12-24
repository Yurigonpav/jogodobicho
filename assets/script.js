let saldoAtual = 0;
let totalApostado = 0;
let totalGanho = 0;

function displayNumbers() {
    const selectedAnimal = document.getElementById('animalSelector').value;
    const animalNumbersElement = document.getElementById('animalNumbers');

    const animalNumbers = {
        'avestruz': '01, 02, 03, 04',
        'aguia': '05, 06, 07, 08',
        'burro': '09, 10, 11, 12',
        'borboleta': '13, 14, 15, 16',
        'cachorro': '17, 18, 19, 20',
        'cabra': '21, 22, 23, 24',
        'carneiro': '25, 26, 27, 28',
        'camelo': '29, 30, 31, 32',
        'cobra': '33, 34, 35, 36',
        'coelho': '37, 38, 39, 40',
        'cavalo': '41, 42, 43, 44',
        'elefante': '45, 46, 47, 48',
        'galo': '49, 50, 51, 52',
        'gato': '53, 54, 55, 56',
        'jacare': '57, 58, 59, 60',
        'leao': '61, 62, 63, 64',
        'macaco': '65, 66, 67, 68',
        'porco': '69, 70, 71, 72',
        'pavao': '73, 74, 75, 76',
        'peru': '77, 78, 79, 80',
        'touro': '81, 82, 83, 84',
        'tigre': '85, 86, 87, 88',
        'urso': '89, 90, 91, 92',
        'veado': '93, 94, 95, 96',
        'vaca': '97, 98, 99, 00'
    };

    animalNumbersElement.innerText = `Números: ${animalNumbers[selectedAnimal]}`;
}

function play() {
    const selectedAnimal = document.getElementById('animalSelector').value;
    const betAmount = parseFloat(document.getElementById('betAmount').value);
    const randomNumber = Math.floor(Math.random() * 100);
    const resultElement = document.getElementById('result');
    const prizeElement = document.getElementById('prize');
    const statsElement = document.getElementById('stats');

    if (!isNaN(betAmount) && betAmount > 0) {
        totalApostado += betAmount;

        if (Math.random() < 0.05) {
            const prize = 8 * betAmount;
            saldoAtual += prize;
            totalGanho += prize;

            resultElement.innerText = `Parabéns! Você ganhou com ${selectedAnimal}!`;
            prizeElement.innerText = `Prêmio: ${prize}.`;
        } else {
            saldoAtual -= betAmount;

            resultElement.innerText = `Não foi dessa vez. O número sorteado foi ${randomNumber}. Tente novamente!`;
            prizeElement.innerText = '';
        }

        statsElement.innerText = `Saldo Atual: ${saldoAtual}`;
        updateImage();
    } else {
        resultElement.innerText = `Por favor, insira um valor de aposta válido.`;
        prizeElement.innerText = '';
    }
}

function updateImage() {
    const saldoImage = document.getElementById('saldoImage');

    if (saldoAtual >= 2000) {
        saldoImage.src = './assets/rico.jpg';
      }  else if (saldoAtual <= -4000) {
        saldoImage.src = './assets/lascado.jpg';
    } else if (saldoAtual <= -2000) {
        saldoImage.src = './assets/images.jpeg';
    } else if (saldoAtual >= 0) {
        saldoImage.src = './assets/saldoP.jpg';
    } else {
        saldoImage.src = './assets/saldoN.jpg';
    }
}

setInterval(updateImage, 500);