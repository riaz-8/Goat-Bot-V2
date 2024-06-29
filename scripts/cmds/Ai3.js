const axios = require('axios');
const fs = require('fs');
const path = require('path');
module.exports = {
config: {
name: "ai",
aliases: ["a"],
usePrefix: true,//true or False
version: "1.9",
author: "Delfin^⁶⁹",
countDown: 0,//countDown 1-100
role: 0,//role (0-Alluser) (1-Group Chat admin) (2-Admin bot)
shortDescription: {
vi: "❎ | error: module.exports.config.shortDescription.vi got null",
en: "Interact with an AI to get responses to your questions."
},
longDescription: {
vi: "❎ | error: module.exports.config.longDescription.vi got null",
en: "Interact with an AI to get responses to your questions." + "\nFor Dev;\nPlease make sure your api is Reachable by the axios"
},
category: "Education",
guide: {
vi: "❎ | error: module.exports.config.guide.vi got null",
en: "{pn} <question>"
 +"\n{pn} onFont to on the Font"
 +"\n{pn} offFont to off the Font"
},
priority: 1,
},
langs: {
vi: {
null: ""
},
en: {
null: ""
}
},
onStart: async function ({ api, args, message, event, threadsData, usersData, dashBoardData, globalData, threadModel, userModel, dashBoardModel, globalModel, role, commandName, getLang }) {
var directoryPath = path.join(__dirname, '..', 'events', 'cache');

// Check if the directory exists, if not, create it
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
}

var dataPath = path.join(directoryPath, 'FontData.json');
var apis = path.join(directoryPath, 'apiDAta.json');

// Load or initialize the font flag data
let fontData;
if (fs.existsSync(dataPath)) {
    fontData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} else {
    fontData = { [event.senderID]: { fontFlag: true } };
    fs.writeFileSync(dataPath, JSON.stringify(fontData));
    api.sendMessage("SYSTEM:\ndataPath installed ✅", event.threadID); // unsure what `messageID` refers to here
}
let apiData;
if (fs.existsSync(apis)) {
    apiData = JSON.parse(fs.readFileSync(apis, 'utf8'));
} else {
    apiData = { [event.senderID]: { link: "https://school-project-lianefca.bene-edu-ph.repl.co/ask/cassandra?query=", handlerData: `.message` } };
    fs.writeFileSync(apis, JSON.stringify(apiData));
    api.sendMessage("SYSTEM:\napiData installed ✅", event.threadID); // unsure what `messageID` refers to here
}
try {
  var link = (apiData[event.senderID]&&apiData[event.senderID].link); } catch (e) {
  apiData[event.senderID] = { link: "https://school-project-lianefca.bene-edu-ph.repl.co/ask/cassandra?query=", handlerData: `.message` };
fs.writeFileSync(apis, JSON.stringify(apiData));
}
try {
  var fontFlag = (fontData[event.senderID]&&fontData[event.senderID].fontFlag); } catch (e) {
  fontData[event.senderID] = { fontFlag: true };
fs.writeFileSync(dataPath, JSON.stringify(fontData));
} 
   var senderID = event.senderID;
   var senderName = await usersData.getName(event.senderID);
   	var mentionName = {
			mentions: [{
				id: senderID,
				tag: senderName
			}]};
			function Des(text){
			  const fontMapping = {
			    a: "𝓐", b: "𝓑", c: "𝓒", d: "𝓓", e: "𝓔", f: "𝓕", g: "𝓖", h: "𝓗", i: "𝓘", j: "𝓙", k: "𝓚", l: "𝓛", m: "𝓜", n: "𝓝", o: "𝓞", p: "𝓟", q: "𝓠", r: "𝓡", s: "𝓢", t: "𝓣", u: "𝓤", v: "𝓥", w: "𝓦", x: "𝓧", y: "𝓨", z: "𝓩"
			  };
			  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }
  return formattedText;
}
			function Bold(text) {
  const fontMapping = {
    a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺",
    n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
    A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠",
    N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭", " ": "."
  };
  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }
  return formattedText;
}
			
   function formatFont(text) {
  const fontMapping = {
    a: "𝖺", b: "𝖻", c: "𝖼", d: "𝖽", e: "𝖾", f: "𝖿", g: "𝗀", h: "𝗁", i: "𝗂", j: "𝗃", k: "𝗄", l: "𝗅", m: "𝗆",
    n: "𝗇", o: "𝗈", p: "𝗉", q: "𝗊", r: "𝗋", s: "𝗌", t: "𝗍", u: "𝗎", v: "𝗏", w: "𝗐", x: "𝗑", y: "𝗒", z: "𝗓",
    A: "𝖠", B: "𝖡", C: "𝖢", D: "𝖣", E: "𝖤", F: "𝖥", G: "𝖦", H: "𝖧", I: "𝖨", J: "𝖩", K: "𝖪", L: "𝖫", M: "𝖬",
    N: "𝖭", O: "𝖮", P: "𝖯", Q: "𝖰", R: "𝖱", S: "𝖲", T: "𝖳", U: "𝖴", V: "𝖵", W: "𝖶", X: "𝖷", Y: "𝖸", Z: "𝖹",
  };
  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }
  return formattedText;
}
 var question = args[0];
 var HandlerApisData = apiData[event.senderID].handlerData;
 switch (question) {
   case 'api':{
    const r = args[1];
const v = args[2];
if(!r){
  message.reply("Please Fill the api");
}
if(r&&!v){
  message.reply("Please Fill the HandlerApisData");
}
if (r.includes("(.)")&&v) {
  p = r.replace("(.)", ".");
  const Sub8 = await message.reply("✅ | Api Updated");
  apiData[event.senderID] = { link: `${p}`, handlerData: `${v}` };
fs.writeFileSync(apis, JSON.stringify(apiData));
await api.setMessageReaction("👍", event.messageID);
 await api.setMessageReaction("💗", Sub8.messageID);
   setTimeout(async() => {
    await api.unsendMessage(Sub2.messageID);
    await api.setMessageReaction("😆", Sub8.messageID);
  }, 12000);
   return Sub8;
}
if(r&&v.include(".")){
  apiData[event.senderID] = { link: `${r}`, handlerData: `${v}` };
fs.writeFileSync(apis, JSON.stringify(apiData));
const Sub8 = await message.reply("✅ | Api Updated");
await api.setMessageReaction("👍", event.messageID);
 await api.setMessageReaction("💗", Sub8.messageID);
   setTimeout(async() => {
    await api.unsendMessage(Sub2.messageID);
    await api.setMessageReaction("😆", Sub8.messageID);
  }, 12000);
   return Sub8;
}
if (!r.includes(".repl")) {
  message.reply("please make sure the api is hosted on replit");
}
 if (!v.toLowerCase().startsWith(".")) {
  message.reply("please make sure the  HandlerApisData have dot(at the starting of the line");
}
   }
 }
