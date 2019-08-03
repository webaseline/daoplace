var $ = jQuery;
var tjq = jQuery;
jQuery(document).ready(function() {
    jQuery('#option_btn').click(
        function() {
            if (jQuery('#option_wrapper').css('right') != '0px') {
                jQuery('#option_wrapper').animate({ "right": "0px" }, { duration: 500 });
                jQuery(this).animate({ "right": "280px" }, { duration: 500 });
            } else {
                var isOpenOption = jQuery.cookie("grandrestaurant_demo");
                if (jQuery.type(isOpenOption) === "undefined") {
                    jQuery.cookie("grandrestaurant_demo", 1, { expires: 7, path: '/' });
                }
                jQuery('#option_wrapper').animate({ "right": "-280px" }, { duration: 500 });
                jQuery('#option_btn').animate({ "right": "-2px" }, { duration: 500 });
            }
        }
    );

    var isOpenOption = jQuery.cookie("grandrestaurant_demo");
    if (jQuery.type(isOpenOption) === "undefined") {
        jQuery('#option_btn').trigger('click');
    }


    tjq("#btnBooking").click(function() {

        tjq('form#formBooking').validate({

            // Specify the validation rules
            rules: {
                seats: {
                    required: true
                },
                fullname: {
                    required: true
                },
                date: {
                    required: true
                },
                time: {
                    required: true
                },
                phone: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
            },

            // Specify the validation error messages
            messages: {

            },

            submitHandler: function(form) {
                $.post('/api/booking', $('form#formBooking').serialize()).then((res) => {
                    if (res.booking) {
                        alert("Đặt dịch vụ thành công !");
                        $('form#formBooking').find("input[type=text], textarea").val("");
                        jQuery('#reservation_wrapper').fadeOut();
                        jQuery('body').removeClass('overflow_hidden');
                        jQuery('html').removeClass('overflow_hidden');
                    } else {
                        alert("Đặt dịch vụ lỗi !");
                    }
                });
            }
        });
    });
});
