var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
})(Method || (Method = {}));
function api(url, method, body) {
    return new Promise(function (resolve, reject) {
        var params = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (body) {
            params.body = JSON.stringify(body);
        }
        fetch(url, params)
            .then(function (response) {
            if (!response.ok) {
                response.json().then(function (text) { return reject(new Error(text.message)); });
            }
            else {
                resolve(response.json());
            }
        })["catch"](function (error) { return reject(new Error(error)); });
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var form = document.forms[0];
    form.addEventListener('submit', function (event) {
        var smth = form.userName;
        var inputName = smth.value;
        var smth2 = form.userTel;
        var inputTel = smth2.value;
        var button = form.buttonSend;
        button.classList.add('button--sending');
        api('/message', Method.POST, { text: inputName + " " + inputTel.replace(/\s/g, '') })
            .then(function (data) {
            button.innerText = data.message + " \u041E\u0436\u0438\u0434\u0430\u0439\u0442\u0435 \u0437\u0432\u043E\u043D\u043A\u0430";
        })["catch"](function (error) {
            button.innerText = error.message + ". \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E";
        })["finally"](function () {
            button.classList.remove('button--sending');
            button.classList.add('button--sent');
        });
        event.preventDefault();
    });
});

//# sourceMappingURL=index.js.map
