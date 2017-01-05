# Demo usage of Protobuf in Javascript

## Guideline

1. Make sure to grab `protoc` compiler binary from: https://github.com/google/protobuf/releases or use some pre-downloaded binaries in `bin` directory, you can use it.

2. Generate the proto buffer files.

```
$ npm run proto

or
// if you're on Windows system
$ npm run proto:win
```

3. Run the sample code

```
$ npm start
```

or

```
$ node index.js
```

## Some explanation

### For the build command

`-I` : specify where all the `.proto` files are located.
`--js_out` : is to config the build and output options.
    - `import_style=XXX` : to determine the import style, whether it should be `commonjs` (NodeJS import style) or `closure` (Closure style). There are two more, `es6` and `browser`, but they are under development and not available at the moment. So don't use it or use Browserify to transform the CommonJS import style.

### For the code

First is to import the protocol package.

To create new object, just `new`:

```js
var user = new Demo.UserInfo();
user.setUserId(2017);
user.setName("Pete Houston");
user.setRole(Demo.Role.ADMIN);
```

Make binary, which eventually generate output in `Uint8Array` format.

```
var buffer = user.serializeBinary();
```

To transform binary into original proto object, use the static method `deserializeBinary` from the appropriate class. Make sure the input parameter is in `Uint8Array` type.

```
var convertedUser = Demo.UserInfo.deserializeBinary(bufUser);
```

To convert a proto object into a Javascript object, use `toObject()`:

```js
var jsObject = user.toObject();
```

**Note: when using `toObject` method, the array property name will be appended with `List` word.**

For example:

```
message ChatRoom {
    repeated UserInfo users = 1; // list all users in a chat room
}0

equivalent to following JS object

chatRoom = {
    usersList: [ ... ]
}

```
