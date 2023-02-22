// const TOKEN="5856266432:AAGUigajuzc1hTrx4CfbEUMMAZlDRm5dcz0"
// const CHAT_ID="1495999546"
// const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`

// https://api.telegram.org/bot5856266432:AAGUigajuzc1hTrx4CfbEUMMAZlDRm5dcz0/getUpdates
const success=document.getElementById("success")

// document.getElementById("tg").addEventListener("submit", function(e) {
//     e.preventDefault();
//     let message = `<b>Заявка с сайта!</b>\n`;
//     message += `<b>Отправител:</b> ${this.name.value}\n`;
//     message += `<b>Номер:</b> ${this.number.value}\n`;
//     message += `<b>Почта:</b> ${this.email.value}\n`;
//     message += `<b>Файл:</b> ${this.file.value}`;
//     console.log(message)

//     axios.post(URL_API,{
//         chat_id:CHAT_ID,
//         parse_mode:"html",
//         text:message,
//     }).then((res)=>{
//         this.name.value=""
//         this.number.value=""
//         this.email.value=""
//         this.file.value=""
//         success.innerHTML="Сообщение отправлено!"
//         success.style.display="block"
//     }).catch((err)=>{
//         console.log(err);
//     }).finally(()=>console.log(success))
// })

const TOKEN="5856266432:AAGUigajuzc1hTrx4CfbEUMMAZlDRm5dcz0"
const CHAT_ID="1495999546"
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendDocument`

document.getElementById("tg").addEventListener("submit",function(e){
    e.preventDefault()
    const formData=new FormData()
    formData.append("chat_id",CHAT_ID)
    formData.append("document",this.document.files[0])
    axios.post(URL_API,formData,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    }).then((res)=>{
        this.document.value=""
        success.innerHTML="сообшение отправлено!"
        success.style.display="block"
    }).catch((err)=>{console.log(err)
    }).finally(()=>console.log("Success"))
    

})

