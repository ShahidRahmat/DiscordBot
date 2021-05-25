let Discord = require("discord.js")
let client = new Discord.Client()

client.on("guildMemberAdd", member => {
  if (member.guild.id === "833675504728801290") {
    client.channels.cache.get("833675504728801297").send(`Welcome to the server, ${member}!`)
  }
}) 
const {MessageEmbed} = require('discord.js')

client.on("ready", () => {
  client.user.setActivity('myself have an existential crisis', { type: 'WATCHING' });
})

client.on("message", message => {
var choice = ['Perhaps', 'No, but you are.', 'You\'ll have to ask them for that', 'I think so, but it\'s questionable', 'It is Certain', 'As I see it, yes', 'Most likely, yeah', 'Yes, without a doubt', 'Signs point to yes', 'Maybe I\'ll have the answer if you ask again later', 'I think it\'s better not to tell you now', 'I don\'t have an answer to that', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Very doubtful', 'I think we both know the answer to that', 'I respectfully decline to answer', 'No way, not a chance', 'It\'s so obvious I didn\'t think you\'d need to ask me'];
if ((message.content.startsWith("-Is ")) || (message.content.startsWith("-Does "))) {
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
var currentdate = new Date(); 
var dayNumber = currentdate.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[dayNumber];

var monthNumber = currentdate.getMonth();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = months[monthNumber]
var date = currentdate.getDate();
var year = currentdate.getFullYear();
var UTChour = parseInt(currentdate.getHours());
var hour = (UTChour + 8);
var second = currentdate.getSeconds();
var minute = currentdate.getMinutes();
var currentDate = (date+" "+month+" "+year+". "+day);
var day2number = (dayNumber + 1);
var day2 = days[day2number];
if (hour>24) {
  hour -= 24;
  var period = "AM";
}else if ((hour<12) && (period != "PM")) {
  var period = "AM";
}else if ((hour>12) && (hour < 24)) {
  hour -= 12;
  var period = "AM";
}
var top = Math.floor(Math.random() * 30);
//var top = 1000;
var i;
var top = 3;
if (message.content.startsWith("-Ping")) {
  var victim = message.mentions.users.first();
  if (victim != '815031062853189642') {
    for (i =0; i < top; i++) {
      message.channel.send("<@" + victim + ">")
    }
} else if (victim == '815031062853189642') {
  message.channel.send("You tried but...")
  message.channel.send("No lol")
}
}
var rejection = ['What future?', 'It\'s not looking too bright', 'No chiobu for you', 'You can try but it seems bad', 'Dark.']
if ((message.content === '-My future') && !(message.author.id === '417614832037003266')) {
  message.channel.send(rejection[Math.floor(Math.random() * rejection.length)])
} else if ((message.content === '-My future') && (message.author.id === '417614832037003266')) {
  message.channel.send("Very bright, chiobu in Malaysia will look for you")
}
var currentTime = (hour+':'+minute+':'+second+" "+period);
if (message.content === '-Time') {
  message.channel.send(currentDate)
  message.channel.send(currentTime)
}
if (message.content === '-Tomorrow') {
  if (day == 'Monday') {
    message.channel.send('DSF: \n9am-11am \nPRG: \n11am-1pm')  
}else if (day == 'Sunday'){
    message.channel.send('PRG: \n12pm-3pm \nFP: \n4pm-6pm')
}else if (day == 'Tuesday') {
    message.channel.send('The module timings are unavailable for tomorrow due to the varying timetables.')
}else if (day == 'Thursday') {
  message.channel.send('CM: \n10am-12pm \nPRG: \n2pm-4pm')
}else if ((day == 'Saturday') || (day == 'Friday')) {
  message.channel.send('There are no classes tomorrow.')
}else if (day == 'Wednesday') {
  message.channel.send('DP: \n11am-1pm \nCSF: \n2pm-4pm')
}
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
if (message.content === '-Hello') {
  message.channel.send("Hello to you too")
}
if (message.content === '-Coursemology') {
  message.channel.send('Coursemology link: https://coursemology.org/')
}
if (message.content === '-Help') {
  message.channel.send("You can say Hello, Bye, check the times of lessons and more")
  message.channel.send("Or ask <@815031062853189642>")
}
if (message.content === '-MeL') {
  message.channel.send('MeL NP: https://mel.np.edu.sg/ultra/course')
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
})
client.login('ODQyNDA4NDQwNjEyNTIwMDE2.YJ03_w.F1d72Yc-vPs1WnWvX44dDVwnj5M');
