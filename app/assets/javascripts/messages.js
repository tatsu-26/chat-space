$(function(){
  var buildMessageHTML = function(message) {
    if (image = (message.image) ? `<image src="${message.image}", class="messages__message__lower__image"></image>` : "" );
      var html = `<div class="messages__message" data-message-id="${message.id}">
                    <div class="messages__message__post">
                      <div class="messages__message__post__poster">
                        ${message.user_name}
                      </div>
                      <div class="messages__message__post__date">
                        ${message.time}
                      </div>
                    </div>
                    <div class="messages__message__lower">
                      <p class="messages__message__lower__text">
                        ${message.text}
                      </p>
                      
                    </div>
                  </div>`
    
    return html;
  };
  
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    }) 
    .done(function(data) {
      var html = buildMessageHTML(data);
      $(".messages").append(html);
      $("form")[0].reset();
      $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
      $(".form__submit").attr("disabled,false");
    })
    .fail(function(){
      alert("error");
    })
    .always(function(){
      $(".form__submit").removeAttr("disabled");
    })
  })
  var reloadMessages = function() {
    
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.messages__message:last').data("message-id");
      
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = "";
        messages.forEach(function (message) {
        insertHTML = buildMessageHTML(message);
        $(".messages").append(insertHTML)
        })
        $(".messages").animate({scrollTop: $(".messages")[0].scrollHeight}, "fast")
      })
      .fail(function() {
        alert("error");
      });
    }
  }
  setInterval(reloadMessages, 5000);
});