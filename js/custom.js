if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

function accountHover() {
    document.getElementById("account_ul").style.display = "block";
}

function accountHoverOut() {
    document.getElementById("account_ul").style.display = "none";
}

function search_toggle() {
    var search_nav_mobile = document.getElementById("search-home-mobile");
    if (search_nav_mobile.style.display == "none" || search_nav_mobile.style.display == "") {
        search_nav_mobile.style.display = "block";
    } else {
        search_nav_mobile.style.display = "none";
    }
}

document.querySelector(".mail-subscribe-btn").addEventListener('click', function() {
    $.ajax({
        url: '/subscribe-to-mailinglist',
        type: 'POST',
        data: {
            _token: `BeQDecN8o9S83X8Vw4CXUiS0OSSPPIb8yHw6MhcA`,
            email: document.querySelector('.email-submit-input').value
        },
        dataType: 'JSON',
        success: function(data) {
            swal(
                'Success',
                data.success,
                'success'
            )
        },
        error: function(data) {
            swal(
                'Oops...',
                data.responseJSON.err,
                'error'
            )
        }
    });
});

var mobileMenuVisible = false;

function toggleMobileSidebar(elem) {
    if (!mobileMenuVisible) {
        mobileMenuVisible = true;
        document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(103%)";
        document.querySelector('.menu-img-ref').src = "/img/cross_icon.png";
    } else {
        mobileMenuVisible = false;
        document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(0%)";
        document.querySelector('.menu-img-ref').src = "/img/menu_icon.png";
    }
}

if (localStorage.getItem('IfThisIsApp')) {
    document.querySelector('.this-is-app-exit').style.display = "block";
} else {

}

$(document).ready(function() {

    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        if (st > 0) {
            if (window.innerWidth > 997) {
                document.querySelector('.nav-menu-desktop').style.transform = "translateY(-120px)";
                document.querySelector('.nav-menu-home-mobile').style.display = "block";
                document.querySelector('body').style.marginTop = "60px";
            }
        } else {
            if (window.innerWidth > 997) {
                document.querySelector('.nav-menu-desktop').style.transform = "translateY(0px)";
                document.querySelector('body').style.marginTop = "120px";
                mobileMenuVisible = false;
                document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(0%)";
                document.querySelector('.menu-img-ref').src = "/img/menu_icon.png";
            }
        }


    });

});

function goToPage(page) {
    window.location.href = "/" + page
}
//carosal
function carousel_sleek(item_name) {
    $('.' + item_name).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

var carousel_html = "";
$(document).ready(function() {
    carousel_html = document.getElementById("print_type_carousel").innerHTML;
    carousel_sleek("carousel-items");
    $("#print_type_carousel").show();
});


var client = algoliasearch('2UIXGXYA5O', 'bfcfa7b10e2c9220df5d1d639d485218');
var index = client.initIndex('products');
$('.alg-search-box').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(
        index, {
            hitsPerPage: 10,
            filters: "status:1 AND NOT isSearchable:0 AND NOT type:men AND NOT type:kids AND NOT type:women AND NOT type:'full sleeve' AND NOT type:sweatshirt",
            distinct: 1
        }
    ),
    displayKey: 'title',
    templates: {
        suggestion: function(suggestion) {
            return suggestion._highlightResult.title.value;
        }
    },
    transformItems: function(items) {
        return items.map(function(item) {
            item = item.replace(/Fabrilife/gi, "");
            return item;
        });
    }
}]).on('autocomplete:selected', function(event, suggestion, dataset, context) {
    if (document.querySelectorAll(".nav-text-input")[0].value != "") {
        document.querySelectorAll('.newhome-search')[0].click();
    } else {
        document.querySelectorAll('.newhome-search')[1].click();
    }
});

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isSetCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}

