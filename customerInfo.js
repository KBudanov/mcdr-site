let orderInfo = JSON.parse(localStorage.getItem('orderInfo'));

customerPhoneNumber = "none"
    //get order ready before sending 
$(document).on("click", ".orderReadyBtn", function() {
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
    CustomerInfo  %0A
    Customer name: ${customerName}%0A
    Customer last name: ${customerLastName}%0A
    Customer phone number: ${customerPhoneNumber}%0A
    Customer  tg: ${customerTg}%0A
    Customer  inst: ${customerInst}%0A
    Customer  whatsapp: ${customerWatsapp}
`;
    sendOrderToTelegram(orderText);
    localStorage.clear()
});

//send order
function sendOrderToTelegram(orderText) {
    if (width) {
        let tgId = 961172191;
        let tgIdDany = 750134864;
        let botToken = '6827397329:AAGziUZrNAD3bxQAfswT5VmSDDKWCg2HyqI';

        let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}&parse_mode=html`;
        let botUrlDany = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdDany}&text=${orderText}&parse_mode=html`;
        $.post(botUrl);
        $.post(botUrlDany);
    } else {
        alert("Choose width");
    }
}


//show order before send 
$("#showOrderDiv").hide()

$(".showOrder").click(function() {

    savecustomerData()
    showReadyCustomerData()
    $("#showOrderDiv").html(
        `Your order<br>
    Rise: ${orderInfo.rise}<br>
    Up-sweep: ${orderInfo.upsweep}<br>
    Back-sweep: ${orderInfo.backsweep}<br>
    Width: ${orderInfo.width}<br>
    Anod color: ${orderInfo['Anod color']}<br>
    Paint color : ${orderInfo['Paint color']}<br>
    Paint explanation : ${orderInfo['Paint explanation']}<br>
    Spacers : ${orderInfo.Spacers}<br>
    Extra comments : ${orderInfo['Extra comments']}<br>
    <br>
    CustomerInfo  <br>
    Name: ${customerName}<br>
    Last name: ${customerLastName}<br>
    Phone number: ${customerPhoneNumber}<br>
    Telegram: ${customerTg}<br>
    Instagram: ${customerInst}<br>
    Whatsapp: ${customerWatsapp}<br>

        <br>
        <div class = "ordershowBtns">
        <button class="orderReadyBtn">Submit</button>
        <button class="changeBtn">Change</button>
        </div>
`)
    $("#showOrderDiv").show()
    $(".customerInfoDiv").hide()
})

//change order details if smth wrong 
$(document).on("click", ".change", function() {

    window.location.href = "/shop.html";
})

function savecustomerData() {
    let customerData = {
        "customerInst": customerInst,
        "customerTg": customerTg,
        "customerWatsapp": customerWatsapp,
        "customerName": customerName,
        "customerLastName": customerLastName,
        "customerPhoneNumber": customerPhoneNumber
    };
    customerData = JSON.stringify(customerData)
    localStorage.setItem("customerData", customerData)
}

function showReadyCustomerData() {
    let onloadData = JSON.parse(localStorage.getItem('customerData'));
}

//tabs code
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

//adding chosing contact info , checking form filling 
$(".orderReadyBtn").on("click", function() {
    alert("asdfsdafasd")

})