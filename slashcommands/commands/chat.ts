import { ChatInputCommandInteraction, EmbedBuilder, Client } from "discord.js";

const name = "hablar"
const description = "dile, pregunta o comparte lo que sea con el mejor pato de todos"
const options = [
  {
    name: 'texto',
    description: 'Lo que quieras decirle',
    required: true,
    type: 3
  }
]

async function execute(_client: Client<true>, interaction: ChatInputCommandInteraction) {
  
  let userText = interaction.options.get("texto")
  
  let presentation_embed = new EmbedBuilder()
    .setColor("Green")
    .setTitle("Cua Cua")
    .setDescription("Un segundo, quack, estoy pensando")

  let temp = await interaction.reply({ embeds: [presentation_embed] })

  const response = await fetch("https://furby.garcalia.com/text-gen", {
    method: "POST",
    body: JSON.stringify({
      "model": "pato",
      "messages": [{ "role": "user", "content": userText?.value}]
    })
  })
  const text = await response.text()

  presentation_embed = presentation_embed.setDescription(text)
  temp.edit({ embeds: [presentation_embed] })
}

export { execute, name, description, options }