function parseftl(ftl) {
    try {
        ftl = decodeURIComponent(ftl);
        ftl = atob(ftl);
        ftl = JSON.parse(ftl);
        if (ftl && ftl.hasOwnProperty('pid') && ftl.hasOwnProperty('uid') && ftl.hasOwnProperty('t')) {
            //console.log("Tracking activated for: " + ftl.uid + ", " + ftl.pid + ", " + ftl.t);
            return ftl;
        }
    } catch (error) {
        //console.log(error);
        return null;
    }
    return null;
}

function get_product_page_id() {
    if (window.location.href.includes("/product/")) {
        var matches = window.location.href.match(/\/product\/(\d+)-/);
        if (matches) return matches[0];
    }
    return null;
}

$(document).ready(function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        var ftl = urlParams.get('ftl');
        if (ftl) {
            ftl = parseftl(ftl);
            if (ftl) setCookie("ftl", urlParams.get('ftl'), 7);
        }
    } catch (error) {
        //console.log(error);
    }
    if (isSetCookie("ftl")) {
        ftl = getCookie("ftl");
        ftl = parseftl(ftl);
        if (ftl) {
            var affiliate_id = ftl.uid;
            var product_id = get_product_page_id();
            if (product_id) {

            }
        }
    }
    if (!isSetCookie("app_modal_times")) {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
            $("#app-promo-modal a").attr("href", 'https://play.google.com/store/apps/details?id=fabrilife.os.webview&hl=en&gl=US');
        } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
            $("#app-promo-modal a").attr("href", 'https://apps.apple.com/app/fabrilife/id1672120838');
        } else {
            $("#app-promo-modal a").attr("href", '/gallery');
        }
        setTimeout(() => {
            $('#app-promo-modal').modal('toggle');
        }, 1000);
        setCookie("app_modal_times", 1, 1);
    }
});

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'AW-788032934');

localforage.config({
    driver: localforage.INDEXDB
});

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-92982145-1', 'auto');
ga('send', 'pageview');



(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function(e) {
    if (e.data === "Iframe Login Done") {
        $('.commonmodal').modal('toggle');
        window.loggedInSuccess = true;
    }
}, false);

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function hideNavAndFooter() {
    if (inIframe()) {
        //console.log(window.location.href);
        if (window.location.href.includes("/login") || window.location.href.includes("/register")) {
            document.querySelector(".navbar").style.display = "none";
            document.querySelector(".mobile-nav-sidebar").style.display = "none";
            document.querySelector(".footer-container").style.display = "none";
            document.querySelector('.fb-customerchat').className = "customerchat-hide";
            document.querySelector('.customerchat-hide').style.display = "none";
        }
    }
}



function invokeLogin() {
    document.querySelector('.commonmodal-header').textContent = "Login is required";
    document.querySelector('.commonmodal-body').style.overflow = "hidden";
    document.querySelector('.commonmodal-body').innerHTML =
        '<div style="width: 100%; border: 0px solid; border-radius: 5px; background: #efefef; padding: 15px; text-align: left;">You need to Log in first to create a Wish List and add items to it. This ensures that your list will be saved in your account and will be available when you Log in again.</div><div style="width: 100%; padding: 15px; text-align:center;"><a class="btn btn-primary bulk-landing-start" href="/login">Login Now</a><br/><a href="/register" style="text-decoration:underline; font-size: 0.8rem;">New User? Click here to Register</a></div>';
    $('.commonmodal').modal('toggle');
}
window.onload = hideNavAndFooter;


ifThisIsApp = new URLSearchParams(window.location.search);

if (ifThisIsApp.get("app") == "true") {
    localStorage.setItem('IfThisIsApp', true);
}

if (localStorage.getItem('IfThisIsApp')) {
    document.querySelector('.fb-customerchat').className = "customerchat-hide";
    document.querySelector('.customerchat-hide').style.display = "none";
}

! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '556248491424491');
fbq('track', 'PageView');


