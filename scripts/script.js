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


let colors = {
    1: "Bronze",
    2: "Night",
    3: "228",
    4: "Black sea",
    5: "Cerulean",
    6: "Sun rise",
    7: "Aurum",
    8: "Rose-Gold",
    9: "Pink",
    10: "Purple",
    11: "Violet",
    12: "An-Twilling",
    13: "Coral reefs",
    14: "Scarab Green",
    15: "Black Matt",
    16: "Black Bliss",
    17: "TC",
    18: "TLC",
    19: "TMC"
}

let colorsForAnodBtns = Object.values(colors)
console.log(colorsForAnodBtns)


let rise;
let upsweep;
let backsweep;
let width = 770;
let colorAnod;
let paintExp;
let colorPaint;
let spacers;
let extraInf;
let customerTg;


//rise chosing
$(".riseBtn").on("click", function() {
    let btnId = this.id;
    btnId = btnId.split("riseBtn")[1]
    $("#riseImg").attr("src", images[btnId])
    rise = btnId;
    upsweep = defaulUpBack[btnId].split(",")[0]
    backsweep = defaulUpBack[btnId].split(",")[1]
})

//textareas
$(".nextBtn").on("click", function() {
    extraInf = $("#additionalInf").val()
    colorPaint = $("#paintDesc").val()
    paintExp = $("#anodDesign").val()

    $("#anodDesign").val(" ")
    $("#paintDesc").val(" ")
    $("#additionalInf").val(" ")

})



//anod chose

$(document).on("click", ".anodBtn", function() {
    let btnAnId = this.id;
    btnAnId = btnAnId.split("anodBtn")[1];
    let colorAnod = colors[btnAnId];
    console.log("Color clicked: " + colorAnod);
});


for (let i = 0; i < colorsForAnodBtns.length; i++) {
    let container = $(".anodButtons");
    $(".anodButtons").append(`<input type="button" class="anodBtn" value="${colorsForAnodBtns[i]}" id="anodBtn${i}">`);

}

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


//spacers
$(document).ready(function() {

    let isChecked = false;
    $('#tickCrossButton').click(function() {
        isChecked = !isChecked;
        $(this).text(isChecked ? '✔️' : '❌');
        spacers = isChecked
    });
});








//send info to tg bot

$(".nextBtn").on("click", function() {
    if (width) {
        let tgId = 961172191;
        let tgIdDany = 750134864;
        let botToken = '6827397329:AAGziUZrNAD3bxQAfswT5VmSDDKWCg2HyqI';

        let a = "text"

        let orderText = `New order %0A
        Rise: ${rise}%0A
        Up-sweep: ${upsweep}%0A
        Back-sweep: ${backsweep}%0A
        Width: ${width}%0A
        Anod color: ${colorAnod}%0A
        Paint color : ${colorPaint}%0A
        Paint explenation : ${paintExp}%0A
        Spacers : ${spacers}%0A
        Extra comments : ${extraInf}%0A
        %0A
        %0A
        Customer tg : ${customerTg}

        `;


        let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}&parse_mode=html`;
        let botUrlDany = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdDany}&text=${orderText}&parse_mode=html`;

        $.post(botUrl)
        $.post(botUrlDany)
    } else {
        alert("chose width")
    }


});