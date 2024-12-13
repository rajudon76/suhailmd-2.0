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


global.devs = "923290505302" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923290505302";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_33_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcxLFxuICAgICAgICAzLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDg3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInVQYXo5ZFZsc0VVbzVWcHAvTlFxRHdsMG52Q2xpOXlpWU82Vy83dE1qZDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkwNTA1MzAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxMEZFRDI3REU3Qzc3NDVCREVEMjRGMzA4MTJFMTVDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwNTcyMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTA1MDUzMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJCN0E0QUYyRDlGMDU4RENGOUIyNDdGMEFDMjhDMTlEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDA1NzIyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MDUwNTMwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOEYzOTVDNTA2RUE4MEQ0N0I1OEEzQTMyNkM3RTIxNEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MDU3MjI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkwNTA1MzAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MEZDREZCRUEwOEJEODlCQzZBNzA1M0M3OTY5Mjk3MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQwNTcyMjdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTVJXQmhKa01ROFMwQmkyUXRtVWYzQVwiLFxuICBcInBob25lSWRcIjogXCIzN2JlODBkNS03M2FkLTRlNzMtOTI3OS1mMjcyNDQyNDUwOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMjEzLFxuICAgICAgMTY5LFxuICAgICAgMjI2LFxuICAgICAgNTgsXG4gICAgICAyNTIsXG4gICAgICAxMDIsXG4gICAgICA4NixcbiAgICAgIDEsXG4gICAgICAyNDIsXG4gICAgICA1MSxcbiAgICAgIDIwNyxcbiAgICAgIDE4NSxcbiAgICAgIDIyLFxuICAgICAgMjI2LFxuICAgICAgMTY1LFxuICAgICAgMTA3LFxuICAgICAgNzgsXG4gICAgICAyNDIsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgNjMsXG4gICAgICAxNDgsXG4gICAgICAzNixcbiAgICAgIDI0MCxcbiAgICAgIDEwLFxuICAgICAgOTIsXG4gICAgICAxMTgsXG4gICAgICA2MixcbiAgICAgIDExNyxcbiAgICAgIDE0NCxcbiAgICAgIDI1NSxcbiAgICAgIDY2LFxuICAgICAgMyxcbiAgICAgIDcsXG4gICAgICAyNTQsXG4gICAgICAyMjUsXG4gICAgICAxNDMsXG4gICAgICAxOTgsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRzVKUDdaRlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5MDUwNTMwMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ4NzE5MTA0OTg1MjA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSaWF6IGFobWVkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENidkljRkVJVzY3cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHdjFXOVA5bjhua2V2MXNBSnVnTVRlc3VNejVLdGdWVjE3cm9IV1k2eERjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRhSkVUN3E1R0Znbm9lSDNGS3VFUmZCdXQ0NjNxdE9TS0hVMkZ6d21TSm0ySXlBVFpJWHgyMjd1WnlQVkxveUFMUzAvbG5kTFpoM0c0RWU1RE14VkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVlY2VNNmRhTkFHTnlJTm92dFBFT1pIVVczZ3lNd1l5TzRqK2U5Q1NkL1FwZjBNR2luT3ZabVUzZWUwSDRZMTRSVVhZRmo4S1NmbHFxNXF3R3h4M0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5MDUwNTMwMjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwNTcyMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCczZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzNi5qc29uIjogIntcImtleURhdGFcIjpcIjkwWWJPaUVVZFRIQXpJK1ROWUZwdnA2aE5KV3lPQlhNWnMzR2pzOXhKbmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1Nzg0Mzg4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MDU3MjI1MzU3XCJ9Igp9"  // PUT your SESSION_ID 


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
