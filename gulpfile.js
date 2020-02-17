"use strict";

var siteCSS = '/frontend/Mgs/childtheme/en_AU/css/custom.css" />',
  siteUrl = "http://nesscotradesupplies.com.au/";

var site_html = '<div class="col-md-2 col-sm-2 col-xs-3 mobile-wrap-right">',
	new_html = '<div class="greet welcomes customer"><div class="customer-label btn btn-primary customer">Customer</div><span>Hello, Brad Murdoch!</span></div><div class="col-md-2 col-sm-2 col-xs-3 mobile-wrap-right">';

var ck = "Log In",
	new_ck = "My Account";
	
	var in_stock = '<div class="product-info-stock-sku">',
	new_in_stock = '<div class="product-info-stock-sku"><div class="stock available" title="Availability">Availability:<span>In stock</span></div></div><div class="select-list"><div class="field"><label class="label" for="list_id"><span>Save to wishlist</span></label><div class="control"><select id="list_id" class="validate-select"><option>Select List</option><option value="52">My Favorite List</option><option value="53">Test 1</option></select></div></div><div class="msg">&nbsp;</div></div>';


	
	var content = '<section id="maincontent" class="page-main container">',
	new_content = '<style> #quickorder-popup .quickorder-popup-loader .quickorder-popup-loader-bar{background:#ff9900}.quickorder-spinner i{border-color:#ff9900;border-top-color:transparent}.mgz-quickorder thead tr th.col{background:#ff9900}.mgz-quickorder thead tr th.col{color:#FFFFFF}#quickorder-popup .action.action-select:hover{opacity:.8}#quickorder-popup .action.action-select,.mgz-quickorder .quickorder-btn{background:#ff9900;border-color:#ff9900}</style><div class="page-title-wrapper" ><div class="container"><span class="page-header h1"><span class="base" data-ui-id="page-title-wrapper">Quick Order</span></span></div></div><div class="page-title-wrapper" style="background-image: url(http://nesscotradesupplies.com.au/media/bg_page_title/default/Blog_images2_-_tiny.jpg);"><div class="container"><span class="page-header h1"><span class="base" data-ui-id="page-title-wrapper">Quick Order</span></span></div></div><section id="maincontent" class="page-main container"><a id="contentarea" tabindex="-1"></a><div class="page messages" style="display: none;"><div data-placeholder="messages"></div><div > <div class="messages"></div><div class="messages"></div></div></div><div class="row"><div class="column main col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="customer-info-main"><div class="quickorder-form" > <div class="mgz-quickorder"><table class="items data table"><thead><tr><th class="col no"><span>No.</span></th><th class="col search"><span>Sku</span></th><th class="col item"><span >Product</span></th><th class="col price"><span >Price</span><br><span class="exgst" >(ex GST)</span></th><th class="col qty"><span>Qty</span></th><th class="col uom"><span>UoM</span></th><th class="col subtotal"><span>Total</span></th><th class="col action">&nbsp;</th></tr></thead><tbody><tr class="item-info"><td class="col no"><div >1.</div></td><td class="col search"><div class="quickorder-box-border input-field"><div class="mgz-quickorder-search"><input type="text"autocomplete="off" id="U44DW1F" placeholder="Enter SKU or Product Name" class="ui-autocomplete-input"><div class="mgz-quickorder-ui-wrapper" id="mgz-quickorder-ui-U44DW1F"><ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="display: none;"></ul></div></div></div></td><td class="col item"><div class="quickorder-box-border"></div></td><td class="col price"><div class="quickorder-box-border"></div></td><td class="col qty"><div class="quickorder-box-border input-field"></div></td><td class="col uom"><div class="quickorder-box-border"><div class="product-item-uom"><span></span></div></div></td><td class="col subtotal"><div class="quickorder-box-border"></div></td><td class="col action"><a href="#" class="action-delete" ><span class="fa fa-trash"></span></a></td></tr></tbody></table><div class="mgz-quickorder-action"><div class="row"><div class="col-sm-8"><div class="quickorder-btn-block"><button class="quickorder-btn quickorder-empty-btn btn btn-primary" >EMPTY QUICK ORDER</button></div><div class="quickorder-btn-block"><button class="quickorder-btn quickorder-add-btn btn btn-primary" >Add Product</button></div><div class="quickorder-btn-block"><button class="quickorder-btn quickorder-addlist-btn btn btn-primary" >ADD TO MY LIST</button><div class="mylist-options-wrapper"><select id="add-mylist-select" name="add-mylist-select" class="validate-select" style="width: auto"><option value="">My Favourites</option><option value="52">My Favorite List</option><option value="53">Test 1</option></select><div id="addtolist-footer-message">&nbsp;</div></div></div></div><div class="col-sm-4"><div class="quickorder-grand-total"><span >SUBTOTAL</span> <span class="quickorder-grand-total-price" >$0.00</span></div><div class="mgz-quickorder-action"><button class="quickorder-btn btn btn-secondary addtocart f-right" >Add to Cart</button></div></div></div></div><div class="mgz-quicorder-file"><fieldset class="fieldset"><div class="field"><label class="label"><span >Add products from file</span></label><p class="file-rules">File must be in .csv format and include "SKU" and "QTY" columns</p><div class="control"><label class="file-uploader-button" for="quickorder-file" >Choose File</label><a href="#"><span >Download Sample Csv</span></a><input type="file" id="quickorder-file" class="file"><p ></p></div></div></fieldset></div></div></div><div id="quickorder-popup" class="white-popup mfp-with-anim mfp-hide" data-effect="mfp-zoom-in"> <div class="quickorder-popup-wrapper"> <div class="quickorder-popup-content"></div></div><div class="quickorder-popup-loader"> <div class="quickorder-popup-loader-bar"></div></div></div></div><input name="form_key" type="hidden" value="JlzduBoBnLQsupwg"><div id="authenticationPopup" style="display: none;"> </div></div></div></section><section id="maincontent" class="page-main container">';
	
	new_content = '<section id="maincontent" class="page-main container"><a id="contentarea" tabindex="-1"></a><div class="page messages" style="display: none;"><div data-placeholder="messages"></div><div data-bind="scope: messages"> <div data-bind="foreach:{data: cookieMessages, as: message}" class="messages"></div><div data-bind="foreach:{data: messages().messages, as: message}" class="messages"></div></div></div><div class="row"><div class="column main col-lg-12 col-md-12 col-sm-12 col-xs-12"><input name="form_key" type="hidden" value="LgR71aYpsf6QVomg"><div id="authenticationPopup" data-bind="scope:authenticationPopup" style="display: none;"> </div><div class="cart-container"><form action="http://nesscotradesupplies.com.au/checkout/cart/updatePost/" method="post" id="form-validate" class="form form-cart" novalidate="novalidate"> <input name="form_key" type="hidden" value="LgR71aYpsf6QVomg"> <div class="cart table-wrapper"> <table id="shopping-cart-table" class="cart items data table"> <caption role="heading" aria-level="2" class="table-caption">Shopping Cart Items</caption> <thead> <tr> <th class="col item" scope="col"><span>Product</span></th> <th class="col price" scope="col"><span>Price</span></th> <th class="col qty" scope="col"><span>Quantity</span></th> <th class="col subtotal" scope="col"><span>Subtotal</span></th> </tr></thead> <tbody class="cart item"><tr class="item-info"> <td data-th="Item" class="col item"> <a href="http://nesscotradesupplies.com.au/carbide-burr-3-8-included-angle-1-4-shank.html" title="CARBIDE BURR 3/8 INCLUDED ANGLE 1/4 SHANK" tabindex="-1" class="product-item-photo"> <span class="product-image-container" style="width:78px;"> <span class="product-image-wrapper" style="padding-bottom: 100%;"> <img class="product-image-photo" src="http://nesscotradesupplies.com.au/media/catalog/product/cache/da51c19fe8c21b068c481cfb28c65074/s/l/sl-3dc.jpg" width="78" height="78" alt="CARBIDE BURR 3/8 INCLUDED ANGLE 1/4 SHANK"></span></span> </a> <div class="product-item-details"> <strong class="product-item-name"> <a href="http://nesscotradesupplies.com.au/carbide-burr-3-8-included-angle-1-4-shank.html">CARBIDE BURR 3/8 INCLUDED ANGLE 1/4 SHANK</a> </strong> </div></td><td class="col price" data-th="Price"> <span class="price-excluding-tax" data-label="Excl. Tax"> <span class="cart-price"> <span class="price">$61.80</span> </span> </span> </td><td class="col qty" data-th="Qty"> <div class="field qty"> <label class="label" for="cart-1178-qty"> <span>Qty</span> </label> <div class="control qty"> <span class="edit-qty minus" onclick="minusQty(cart-1178-qty)">-</span> <input id="cart-1178-qty" name="cart[1178][qty]" data-cart-item-id="SL-3DC" value="1" type="number" size="4" title="Qty" class="input-text qty" data-validate="{required:true,validate-greater-than-zero:true}" data-role="cart-item-qty"> <span class="edit-qty plus" onclick="plusQty(cart-1178-qty)">+</span> </div></div></td><td class="col subtotal" data-th="Subtotal"> <span class="price-excluding-tax" data-label="Excl. Tax"> <span class="cart-price"> <span class="price">$61.80</span> </span> </span> </td></tr><tr class="item-actions"> <td colspan="100"> <div class="actions-toolbar"> <div id="gift-options-cart-item-1178" data-bind="scope:giftOptionsCartItem-1178" class="gift-options-cart-item"> </div><a class="action action-edit" href="http://nesscotradesupplies.com.au/checkout/cart/configure/id/1178/product_id/1199/" title="Edit item parameters"> <span class="fa fa-pencil"></span> </a><a href="#" title="Remove item" class="action action-delete" data-post="{&quot;action&quot;:&quot;http:\/\/nesscotradesupplies.com.au\/checkout\/cart\/delete\/&quot;,&quot;data&quot;:{&quot;id&quot;:&quot;1178&quot;,&quot;uenc&quot;:&quot;aHR0cDovL25lc3Njb3RyYWRlc3VwcGxpZXMuY29tLmF1L2NoZWNrb3V0L2NhcnQv&quot;}}"> <span class="fa fa-trash"></span></a> </div></td></tr></tbody> </table> </div><div class="cart main actions"> <a class="action btn btn-secondary continue" href="http://nesscotradesupplies.com.au/" title="Continue Shopping"> <span>Continue Shopping</span> </a> <button type="submit" name="update_cart_action" data-cart-empty="" value="empty_cart" title="Clear Shopping Cart" class="action clear btn btn-primary" id="empty_cart_button"> <span>Clear Shopping Cart</span> </button> <button type="submit" name="update_cart_action" data-cart-item-update="" value="update_qty" title="Update Shopping Cart" class="action update btn btn-default"> <span>Update Shopping Cart</span> </button> <input type="hidden" value="" id="update_cart_action_container" data-cart-item-update=""> </div></form><div id="gift-options-cart" data-bind="scope:giftOptionsCart"> </div><div class="row shopping-cart-bottom"><div class="col-lg-8 col-md-7 col-xs-12"><div class="checkout-extra"><div id="block-shipping" class="block shipping" data-collapsible="true" role="tablist"> <div class="title active" data-role="title" aria-controls="block-summary" role="tab" aria-selected="false" aria-expanded="false" tabindex="0"> <strong id="block-shipping-heading" role="heading" aria-level="2"> Estimate Shipping </strong> </div><div id="block-summary" data-bind="scope:block-summary" class="content active" data-role="content" aria-labelledby="block-shipping-heading" role="tabpanel" aria-hidden="true" style="display: none;"> <form method="post" id="shipping-zip-form"> <fieldset class="fieldset estimate"> <legend class="legend"> <span data-bind="text: isVirtual ? $t(Estimate Tax) : $t(Estimate Shipping and Tax) ">Estimate Shipping</span> </legend><br><p class="field note" data-bind="text: isVirtual ? $t(Enter your billing address to get a tax estimate.) : $t(Enter your destination to get a shipping estimate.)">Enter your destination to get a shipping estimate.</p><div class="field" data-bind="visible: visible, attr:{name: element.dataScope}, css: additionalClasses" name="shippingAddress.country_id"> <label class="label" data-bind="attr:{for: element.uid}" for="RFX2750"> <span data-bind="i18n: element.label">Country</span> </label> <div class="control" data-bind="css:{_with-tooltip: element.tooltip}"> <select class="select" name="country_id" id="RFX2750" aria-invalid="false"><option value=""> </option><option data-title="Australia" value="AU">Australia</option></select> </div></div><div class="field" data-bind="visible: visible, attr:{name: element.dataScope}, css: additionalClasses" name="shippingAddress.region_id"> <label class="label" data-bind="attr:{for: element.uid}" for="ESO9O6D"> <span data-bind="i18n: element.label">State/Province</span> </label> <div class="control" data-bind="css:{_with-tooltip: element.tooltip}"> <select class="select" name="region_id" id="ESO9O6D" aria-invalid="false"><option value="">Please select a region, state or province.</option><option data-title="Australian Capital Territory" value="576">Australian Capital Territory</option><option data-title="New South Wales" value="569">New South Wales</option><option data-title="Northern Territory" value="575">Northern Territory</option><option data-title="Queensland" value="570">Queensland</option><option data-title="South Australia" value="574">South Australia</option><option data-title="Tasmania" value="573">Tasmania</option><option data-title="Victoria" value="571">Victoria</option><option data-title="Western Australia" value="572">Western Australia</option></select> </div></div><div class="field" data-bind="visible: visible, attr:{name: element.dataScope}, css: additionalClasses" name="shippingAddress.region" style="display: none;"> <label class="label" data-bind="attr:{for: element.uid}" for="SD8KYJD"> <span data-bind="i18n: element.label">State/Province</span> </label> <div class="control" data-bind="css:{_with-tooltip: element.tooltip}"> <input class="input-text" type="text" name="region" aria-invalid="false" id="SD8KYJD"> </div></div><div class="field" data-bind="visible: visible, attr:{name: element.dataScope}, css: additionalClasses" name="shippingAddress.postcode"> <label class="label" data-bind="attr:{for: element.uid}" for="NF5IOS0"> <span data-bind="i18n: element.label">Zip/Postal Code</span> </label> <div class="control" data-bind="css:{_with-tooltip: element.tooltip}"> <input class="input-text" type="text" name="postcode" aria-invalid="false" id="NF5IOS0"> </div></div></fieldset></form> <form id="co-shipping-method-form" data-bind="blockLoader: isLoading, visible: isVisible()"> <p class="field note" data-bind="visible: (shippingRates().length <=0)" style="display: none;"> Sorry, no quotes are available for this order at this time </p><fieldset class="fieldset rate" data-bind="visible: (shippingRates().length > 0)"> <dl class="items methods" data-bind="foreach: shippingRateGroups"> <dt class="item-title"><span data-bind="text: $data">Shipping will be updated on Invoice </span></dt> <dd class="item-options" data-bind="foreach:{data:$parent.getRatesForGroup($data), as: method}"> <div data-bind="css:{field choice item: available, message error: !available}" class="field choice item"> <input type="radio" class="radio" data-bind=" click: $parents[1].selectShippingMethod, checked: $parents[1].selectedShippingMethod, attr:{value: carrier_code + _ + method_code, id: s_method_ + carrier_code + _ + method_code}" value="flatrate_flatrate" id="s_method_flatrate_flatrate" name="ko_unique_1"> <label class="label" data-bind="attr:{for: s_method_ + carrier_code + _ + method_code}" for="s_method_flatrate_flatrate"> Fixed <span class="price"><span class="price" data-bind="text: getFormattedPrice(method.price_excl_tax)">$0.00</span></span> </label> </div></dd> <dt class="item-title"><span data-bind="text: $data">Ship on your freight account </span></dt> <dd class="item-options" data-bind="foreach:{data:$parent.getRatesForGroup($data), as: method}"> <div data-bind="css:{field choice item: available, message error: !available}" class="field choice item"> <input type="radio"' +
	' class="radio" data-bind=" click: $parents[1].selectShippingMethod, checked: $parents[1].selectedShippingMethod, attr:{value: carrier_code + _ + method_code, id: s_method_ + carrier_code + _ + method_code}" value="customerfreight_customerfreight" id="s_method_customerfreight_customerfreight" name="ko_unique_2"> <label class="label" data-bind="attr:{for: s_method_ + carrier_code + _ + method_code}" for="s_method_customerfreight_customerfreight"> Customer Freight <span class="price"><span class="price" data-bind="text: getFormattedPrice(method.price_excl_tax)">$0.00</span></span> </label> </div></dd> <dt class="item-title"><span data-bind="text: $data">Customer Collection</span></dt> <dd class="item-options" data-bind="foreach:{data:$parent.getRatesForGroup($data), as: method}"> <div data-bind="css:{field choice item: available, message error: !available}" class="field choice item"> <input type="radio" class="radio" data-bind=" click: $parents[1].selectShippingMethod, checked: $parents[1].selectedShippingMethod, attr:{value: carrier_code + _ + method_code, id: s_method_ + carrier_code + _ + method_code}" value="customerpickup_customerpickup" id="s_method_customerpickup_customerpickup" name="ko_unique_3"> <label class="label" data-bind="attr:{for: s_method_ + carrier_code + _ + method_code}" for="s_method_customerpickup_customerpickup"> <span class="price"><span class="price" data-bind="text: getFormattedPrice(method.price_excl_tax)">$0.00</span></span> </label> </div></dd> </dl> </fieldset></form> </div></div><div class="block discount" id="block-discount" data-collapsible="true" role="tablist"> <div class="title" data-role="title" role="tab" aria-selected="false" aria-expanded="false" tabindex="0"> <strong id="block-discount-heading" role="heading" aria-level="2">Apply Discount Code</strong> </div><div class="content" data-role="content" aria-labelledby="block-discount-heading" role="tabpanel" aria-hidden="true" style="display: none;"> <form id="discount-coupon-form" action="http://nesscotradesupplies.com.au/checkout/cart/couponPost/" method="post"> <div class="fieldset coupon"> <input type="hidden" name="remove" id="remove-coupon" value="0"> <div class="field"> <div class="control"> <input type="text" class="input-text" id="coupon_code" name="coupon_code" value="" placeholder="Enter discount code"> </div></div><div class="actions-toolbar"> <div class="primary"> <button class="action btn btn-primary apply" type="button" value="Apply Discount"> <span>Apply Discount</span> </button> </div></div></div></form> </div></div></div></div><div class="col-lg-4 col-md-5 col-xs-12"><div id="cart-totals" class="cart-totals" data-bind="scope:block-totals"> <div class="table-wrapper" data-bind="blockLoader: isLoading"> <table class="data table totals"> <caption class="table-caption" data-bind="text: $t(Total)">Total</caption> <tbody> <tr class="totals sub"> <th data-bind="i18n: title" class="mark" scope="row">Subtotal</th> <td class="amount"> <span class="price" data-bind="text: getValue(), attr:{data-th: title}" data-th="Subtotal">$61.80</span> </td></tr><tr class="totals-tax"> <th data-bind="text: title" class="mark" colspan="1" scope="row">GST</th> <td data-bind="attr:{data-th: title}" class="amount" data-th="GST"> <span class="price" data-bind="text: getValue()">$6.18</span> </td></tr><tr class="grand totals"> <th class="mark" scope="row"> <strong data-bind="i18n: title">Order Total</strong> </th> <td data-bind="attr:{data-th: title}" class="amount" data-th="Order Total"> <strong><span class="price" data-bind="text: getValue()">$67.98</span></strong> </td></tr></tbody> </table></div></div><div class="cart-summary"><strong class="summary title">Summary</strong><ul class="checkout methods items checkout-methods-items"> <li class="item"> <button type="button" data-role="proceed-to-checkout" title="Proceed to Checkout" class="action primary checkout"> <span>Proceed to Checkout</span> </button></li><li class="item"><a class="action multicheckout" href="http://nesscotradesupplies.com.au/multishipping/checkout/"><span>Check Out with Multiple Addresses</span></a></li></ul></div></div></div></div></div></div></section><section id="maincontent" class="page-main container">';
	
	new_content = '';

