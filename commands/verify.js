const { SlashCommandBuilder, PermissionFlagsBits, Guild, messageLink } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Verify a user')
        .setDMPermission(false)
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addUserOption(option => option
            .setName('user')
            .setDescription('User to be verified')
            .setRequired(true)
        ),
	async execute(interaction) {
		let user = interaction.options.getUser('user');

        let memb = interaction.guild.members.cache.get(user.id);

        memb.roles.add('286711528613478400');  //add verified role  //test role ID: 782345191318355980

        interaction.guild.channels.cache.get('392901827211034624').send("Welcome to your new home, <@" + user.id + "> :slight_smile:"); //test channel: 782345191880130634
        
        interaction.reply("Verified <@" + user.id + ">");

        console.log(interaction.member.user.username + '#' + interaction.member.user.discriminator + " used /verify on " + memb.user.username + '#' + memb.user.discriminator)
	},
};