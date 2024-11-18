import fs from "fs"

type SlashCommands = {
 [key: string]: any 
};

let commands: SlashCommands = {}
const route = "./slashcommands/commands/"

let dirs = fs.readdirSync(route)

dirs = dirs.filter( file => file.endsWith(".ts"))

dirs.forEach(async file => {
  const command = await import("../commands/" + file)
  commands[command.name] = {
    "name": command.name,
    "description": command.description, 
    "execute": command.execute
  }

  if (command.options) {
    commands[command.name].options = command.options
  }
})

export {commands}
