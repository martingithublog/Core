$(document).ready(function () {
    $(".burger").click(function () {
        $(".burger").toggleClass("active");
    });
});

$(document).ready(function () {
    $(".burger").click(function () {
        $(".spanlogo").toggleClass("active");
    });
});

$(document).ready(function () {
    $(".burger").click(function () {
        $(".navi").toggleClass("active");
    });
});

$(document).ready(function () {
    $(".burger").click(function () {
        $(".blackBox").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".burger").click(function () {
        $(".plans").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".burger").click(function () {
        $(".slick-dots").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".burger").click(function () {
        $(".forma").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".burger").click(function () {
        $(".leftContact").toggleClass("active");
    });
});
$(document).ready(function () {
    $(".burger").click(function () {
        $(".rightContact").toggleClass("active");
    });
});


$(document).ready(function () { $('.your-class').slick({ arrows: false, autoplay: true, dots: true, infinite: true, speed: 1000, fade: true, cssEase: 'linear' }); });

//Access - Control - Allow - Origin’ missing Error fixed by browser CROS plugin I 
$(document).ready(function () {
    var mySelect = $('#mySelect');
    $.ajax({
        type: 'GET',
        url: 'http://marketing.core-fin.com/CorefinInsurance/Pet/GetBreeds',
        dataType: 'json',
        success: function (data) {
            mySelect.empty();
            $.each(data, function (index, val) {
                mySelect.append($('<option/>', {
                    value: val.Id,
                    text: val.Name
                }));
            });
        }
    });
});

$(document).ready(function () {
    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal',
        radioClass: 'iradio_minimal',
        increaseArea: '20%' 
    });
});