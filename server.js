let Discord = require("discord.js")
let client = new Discord.Client()

client.on("guildMemberAdd", member => {
  if (member.guild.id === "833675504728801290") {
    client.channels.cache.get("833675504728801297").send(`Welcome to the server, ${member}!`)
  }
}) 
const {MessageEmbed} = require('discord.js')
client.on("ready", () => {
  client.user.setActivity('y\'all suffer for sch', { type: 'WATCHING' });
})

client.on("message", message => {
if (message.content === '-Hello') {
  message.channel.send("Hello to you too")
}
if (message.content === '-API') {
  message.channel.send('Discord JS Documentation: https://discord.js.org/#/docs/main/stable/general/welcome')
}
if (message.content === '-Say bye') {
  message.channel.send('Bye peeps(for the night)')
}
if (message.content === '-Test') {
  message.channel.send('Bot is online and working.')
}
if (message.content === '-Creator') {
  message.channel.send('<@815031062853189642>')
}
var choice = ['Perhaps', 'No, but you are.', 'You\'ll have to ask them for that', 'I think so, but it\'s questionable'];
if (message.content.startsWith("-Is ")) {
  message.channel.send(choice[Math.floor(Math.random() * choice.length)])
}
let Embed = new MessageEmbed()
if ((message.content.startsWith('-Avatar')) && (!message.mentions.users.first())) {
  Embed.setThumbnail(message.author.displayAvatarURL())
  Embed.setColor(`RANDOM`)
  return message.channel.send(Embed)
}
if ((message.content.startsWith('-Avatar')) && (message.mentions.users.first)) {
  let User = message.mentions.users.first()
  Embed.setThumbnail(User.displayAvatarURL())
  Embed.setColor(`RANDOM`)
  return message.channel.send(Embed)
}
if (message.content === '-CM') {
  message.channel.send("Tuesday: 11am-1pm")
  message.channel.send("Friday: 10am-12pm")
}
})

client.login('TOKEN');
