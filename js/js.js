/**
 * Created by 段段 on 2016/8/20.
 */
$(function () {
    // select美化
    var selectAnim = $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 20
    });

    // 动画联动
    function testAnim(x) {
        $('.animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass().addClass('animationSandbox');
        });
    };

    $('.triggerAnimation').click(function(e){
        e.preventDefault();
        var anim = selectAnim.val();
        testAnim(anim);
    });

    $('.selectAnimations').change(function(){
        var anim = $(this).val();
        testAnim(anim);
    });

})