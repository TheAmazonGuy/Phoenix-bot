const { Client, Collection } = require("discord.js");
const config = require("./config.json");
const Discord = require("discord.js")


const client = new Client({
    intents: 32767,
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");
const prefix = require("./config.json");


// Initializing the project
require("./handler")(client);
require("./handler/Anti-crash")(client);






const { Database } = require("./config.json");
const mongoose = require("mongoose");


 
client.on('ready', () => {
    console.log(`The ${client.user.tag} is now ready!`);
    client.user.setActivity("Members", {type: "WATCHING"});
    //client.user.setStatus("idle");

  

  

    if(!Database) return;
    mongoose.connect(Database, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(() => {
      console.log("The client is now connected to the database!")
    }).catch((err) => {
      console.log(err);
    });
  },
);







client.login(client.config.token);