// category pg-----------------------------------------
function refreshGcart() {
    $.ajax({
        url: '/gcart',
        type: 'GET',
        success: function(data) {
            if (data.total === 0) {
                document.querySelector(".empty-cart").style.display = "flex";
                document.querySelector(".gcart-content").style.display = "none";
                document.querySelector(".gcart-control").style.display = "none";
            } else {
                document.querySelector(".empty-cart").style.display = "none";
                document.querySelector(".gcart-content").style.display = "block";
                document.querySelector(".gcart-control").style.display = "flex";
            }
            document.querySelector('.gcart-content').innerHTML = data.html;
            document.querySelector('.gart-total-amount').innerHTML = "৳ " + data.total;
        }
    });
}
refreshGcart();



toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-bottom-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "500",
    "timeOut": "4000",
    "extendedTimeOut": "4000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const onIntersection = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting && entry.target == document.querySelector("#pagination")) {
            if (document.querySelector('.ais-InfiniteHits-loadMore')) {
                document.querySelector('.ais-InfiniteHits-loadMore').click();
            }
            if (window.innerWidth > 767) {
                //document.querySelector('aside.refineset').style.zIndex = -2;
            }
        } else {
            if (window.innerWidth > 767) {
                document.querySelector('aside.refineset').style.zIndex = 10;
            }
        }
    }
};
const observer = new IntersectionObserver(onIntersection);
observer.observe(document.querySelector("#pagination"));


$(document).ready(function() {

    var lastScrollTop = 0;

    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        //            if(st < lastScrollTop) {
        //                if(window.innerWidth > 997){
        //                    document.querySelector('aside.refineset').style.top = "120px"
        //                    document.querySelector('aside.refineset').style.height = "calc(100vh - 120px)"
        //                }
        //            }
        //            else {
        //                if(window.innerWidth > 997){
        //                    document.querySelector('aside.refineset').style.top = "0"
        //                    document.querySelector('aside.refineset').style.height = "100vh"
        //                }
        //            }
        //            lastScrollTop = st;

        if (st > 0) {
            if (window.innerWidth > 997) {
                document.querySelector('aside.refineset').style.top = "40px";
                document.querySelector('aside.refineset').style.height = "calc(100vh - 40px)";
                document.querySelector('#searchbox').classList.add("search-on-nav");
                document.querySelector('.aside-refinement.refinement-area').style.display = "block";
                document.querySelector('#aside-tagbox').style.display = "block";
                document.querySelector('.main-refinement.refinement-area').style.display = "none";
            }
        } else {
            if (window.innerWidth > 997) {
                document.querySelector('aside.refineset').style.top = "110px";
                document.querySelector('aside.refineset').style.height = "calc(100vh - 110px)";
                document.querySelector('#searchbox').classList.remove("search-on-nav");
                document.querySelector('.aside-refinement.refinement-area').style.display = "none";
                document.querySelector('#aside-tagbox').style.display = "none";
                document.querySelector('.main-refinement.refinement-area').style.display = "block";
            }
        }

    });

});

window.addEventListener('click', function(e) {
    var elm = e.target;
    if (elm.classList.contains("shopping-cart") || elm.parentElement.classList.contains("shopping-cart")) {
        if (document.querySelector('.view-gcart-fixed').style.transform == "translateX(0px)") {
            document.querySelector('.view-gcart-fixed').style.transform = "translateX(calc(100% - 40px))";
            document.querySelector('.cart-overlay').classList.remove("overlay");
            document.querySelector('body').classList.remove("still");
        } else {
            document.querySelector('.view-gcart-fixed').style.transform = "translateX(0px)";
            document.querySelector('.cart-overlay').classList.add("overlay");
            document.querySelector('body').classList.add("still");
        }
    } else {
        if (elm.classList.contains("fa-close") && elm.parentElement.classList.contains("gcart-title")) {
            document.querySelector('.view-gcart-fixed').style.transform = "translateX(calc(100% - 40px))";
            document.querySelector('.cart-overlay').classList.remove("overlay");
            document.querySelector('body').classList.remove("still");
        } else if (document.getElementById('empty-cart').contains(elm)) {
            document.querySelector('.view-gcart-fixed').style.transform = "translateX(calc(100% - 40px))";
            document.querySelector('.cart-overlay').classList.remove("overlay");
            document.querySelector('body').classList.remove("still");
        }
        //	else if (!document.getElementById('gcart-content').contains(elm) && !document.querySelector('body').classList.contains("modal-open")){
        else if (!document.getElementById('gcart-content').contains(elm)) {
            document.querySelector('.view-gcart-fixed').style.transform = "translateX(calc(100% - 40px))";
            document.querySelector('.cart-overlay').classList.remove("overlay");
            document.querySelector('body').classList.remove("still");
        }
    }
});

