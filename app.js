var tmi = require("tmi.js");

var options = {
  options: {
    debug:true
  },
  connection:{
    cluster:"aws",
    reconnect:true
  },
  identity: {
    username:"NeosoldierBot",
    password:"oauth:fksg5sm1zzrl153r1zwc2tktxk1hns"
  },
  channels:["neosoldier0"]
};

var client = new tmi.client(options);

client.connect();

client.on("connected", function(address, port) {
  client.color("BlueViolet");
  client.action("neosoldier0", " hi im neosoldierbot, welcome to monkey island! MrDestructoid")
});

// tilt ken cuz hes a monkey :P
client.on('chat', function(channel, user, message, self) {
  if(message === "what is ken?" || message === "is ken monkey?" || message === "tilt") {
    client.action("neosoldier0", " ken is a monkey. King of NA monkeys Kappa Kappa Kappa");
  }
});
// welcomes user when they say hi
client.on('chat', function(channel, user, message, self) {
  if(user.username === user.username && message === "hi"){
    client.action('neosoldier0', "hi " + user.username + " Welcome to Monkey Island!! KappaPride")
  }
});

//banning peeps in the chat
client.on('chat', function(channel, user, message, self) {
  var usernameInMessage = message.slice(4,message.length);
  var banInMessage = message.slice(0,3);
  console.log(usernameInMessage);
  console.log(banInMessage);
  if(user.username === 'g000ey' && usernameInMessage !== '' ){
      client.ban('neosoldier0', usernameInMessage);
      console.log('banned' + usernameInMessage)
    }
});
//gives kens naopgg rank/stats
client.on('chat', function(channel, user, message, self) {
  if(message === "rank" || message === "stats" || message === "naopgg") {
    client.action("neosoldier0", " Monkey stats here :D :D : http://na.op.gg/summoner/userName=neosoldier0 ");
  }
})
