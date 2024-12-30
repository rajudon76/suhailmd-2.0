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


global.devs = "923270736032" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923270736032";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_16_12_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgNDksXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDczLFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtbjVqd3NyK0hjTjA2YVhEelRWMWx6NDMrQzVBd3NHdmh4bmRvb0R6Z0dzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3MDczNjAzMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTNEQzE5RTVFRjI5NkJCNUQwMTI2NDBERjM0NkUwNjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NTM5MzgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjcwNzM2MDMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyRkExQTI1QUQwOERFOEM5NUQwNDBDN0NFOEVCQkNFMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU1MzkzODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGs0OGFudXJSZENzc0pINEZjQWZld1wiLFxuICBcInBob25lSWRcIjogXCI5NGM4ODk2Ny1hNzgwLTRmMjktYWUwYS01NjA2OWFiZTNmNWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMjgsXG4gICAgICAzMSxcbiAgICAgIDE5OSxcbiAgICAgIDEwOSxcbiAgICAgIDY1LFxuICAgICAgMTUzLFxuICAgICAgMSxcbiAgICAgIDUzLFxuICAgICAgODYsXG4gICAgICA4MyxcbiAgICAgIDE4MCxcbiAgICAgIDE3LFxuICAgICAgMTMwLFxuICAgICAgMTc2LFxuICAgICAgMTg5LFxuICAgICAgMTMxLFxuICAgICAgMTQwLFxuICAgICAgMTA4LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgMTksXG4gICAgICA4OCxcbiAgICAgIDEwMSxcbiAgICAgIDIxMixcbiAgICAgIDcsXG4gICAgICA4OSxcbiAgICAgIDIyMSxcbiAgICAgIDIxOSxcbiAgICAgIDIyNixcbiAgICAgIDE4NCxcbiAgICAgIDEzNCxcbiAgICAgIDE4NCxcbiAgICAgIDE1NyxcbiAgICAgIDI1NCxcbiAgICAgIDU3LFxuICAgICAgMTc5LFxuICAgICAgMTAyLFxuICAgICAgMTQ5LFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRCN1JES0E1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzA3MzYwMzI6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJRYW1hclwiLFxuICAgIFwibGlkXCI6IFwiMTM3MjUwMzc3NTc2NDYwOjkxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2UTBGSVFzUFhJdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieEdIVU9CU21Db3BTMlE4ZVFwbUw5TDVkRVYvY2dySWh0WnAvTlFOcGR3TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJONTk3aVN2V2hHUXZCaWREMFJkWHhkaVVUSWs4Sk1NeHVkbjZvcm5pN2M4RU01REVmYmdPQVdUaHJBUWRRYWhlQ0JhZEh4RE9ZTHdyNDY1bXhNSERDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwUlFZRGY5SHdWSkc1ajdJeVVZbUNFY1BVZ1J4ZXlNZk1BWTVBVCtabW41Z3Y0clhEYjlkUHRMdm5XMEhYSWdSVklHVmNWbjArNVdpSnZsaC9yNWlqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNzA3MzYwMzI6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NTM5Mzc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSHJQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIclAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyY1NNUitQRkhiZ1IzNlZKQXA5dU5nN0U1QUxBdFhVZWxKMkozaEQ1Q2tJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MzI4NzQ1MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1NTM5MzgwOTA2XCJ9Igp9"  // PUT your SESSION_ID 


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
