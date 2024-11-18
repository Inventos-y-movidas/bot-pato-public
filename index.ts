import { Client, GatewayIntentBits, Interaction } from "discord.js";
import { registerCommands } from "./slashcommands/utils/commandRegister"
import { commands } from "./slashcommands/utils/commandLoader"

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.TOKEN;

await client.login(token)

client.once("ready", async (client) => {
  console.log(`Tamos ready como ${client?.user?.tag}`)

  await registerCommands()
});

client.on("interactionCreate", async (interaction: Interaction) => {
  // && Object.keys(commands).includes(interaction.commandName)
  // En principio eso no hace falta porque si esta registrado esta en la lista de commandos
  if (interaction.isCommand()) { 
    commands[interaction.commandName].execute(client, interaction)
  }
})