$(document).on('click', event => {
    var addToCart = $(event.target);
    if (addToCart.prop("tagName") == 'I') addToCart = addToCart.parent();
    if (addToCart.hasClass("products-cart-button")) {

        var title = addToCart.data('title');
        if (title.includes('Premium Cotton Face Mask - Branded')) {
            window.location.href = "https://fabrilife.com/" + addToCart.data('url');
            return;
        }

        if (title.includes('Premium Cotton Face Mask - Bulk')) {
            window.location.href = "https://fabrilife.com/" + addToCart.data('url');
            return;
        }

        color = addToCart.data('color');
        //console.log(addToCart);
        //console.log(addToCart.find(".products-cart-button-loader" ));
        addToCart.find(".products-cart-button-loader").css("display", "inline-block");
        $.ajax({
            url: '/add-item-to-cart',
            type: 'GET',
            data: {
                id: addToCart.data('productkey'),
            },
            success: function(data) {
                if (color == "#222222") {
                    if (data[3]['type'] == 'kids' || data[3]['type'] == 'full sleeve') color = "#111111";
                    else color = "#000000";
                }
                //console.log(data[9]);
                localStorage.removeItem('currentcartsize');
                localStorage.setItem('currentcartinkCost', data[3]['price']);
                localStorage.setItem('cartaddedPrice', data[4]);
                pricingVariables = data[1];
                populateSizeBoxes(color, data[9], data[3]);
                populateColorCircles(data[0], color);
                populatePriceBox();
                localStorage.setItem('currentcartcolor', color);
                if (document.querySelector('.size-selector-selected') && localStorage.getItem('currentcartsize') != null) {
                    document.querySelector('.priceBox').style.display = "block";
                    document.querySelector('.modal-price-text').innerText = "‎৳" + calculateDynamicPrice(localStorage.getItem('currentcartcolor'), localStorage.getItem('currentcartsize'));
                }
                document.querySelector('.pricemodal-header').innerHTML = '<p style= "text-align:center">Price Details</p>';
                document.querySelector('.pricemodal-footer').innerHTML = '<button class="modal-btn btn btn-danger pull-left" data-dismiss="modal">Cancel</button>' + '<button class="addToCartBtn discard-button modal-btn btn btn-success pull-right" onclick="addToCartGallery(\'' + data[3]['id'] + '\')">Add to Cart <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i></button>';
                document.querySelector('.card-title').innerHTML = addToCart.data('title');
                document.querySelector('.card-photo').src = addToCart.data('image');
                document.querySelector('.card-photo').style.background = addToCart.data('color');

                //     	    		if(document.querySelector('.view-gcart-fixed')){
                //     	        		document.querySelector('.view-gcart-fixed').style.transform = "translateX(calc(100% - 40px))";
                //     	          	document.querySelector('.cart-overlay').classList.remove("overlay");
                //     	        	}
                if ($('.pricemodal').css('display') == 'none') {
                    $('.pricemodal').modal('toggle');
                }
                addToCart.find(".products-cart-button-loader").css("display", "none");
            }
        });
    }
});
document.querySelector('.gcart-checkout').addEventListener('click', function() {
    fbq('track', 'InitiateCheckout');
    $('.ck-modal').modal('toggle');
});



