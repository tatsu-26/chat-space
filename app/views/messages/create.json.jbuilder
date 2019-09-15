json.text @message.text
json.user_name @message.user.name
json.time @message.created_at.to_s
json.image @message.image.url
json.id @message.id