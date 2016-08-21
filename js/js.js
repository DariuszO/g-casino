/**
 * Created by 段段 on 2016/8/20.
 */
$(function () {
    // select美化
    var selectAnim = $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 20
    });

    // 滑动条
    $('#ex1').slider({
        formatter: function(value) {
            return '持续: ' + value +" s";
        }
    });
    $("#ex1").on("slide", function(slideEvt) {
        $("#sliderVal").text(slideEvt.value);
        // var animationDuration = $(".animationSandbox").data("animationDuration");
        $(".animationSandbox").attr("data-animation-duration",slideEvt.value);
        $(".animationSandbox").data("animation-duration", slideEvt.value);
    });

    // 拖拽
    drag(".animationSandbox-darg");
    drag(".testDrag");
    drag('.testDrag02');

    // 动画联动
    function testAnim(x,y) {
        $('.animationSandbox').removeClass().addClass(x + ' animated').removeAttr("style").attr({style:"animation-duration:"+y+"s;display:block;"}).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass().addClass('animationSandbox').removeAttr("style");
        });
        // $('.animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        //     $(this).removeClass().addClass('animationSandbox');
        // });
    };

    $('.triggerAnimation').click(function(e){
        e.preventDefault();
        var anim = selectAnim.val();
        var animationDuration = $(".animationSandbox").data("animationDuration");
        console.log($(".animationSandbox").data("animation-duration"));
        testAnim(anim,animationDuration);
    });

    // $('.selectAnimations').change(function(){
    //     var anim = selectAnim.val();
    //     testAnim(anim);
    // });

})