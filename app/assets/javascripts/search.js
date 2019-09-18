$(function() {

var search_list = $("#user-search-result");
var add_list = $(".chat-group-form__users")

  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
    search_list.append(html);
  }
  function appendErrMsgToHTML(msg) {
    var html = `<div class="chat-group-user clearfix">${ msg }</div>`
    search_list.append(html);
  }
    $("#user-search-field").on("input", function() {
      var input = $("#user-search-field").val();
      if (input.length !== 0)
        $.ajax({
        type: "GET",
        url: "/users/search",
        data: { keyword: input },
        dataType: "json"
        })
        .done(function(users) {
        $(".chat-group-user.clearfix").empty();
        if (users.length !== 0) {
            users.forEach(function(user){
            appendUser(user);
            })
        }
        else {
            appendErrMsgToHTML("一致する名前はありません");
        }
        })
        .fail(function(){
        alert("error");
      })
    })
    $("#user-search-result").on("click",".user-search-add",function(){
      var user_id = $(this).data("user-id")
      var user_name = $(this).data("user-name")
      var html = `
      <div class="chat-group-form__user clearfix member" id="${user_id}">
        <input name="group[user_ids][]", type="hidden", value="${user_id}">
        <p class="chat-group-form__user__name">${user_name}</p>
          <div class="user-search-delete chat-group-user__btn chat-group-user__btn--delete" data-user-id="${user_id}" data-user-name="${user_name}">削除</div>
      </div>`
      add_list.append(html);
      $(this).parent().remove();
    })
    $(".chat-group-form__users.member").on("click", ".user-search-delete", function(){
      $(this).parent().remove();
    })


    
        
    
  
})