let images = {
    150: "imgs/img1.JPG",
    120: "imgs/img2.JPG",
    115: "imgs/img3.PNG",
    105: "imgs/img4.JPG",
    100: "imgs/img5.JPG",
    95: "imgs/img6.JPG",
    90: "imgs/img7.JPG",
    70: "imgs/img8.JPG",
    55: "imgs/img9.JPG",
}

let defaulUpBack = {
    150: "3 , 11",
    120: "3 , 11",
    115: "3 , 11",
    105: "4 , 10",
    95: "4 , 10",
    100: "3 , 10",
    90: "3 , 10",
    70: "4 , 9",
    55: "5 , 9"
}

let rise;
let upsweep;
let backsweep;
let width;
let colorAnod;
let paintExp;
let colorPaint;
let spacers;
let extraInf;


//rise chosing
$(".riseBtn").on("click", function() {
    let btnId = this.id;
    btnId = btnId.split("riseBtn")[1]
    $("#riseImg").attr("src", images[btnId])
    rise = btnId;
    upsweep = defaulUpBack[btnId].split(",")[0]
    backsweep = defaulUpBack[btnId].split(",")[1]

})

//upsweep chose 
$("#upReady").on("click", function() {
    let upsweepCheck = $("#upSweep").val();
    if (upsweepCheck <= 6 && upsweepCheck >= 1) {
        upsweep = upsweepCheck;
        $("#upSweep").val("");
        $("#upSweep").attr("placeholder", `choosed - ${upsweep}`)
    } else {
        alert("Wrong equall , chose up-sweep from 1 to 6")
        $("#upSweep").val("");
    }
})

//back chose 
$("#backReady").on("click", function() {
    let backSwCheck = $("#backSweep").val();
    if (backSwCheck <= 15 && backSwCheck >= 7) {
        backsweep = backSwCheck;
        $("#backSweep").val("");
        $("#backSweep").attr("placeholder", `choosed - ${backsweep}`)
    } else {
        alert("Wrong equall , chose back-sweep from 7 to 15")
        $("#backSweep").val("");
    }
})

//width chose 
$("#widthReady").on("click", function() {
    let widthCheck = $("#width").val();
    if (widthCheck <= 800 && widthCheck >= 710) {
        width = widthCheck;
        $("#width").val("");
        $("#width").attr("placeholder", `choosed - ${width}`)
    } else {
        alert("Wrong equall , chose width from 710 to 800")
        $("#width").val("");
    }

})











//send info to tg bot

$(".orderBtn").on("click", function() {
    if (width) {
        let tgId = 961172191;
        let botToken = '6827397329:AAGziUZrNAD3bxQAfswT5VmSDDKWCg2HyqI';

        let a = "text"

        let orderText = `
        NEW ORDER %0A
        Rise: ${rise}%0A
        Up-sweep: ${upsweep}%0A
        Back-sweep: ${backsweep}%0A
        Width: ${width}%0A
        `;


        let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}&parse_mode=html`;


        $.post(botUrl)
    } else {
        alert("chose width")
    }


});