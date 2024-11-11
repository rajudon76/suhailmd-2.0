const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "923310469548" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923310469548";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923310469548";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_51_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDQxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NixcbiAgICAgICAgMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICA5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpaeVlzQzNVK1ZRT1Y3NmNSNE9YaldMRXpxVHM5dWFJU1hOZHBodjlXYms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk56ZVhjRllvVG55LWxJQ2xxT045WHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UzZmI3MjItM2RlNy00MTk2LTlmZGYtMWE1ODg5Mzg0NzI0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMyxcbiAgICAgIDE5NyxcbiAgICAgIDEwNCxcbiAgICAgIDIwNixcbiAgICAgIDEwMSxcbiAgICAgIDE1NCxcbiAgICAgIDE1MCxcbiAgICAgIDQzLFxuICAgICAgMjM1LFxuICAgICAgNzAsXG4gICAgICAyMDYsXG4gICAgICAyMzMsXG4gICAgICAyMzQsXG4gICAgICAxOTksXG4gICAgICA5NixcbiAgICAgIDE1NSxcbiAgICAgIDIzNSxcbiAgICAgIDE0MyxcbiAgICAgIDE5MyxcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxMjIsXG4gICAgICAyNDQsXG4gICAgICA0MixcbiAgICAgIDEzMixcbiAgICAgIDIzNixcbiAgICAgIDE4NSxcbiAgICAgIDEzNixcbiAgICAgIDIzOCxcbiAgICAgIDMsXG4gICAgICAxNjgsXG4gICAgICA1OCxcbiAgICAgIDg4LFxuICAgICAgMTI1LFxuICAgICAgODQsXG4gICAgICAyMDAsXG4gICAgICA3NixcbiAgICAgIDEyNSxcbiAgICAgIDE3MyxcbiAgICAgIDE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktUM0pOU0FDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTA0Njk1NDg6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3Mjk1MDI4MDAwMzU4NzoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMV014OWNHRUtQc3lMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRpc05tUnE1ZkJpYjNCZGthbjY3c2xIbit3bTU2V1JidXNQQlp0blZHZ0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQnVsYlFDWHc0S0ZjYlM5YjFmbDd2N2FxV2VHSU82bXJFbG1QMjVoeDJ3T0VTNDZ3SDRtU1g3M3ZEWVVwc3JYRkRMVDVZeW80L3cwMnV4LzErTUxVQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHN1NFFWVGxsYTdoaWs1SnBkQy9DODQ0NGFGSjBGL1MwZDBTV2JoQk1nZTc1VUJ4Y0w2Nk84MnJMLy9TQ3lVZkhkYmFneGZtNFE4TFAzaXZZNVZhamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzEwNDY5NTQ4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNDM5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJYdy5qc29uIjogIntcImtleURhdGFcIjpcInpVOU5ZZHRMQ3ZiMTFxeStsaVJZaXlWUzRLWDdyRGZhQVZZN1ZmcG9SUVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc5NDIyOTgxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMTM0Mzc3MTcxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
