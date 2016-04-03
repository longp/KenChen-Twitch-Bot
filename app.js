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


client.say("neosoldier0", "hi im ken, welcome to monkey island!");
