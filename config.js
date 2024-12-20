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


global.devs = "923243157605" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923243157605";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_48_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgNjQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFlbTJGWTMxR0xLQ1dFSkNxZ2ZMYkhZVVErd1JyVWRldERGcW1sV3YweWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQzMTU3NjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMjRBNDZENUYwNDQ3Qjg4NkRGQjE3NUNBRjlERkNFRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQ3MTMzMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDMxNTc2MDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRDODREMjQ0M0U1QUVGN0NFRjA4MkVERDkxMjg1ODIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDcxMzMyNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3ZkJhdFVaR1JJcWNjQUphUU9KTmdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjNmU0ZjQ4LWViZTktNGU3NC05MGE4LWRjYjFmY2Y2NTNkYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxOTMsXG4gICAgICAxODUsXG4gICAgICA1NixcbiAgICAgIDEyMixcbiAgICAgIDIxNyxcbiAgICAgIDMsXG4gICAgICAxMTYsXG4gICAgICAyMzAsXG4gICAgICAxNyxcbiAgICAgIDIyNCxcbiAgICAgIDE5LFxuICAgICAgMzgsXG4gICAgICA0NCxcbiAgICAgIDIxMCxcbiAgICAgIDIyNixcbiAgICAgIDE0NyxcbiAgICAgIDIzLFxuICAgICAgMzksXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICA5OCxcbiAgICAgIDE5NixcbiAgICAgIDExNixcbiAgICAgIDgxLFxuICAgICAgNzIsXG4gICAgICAxNjksXG4gICAgICAxNSxcbiAgICAgIDIxMSxcbiAgICAgIDI1MixcbiAgICAgIDE1OCxcbiAgICAgIDEwMSxcbiAgICAgIDIzMSxcbiAgICAgIDExLFxuICAgICAgNDYsXG4gICAgICA0MixcbiAgICAgIDY0LFxuICAgICAgMjQsXG4gICAgICA4MSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQVEVUM0tWUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQzMTU3NjA1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQ0KbGp86JUM6bXCIsXG4gICAgXCJsaWRcIjogXCIyNzIxNjQwNTgwOTE1NDc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU0d5TXNIRU9hL2xyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNMZE1SMlcxZ0RtTFVjZlN3K0dKTlVvMHBXYVp3VWloUkNHTURZSDJWZ1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDlmVDZOeUQrOWRhY3ByaFY3QkgxcXBUQXdpZGhGZjhkVlY0d1l3YUFralBJcnNWMGo1VitXbTJpUlRYN0plUDFLaW16aC9DT28vYzRpTkRXcTg1Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVkEvbmVLSytvU3diaHpscUxYNndkL0tHSGNDcDBZUnZYM2g1enIvK1R1UStJaVg1OEdpYnYwVTJrUHRJU3lZZU1wUXpnanRTeFhmaGZDR3hkL1MwQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQzMTU3NjA1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ3MTMzMjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBa0dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFrRy5qc29uIjogIntcImtleURhdGFcIjpcIjYyYkJHVHlmSFJJVmxYeHZPQVgybUdOb2dmWHNjRDh4eFhBTXhaeTBpWEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAzNzUxNTAxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NzEzMzI2NTkyXCJ9Igp9"  // PUT your SESSION_ID 


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
