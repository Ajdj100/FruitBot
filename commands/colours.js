const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription("Add and remove color roles!")
        .setDMPermission(false)
        .addStringOption(option => 
            option.setName("color")
                .setDescription("The color which you want to add or remove.")
                .setRequired(true)
                .addChoices(
                    { name: 'Black', value: 'Black'},
                    { name: 'Maroon', value: 'Maroon'},
                    { name: 'Salmon', value: 'Salmon'},
                    { name: 'Pink', value: 'Pink'},
                    { name: 'Purple', value: 'Purple'},
                    { name: 'Baby Blue', value: 'Baby Blue'},
                    { name: 'Blurple', value: 'Blurple'},
                    { name: 'Sky Blue', value: 'Sky Blue'},
                    { name: 'Teal', value: 'Teal'},
                    { name: 'Green', value: 'Green'},
                    { name: 'Olive Green', value: 'Olive Green'},
                    { name: 'Yellow', value: 'Yellow'},
                    { name: 'Orange', value: 'Orange'},
                    { name: 'Red', value: 'Red'},
                    { name: 'White', value: 'White'},
                )),

    async execute(interaction) {

        const roleID = interaction.options.getString('color');//interaction.options.getString('color');
        const target = interaction.member;
        const guild = interaction.guild;
        const role = guild.roles.cache.find(r => r.name = roleID);

        console.log(role);
        
        if (target.roles.cache.has('782345191318355980')) {    //if user is verified

            if (target.roles.cache.has(role.id)) {
                target.roles.remove(role);
                await interaction.reply(role.name + " removed!");
            } else {
                target.roles.add(role);
                await interaction.reply(role.name + " added!");
            }
        } else {
            await interaction.reply("This feature is only available to verified users, check out " + "<#811940622428667915>" + " to find out how to get verified.");
        }

    },
};

/*
        .addStringOption(option => 
            option.setName("color")
                .setDescription("The color which you want to add or remove.")
                .setRequired(true)
                .addChoices(
                    { name: 'Black', value: '782345191318355983'},
                    { name: 'Maroon', value: '782345191318355984'},
                    { name: 'Salmon', value: '782345191318355985'},
                    { name: 'Pink', value: '782345191318355986'},
                    { name: 'Purple', value: '782345191318355987'},
                    { name: 'Baby Blue', value: '782345191351779348'},
                    { name: 'Blurple', value: '782345191351779349'},
                    { name: 'Sky Blue', value: '782345191351779350'},
                    { name: 'Teal', value: '782345191351779351'},
                    { name: 'Green', value: '782345191351779352'},
                    { name: 'Olive Green', value: '782345191351779353'},
                    { name: 'Yellow', value: '782345191351779354'},
                    { name: 'Orange', value: '782345191351779355'},
                    { name: 'Red', value: '782345191351779356'},
                    { name: 'White', value: '782345191351779357'},
                )),
                */

                /*  THis shit dont work
                        .addRoleOption(option => option
            .setName('color')
            .setDescription("The color which you want to add or remove.")
            .setRequired(true)
        ),
        */