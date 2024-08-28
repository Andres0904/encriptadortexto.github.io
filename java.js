document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById('text-box');
    const encryptButton = document.getElementById('encrypt-button');
    const decryptButton = document.getElementById('decrypt-button');
    const copyButton = document.getElementById('copy-button');
    const resultText = document.getElementById('result-text');

    function encrypt(text) {
        const replacements = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        return text.split('').map(char => replacements[char] || char).join('');
    }
    function decrypt(text) {
        const replacements = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        let result = text;
        for (const [key, value] of Object.entries(replacements)) {
            result = result.split(key).join(value);
        }
        return result;
    }

    encryptButton.addEventListener('click', () => {
        const text = textBox.value;
        const encryptedText = encrypt(text);
        resultText.textContent = encryptedText;
    });

    decryptButton.addEventListener('click', () => {
        const text = textBox.value;
        const decryptedText = decrypt(text);
        resultText.textContent = decryptedText;
    });

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(resultText.textContent)
            .then(() => {
                alert('Texto copiado al portapapeles!');
            })
            .catch(err => {
                alert('Error al copiar el texto: ' + err);
            });
    });
});
