let Discord = require("discord.js");
let client = new Discord.Client();

client.on("guildMemberAdd", member => {
  if (member.guild.id === "GUILD_ID") {
    client.channels.cache
      .get("CHANNEL_ID")
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
    if (victim != "USER_ID") {
      for (i = 0; i < top; i++) {
        message.channel.send("<@" + victim + ">");
      }
    } else if (victim == "USER_ID") {
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
                 "School: -All, -Week, -(Any day of the week), -Today, -Tomorrow, -(Shortform for any module), -Tests, -Assessments\nOthers: -Time, -Avatar (someone), -My future, -Is (any question), -Does (any question), \n               -Tell a joke, -Hug (@someone), -Slap (@someone), -Kiss (@someone), -Shoot (@someone), -Punch (@someone)",
                 "Tuesday: 11am-1pm\nBlk 31, #05-02 \nFriday: 10am-12pm\nBlk 27, #06-10", "Tuesday: 9am-11am\nBlk 31, #05-02", "Monday: 12pm-3pm\nBlk 27, #07-04 \nFriday: 2pm-4pm\nBlk 27, #06-10",
                 "Thursday: 11am-1pm\nBlk 27, #04-03","Thursday: 2pm-4pm\nBlk 31, #05-12", "Monday: 4pm-6pm\nBlk 27, #07-04", "PRG: \n12pm-3pm \nFP: \n4pm-6pm",
                 "DSF: \n9am-11am \nCM: \n11am-1pm", "DP: \n11am-1pm \nCSF: \n2pm-4pm", "CM: \n10am-12pm \nPRG: \n2pm-4pm", "There are no classes on that day.", 
                 "There are no classes on that day."]
  var cmd = message.content
  if (commands.includes(cmd)) {
    var index_no = commands.indexOf(cmd)
    message.channel.send(response[index_no])
  }
  if (message.author.id === "USER_ID") {
    var j_cmd = ['-Week', '-HW', '-COMMS']
    var j_res = ['Monday: \nPRG: 12pm-3pm \nFP: 4pm-6pm \n\nTuesday: \nDSF: 9am-11am \nCM: 11am-1pm\n\nWednesday:\nHW: 8am-10pm\nCOMMS: 1pm-4pm\n\nThursday: \nDP: 11am-1pm \nCSF: 2pm-4pm\n\nFriday: \nCM: 10am-12pm \nPRG: 2pm-4pm',
                "Wednesday: 8am-10am", "Wednesday: 1pm-4pm"]
    if (j_cmd.includes(cmd)) {
      var index_no = j_cmd.indexOf(cmd)
      message.channel.send(j_res[index_no])
  }
  }
   if (!(message.author.id === "USER_ID")) {
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
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day = days[dayNumber];

  var monthNumber = currentdate.getMonth();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
    !(message.author.id === "USER_ID(G)")
  ) {
    message.channel.send(
      rejection[Math.floor(Math.random() * rejection.length)]
    );
  } else if (
    message.content === "-My future" &&
    message.author.id === "USER_ID(G)"
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
  if (message.channel.id == 'CHANNEL_ID(B)') {
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
  var hug = ['https://tenor.com/view/hugs-sending-virtual-hug-sending-hugs-loading-heart-gif-16923416','https://tenor.com/view/bunny-cute-cuddling-hug-love-gif-15162403', 'https://tenor.com/view/animated-love-hug-sweet-gif-8330882',
'https://tenor.com/view/cat-hug-back-hug-notice-me-attention-to-me-gif-14227401','https://tenor.com/view/mochi-peachcat-mochi-peachcat-hug-pat-gif-19092449','https://tenor.com/view/ghosthug-gif-7626784']
  if (message.content.startsWith('-Hug')) {
      var hug_index = (Math.floor(Math.random() * ((hug.length)+1)))
      var hug_gif = hug[hug_index]
      var sender = message.author.id
      var receiver = message.mentions.users.first()
      message.channel.send("<@"+sender+">"+ " gives a hug to " + "<@"+receiver+">")
      message.channel.send(hug_gif)
      }
  var slap = ['https://tenor.com/view/slap-angry-mad-pissed-pissedoff-gif-5428698','https://tenor.com/view/pikachu-slap-fight-mad-no-gif-16415016','https://tenor.com/view/peach-cat-slap-angry-mad-gif-15310661',
'https://tenor.com/view/batman-slap-robin-slap-gif-10206784','https://tenor.com/view/nope-stupid-slap-in-the-face-phone-gif-15151334','https://tenor.com/view/spank-tom-and-jerry-tom-puppy-gif-5196956',
"https://tenor.com/view/slap-bear-slap-me-you-gif-17942299"]
  if (message.content.startsWith('-Slap')) {
      var slap_index = (Math.floor(Math.random() * ((slap.length)+1)))
      var slap_gif = slap[slap_index]
      var sender = message.author.id
      var receiver = message.mentions.users.first()
      message.channel.send("<@"+sender+">"+ " slaps " + "<@"+receiver+">")
      message.channel.send(slap_gif)
      }
  var kiss = ['https://tenor.com/view/peach-cat-forehead-kiss-sweet-cute-gif-15289763', 'https://tenor.com/view/adorable-cat-heart-love-dodge-gif-12373953', 'https://tenor.com/view/love-you-lots-kiss-peachcat-gif-13985240', 'https://tenor.com/view/milk-and-mocha-kiss-love-in-love-gif-11453877',
              'https://tenor.com/view/bear-blow-a-kiss-love-hearts-kissing-gif-11674749', 'https://tenor.com/view/kisses-love-couple-kiss-muah-gif-16851922']
  if (message.content.startsWith('-Kiss')) {
      var kiss_index = (Math.floor(Math.random() * ((kiss.length)+1)))
      var kiss_gif = kiss[kiss_index]
      var sender = message.author.id
      var receiver = message.mentions.users.first()
      message.channel.send("<@"+sender+">"+ " sends a kiss to " + "<@"+receiver+">")
      message.channel.send(kiss_gif)
      }
  var punch = ['https://tenor.com/view/anime-kawaii-love-punch-gif-12542726', 'https://tenor.com/view/funny-lilo-punch-gif-12971422', 'https://tenor.com/view/lulugifs-charlie-brown-lucy-peanuts-punch-gif-15768734','https://tenor.com/view/cat-cute-adorable-punch-gif-17822730',
               'https://tenor.com/view/saitama-one-punch-man-gif-4973550','https://tenor.com/view/brown-cony-sorry-punch-gif-13627939']
  if (message.content.startsWith('-Punch')) {
      var punch_index = (Math.floor(Math.random() * ((punch.length)+1)))
      var punch_gif = punch[punch_index]
      var sender = message.author.id
      var receiver = message.mentions.users.first()
      message.channel.send("<@"+sender+">"+ " punches " + "<@"+receiver+">")
      message.channel.send(punch_gif)
      }
  var shoot =['https://tenor.com/view/gun-shoot-recoil-gif-15178145','https://tenor.com/view/shoot-dance-gun-dance-cartoon-gun-dance-shooting-at-feet-bugs-bunny-shooting-dance-gif-17378914','https://tenor.com/view/family-guy-ripaim-random-fire-out-of-control-fire-gif-5980510',
'https://tenor.com/view/gun-gif-4564141','https://tenor.com/view/shooting-cat-angry-rage-furious-gif-5266895','https://tenor.com/view/seal-shoot-shot-eggplant-cute-gif-16533278',
'https://tenor.com/view/kermit-shoot-lol-gun-frog-gif-16181496']
  if (message.content.startsWith('-Shoot')) {
      var shoot_index = (Math.floor(Math.random() * ((shoot.length)+1)))
      var shoot_gif = shoot[shoot_index]
      var sender = message.author.id
      var receiver = message.mentions.users.first()
      message.channel.send("<@"+sender+">"+ " shoots at " + "<@"+receiver+">")
      message.channel.send(shoot_gif)
      }
});
var TOKEN = process.env.TOKEN;
client.login(TOKEN);
