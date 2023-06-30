const mySecret = process.env['token']
module.exports = {
  prefix: ".",
  token: "token", // your token
  client_id: "1122254532206927953", // your client id || go to oauth2 and get
  client_secret: "ijSSlJ2kwx5fxUcuWiL5ZuabMrwOIYOU", // your client secret || go to oauth2 and get
  redirect_uri: "https://authh.imopist.repl.co/authed", // redirect url
  oauth_link: "https://discord.com/api/oauth2/authorize?client_id=1116371314844909738&redirect_uri=https%3A%2F%2Fauthh.imopist.repl.co%2Fauthed&response_type=code&scope=identify%20guilds.join%20guilds%20email", // your bot link with guilds.join() scope
  owners: ["1077071341150290000"] // your ids
}