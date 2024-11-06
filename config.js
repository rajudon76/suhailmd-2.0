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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_04_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA4NixcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICA2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAzNCxcbiAgICAgICAgNCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEMW9LQ08xV25BT3J3U2g2NWtSSTAyWGtFSDUyU1UzbWtEdmNwNitQdzU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlcXlKS0xQVFFtZWlUUHRpYzZJNjhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhYjFiZGY5LTU3ZDEtNGVhMi05OGNkLWI0NWM3Yzk2YzY4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNTgsXG4gICAgICAxMTMsXG4gICAgICA3NCxcbiAgICAgIDExNSxcbiAgICAgIDk4LFxuICAgICAgNDksXG4gICAgICA4OCxcbiAgICAgIDgwLFxuICAgICAgMTI5LFxuICAgICAgMjA1LFxuICAgICAgNDEsXG4gICAgICAxNDAsXG4gICAgICAxNzQsXG4gICAgICAyMDcsXG4gICAgICAxMTAsXG4gICAgICAyMTYsXG4gICAgICAxMzgsXG4gICAgICAyMTYsXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxODEsXG4gICAgICAzNSxcbiAgICAgIDM3LFxuICAgICAgMTUwLFxuICAgICAgMTY4LFxuICAgICAgNTEsXG4gICAgICAyNDYsXG4gICAgICAxOTQsXG4gICAgICAxNDUsXG4gICAgICAyMyxcbiAgICAgIDEwNCxcbiAgICAgIDc1LFxuICAgICAgMTMyLFxuICAgICAgMjUyLFxuICAgICAgMjA3LFxuICAgICAgNjIsXG4gICAgICA5OSxcbiAgICAgIDEzMyxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJETjNIQTIzQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi776M44SW5Y2E5YegIOWxseS4qOWMmtKcIDVcIixcbiAgICBcImxpZFwiOiBcIjI1OTQ4OTU3NjAwNTg3Nzo4MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU2c1YU1IRUtqZnJya0dHQ0VnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhUdHQrRmZyWjFnUU1xVkRMa094d0lxRmlJdjd5d3ZoTThPVFh6K2dkMTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL1Z0bWJoTWk1L0hQNitCbUdKVkpKSWJLdVJDeWZpUUNLSDVPbjdrZzJKSTZhY0pTeCtMb2YrU0NOQU5WcHoxQXVsTy9hbVNjRGhySmQrYU5UL01PQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGpQS05vbHdvRE1MaTM2OHM5MG9kYW9BNFVYb2ozdGlOcnZMeGNWR1B5Wmg3eVhXZDk4SzhwSmdHbkxDS2NlTFJXek4rSnNxTWVRMjRTUDZvOStrQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjgwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDkxNjI2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJRc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaFhEK1JrZTIvUDNtSnlpdWJBc1RtaDFBRDNOWkxmUlpjUEpxaFhVVzRxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU0MTA3Mzk2LFwiY3VycmVudEluZGV4XCI6MjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
