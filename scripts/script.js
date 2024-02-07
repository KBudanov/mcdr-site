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

let keysForRise = Object.keys(defaulUpBack)





//!!!!!!!!!!!!!!!!!!!!!


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


let rise;
let upsweep;
let backsweep;
let width = 760;
let colorAnod;
let paintExp;
let colorPaint;
let spacers = false;
let extraInf;
let customerTg;

let customerInst;
let customerWatsapp;
let customerName;
let customerLastName;
let customerPhonenUmber;




//rise chosing


function renderRise() {
    for (let i = 0; i < keysForRise.length; i++) {
        $(".choseRise").prepend(
            ` <input type="button" class="riseBtn" value="${keysForRise[i]}" id="riseBtn${i}">`
        );
    }
}

// here is the block which will call all after the page is loaded
$(document).ready(() => {
    renderRise()

    $(document).on("click", ".riseBtn", function() {
        let btnRId = this.id;
        btnRId = btnRId.split("riseBtn")[1];
        rise = keysForRise[btnRId];
        console.log("Rise:  " + rise);
        $(".riseImg").attr("src", images[rise])
        upsweep = defaulUpBack[rise].split(",")[0]
        backsweep = defaulUpBack[rise].split(",")[1]
    });

    $(".nextBtn").on("click", function() {
        extraInf = $("#additionalInf").val()
        colorPaint = $("#paintDesc").val()
        paintExp = $("#anodDesign").val()

        $("#anodDesign").val(" ")
        $("#paintDesc").val(" ")
        $("#additionalInf").val(" ")

    })
})


//textareas




//anod chose
let colorsForAnodBtns = Object.values(colors)
console.log(colorsForAnodBtns)



$(document).on("click", ".anodBtn", function() {
    let btnAnId = this.id;
    btnAnId = btnAnId.split("anodBtn")[1];
    colorAnod = colors[btnAnId];
    console.log("Color clicked: " + colorAnod);
});

for (let i = 0; i < colorsForAnodBtns.length; i++) {
    let container = $(".anodButtons");
    $(".anodButtons").append(`<input type="button" class="anodBtn" value="${colorsForAnodBtns[i]}" id="anodBtn${i + 1}">`);

}

// Create a function to set up the input dropdown
function setUpInputDropdown() {
    // Create a select element
    const $dropdown = $('<select>', { id: 'dropdown' });

    // Add options 1 to 6
    for (let i = 1; i <= 6; i++) {
        $dropdown.append($('<option>', { value: i, text: i }));
    }

    // Create a label element
    const $label = $('<label>', {
        for: 'dropdown',
        text: 'Choose up-sweep, dont write anything to use default settings (they are written below): '
    });

    // Get a reference to the container div by its ID
    const $container = $('#up-input-container');

    // Append the label and dropdown to the container
    $container.append($label, $dropdown);

    // Set an event handler for when the dropdown value changes
    $dropdown.on('change', function() {
        const selectedValue = $dropdown.val();
        upsweep = selectedValue
        console.log(upsweep)

    });
}

// Call the function to set up the input dropdown
setUpInputDropdown();
setBackInputDropdown();

function setBackInputDropdown() {
    // Create a select element
    const $dropdown = $('<select>', { id: 'dropdown' });

    // Add options 1 to 6
    for (let i = 7; i <= 15; i++) {
        $dropdown.append($('<option>', { value: i, text: i }));
    }

    // Create a label element
    const $label = $('<label>', {
        for: 'dropdown',
        text: 'Choose back-sweep, or use default settings: '
    });

    // Get a reference to the container div by its ID
    const $container = $('#back-input-container');

    // Append the label and dropdown to the container
    $container.append($label, $dropdown);

    // Set an event handler for when the dropdown value changes
    $dropdown.on('change', function() {
        const selectedValue = $dropdown.val();
        backsweep = selectedValue
        console.log(backsweep)

    });

}


