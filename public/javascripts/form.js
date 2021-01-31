document.querySelector('form').addEventListener('submit', function (event) {
    const input_name = event.currentTarget[0].value;
    const input_tel = event.currentTarget[1].value;
    const button = event.currentTarget[2];
    button.classList.add('button--sending');

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/users', false);

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            setTimeout(function () {
                button.classList.remove('button--sending')
                button.classList.add('button--sent');

                const message = JSON.parse(xhr.responseText).message;

                if (xhr.status !== 200) {
                    button.innerText = `${message}. Пожалуйста, свяжитесь с нами самостоятельно`;
                } else {
                    button.innerText = `${message} Ожидайте звонка`;
                }
            }, 2000)
        }
    }

    xhr.send(JSON.stringify({text: `${input_name} ${input_tel.replace(/\s/g, '')}`}));

    event.preventDefault();
});