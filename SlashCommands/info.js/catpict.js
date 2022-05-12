const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "catpicts",
    description: "returnscat picture",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `This command is not setup yet` });
    },
};