/**
 * Created by 高 莹 on 2017/9/16.
 */
$(function () {
    $(window).resize();
   init();
   bind();
});
function init() {
    $('.wrap').css("display",'block');

}
function bind() {
    // $('.todoList ol').on('mouseenter mouseleave','li',function (e) {
    //     $(e.target).find('.del').toggleClass('active')
    // })
    $('.wrap button').click(function () {
        var value=$('.wrap input').val();
        if(value!=""){
        var li='<li>'+value+'<span class="fa fa-times del pull-right"></span></li>';
        $('.todoList ol').append(li);
        $('.wrap input').val("");
        }

    })
    $('.todoList ol').on('click','li .del',function (e) {
        $(e.target).parent().remove();
    });
}
$(window).resize(function () {
    var winWidth=$(window).width();
    var winHeight=$(window).height();
    document.body.clientWidth=winWidth;
    document.body.clientHeight=winHeight;
    $('.todo').css("height",winHeight/2);
    $('.todo').css("marginTop",(winHeight-$('.todo').outerHeight())/2);

})