var gulp = require("gulp"),
  rename = require("gulp-rename"),
  notify = require("gulp-notify"),
  prefix = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  plumber = require("gulp-plumber"),
  browserSync = require("browser-sync"),
  cssnano = require("gulp-cssnano");

//css inject
gulp.task("css-inject", function() {
  var config = {
    addSourceMaps: true,
    concatCSS: true,
    plugins: {
      cleanCss: {}
    }
  };
  var reload = browserSync.reload;
  return (
    gulp
      .src("src/scss/common.scss")
      .pipe(
        plumber({
          // plumber - плагин для отловли ошибок.
          errorHandler: notify.onError(function(err) {
            // nofity - представление ошибок в удобном для вас виде.
            return {
              title: "Styles",
              message: err.message
            };
          })
        })
      )
      // .pipe(sourcemaps.init())
      .pipe(sass()) //Компиляция sass.
      .pipe(prefix("last 2 versions", "> 1%", "ie 9"))
      .pipe(rename("custom.css"))
      // .pipe(sourcemaps.write())
      .pipe(cssnano())
      .pipe(gulp.dest("app/assets//css"))
      .pipe(reload({ stream: true }))
  );
});

gulp.task("css-build", function() {
  var config = {
    addSourceMaps: true,
    concatCSS: true,
    plugins: {
      cleanCss: {}
    }
  };
  var reload = browserSync.reload;
  return (
    gulp
      .src("src/scss/common.scss")
      .pipe(
        plumber({
          // plumber - плагин для отловли ошибок.
          errorHandler: notify.onError(function(err) {
            // nofity - представление ошибок в удобном для вас виде.
            return {
              title: "Styles",
              message: err.message
            };
          })
        })
      )
      // .pipe(sourcemaps.init())
      .pipe(sass()) //Компиляция sass.
      .pipe(prefix("last 2 versions", "> 1%", "ie 9"))
      .pipe(rename("custom.css"))
      // .pipe(sourcemaps.write())
      .pipe(cssnano())
      .pipe(gulp.dest("app/assets//css"))
      .pipe(
        gulp.dest(
          "C:/xampp/htdocs/nessco/app/design/frontend/Mgs/childtheme/web/css"
        )
      )
      .pipe(reload({ stream: true }))
  );
});

