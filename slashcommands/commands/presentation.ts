import { ChatInputCommandInteraction, EmbedBuilder, Client } from "discord.js";

const name = "presentation"
const description = "cua, cua"

async function execute(_client: Client<true>, interaction: ChatInputCommandInteraction) { 
    const presentation_embed = new EmbedBuilder()
      .setColor("Green")
      .setTitle("Cua Cua")
      .setDescription("¡Cua, cua! 🦆 ¡Hola, amigos del servidor! Soy un pato bot, ¡sí, cua! Estoy aquí para ayudar, charlar y patonear por todo el chat. Puedo responder preguntas, contar historias y hasta hacer quacks especiales si lo piden. Así que, cua, no duden en mencionarme cuando necesiten un toque de pato sabio en sus conversaciones. 🦆💬 ¡Cua-cua, y a flotar se ha dicho!")

    interaction.reply({ embeds: [presentation_embed] }) 
}

export {execute, name, description}
