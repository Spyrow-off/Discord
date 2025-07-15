const { Client, GatewayIntentBits } = require("discord.js");

// Crée un nouveau client Discord avec les bons intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Quand le bot est prêt
client.once("ready", () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

// Répond à un message "!ping"
client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong !");
  }
});

// Connexion au bot avec la variable d’environnement TOKEN
client.login(process.env.TOKEN);
