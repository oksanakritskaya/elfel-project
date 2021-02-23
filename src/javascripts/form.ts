interface SmsResponse {
    message: string;
}

enum Method {
    GET = 'GET',
    POST = 'POST'
}

function api<T>(url: string, method: Method, body?: any): Promise<T> {
    return new Promise(function (resolve, reject) {
        let params: RequestInit = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (body) {
            params.body = JSON.stringify(body);
        }
        fetch(url, params)
            .then(response => {
                if (!response.ok) {
                    response.json().then(text => reject(new Error(text.message)));
                } else {
                    resolve(response.json());
                }
            })
            .catch((error) => reject(new Error(error)))
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const form: HTMLFormElement = document.forms[0];

    form.addEventListener('submit', function (event) {
        const smth: HTMLInputElement = <HTMLInputElement>form.userName;
        const inputName: string = smth.value;
        const smth2: HTMLInputElement = <HTMLInputElement>form.userTel;
        const inputTel: string = smth2.value;
        const button = <HTMLInputElement>form.buttonSend;
        button.classList.add('button--sending')

        api<SmsResponse>('/message', Method.POST, {text: `${inputName} ${inputTel.replace(/\s/g, '')}`})
            .then((data: SmsResponse) => {
                button.innerText = `${data.message} Ожидайте звонка`;
            })
            .catch((error: Error) => {
                button.innerText = `${error.message}. Пожалуйста, свяжитесь с нами самостоятельно`;
            })
            .finally(() => {
                button.classList.remove('button--sending')
                button.classList.add('button--sent');
            })

        event.preventDefault();
    });
});

