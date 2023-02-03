const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

// ...
const command = '1061788277675401317'; //command ID


//for guild-based commands
rest.delete(Routes.applicationGuildCommand(clientId, guildId, command))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);

// for global commands
// rest.delete(Routes.applicationCommand(clientId, command))
// 	.then(() => console.log('Successfully deleted application command'))
// 	.catch(console.error);



    //do the deletey thingy