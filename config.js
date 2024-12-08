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


global.devs = "12264570582" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "12264570582";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "12264570582";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_21_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUsXG4gICAgICAgIDQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM5LFxuICAgICAgICA3MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk8vc29FeGVlUHZCU09GSEFJN1ljWTROYjMrV2JqN2p2eDUvQ0N5QzFpdFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTIyNjQ1NzA1ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIyMTgzQkY1NTU1NDI2RUM0NTMzQTE2NzZEQ0YwQjYyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzYyNDQ1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjEyMjY0NTcwNTgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBQjA0Qzk4RkJFOEY2RTAwMjNGMzJBMjAxMzA1QkREOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2MjQ0NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidEdkeFVOdkpRdHVNUVl0SHdFdW81UVwiLFxuICBcInBob25lSWRcIjogXCJlYmRkZTAyOC03YjlmLTQ2NjEtYTM5Mi02YzdmNDg5M2RmMjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICA2MCxcbiAgICAgIDIxOSxcbiAgICAgIDM1LFxuICAgICAgODcsXG4gICAgICAxMzYsXG4gICAgICA2NCxcbiAgICAgIDI3LFxuICAgICAgMjAsXG4gICAgICAyMjgsXG4gICAgICAxOTIsXG4gICAgICAxNixcbiAgICAgIDIwMyxcbiAgICAgIDczLFxuICAgICAgMjA3LFxuICAgICAgMixcbiAgICAgIDE3NSxcbiAgICAgIDU1LFxuICAgICAgMzYsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE1LFxuICAgICAgMTY4LFxuICAgICAgMzcsXG4gICAgICAxMzUsXG4gICAgICAyMDUsXG4gICAgICA1MixcbiAgICAgIDExLFxuICAgICAgNjksXG4gICAgICA1NSxcbiAgICAgIDM5LFxuICAgICAgMjI1LFxuICAgICAgMjU1LFxuICAgICAgMTkzLFxuICAgICAgMTg1LFxuICAgICAgMTIsXG4gICAgICAyNixcbiAgICAgIDI1MyxcbiAgICAgIDIxMCxcbiAgICAgIDE4NSxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV01XNDFRM0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjEyMjY0NTcwNTgyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOh8J2TqvCdk7PwnZO+XCIsXG4gICAgXCJsaWRcIjogXCIyMDM2NzY1MDk1NTY3NzA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJT0d5TXNIRUlHRjFMb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNMZE1SMlcxZ0RtTFVjZlN3K0dKTlVvMHBXYVp3VWloUkNHTURZSDJWZ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicDJ1U0JVU0F1Z0VESmZMdlhyR3JGM2FUTXJZUDZQQW82TVpxalR3V2t3cjF2T0RpcXhOb0xaaDJpVzRHN1lZS2VQVEVOcTlJOTNXWGgrTXpWTXFEQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSU5Ra0VnenZkNW5vTnp6clRtTFZlY1N1anhiV0t0TGtHNXpMQWZ4cGxSaEk3Q3luME5IdFdOcnlUNk5qaFV4SXdPdzcwT2hsMjRlQ3FUcmlqLy80Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTIyNjQ1NzA1ODI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYyNDQ1MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5JVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTklWLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
