const { MessageEmbed, CommandInteraction, Client, version } = require("discord.js");

module.exports = {
    name: "help",
    description: "",
    /**
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async run(client, interaction) {

;
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Help`)
            .addFields(
                `**Info:**`, `!ping\n!helps\n!catpicts\n!memes`, true

            );
        interaction.reply({ embeds: [embed], ephemeral: true });
    }
}