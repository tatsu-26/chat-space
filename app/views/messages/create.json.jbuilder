json.text @message.text
json.user_name @message.user.name
json.update @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.id @message.id