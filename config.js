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


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_01_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODIsXG4gICAgICAgIDI4LFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJvWHAvVnAyVjlTcTZOZWUwQnU5VmY2enhVeHBqeUxwd1VuZXREcTVpNXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzM0E4NzFCQTFGMUQyNDRCNjVFMEEwNDc5OURGMzY1RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU2NTAwODFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVRsc3JWbk9STjJ1TlR5cWRLU2lKQVwiLFxuICBcInBob25lSWRcIjogXCJjODMxZjZhOC1hNDZmLTQ5ZGEtYjk4OC01MjZhOWFlNTBlOWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNixcbiAgICAgIDE0MixcbiAgICAgIDIxNCxcbiAgICAgIDE5MyxcbiAgICAgIDE1MixcbiAgICAgIDEyMCxcbiAgICAgIDE2NixcbiAgICAgIDI3LFxuICAgICAgMTkyLFxuICAgICAgNzYsXG4gICAgICAxNTgsXG4gICAgICAxMzYsXG4gICAgICAxMzEsXG4gICAgICAyMDEsXG4gICAgICAyNDMsXG4gICAgICAxNjEsXG4gICAgICAxODQsXG4gICAgICAxMTksXG4gICAgICAxNzYsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEwLFxuICAgICAgMTM2LFxuICAgICAgODksXG4gICAgICAyNTIsXG4gICAgICA1LFxuICAgICAgMSxcbiAgICAgIDE4NyxcbiAgICAgIDI0OCxcbiAgICAgIDEyNyxcbiAgICAgIDE2NyxcbiAgICAgIDE3MCxcbiAgICAgIDI5LFxuICAgICAgMjQyLFxuICAgICAgMTQsXG4gICAgICAxOTcsXG4gICAgICAyMzAsXG4gICAgICAyMjcsXG4gICAgICA2MyxcbiAgICAgIDEzNyxcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZRWFJYWjdEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+FovCfhbrhrYTwnYSf4omb4oOd8J2ZjuKBscuh4bWJ4oG/4bWX4L+Q8J2ZhuKBscuhy6HhtYnKs/CUl4Dig59cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR0hzZEFFRUpyV3o3c0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkh3cURWRWVhaFBpbFNUaEJHVVM0NTYzUFdtMkJTbDQyM1gxWFEvVkhWbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGZYVWt2bnZUcHpqcytLaUJ0ZUpIcGJ2UDNlVmZjSVhXOTVlQ2dOZGFacG1JYkNjQ3d4Sy9hMEk4bGwwUWRZMkk0bmtjbnRCeUpRaERTTlVWdHh3Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFE2bXhucGJSM2lEZXk5WTEvZUt0LzJ6QmoxYURsQldESFUxL0tvd2FQeWdIbVdqend0WXA2akJmQllsV1NCN2tFdjJNZHNHT1B0Y0lnZmQyNG1vanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2NTAwNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKYm9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpiby5qc29uIjogIntcImtleURhdGFcIjpcIlBCNjQ4RlYwYm9kUEo4SFRGNVlzMG5JUTZ0Sk5hM1B3KzdmVEdWRXg2SVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0MjMxNzgwNyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
