document.querySelector("form").addEventListener("submit",(function(e){const s=e.currentTarget[0].value,t=e.currentTarget[0].value,n=e.currentTarget[2];n.classList.add("button--sending"),setTimeout((function(){fetch("/users",{headers:{"Content-type":"application/json;charset=UTF-8"},method:"POST",body:JSON.stringify({text:`${s} ${t.replace(/\s/g,"")}`})}).then((function(e){if(n.classList.remove("button--sending"),n.classList.add("button--sent"),!e.ok)throw Error(e.message);return e.json()})).then((function(e){"100"!==e.code&&(n.innerText=`${e.message} Пожалуйста, свяжитесь с нами самостоятельно`),console.log("OK ",e)})).catch((function(e){n.innerText=`${e} Пожалуйста, свяжитесь с нами самостоятельно`,console.log("Error: ",e)}))}),3e3),e.preventDefault()}));const input=document.querySelector("input[type=tel]");var SMSru,sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E");document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()})),sms=new(SMSru=require("sms_ru"))("1084D6ED-A727-DA85-DA94-7AC96F7B360E"),document.querySelector("form").addEventListener("submit",(function(e){console.log(e),sms.sms_send({to:"79969383396",text:"Оксана +7(999)177-54-75"},(function(e){console.log(e.description)})),e.preventDefault()}));
//# sourceMappingURL=index.js.map
