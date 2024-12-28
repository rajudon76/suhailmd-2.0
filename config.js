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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_29_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDg4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJJM3JUQWpoRFJ1MnlhNENVOFJzZlZsdnNHMkNVbElva3FJMnJZNVo3M2c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZlNjFTdEFWUUpxcUJJVDJScWRCNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWM3Mjc5ZTMtMWMwNC00NzRlLThmZTQtNDhiNWNiYWE2NWZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDE3OSxcbiAgICAgIDE1MyxcbiAgICAgIDI0MixcbiAgICAgIDEyNyxcbiAgICAgIDIzNixcbiAgICAgIDIyMCxcbiAgICAgIDE3OSxcbiAgICAgIDEwNCxcbiAgICAgIDM4LFxuICAgICAgMTAxLFxuICAgICAgNDMsXG4gICAgICA2MixcbiAgICAgIDU2LFxuICAgICAgNixcbiAgICAgIDE0OCxcbiAgICAgIDYsXG4gICAgICAxLFxuICAgICAgMTM5LFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMCxcbiAgICAgIDE4MSxcbiAgICAgIDcyLFxuICAgICAgMTYwLFxuICAgICAgNTUsXG4gICAgICAyMzMsXG4gICAgICAxMzEsXG4gICAgICAyMzUsXG4gICAgICAyNSxcbiAgICAgIDExNyxcbiAgICAgIDk3LFxuICAgICAgMzIsXG4gICAgICAxOTgsXG4gICAgICAyMzIsXG4gICAgICAxNzYsXG4gICAgICAyNDMsXG4gICAgICAxOTAsXG4gICAgICAyMjYsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDU0QzIyU0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPK0hzZEFFRUtEaHZic0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkh3cURWRWVhaFBpbFNUaEJHVVM0NTYzUFdtMkJTbDQyM1gxWFEvVkhWbEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2pWN09YMitjcTNmZnB3aUovY1BvZmpjTEVzbzNtbU1nMnBDUkR5T2Zzd0IyQ25rNXZ1dmRiVEpWWkVoSWVWOWcwN3dENitnMmt5U1FhUWxrNXJ3RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR285Znk1NUUzUGp6bTZaTElqZzdWaDl5bU12YzJlTC9GUVNLL3hUTWV4Q1hsb01SYnRCa0IrcnF0TkFMQ0xHMWtSOFRSMHNka3Njc1ZNSlhyY2RpQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUzNTY1ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKYm5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpibi5qc29uIjogIntcImtleURhdGFcIjpcIko1SkFuSUJlRHZ3cHRuM2NoZ0wzWEZhRkRWdUF2a1JBWGREOTNROVhJZms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI0MjMxNzgwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1Mjc0NDk0ODkyXCJ9Igp9"  // PUT your SESSION_ID 


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