if (question === "onFont") {
  if (fontFlag === false) {
 fontData[event.senderID] = { fontFlag: true };
fs.writeFileSync(dataPath, JSON.stringify(fontData));
 const Sub2 = await message.reply("✅ | Font activated");
 await api.setMessageReaction("👍", event.messageID);
 await api.setMessageReaction("💗", Sub2.messageID);
   setTimeout(async() => {
    await api.unsendMessage(Sub2.messageID);
    await api.setMessageReaction("😆", Sub2.messageID);
  }, 12000);
   return Sub2;
} else {
  await api.setMessageReaction("😠", event.messageID);
  const Sub3 = await message.reply("❎ | Font already activated!");
  await api.setMessageReaction("👎", Sub3.messageID);
  setTimeout(async() => {
    await api.unsendMessage(Sub3.messageID);
    await api.setMessageReaction("😆", Sub3.messageID);
  }, 12000);
  return Sub3;
}}

if (question === "offFont") {
  if (fontFlag === true) {
 fontData[event.senderID] = { fontFlag: false };
fs.writeFileSync(dataPath, JSON.stringify(fontData));
 const Sub4 = await message.reply("✅ | Font deactivated");
 await api.setMessageReaction("👍", event.messageID);
 await api.setMessageReaction("💗", Sub4.messageID);
   setTimeout(async() => {
    await api.unsendMessage(Sub4.messageID);
    await api.setMessageReaction("😆", Sub4.messageID);
  }, 12000);
   return Sub4;
} else {
  await api.setMessageReaction("😠", event.messageID);
  const Sub5 = await message.reply("❎ | Font already deactivated!");
  await api.setMessageReaction("👎", Sub5.messageID);
  setTimeout(async() => {
    await api.unsendMessage(Sub5.messageID);
    await api.setMessageReaction("😆", Sub5.messageID);
  }, 12000);
  return Sub5;
}}
switch (question) {
  case 'imgs':{
   var k = args[1];
  var url1 = await axios.get(`https://api-all-1.arjhilbard.repl.co/pinterest?search=${encodeURIComponent(k)}`);
 const googleResponse = url1.data.data;
 if (!k) {
  const Sub = [ `🤖 ${formatFont("Hello")} ${Bold(senderName)}, \n${formatFont(`Please provide a question after the command. For example: "${global.GoatBot.config.prefix}ai test hello"`)}`, `${formatFont("Kindly provide the question at your convenience and I shall strive to deliver an effective response.")}\n${formatFont("Your satisfaction is my top priority.")}`];
     const happy = Sub[Math.floor(Math.random() * Sub.length)];
 var b = await message.reply(happy);
  await api.setMessageReaction("😢", event.messageID);
  await api.setMessageReaction("😢", b.messageID);
  setTimeout(async() => {
    await api.unsendMessage(b.messageID);
    await api.setMessageReaction("😆", b.messageID);
  }, 12000);
 return b;
 }
var noob = await message.reply(`${formatFont("Searching•••")}`);
 if(googleResponse){
   await api.unsendMessage(noob.messageID);
    await api.setMessageReaction("😆", noob.messageID);
    const pinterestImageAttachments = [];
    const cacheDir = path.join(__dirname, 'cache');
    if (!fs.existsSync(cacheDir)) {
      fs.mkdirSync(cacheDir);
      return;
    }
    for (let i = 0; i < googleResponse.length; i++) {
      const imageUrls = googleResponse[i];
      try {
        const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
        const imagePath = path.join(cacheDir, `pinterest_image${i + 1}.jpg`);
        fs.writeFileSync(imagePath, Buffer.from(imageResponse.data, "binary"));
        pinterestImageAttachments.push(fs.createReadStream(imagePath));
      } catch (error) {
        console.error("Error fetching Pinterest image:", error);
      }
      if (pinterestImageAttachments.length > 0) {
      message.reply(
        {
          attachment: pinterestImageAttachments,
          body: `${formatFont(`📷 𝗜𝗺𝗮𝗴𝗲 𝗦𝗲𝗮𝗿𝗰𝗵 𝗥𝗲𝘀𝘂𝗹𝘁𝘀 𝗳𝗼𝗿: ${question}`)}`,
        } );
        return;
    }
    }
 }
    break;
}
}
if(fontFlag === true){
  if (question.toLowerCase().startsWith("hello") || question.toLowerCase().startsWith("hi")){
 await api.setMessageReaction("💗", event.messageID);
  const lub1 = await message.reply(`🤖 ${formatFont("Hello")}`+ ` ${Bold(senderName)},\n` + `${formatFont("How can I assist you today?")}`);
  await api.setMessageReaction("😍", lub1.messageID);
  setTimeout(async() => {
    await api.unsendMessage(lub1.messageID);
    await api.setMessageReaction("😆", lub1.messageID);
    }, 12000);
    return lub1;
} 
if (!question) {
  const Sub = [ `🤖 ${formatFont("Hello")} ${Bold(senderName)}, \n${formatFont(`Please provide a question after the command. For example: "${global.GoatBot.config.prefix}ai hello"`)}`, `${formatFont("Kindly provide the question at your convenience and I shall strive to deliver an effective response.")}\n${formatFont("Your satisfaction is my top priority.")}`];
     const happy = Sub[Math.floor(Math.random() * Sub.length)];
 var b = await message.reply(happy);
  await api.setMessageReaction("😢", event.messageID);
  await api.setMessageReaction("😢", b.messageID);
  setTimeout(async() => {
    await api.unsendMessage(b.messageID);
    await api.setMessageReaction("😆", b.messageID);
  }, 12000);
 return b;
 }
let infoMessage = [`ℹ️${formatFont(" Answering your question")}` + ` ${Bold(senderName)}, ${Des("please wait...")}`,`⏳${Des("Typing•••")}`];
const happy = infoMessage[Math.floor(Math.random() * infoMessage.length)];
 var a = await message.reply(happy);
 setTimeout(async() => {
    await api.unsendMessage(a.messageID);
    await api.setMessageReaction("😆", a.messageID);
  }, 12000);
 await api.setMessageReaction("💗", event.messageID);
 await api.setMessageReaction("😍", infoMessage.messageID);
 try {
 const url = `${link}${encodeURIComponent(question)}`;
 let tries = 0;
 while (tries++ < 20) {
 try {
 const response = await this.fetchDataWithTimeout(url);
 const aiResponse = response.data+HandlerApisData;
 const c = await message.reply(`${formatFont("⌛ Done✓")}`);
 setTimeout(async() => {
    await api.unsendMessage(c.messageID);
    await api.setMessageReaction("😆", c.messageID);
  }, 12000);
  await api.setMessageReaction("💗", event.messageID);
 await api.setMessageReaction("😍", c.messageID);
await api.setMessageReaction("😆", a.messageID);
 await api.unsendMessage(a.messageID);
var currentTimeDescription = `🤖 Hi ${Bold(senderName)}`;
 if(aiResponse){
   const reply = await message.reply(`${formatFont(currentTimeDescription)},\n${formatFont(aiResponse)}`);
     api.setMessageReaction("😍", reply.messageID);
     setTimeout(async() => {
    await api.unsendMessage(reply.messageID);
    await api.setMessageReaction("😆", reply.messageID);
  }, 3600000);
     return reply;
 } 
 } catch (error) {
 if (error.message.includes('Axios request is delayed')) {
 // increase delay for the next attempt
 await new Promise(res => setTimeout(res, 1000 * tries));
 continue;
 }
 throw error;
 }
 }
 throw new Error("Failed to fetch data after 20 attempts");
 } catch (error) {
 console.error(error);
 return message.reply(`${error.message}, please try again`);
 }
}
if(fontFlag === false){
if(question.toLowerCase().startsWith("hello")  || question.toLowerCase().startsWith("hi")) {
 await api.setMessageReaction("😍", event.messageID);
  const lub = await message.reply(`Hello.${Bold(senderName)},\n` + `How can I assist you today?`); setTimeout(async() => {
    await api.unsendMessage(lub.messageID); 
    await api.setMessageReaction("😆", lub.messageID);
    }, 12000); 
    return lub;
}
if (!question) {
  const Sub = await message.reply(`Please provide a question after the command. For example: "${global.GoatBot.config.prefix}ai hello"`);
  await api.setMessageReaction("😢", event.messageID);
  setTimeout(async() => {
    await api.unsendMessage(Sub.messageID);
    await api.setMessageReaction("😆", Sub.messageID);
  }, 12000);
 return Sub;
 }
 var infoMessage = await message.reply(`ℹ️ Answering your question ${Bold(senderName)}, please wait...`);
 await api.setMessageReaction("💗", event.messageID);
 await api.setMessageReaction("😍", infoMessage.messageID);
try {
 const url = `${link}${encodeURIComponent(question)}`;
 let tries = 0;
 while (tries++ < 20) {
 try {
 const response = await this.fetchDataWithTimeout(url);
 const aiResponse = response.data+HandlerApisData;
await api.setMessageReaction("😆", infoMessage.messageID);
 await api.unsendMessage(infoMessage.messageID);
var currentTimeDescription = `Hi ${Bold(senderName)}`;
 if(aiResponse) {
   const reply = await message.reply(`${currentTimeDescription} ,
     ${aiResponse}`);
     api.setMessageReaction("😍", reply.messageID);
     setTimeout(async() => {
    await api.unsendMessage(reply.messageID);
    await api.setMessageReaction("😆", reply.messageID);
  }, 3600000);
     return reply;
 }
 } catch (error) {
 if (error.message.includes('Axios request is delayed')) {
 // increase delay for the next attempt
 await new Promise(res => setTimeout(res, 1000 * tries));
 continue;
 }
 throw error;
 }
 }
 throw new Error("Failed to fetch data after 20 attempts");
 } catch (error) {
 console.error(error);
 return message.reply(`${error.message}, please try again`);
 }
}
},
fetchDataWithTimeout: async function (url1, url, timeout = 20000) {
 const controller = axios.CancelToken.source();
 setTimeout(() => {
 controller.cancel(`Axios request is delayed for ${timeout}ms, please try again`);
 }, timeout);
 return axios.get(url1, url, { cancelToken: controller.token });
 }
};
