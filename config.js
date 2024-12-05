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


global.devs = "923071782626" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923071782626";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071782626";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_35_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTExLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgNzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDksXG4gICAgICAgIDAsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4SERUZHBDdFl2RW5uWWkwRytQcGtFQjMxZFBaL0wwb3JoU2hzUWR0bVNBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnSkRTSm5mRlFDMklqdHBRekpXSjFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4NzljNzUxLWZmMTctNDFlOC05MzY2LTg0MjU0YjJkMzgwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzIsXG4gICAgICAxMTcsXG4gICAgICAyMyxcbiAgICAgIDExMSxcbiAgICAgIDEyNixcbiAgICAgIDMxLFxuICAgICAgMTI1LFxuICAgICAgMjUyLFxuICAgICAgNDEsXG4gICAgICA3MyxcbiAgICAgIDUxLFxuICAgICAgMTMxLFxuICAgICAgMjA5LFxuICAgICAgMjE2LFxuICAgICAgMjMwLFxuICAgICAgNzEsXG4gICAgICAxNDAsXG4gICAgICAyMTIsXG4gICAgICAyNDIsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxMzUsXG4gICAgICAyMzksXG4gICAgICAwLFxuICAgICAgMTgyLFxuICAgICAgMjM2LFxuICAgICAgMTE4LFxuICAgICAgMTg0LFxuICAgICAgMTMxLFxuICAgICAgNzgsXG4gICAgICA3NCxcbiAgICAgIDE1LFxuICAgICAgMTA2LFxuICAgICAgMTk5LFxuICAgICAgMTYsXG4gICAgICAyMDgsXG4gICAgICAxMjMsXG4gICAgICA2NixcbiAgICAgIDExNixcbiAgICAgIDc5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlIzWlI2Q0NFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzE3ODI2MjY6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvozjhJbljYTlh6Ag5bGx5Lio5Yya0pwgNVwiLFxuICAgIFwibGlkXCI6IFwiMjU5NDg5NTc2MDA1ODc3OjkyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lTZzVhTUhFSTMweHJvR0dDMGdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFR0dCtGZnJaMWdRTXFWRExrT3h3SXFGaUl2N3l3dmhNOE9UWHorZ2QxOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoeWNTTkI0TWRmckxKZ3V2YU9aRFp3SzZERG9vazZmTWpQVktaOEtrcWhSTXkvZktUNjJrV2RjQXkwdEpsS3NPOVNjMnQxcEYxOEs2MWk1TzloUGpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQSUVjOUJETWl4aGFLSm0reU11MWEyYzJiNW1OZnBRa3RhSzJ5QmVTSmNVM3ZpSllmeG9yOW9IVnIzdEVXaEFwT2JoNHI1YUY4S0lCMGtlRUxJbU9pdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzE3ODI2MjY6OTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDA5Mjk3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlFzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCUXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoWEQrUmtlMi9QM21KeWl1YkFzVG1oMUFEM05aTGZSWmNQSnFoWFVXNHE0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTQxMDczOTYsXCJjdXJyZW50SW5kZXhcIjoyMSxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
