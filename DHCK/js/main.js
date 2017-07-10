setInterval(function () {
    var $KnifeOrder3 = $("#KnifeOrder_3");
    var $knife_sale_descr_3 = $("#knife_sale_descr_3");
    var $PreOrder3 = $("#pre-order_3");

    if ($KnifeOrder3.is(":hover")) {
        $KnifeOrder3.css("opacity", "1");
        $knife_sale_descr_3.css("opacity", "1");
        $PreOrder3.css("opacity", "1");
    } else {
        $KnifeOrder3.css("opacity", "0.9");
        $knife_sale_descr_3.css("opacity", "0");
        $PreOrder3.css("opacity", "0");
    }


    var $KnifeOrder2 = $("#KnifeOrder_2");
    var $knife_sale_descr_2 = $("#knife_sale_descr_2");
    var $PreOrder2 = $("#pre-order_2");

    if ($KnifeOrder2.is(":hover")) {
        $KnifeOrder2.css("opacity", "1");
        $knife_sale_descr_2.css("opacity", "1");
        $PreOrder2.css("opacity", "1");
    } else {
        $KnifeOrder2.css("opacity", "0.9");
        $knife_sale_descr_2.css("opacity", "0");
        $PreOrder2.css("opacity", "0");
    }


    var $KnifeOrder1 = $("#KnifeOrder_1");
    var $knife_sale_descr_1 = $("#knife_sale_descr_1");
    var $PreOrder1 = $("#pre-order_1");

    if ($KnifeOrder1.is(":hover")) {
        $KnifeOrder1.css("opacity", "1");
        $knife_sale_descr_1.css("opacity", "1");
        $PreOrder1.css("opacity", "1");
    } else {
        $KnifeOrder1.css("opacity", "0.9");
        $knife_sale_descr_1.css("opacity", "0");
        $PreOrder1.css("opacity", "0");
    }

}, 200);


$(window).on("load", function () {

    /* Page Scroll to id fn call */
    $(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
        layout: "auto",
        offset: 10,
        highlightSelector: ".menu a"
    });

    /* demo functions */
    $("a[rel='next']").click(function (e) {
        e.preventDefault();
        var to = $(this).parent().parent("section").next().attr("id");
        $.mPageScroll2id("scrollTo", to);
    });

});


$(document).ready(function () {

    $(".gallery_progress").click(function () {
        alert("Gallery in progress!");
    });


    $('.image-link').magnificPopup({
        type: 'image'
    });

});