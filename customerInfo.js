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
    CustomerInfo  %0A
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
        let botUrlDany = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdDany}&text=${orderText}&parse_mode=html`;

        // Send the order text to the Telegram bot
        $.post(botUrl);
        $.post(botUrlDany);
    } else {
        alert("Choose width");
    }
}

$(document).ready(function() {
    $(".tabcontentInfo").hide();

    $(".tablinksInfo").click(function() {
        var target = $(this).data("target");


        $(".tablinksInfo").removeClass("active");

        $(".tabcontentInfo").hide();

        $("#" + target).show();
        $(this).addClass("active");
    });
});


//read inputs info 
$("#customerInst").on("change", function() {
    customerInst = $("#customerInst").val()
    $("#customerInst").val("")
    $("#customerInst").attr("placeholder", `your contact : ${customerInst}`)
    console.log(customerInst)
});
$("#customerTg").on("change", function() {
    customerTg = $("#customerTg").val()
    $("#customerTg").val("")
    $("#customerTg").attr("placeholder", `your contact : ${customerTg}`)
    console.log(customerTg)
});
$("#customerWatsapp").on("change", function() {
    customerWatsapp = $("#customerWatsapp").val()
    $("#customerWatsapp").val("")
    $("#customerWatsapp").attr("placeholder", `your contact : ${customerWatsapp}`)
    console.log(customerWatsapp)
});
$("#customerName").on("change", function() {
    customerName = $("#customerName").val()
    $("#customerName").val("")
    $("#customerName").attr("placeholder", ` ${customerName}`)
    console.log(customerName)
});
$("#customerLastName").on("change", function() {
    customerLastName = $("#customerLastName").val()
    $("#customerLastName").val("")
    $("#customerLastName").attr("placeholder", ` ${customerLastName}`)
    console.log(customerLastName)
});
$("#customerPhoneNumber").on("change", function() {
    customerPhoneNumber = $("#customerPhoneNumber").val()
    $("#customerPhoneNumber").val("")
    $("#customerPhoneNumber").attr("placeholder", ` ${customerPhoneNumber}`)
    console.log(customerPhoneNumber)
});