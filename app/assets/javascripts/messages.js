$(function(){
  function buildHTML(message){
    var text = message.text ? `${ message.text }` : "";
    var image = message.image ? `<img src= ${ message.image }` : "";
    var html = `<div class="messages__message" data-id="${message.id}">
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
                      ${text}
                    </p>
                    ${image}
                  </div>
                </div>`
    return html;
  }
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
      var html = buildHTML(data);
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
})