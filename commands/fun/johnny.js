const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("johnny")
    .setDescription("The Shining"),
  async execute(interaction) {
    await interaction.reply("here's JOHNNY!");
  },
};
