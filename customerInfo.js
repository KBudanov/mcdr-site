let orderInfo = JSON.parse(localStorage.getItem('orderInfo'));


$(".orderReadyBtn").on("click", function() {
    // Use the order details and customer information variables here
    let orderText = `New order %0A
    Rise: ${orderInfo.rise}%0A
    Up-sweep: ${orderInfo.upsweep}%0A
    Back-sweep: ${orderInfo.backsweep}%0A
    Width: ${orderInfo.width}%0A
    Anod color: ${orderInfo['Anod color']}%0A
    Paint color : ${orderInfo['Paint color']}%0A
    Paint explanation : ${orderInfo['Paint explanation']}%0A
    Spacers : ${orderInfo.Spacers}%0A
    Extra comments : ${orderInfo['Extra comments']}%0A
    %0A
    %0A
    CustomerInfo
    Customer name: ${customerName}%0A
    Customer last name: ${customerLastName}%0A
    Customer  tg: ${customerTg}%0A
    Customer  inst: ${customerInst}%0A
    Customer  whatsapp: ${customerWatsapp}
`;

    // Send the order details to the Telegram bot
    sendOrderToTelegram(orderText);
    localStorage.clear()
});

function sendOrderToTelegram(orderText) {

    if (width) {
        let tgId = 961172191;
        let tgIdDany = 750134864;
        let botToken = '6827397329:AAGziUZrNAD3bxQAfswT5VmSDDKWCg2HyqI';

        let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}&parse_mode=html`;
        //let botUrlDany = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdDany}&text=${orderText}&parse_mode=html`;

        // Send the order text to the Telegram bot
        $.post(botUrl);
        //$.post(botUrlDany);
    } else {
        alert("Choose width");
    }
}