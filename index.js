var Demo = require('./proto/Demo_pb');

var user = new Demo.UserInfo();
user.setUserId(2017);
user.setName("Pete Houston");
user.setRole(Demo.Role.ADMIN);

var bufUser = user.serializeBinary();
console.log('bufUser', bufUser);

var convertedUser = Demo.UserInfo.deserializeBinary(bufUser);
var userObj = convertedUser.toObject();
console.log('userObj', userObj);

var message = new Demo.ChatPacket();
message.setUserId(user.getUserId());
message.setContent("A simple chat message from user_id = " + user.getUserId());
message.setUserInfo(user);

var bufMessage = message.serializeBinary();
console.log('bufMessage', bufMessage);

var convertedMessage = Demo.ChatPacket.deserializeBinary(bufMessage);
var chatPacketObj = convertedMessage.toObject();
console.log('chatPacketObj', chatPacketObj);