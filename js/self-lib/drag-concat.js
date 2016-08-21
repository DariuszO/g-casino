/**
 * Created by 段段 on 2016/8/21.
 */
    function drag(s) {
        var disX = 0;
        var disY = 0;
        $(s).mousedown(function(ev){
            ev.stopPropagation();
            var pLeft = $(this).offsetParent().offset().left;
            var pTop = $(this).offsetParent().offset().top;
            disX = ev.clientX - $(this).offset().left+pLeft;
            disY = ev.clientY - $(this).offset().top+pTop;
            document.onmousemove = function(ev){
                var ev = ev||window.event;
                $(s).css({
                    left:ev.clientX - disX + "px",
                    top:ev.clientY - disY + "px"
                })
            };
            document.onmouseup = function (ev) {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        })
    }


