import {readdirSync} from "node:fs"


async function loadSlash(client) {
  for (const category of readdirSync("./slashcommands")) {
    for (const filename of readdirSync(`./slashcommands/${category}`).filter((file) => file.endsWith(".js"))) {
      const command = require(`../slashcommands/${category}/${filename}`);
      client.slashCommands.set(command.name, command);

    }
  }
  await client.application?.commands.set(client.slashCommands.map((x) => x));
}

export {loadSlash}