var client = algoliasearch('2UIXGXYA5O', 'bfcfa7b10e2c9220df5d1d639d485218');
var index = client.initIndex('products');
$('.alg-search-box').autocomplete({ hint: false }, [{
    source: $.fn.autocomplete.sources.hits(index, { hitsPerPage: 10, filters: 'status:1', distinct: 1 }),
    displayKey: 'title',
    templates: {
        suggestion: function(suggestion) {
            return suggestion._highlightResult.title.value;
        }
    }
}]).on('autocomplete:selected', function(event, suggestion, dataset, context) {
    if (document.querySelectorAll(".nav-text-input")[0].value != "") {
        document.querySelectorAll('.newhome-search')[0].click();
    } else {
        document.querySelectorAll('.newhome-search')[1].click();
    }
});


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isSetCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}

function parseftl(ftl) {
    try {
        ftl = decodeURIComponent(ftl);
        ftl = atob(ftl);
        ftl = JSON.parse(ftl);
        if (ftl && ftl.hasOwnProperty('pid') && ftl.hasOwnProperty('uid') && ftl.hasOwnProperty('t')) {
            //console.log("Tracking activated for: " + ftl.uid + ", " + ftl.pid + ", " + ftl.t);
            return ftl;
        }
    } catch (error) {
        //console.log(error);
        return null;
    }
    return null;
}

function get_product_page_id() {
    if (window.location.href.includes("/product/")) {
        var matches = window.location.href.match(/\/product\/(\d+)-/);
        if (matches) return matches[0];
    }
    return null;
}

$(document).ready(function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        var ftl = urlParams.get('ftl');
        if (ftl) {
            ftl = parseftl(ftl);
            if (ftl) setCookie("ftl", urlParams.get('ftl'), 7);
        }
    } catch (error) {
        //console.log(error);
    }
    if (isSetCookie("ftl")) {
        ftl = getCookie("ftl");
        ftl = parseftl(ftl);
        if (ftl) {
            var affiliate_id = ftl.uid;
            var product_id = get_product_page_id();
            if (product_id) {

            }
        }
    }


    // if(isSetCookie("app_modal_times")) {
    //     app_modal_times = parseInt(getCookie("app_modal_times"));
    //     if(app_modal_times == 1) {
    //         setTimeout(() => { $('#app-promo-modal').modal('toggle'); }, 1000);
    //         setCookie("app_modal_times", parseInt(app_modal_times)+1, 1);
    //     }
    // } else {
    //     setTimeout(() => { $('#app-promo-modal').modal('toggle'); }, 1000);
    //     setCookie("app_modal_times", 1, 1);
    // }
    if (!isSetCookie("app_modal_times")) {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
            $("#app-promo-modal a").attr("href", 'https://play.google.com/store/apps/details?id=fabrilife.os.webview&hl=en&gl=US');
        } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
            $("#app-promo-modal a").attr("href", 'https://apps.apple.com/app/fabrilife/id1672120838');
        } else {
            $("#app-promo-modal a").attr("href", '/gallery');
        }
        setTimeout(() => { $('#app-promo-modal').modal('toggle'); }, 1000);
        setCookie("app_modal_times", 1, 1);
    }

});

var isAdmin = 0;

function openFilterSidebar() {
    document.querySelector('aside.refineset').style.transform = "translateX(0)";
}

function closeFilterSidebar() {
    document.querySelector('aside.refineset').style.transform = "translateX(-112%)";
}
var discount = 0




