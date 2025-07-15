const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'ping') {
    await interaction.reply('pong!');
  }
});

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Répond pong!')
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
const CLIENT_ID = '1386118904232935545'; // remplace par l'ID de ton bo

(async () => {
  try {
    console.log('Déploiement des commandes slash...');
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log('Commandes déployées avec succès.');
  } catch (error) {
    console.error(error);
  }
})();

client.login(process.env.TOKEN);
// premier 
