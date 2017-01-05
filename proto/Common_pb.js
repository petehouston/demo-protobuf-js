/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Demo.Role', null, global);
goog.exportSymbol('proto.Demo.UserInfo', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Demo.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Demo.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Demo.UserInfo.displayName = 'proto.Demo.UserInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Demo.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.Demo.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Demo.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.Demo.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    role: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Demo.UserInfo}
 */
proto.Demo.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Demo.UserInfo;
  return proto.Demo.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Demo.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Demo.UserInfo}
 */
proto.Demo.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.Demo.Role} */ (reader.readEnum());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.Demo.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.Demo.UserInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Demo.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.Demo.UserInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getRole();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional int32 user_id = 1;
 * @return {number}
 */
proto.Demo.UserInfo.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.Demo.UserInfo.prototype.setUserId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Demo.UserInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.Demo.UserInfo.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional Role role = 3;
 * @return {!proto.Demo.Role}
 */
proto.Demo.UserInfo.prototype.getRole = function() {
  return /** @type {!proto.Demo.Role} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.Demo.Role} value */
proto.Demo.UserInfo.prototype.setRole = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.Demo.Role = {
  ADMIN: 0,
  EDITOR: 1,
  USER: 2
};

goog.object.extend(exports, proto.Demo);