//width choose
$("#width").on("change", function() {
    let widthCheck = $("#width").val();
    if (widthCheck >= 710 && widthCheck <= 800) {
        width = widthCheck;
        $("#width").val("");
        $("#width").attr("placeholder", `choosed - ${width}`);
        $(".widthWarnity").hide()
    } else {
        $("#width").val("");
        let wrongWidthHtml = `<p class="widthWarnity" style="color: red;">Wrong equal, choose width from 710 to 800</p>`;
        $(".barWidth").append(wrongWidthHtml);
    }
    console.log(width);
});

//spacers
$(document).ready(function() {
    let isChecked = false;

    $('#tickCrossButton').click(function() {
        isChecked = !isChecked;
        $(this).text(isChecked ? '✔️' : '❌');
        spacers = isChecked
    });
});

//go to user info page 
$(".nextBtn").on("click", function() {
    window.location.href = "/customerInfo.html";
    console.log(rise)
});

$(".colorsInp").hide();

$('#colorSwitch').change(function() {
    // debugger
    let anodColor = "anod";
    console.log(anodColor)
    anodColorSwitch(anodColor);
    if ($(this).is(':checked')) {
        $('#anod_color').val('paint');
        anodColorSwitch('paint');
    } else {
        $('#anod_color').val('anod');
        anodColorSwitch('anod');
    }
});


function anodColorSwitch(anodColor) {
    if (anodColor === "paint") {
        $(".anodDesign").hide();
        $(".colorsInp").show();
        $(".anodDesign2").hide();
    } else {
        $(".anodDesign").show();
        $(".colorsInp").hide();
        $(".anodDesign2").show();
    }
}

//customer Info Tabs
$(document).ready(function() {
    // Open default tab
    $(".tabcontentInfo").hide();
    $("#defaultOpenInfo").click();

    // Tab click event
    $(".tablinksInfo").click(function() {
        var target = $(this).data("target");

        // Remove active class from all tabs
        $(".tablinksInfo").removeClass("active");

        // Hide all tab content
        $(".tabcontentInfo").hide();

        // Show the current tab, and add an "active" class to the button that opened the tab
        $("#" + target).show();
        $(this).addClass("active");
    });
});


$(document).ready(function() {
    // Open default tab
    $("#defaultOpen").click();

    // Tab click event
    $(".tablinks").click(function() {
        var target = $(this).data("target");

        // Remove active class from all tabs
        $(".tablinks").removeClass("active");

        // Hide all tab content
        $(".tabcontent").hide();

        // Show the current tab, and add an "active" class to the button that opened the tab
        $("#" + target).show();
        $(this).addClass("active");
    });
});

//function to show customer all info about order
function showOrder() {
    let text = `
    Rise: ${rise}
    Up-sweep: ${upsweep}
    Back-sweep: ${backsweep}
    Width: ${width}
    Anod color: ${colorAnod}
    Paint color : ${colorPaint}
    Paint explenation : ${paintExp}
    Spacers : ${spacers}
    Extra comments : ${extraInf}
    
    CustomerInfo
    Customer name: ${customerName}
    Customer last name: ${customerLastName}
    Customer  tg: ${customerTg}
    Customer  inst: ${customerInst}
    Customer  whatsapp: ${customerWatsapp}
    `;

    console.log(text)
    $(".showOrderDivv").append(text)
}

$(".orderReadyBtn").on("click", function() {

    customerInst = $("#customerInst").val()
    customerTg = $("#customerTg").val()
    customerWatsapp = $("#customerWatsapp").val()
    customerLastName = $("#customerLastName").val()
    customerName = $("#customerName").val()
    customerPhonenUmber = $("#customerPhoneNumber").val()
    showOrder()
})


//send info to tg bot
/*
$(".orderReadyBtn").on("click", function() {
    // console.log(colorAnod)
    console.log(rise, upsweep, colorAnod)

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
        CustomerInfo
        Customer name: ${customerName}%0A
        Customer last name: ${customerLastName}%0A
        Customer  tg: ${customerTg}%0A
        Customer  inst: ${customerInst}%0A
        Customer  whatsapp: ${customerWatsapp}
        
        `;


        let botUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgId}&text=${orderText}&parse_mode=html`;
        let botUrlDany = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${tgIdDany}&text=${orderText}&parse_mode=html`;

        $.post(botUrl)
        $.post(botUrlDany)
    } else {
        alert("chose width")
    }


});*/