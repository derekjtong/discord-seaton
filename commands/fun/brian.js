const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("brian")
        .setDescription("Replies with hello!"),
    async execute(interaction) {
        await interaction.reply("hello!");
    },
};
