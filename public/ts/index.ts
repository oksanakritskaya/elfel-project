interface sms {
    [key: number]: {
        status: string,
        status_code: number,
        sms_id: string,
    }
}

interface responseInfo {
    status: string,
    status_code: number, // Успешный код выполнения
    sms: sms,
    balance: number // 4122.56
}

const xhr = new XMLHttpRequest();

var params;

document.querySelector('form').addEventListener('submit', function (event) {
    console.log(event);

    params = 'to=89969383396&msg=' + 'test';

    fetch('https://sms.ru/sms/send?api_id=1084D6ED-A727-DA85-DA94-7AC96F7B360E&json=1&test=1&to=89969383396&msg=test')
        .then(response => response.json())
        .then(commits => alert(commits));
    /*xhr.open('POST', '/submit?' + params, true);

    xhr.responseType = 'json';

    xhr.onload = () => {
        if (xhr.status >= 400) {
            console.log('Error', xhr.response);
        }

        console.log(xhr.response);
    }

    xhr.onerror = () => {
        console.log(xhr.response);
    }

    //xhr.onreadystatechange = ...;

    xhr.send();*/

    event.preventDefault();
});