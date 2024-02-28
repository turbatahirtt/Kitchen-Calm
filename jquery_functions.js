jQuery(function() {

  var homeButtonId = "#home-button";
  var tipsButtonId = "#tips-button";
  var contactButtonId = "#contact-button";

  var homeDivId = "#home";
  var tipsDivId = "#tips";
  var contactDivId = "#contact";

  $(homeDivId).attr("hidden", false);
  $(homeButtonId).addClass("button-clicked");
  $(tipsDivId).attr("hidden", true);
  $(contactDivId).attr("hidden", true);

  $(homeButtonId).on("click", function() {
    if($(homeButtonId).hasClass("button-clicked")) return;

    $(homeButtonId).addClass("button-clicked");
    $(tipsButtonId).removeClass("button-clicked");
    $(contactButtonId).removeClass("button-clicked");

    $(homeDivId).attr("hidden", false);
    $(tipsDivId).attr("hidden", true);
    $(contactDivId).attr("hidden", true);
  })

  $(tipsButtonId).on("click", function() {
    if($(tipsButtonId).hasClass("button-clicked")) return;

    $(tipsButtonId).addClass("button-clicked");
    $(homeButtonId).removeClass("button-clicked");
    $(contactButtonId).removeClass("button-clicked");

    $(homeDivId).attr("hidden", true);
    $(tipsDivId).attr("hidden", false);
    $(contactDivId).attr("hidden", true);
  })

  $(contactButtonId).on("click", function() {
    if($(contactButtonId).hasClass("button-clicked")) return;

    $(contactButtonId).addClass("button-clicked");
    $(tipsButtonId).removeClass("button-clicked");
    $(homeButtonId).removeClass("button-clicked");

    $(homeDivId).attr("hidden", true);
    $(tipsDivId).attr("hidden", true);
    $(contactDivId).attr("hidden", false);
  })

})