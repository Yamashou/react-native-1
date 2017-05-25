require 'net/https'
require 'json'

uri = URI.parse('https://api.chatwork.com')
client = Net::HTTP.new(uri.host, 443)
client.use_ssl = true

# チャットの情報一覧を取得してお目当てのroomIDを探す
res = client.get('/v1/rooms', {'X-ChatWorkToken' => 'APIトークン'})
puts JSON.parse(res.body)

# roomIDを指定してメッセージを投稿
res = client.post('/v1/rooms/ルームID/messages', 'body=こんにちわ！', {'X-ChatWorkToken' => 'APIトークン'})

# 正常に投稿されるとメッセージIDが返る
puts JSON.parse(res.body)
