var $range = $(".js-range-slider");
var $inputFrom = $(".js-input-from");
var $inputTo = $(".js-input-to");
var instance;
var min = 0;
var max = 34000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 150,
    to: 32000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});