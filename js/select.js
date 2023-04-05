/**
 * 自定义下拉框
 */

$(function () {
    $('.cx-select-input').click(function () {
        const selectInput = $(this)
        selectInput.next('.cx-option').slideToggle();
        var select = selectInput.parent('.cx-select');
        if (select.hasClass('focus')) {
            select.removeClass('focus')
        } else {
            select.addClass('focus')
            $('body').bind('click', function (e) {
               if (!$(e.target).parents('.cx-select').length) {
                   selectInput.next('.cx-option').slideUp()
                   $('.cx-select').removeClass('focus')
                   $('body').unbind('click')
               }
            })
        }
    })
})