//watch
gulp.task("watch", function() {
  gulp.watch("src/scss/**/*.*", gulp.series("css"));
  gulp.watch("app/*.html", gulp.series("html"));
});

//watch-inject
gulp.task("watch-inject", function() {
  gulp.watch("src/scss/**/*.*", gulp.series("css-inject"));
});

//server
gulp.task("server", function() {
  browserSync({
    proxy: siteUrl,
    middleware: require("serve-static")("./app"),
    rewriteRules: [
      {
        match: new RegExp(siteCSS),
        fn: function() {
          return (
            '/frontend/Mgs/childtheme/en_AU/css/custom_del.css" /><link rel="stylesheet" href="' +
            siteUrl +
            'assets/css/custom.css">'
          );
        }
      }
      // {
      //   match: new RegExp(content),
      //   fn: function() {
      //     return new_content;
      //   }
			// }
      // {
      //   match: new RegExp(site_html),
      //   fn: function() {
      //     return new_html;
      //   }
			// },
			// {
      //   match: new RegExp(ck),
      //   fn: function() {
      //     return new_ck;
      //   }
			// },
			// {
      //   match: new RegExp(in_stock),
      //   fn: function() {
      //     return new_in_stock;
      //   }
      // }
    ]
  });
});

gulp.task("default", gulp.parallel("css-inject", "watch-inject", "server"));
gulp.task("build", gulp.parallel("css-build"));
