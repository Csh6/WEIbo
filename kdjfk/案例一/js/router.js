


$(function(){
    $("#body").load("../body/body1.html")
    //切换
    $("#menu1").click(function() {
        $("#body").load($(this).data("page1"))
    })
})
$(function(){
    $("#body").load("../body/body1.html")
    //切换
    $("#menu2").click(function() {
        $("#body").load($(this).data("page2"))
    })
})
$(function(){
    $("#body").load("../body/body1.html")
    //切换
    $("#menu3").click(function() {
        $("#body").load($(this).data("page3"))
    })
})
$(function(){
    $("#body").load("../body/body1.html")
    //切换
    $("#menu4").click(function() {
        $("#body").load($(this).data("page4"))
    })
})


// $(function(){
//
//
//     $("#title").load("../page/title/chat-title.html")
//     $("#dynamic").load("../page/dynamic/chat-records.html")
//
//
//
//     //切换
//     $(".menu-item").click(function() {
//
//         $("#dynamic").load($(this).data("page"))
//
//     })
//
//
// })