$(document).ready(function() {

    var lastScrollTop = 0;
    $(window).on('scroll', function() {
        st = $(this).scrollTop();
        //console.log(st);
        //console.log('scroll event fired...');


        //            if(st < lastScrollTop) {
        //                if(window.innerWidth > 997) {
        //                document.querySelectorAll('.nav-menu-home')[1].style.transform = "translateY(0px)";
        //                }
        //            }
        //            else {
        //                if(window.innerWidth > 997) {
        //                document.querySelectorAll('.nav-menu-home')[1].style.transform = "translateY(-120px)";
        //                }
        //            }
        //            lastScrollTop = st;

        if (st > 0) {
            if (window.innerWidth > 997) {
                document.querySelector('.nav-menu-desktop').style.transform = "translateY(-120px)";
                document.querySelector('.nav-menu-home-mobile').style.display = "block";
                document.querySelector('body').style.marginTop = "60px";
            }
        } else {
            if (window.innerWidth > 997) {
                document.querySelector('.nav-menu-desktop').style.transform = "translateY(0px)";
                document.querySelector('body').style.marginTop = "120px";
                mobileMenuVisible = false;
                document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(0%)";
                document.querySelector('.menu-img-ref').src = "/img/menu_icon.png";
            }
        }


    });

});
document.querySelector(".mail-subscribe-btn").addEventListener('click', function() {
    $.ajax({
        url: '/subscribe-to-mailinglist',
        type: 'POST',
        data: {
            _token: `nHn0j41cOJEOTvQUOqsOCJBa5gaa0TSKoMIYFa6k`,
            email: document.querySelector('.email-submit-input').value
        },
        dataType: 'JSON',
        success: function(data) {
            swal(
                'Success',
                data.success,
                'success'
            )
        },
        error: function(data) {
            swal(
                'Oops...',
                data.responseJSON.err,
                'error'
            )
        }
    });
});

var mobileMenuVisible = false;

function toggleMobileSidebar(elem) {
    if (!mobileMenuVisible) {
        mobileMenuVisible = true;
        document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(103%)";
        document.querySelector('.menu-img-ref').src = "/img/cross_icon.png";
    } else {
        mobileMenuVisible = false;
        document.querySelector('.mobile-nav-sidebar').style.transform = "translateX(0%)";
        document.querySelector('.menu-img-ref').src = "/img/menu_icon.png";
    }
}


if (localStorage.getItem('IfThisIsApp')) {
    document.querySelector('.this-is-app-exit').style.display = "block";
} else {

}

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-92982145-1', 'auto');
ga('send', 'pageview');


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent, function(e) {
    if (e.data === "Iframe Login Done") {
        $('.commonmodal').modal('toggle');
        window.loggedInSuccess = true;
    }
}, false);

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function hideNavAndFooter() {
    if (inIframe()) {
        //console.log(window.location.href);
        if (window.location.href.includes("/login") || window.location.href.includes("/register")) {
            document.querySelector(".navbar").style.display = "none";
            document.querySelector(".mobile-nav-sidebar").style.display = "none";
            document.querySelector(".footer-container").style.display = "none";
            document.querySelector('.fb-customerchat').className = "customerchat-hide";
            document.querySelector('.customerchat-hide').style.display = "none";
        }
    }
}



function invokeLogin() {

    document.querySelector('.commonmodal-header').textContent = "Login is required";
    document.querySelector('.commonmodal-body').style.overflow = "hidden";
    document.querySelector('.commonmodal-body').innerHTML =
        '<div style="width: 100%; border: 0px solid; border-radius: 5px; background: #efefef; padding: 15px; text-align: left;">You need to Log in first to create a Wish List and add items to it. This ensures that your list will be saved in your account and will be available when you Log in again.</div><div style="width: 100%; padding: 15px; text-align:center;"><a class="btn btn-primary bulk-landing-start" href="/login">Login Now</a><br/><a href="/register" style="text-decoration:underline; font-size: 0.8rem;">New User? Click here to Register</a></div>';
    $('.commonmodal').modal('toggle');
}
window.onload = hideNavAndFooter;

ifThisIsApp = new URLSearchParams(window.location.search);

if (ifThisIsApp.get("app") == "true") {
    localStorage.setItem('IfThisIsApp', true);
}

