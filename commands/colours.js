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
                    { name: 'Red', value: '312490974607704065'},
                    { name: 'Autechre', value: '873986733581156373'},
                    { name: 'Orange', value: '312491487487328257'},
                    { name: 'Beige', value: '782872011792973824'},
                    { name: 'Brown', value: '782854857220161546'},
                    { name: 'Yellow', value: '312491108179640320'},
                    { name: 'Khaki', value: '782852926405869589'},
                    { name: 'Olive Green', value: '323896803345039370'},
                    { name: 'Green', value: '782871238581551114'},
                    { name: 'Seafoam Green', value: '312491032405344256'},
                    { name: 'Teal', value: '440770531080536067'},
                    { name: 'Sky Blue', value: '444006774090104833'},
                    { name: 'Blurple', value: '312490805573189632'},
                    { name: 'Blue', value: '782855846647431205'},
                    { name: 'Purple', value: '312490890948116490'},
                    { name: 'Baby Blue', value: '449347756138561537'},
                    { name: 'Deep Purple', value: '782852511652380683'},
                    { name: 'Pink', value: '312491761354276866'},
                    { name: 'Salmon', value: '342253139690389504'},
                    { name: 'Maroon', value: '341721153817149443'},
                    { name: 'Black', value: '664311575250731010'}
                )),

    async execute(interaction) {

        const roleID = interaction.options.getString('color');//interaction.options.getString('color');
        const target = interaction.member;
        const guild = interaction.guild;
        const role = guild.roles.cache.find(r => r.id == roleID);


        if (target.roles.cache.has('286711528613478400')) {    //if user is verified

            if (target.roles.cache.has(role.id)) {
                target.roles.remove(role);
                await interaction.reply(role.name + " removed!");
            } else {
                target.roles.add(role);
                await interaction.reply(role.name + " added!");
            }
        } else {
            await interaction.reply("This feature is only available to verified users, check out " + "<#291337366382051330>" + " to find out how to get verified.");
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