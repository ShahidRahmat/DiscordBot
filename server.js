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
if (message.content === '-Help') {
  message.channel.send("You can say Hello, Bye, check the times of lessons and more")
  message.channel.send("Or ask <@815031062853189642>")
}
if (message.content === '-JS API') {
  message.channel.send('Discord JS Documentation: https://discord.js.org/#/docs/main/stable/general/welcome')
}
if (message.content === '-Bye') {
  message.channel.send("Bye, See you next time!")
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
if (message.content === '-DSF') {
  message.channel.send("Tuesday: 9am-11am")
}
if (message.content === '-PRG') {
  message.channel.send("Monday: 12pm-3pm")
  message.channel.send("Friday: 2pm-4pm")
}
if (message.content === '-DP') {
  message.channel.send("Thursday: 11am-1pm")
}
if (message.content === '-CSF') {
  message.channel.send("Thursday: 2pm-4pm")
}
if (message.content === '-FP') {
  message.channel.send("Monday: 4pm-6pm")
}
if (message.content === '-ALL') {
  message.channel.send("PRG: \nMonday: 12pm-3pm \nFriday: 2pm-4pm  \nFP: \nMonday: 4pm-6pm \nDSF: \nTuesday: 9am-11am \nCM: \nTuesday: 11am-1pm \nFriday: 10am-12pm \nDP: \nThursday: 11am-1pm \nCSF: \nThursday: 2pm-4pm")
}
if ((message.author.id === '353177950033674240') && (message.content === "-COMMS")) {
    message.channel.send("Wednesday: 1pm-4pm")
}
if ((!message.author.id === '353177950033674240') && (message.content === "-COMMS")) {
    message.channel.send("Wednesday: 9am-12pm")
}
if ((message.author.id === '353177950033674240') && (message.content === "-HW")) {
    message.channel.send("Wednesday: 8am-10am")
  }
if (!(message.author.id === '353177950033674240') && (message.content === "-HW")) {
    message.channel.send("Wednesday: 1pm-3pm")
}
if (message.content === '-Py API') {
  message.channel.send("Discord's Python Documentation: https://discordpy.readthedocs.io/en/stable/api.html")
}
var currentdate = new Date(); 
var dayNumber = currentdate.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[dayNumber];
if (message.content === '-Time') {
  message.channel.send(currentdate.toLocaleString());
  message.channel.send(day)
}
if (message.content === '-Today') {
  if (day == 'Monday') {
    message.channel.send('PRG: \n12pm-3pm \nFP: \n4pm-6pm')  
}else if (day == 'Friday') {
    message.channel.send('CM: \n10am-12pm \nPRG: \n2pm-4pm')
}else if (day == 'Tuesday') {
    message.channel.send('DSF: \n9am-11am \nPRG: \n11am-1pm')
}else if (day == 'Thursday') {
  message.channel.send('DP: \n11am-1pm \nCSF: \n2pm-4pm')
}else if ((day == 'Saturday') || (day == 'Sunday')) {
  message.channel.send('There are no classes today.')
}else if (day == 'Wednesday') {
  message.channel.send('The module timings are unavailable for today due to the varying timetables.')
}
}
})

client.login('TOKEN');
