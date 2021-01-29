var params,xhr=new XMLHttpRequest;document.querySelector("form").addEventListener("submit",(function(t){console.log(t),params="to=89969383396&msg=test",fetch("https://sms.ru/sms/send?api_id=1084D6ED-A727-DA85-DA94-7AC96F7B360E&json=1&test=1&to=89969383396&msg=test").then((function(t){return t.json()})).then((function(t){return alert(t)})),t.preventDefault()}));
//# sourceMappingURL=index.js.map
