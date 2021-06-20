const discord = require("discord.js"),
client = new discord.Client();
const Github = require("gitcord")
const github = new Github("SuhailSherief", { token: "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", gitall: true })
github.setup()

github.on('newEvent', (embed) => {
client.channels.cache.get("855889382589988926").send({ embed })
})

client.on("ready", () => {
    console.log("Success!")
});

client.login(process.env.token);