if (localStorage.getItem('IfThisIsApp')) {
    document.querySelector('.fb-customerchat').className = "customerchat-hide";
    document.querySelector('.customerchat-hide').style.display = "none";
}

! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '556248491424491');
fbq('track', 'PageView');

if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

function accountHover() {
    document.getElementById("account_ul").style.display = "block";
}

function accountHoverOut() {
    document.getElementById("account_ul").style.display = "none";
}

function search_toggle() {
    var search_nav_mobile = document.getElementById("search-home-mobile");
    if (search_nav_mobile.style.display == "none" || search_nav_mobile.style.display == "") {
        search_nav_mobile.style.display = "block";
    } else {
        search_nav_mobile.style.display = "none";
    }
}

// single pg -------------------------

var client = algoliasearch('2UIXGXYA5O', 'bfcfa7b10e2c9220df5d1d639d485218');
var index = client.initIndex('products');
$('.alg-search-box').autocomplete({
    hint: false
}, [{
    source: $.fn.autocomplete.sources.hits(
        index, {
            hitsPerPage: 10,
            filters: "status:1 AND NOT isSearchable:0 AND NOT type:men AND NOT type:kids AND NOT type:women AND NOT type:'full sleeve' AND NOT type:sweatshirt",
            distinct: 1
        }
    ),
    displayKey: 'title',
    templates: {
        suggestion: function(suggestion) {
            return suggestion._highlightResult.title.value;
        }
    },
    transformItems: function(items) {
        return items.map(function(item) {
            item = item.replace(/Fabrilife/gi, "");
            return item;
        });
    }
}]).on('autocomplete:selected', function(event, suggestion, dataset, context) {
    if (document.querySelectorAll(".nav-text-input")[0].value != "") {
        document.querySelectorAll('.newhome-search')[0].click();
    } else {
        document.querySelectorAll('.newhome-search')[1].click();
    }
});



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function isSetCookie(cname) {
    var cookie = getCookie(cname);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
}

function parseftl(ftl) {
    try {
        ftl = decodeURIComponent(ftl);
        ftl = atob(ftl);
        ftl = JSON.parse(ftl);
        if (ftl && ftl.hasOwnProperty('pid') && ftl.hasOwnProperty('uid') && ftl.hasOwnProperty('t')) {
            //console.log("Tracking activated for: " + ftl.uid + ", " + ftl.pid + ", " + ftl.t);
            return ftl;
        }
    } catch (error) {
        //console.log(error);
        return null;
    }
    return null;
}

function get_product_page_id() {
    if (window.location.href.includes("/product/")) {
        var matches = window.location.href.match(/\/product\/(\d+)-/);
        if (matches) return matches[0];
    }
    return null;
}

$(document).ready(function() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        var ftl = urlParams.get('ftl');
        if (ftl) {
            ftl = parseftl(ftl);
            if (ftl) setCookie("ftl", urlParams.get('ftl'), 7);
        }
    } catch (error) {
        //console.log(error);
    }
    if (isSetCookie("ftl")) {
        ftl = getCookie("ftl");
        ftl = parseftl(ftl);
        if (ftl) {
            var affiliate_id = ftl.uid;
            var product_id = get_product_page_id();
            if (product_id) {

            }
        }
    }
    if (!isSetCookie("app_modal_times")) {
        if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
            $("#app-promo-modal a").attr("href", 'https://play.google.com/store/apps/details?id=fabrilife.os.webview&hl=en&gl=US');
        } else if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
            $("#app-promo-modal a").attr("href", 'https://apps.apple.com/app/fabrilife/id1672120838');
        } else {
            $("#app-promo-modal a").attr("href", '/gallery');
        }
        setTimeout(() => {
            $('#app-promo-modal').modal('toggle');
        }, 1000);
        setCookie("app_modal_times", 1, 1);
    }
});


window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'AW-788032934');