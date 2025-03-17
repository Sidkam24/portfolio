$(function(){
//メッセージボックス以外のボックスの変化
    $(".form").focus(function(){
      let focused = $(this).prev();
      $(focused).addClass("focus");
    }).blur(function(){
        if($(this).val() == ""){
            let focused = $(this).prev();
            $(focused).removeClass("focus");
        }
      });

//メッセージボックスの際
      $(".form_msg").focus(function(){
        let focused = $(this).prev();
        $(focused).addClass("focus_msg");
      }).blur(function(){
        if($(this).val() == ""){
             let focused = $(this).prev();
            $(focused).removeClass("focus_msg");
        }
        });
});