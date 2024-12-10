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


global.devs = "923052355287" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923052355287";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_42_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgODcsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc1LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5LFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MixcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM0RYallGYjNmSlE3RWY2bnBZbWtYNE9OOU1ob0h6RW1uaXdDV2RVQmZFaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXhnVk9xRlBUcGVZeDNFcmJqLWRjUVwiLFxuICBcInBob25lSWRcIjogXCIzZGFjZGQ5Ny0zYzY2LTRjOTEtYjk5Yi1mNjc1Yjk5NmMwZmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMjU0LFxuICAgICAgMTgxLFxuICAgICAgNTYsXG4gICAgICA4LFxuICAgICAgMTgxLFxuICAgICAgMTkxLFxuICAgICAgMTg1LFxuICAgICAgMzcsXG4gICAgICAxNjAsXG4gICAgICAyMTYsXG4gICAgICAxNjYsXG4gICAgICAzMyxcbiAgICAgIDEzMyxcbiAgICAgIDE2OSxcbiAgICAgIDIyOCxcbiAgICAgIDI0LFxuICAgICAgNjMsXG4gICAgICAzOSxcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDI1MCxcbiAgICAgIDEzMyxcbiAgICAgIDk4LFxuICAgICAgMjE3LFxuICAgICAgMTg0LFxuICAgICAgMjAwLFxuICAgICAgOTUsXG4gICAgICAxMDgsXG4gICAgICAxOTIsXG4gICAgICAxNDMsXG4gICAgICA1OCxcbiAgICAgIDI4LFxuICAgICAgMTM5LFxuICAgICAgMjAyLFxuICAgICAgMjAxLFxuICAgICAgMTU2LFxuICAgICAgMTk0LFxuICAgICAgMTI5LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRHMVZDRExDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNTIzNTUyODc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIyOTc0MDQwNTMxMTM0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzc5aHRnQ0VNWHU0TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdzJIZjJXakRkWEJiUHU0SllwdkNscCsrWnNRRG9XRE91bE1meEZhY25nPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFYTHZSY3RGVW82eTkzbzNyTEd0RE1Td3Q1azRRZVB1czNRWTByWEtURy9XRVBoTHRwd2x5eEEwYXJZTmEyMnhYcHBFQlV5aUlpMm5XTDRPbUdha0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndHbmliS1dqS0dET014SDZIY0MwWnJMbHhXTkk4eU9EQWcvTE1TQTdZS3E1MTJydDJmZjFZNy9nbXNLK1JFZnl6dHVKWXF0NUxnbnN6bEQ1MEJibmlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA1MjM1NTI4NzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzODM0NTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnRXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCdFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwNWltWWFEZlJrWFRETVR3RjI2QjkxUTA4dGhkRmg2Vy8rYVZoL0svamljPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcyMTUzNDcwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzODM0NTcxNTg2XCJ9Igp9"  // PUT your SESSION_ID 


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
