let Discord = require("discord.js");
let client = new Discord.Client();

client.on("guildMemberAdd", member => {
  if (member.guild.id === "833675504728801290") {
    client.channels.cache
      .get("833675504728801297")
      .send(`Welcome to the server, ${member}!`);
  }
});
const { MessageEmbed } = require("discord.js");
client.on("ready", () => {
  client.user.setActivity("out for -Help", { type: "WATCHING" });
});

client.on("message", message => {
  let Embed = new MessageEmbed();
  if (
    message.content.startsWith("-Avatar") &&
    !message.mentions.users.first()
  ) {
    Embed.setThumbnail(message.author.displayAvatarURL());
    Embed.setColor(`RANDOM`);
    return message.channel.send(Embed);
  }
  if (message.content.startsWith("-Avatar") && message.mentions.users.first) {
    let User = message.mentions.users.first();
    Embed.setThumbnail(User.displayAvatarURL());
    Embed.setColor(`RANDOM`);
    return message.channel.send(Embed);
  }
  var top = 10;
  var i;
  if (message.content.startsWith("-Ping")) {
    var victim = message.mentions.users.first();
    if (victim != "815031062853189642") {
      for (i = 0; i < top; i++) {
        message.channel.send("<@" + victim + ">");
      }
    } else if (victim == "815031062853189642") {
      message.channel.send("You tried but...");
      message.channel.send("No lol");
    }
  }
  var commands = ['-Hello', '-Py API', '-Bye', '-Say bye',"-What is the purpose of life?", "-Help", '-Mel',"-JS API", "-Test", "-Creator", "-ALL",
                 "-Tests", "-Assessments", "-Commands", '-CM', '-DSF', "-PRG","-DP", "-CSF", '-FP', "-Monday", "-Tuesday", "-Thursday", "-Friday",
                 '-Saturday' ,'-Sunday']
  var response = ["Hello to you too", "Discord's Python Documentation: https://discordpy.readthedocs.io/en/stable/api.html", "Bye, See you next time!",
                 "Bye peeps(for the night)","Nothing.", "Hi, I'm made up of 250+ lines of JavaScript code. For more commands, do '-Commands' or ask <@815031062853189642>",
                  "MeL NP: https://mel.np.edu.sg/ultra/course",
                 "Discord JS Documentation: https://discord.js.org/#/docs/main/stable/general/welcome", "Bot is online and working.",
                 "<@815031062853189642>", "PRG: \nMonday: 12pm-3pm \nFriday: 2pm-4pm  \nFP: \nMonday: 4pm-6pm \nDSF: \nTuesday: 9am-11am \nCM: \nTuesday: 11am-1pm \nFriday: 10am-12pm \nDP: \nThursday: 11am-1pm \nCSF: \nThursday: 2pm-4pm",
                 "https://discord.com/channels/833675504728801290/833675504728801297/847058564006412308", "https://discord.com/channels/833675504728801290/833675504728801297/849274058596024330",
                 "School: -All, -Week, -(Any day of the week), -Today, -Tomorrow, -(Shortform for any module), -Tests, -Assessments\nOthers: -Time, -Avatar (someone), -My future, -Is (any question), -Does (any question), -Tell a joke",
                 "Tuesday: 11am-1pm\nBlk 31, #05-02 \nFriday: 10am-12pm\nBlk 27, #06-10", "Tuesday: 9am-11am\nBlk 31, #05-02", "Monday: 12pm-3pm\nBlk 27, #07-04 \nFriday: 2pm-4pm\nBlk 27, #06-10",
                 "Thursday: 11am-1pm\nBlk 27, #04-03","Thursday: 2pm-4pm\nBlk 31, #05-12", "Monday: 4pm-6pm\nBlk 27, #07-04", "PRG: \n12pm-3pm \nFP: \n4pm-6pm",
                 "DSF: \n9am-11am \nCM: \n11am-1pm", "DP: \n11am-1pm \nCSF: \n2pm-4pm", "CM: \n10am-12pm \nPRG: \n2pm-4pm", "There are no classes on that day.", 
                 "There are no classes on that day."]
  var cmd = message.content
  if (commands.includes(cmd)) {
    var index_no = commands.indexOf(cmd)
    message.channel.send(response[index_no])
  }
  if (message.author.id === "353177950033674240") {
    var j_cmd = ['-Week', '-HW', '-COMMS']
    var j_res = ['Monday: \nPRG: 12pm-3pm \nFP: 4pm-6pm \n\nTuesday: \nDSF: 9am-11am \nCM: 11am-1pm\n\nWednesday:\nHW: 8am-10pm\nCOMMS: 1pm-4pm\n\nThursday: \nDP: 11am-1pm \nCSF: 2pm-4pm\n\nFriday: \nCM: 10am-12pm \nPRG: 2pm-4pm',
                "Wednesday: 8am-10am", "Wednesday: 1pm-4pm"]
    if (j_cmd.includes(cmd)) {
      var index_no = j_cmd.indexOf(cmd)
      message.channel.send(j_res[index_no])
  }
  }
   if (!(message.author.id === "353177950033674240")) {
    var r_cmd = ['-Week', '-HW', '-COMMS']
    var r_res = ["Monday: \nPRG: 12pm-3pm \nFP: 4pm-6pm \n\nTuesday: \nDSF: 9am-11am \nCM: 11am-1pm\n\nWednesday:\nCOMMS: 9am-12pm\nHW: 1pm-3pm\n\nThursday: \nDP: 11am-1pm \nCSF: 2pm-4pm\n\nFriday: \nCM: 10am-12pm \nPRG: 2pm-4pm"
                , "Wednesday: 1pm-3pm", "Wednesday: 9am-12pm"]
    if (r_cmd.includes(cmd)) {
      var index_no = r_cmd.indexOf(cmd)
      message.channel.send(r_res[index_no])
  }
  }
  var choice = [
    "Perhaps", "No, but you are.", "You'll have to ask them for that", "I think so, but it's questionable", "It is Certain", "As I see it, yes",
    "Most likely, yeah", "Yes, without a doubt", "Signs point to yes", "Maybe I'll have the answer if you ask again later", "I think it's better not to tell you now",
    "I don't have an answer to that", "Don't count on it", "My reply is no", "My sources say no", "Very doubtful", "I think we both know the answer to that",
    "I respectfully decline to answer", "No way, not a chance", "It's so obvious I didn't think you'd need to ask me"];
  if (
    message.content.startsWith("-Is ") ||
    message.content.startsWith("-Does ")
  ) {
    message.channel.send(choice[Math.floor(Math.random() * choice.length)]);
  }
  var currentdate = new Date();
  var dayNumber = currentdate.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var day = days[dayNumber];

  var monthNumber = currentdate.getMonth();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var month = months[monthNumber];
  var date = currentdate.getDate();
  var year = currentdate.getFullYear();
  var UTChour = parseInt(currentdate.getHours());
  var hour = UTChour + 8;
  var second = currentdate.getSeconds();
  var minute = currentdate.getMinutes();
  var currentDate = date + " " + month + " " + year + ". " + day;
  var day2number = dayNumber + 1;
  var day2 = days[day2number];
  if (hour > 24) {
    hour -= 24;
    var period = "AM";
  } else if (hour < 12 && period != "PM") {
    var period = "AM";
  } else if (hour > 12 && hour < 24) {
    hour -= 12;
    var period = "AM";
  }

  var rejection = [
    "What future?",
    "It's not looking too bright",
    "No chiobu for you",
    "You can try but it seems bad",
    "Dark."
  ];
  if (
    message.content === "-My future" &&
    !(message.author.id === "417614832037003266")
  ) {
    message.channel.send(
      rejection[Math.floor(Math.random() * rejection.length)]
    );
  } else if (
    message.content === "-My future" &&
    message.author.id === "417614832037003266"
  ) {
    message.channel.send("Very bright, chiobu in Malaysia will look for you");
  }
  var currentTime = hour + ":" + minute + ":" + second + " " + period;
  if (message.content === "-Time") {
    message.channel.send(currentDate);
    message.channel.send(currentTime);
  }
  var day_array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  var lesson = ["PRG: \n12pm-3pm \nFP: \n4pm-6pm", "DSF: \n9am-11am \nPRG: \n11am-1pm","The module timings are unavailable for that day due to the varying timetables.",
               "DP: \n11am-1pm \nCSF: \n2pm-4pm", "CM: \n10am-12pm \nPRG: \n2pm-4pm", "There are no classes on that day.","There are no classes on that day."]
  if (message.content === "-Today") {
    var index_no = day_array.indexOf(day)
    message.channel.send(lesson[index_no])
  }
  if (message.content === "-Tomorrow") {
    var index_no = day_array.indexOf(day)
    message.channel.send(lesson[(index_no +1)])
  }
  var punchline = ['What\'s the best thing about switzerland?', 'Did you hear about the mathematician who’s afraid of negative numbers?', 'Why do we tell actors to “break a leg?”',
                  'Helvetica and Times New Roman walk into a bar.', 'Yesterday I saw a guy spill all his Scrabble letters on the road.',
                  'Hear about the new restaurant called Karma?', 'A woman in labor suddenly shouted, “Shouldn’t! Wouldn’t! Couldn’t! Didn’t! Can’t!”',
                  'A bear walks into a bar and says, “Give me a whiskey and … cola.”', 'Did you hear about the actor who fell through the floorboards?',
                  'Did you hear about the claustrophobic astronaut?','Why don’t scientists trust atoms?','How do you drown a hipster?','What sits at the bottom of the sea and twitches?'
                  ,'What does a nosy pepper do?','How do you keep a bagel from getting away?','Name something insulting','Why don’t Calculus majors throw house parties?','What do you call a parade of rabbits hopping backwards?'
                  ,'What’s the different between a cat and a comma?']
  var joke = ['I don\'t know, but the flag is a huge plus.', 'He’ll stop at nothing to avoid them.','Because every play has a cast.',
             '“Get out of here!” shouts the bartender. “We don’t serve your type.”', 'I asked him, “What’s the word on the street?”', 'There’s no menu: You get what you deserve.'
             ,'“Don’t worry,” said the doc. “Those are just contractions.”', '“Why the big pause?” asks the bartender. The bear shrugged. “I’m not sure; I was born with them.”',
             'He was just going through a stage.','He just needed a little space.','Because they make up everything.','Throw him in the mainstream.', 'A nervous wreck','Gets jalapeño business!'
             ,'Put lox on it.','Being named \'Justin\'','Because you should never drink and derive.','A receding hare-line.','A cat has claws at the end of paws; A comma is a pause at the end of a clause.']
  var blackmail = ['REMOVED']
  if (message.channel.id == '836263896976719873') {
    var quote_num = (Math.floor(Math.random() * (blackmail.length +1)))
    var quote = (blackmail[quote_num]);
    if (cmd === ('-Quote')) {
      message.channel.send(quote)
    }
  }
  if (message.content === ("-Tell a joke")) {
    var joke_number = (Math.floor(Math.random() * (punchline.length +1)))
    message.channel.send(punchline[joke_number]);
    //message.channel.send(joke[joke_number]);
    setTimeout(function(){ message.channel.send(joke[joke_number]) }, 6000);
  }
  if (
    message.content.startsWith("-Tom") &&
    !(message.content === "-Tomorrow") &&
    message.content.length <= 12
  ) {
    message.channel.send("Did you mean '-Tomorrow'?");
  }
    /*
if (message.author.id === '353177950033674240') {
  message.channel.send('DP Tryhard')
}*/
});
var TOKEN = process.env.TOKEN;
client.login(TOKEN);
