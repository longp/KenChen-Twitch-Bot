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
  client.color("GoldenRod");
  client.action("neosoldier0", "hi im ken, welcome to monkey island!")
})

client.on('chat', function(channel, user, message, self) {
  if(message === "what is ken?" || message === "is ken monkey?" || message === "tilt") {
    client.action("neosoldier0", user['display-name'] +", ken is a monkey. King of NA monkeys");
  }
});

client.on('chat', function(channel, user, message, self) {
  if(message === "what is ken?" || message === "is ken monkey?" || message === "tilt") {
    client.action("neosoldier0", user['display-name'] +", ken is a monkey. King of NA monkeys");
  }
});

client.on('chat', function(channel, user, message, self) {
  if(message === "rank" || message === "stats" || message === "naopgg") {
    client.action("neosoldier0", "http://na.op.gg/summoner/userName=neosoldier0");
  }
})
