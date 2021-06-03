const discord = require("discord.js"),
client = new discord.Client();
const Github = require("gitcord")
const github = new Github("SuhailSherief")
github.setup()

github.on('newEvent', (embed) => {
client.channels.cache.get("797494030761328645").send({ embed })
})

client.on("ready", () => {
    console.log("Success!")
});

client.login(process.env.token);