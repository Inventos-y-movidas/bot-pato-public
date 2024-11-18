import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import {commands} from "./commandLoader"

async function registerCommands() {

  let _commands = []
  const cmdKeys = Object.keys(commands)
  for (let i = 0; i < cmdKeys.length; i++) {
    if (!commands[cmdKeys[i]].execute) continue; // Por si no le has hecho la funcion que no lo registre
    
    let cmd = {"name": commands[cmdKeys[i]].name, "description": commands[cmdKeys[i]].description, "options": []} as any
    cmd.options = commands[cmdKeys[i]]?.options ?? []
    _commands.push(cmd)
  }

  const rest = new REST({ version: '9' }).setToken(process.env.TOKEN as string);

  try {
    console.log('Refrescando comandos (Slash, /)');
    console.log(_commands)

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID as string),
      { body: _commands },
    );

    console.log('Recargados correctamente')
  } catch (error) {
    console.error(error);
  }

}

export {registerCommands}
