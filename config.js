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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_31_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIko4WktOVGI4NWptSldoNUZ1RlBpVnRmcmZIUTVJWFRXdlpJTzJma2diUFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVXUkhWWC1MU3o2ZnZ6dWRqWkFQYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGUwNTg4ZjItODcxYi00ZTlhLThlZmEtMTllZjIzYzllNDA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE4MCxcbiAgICAgIDE5MyxcbiAgICAgIDI0MyxcbiAgICAgIDIxMSxcbiAgICAgIDE5OSxcbiAgICAgIDE0NixcbiAgICAgIDEwNyxcbiAgICAgIDMsXG4gICAgICA2MixcbiAgICAgIDEyMSxcbiAgICAgIDIwNSxcbiAgICAgIDE4MyxcbiAgICAgIDcyLFxuICAgICAgMTAwLFxuICAgICAgNjYsXG4gICAgICAyMjcsXG4gICAgICA4OSxcbiAgICAgIDI0NSxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICA0OCxcbiAgICAgIDIwOCxcbiAgICAgIDIzNCxcbiAgICAgIDExNyxcbiAgICAgIDkzLFxuICAgICAgMjM0LFxuICAgICAgNzEsXG4gICAgICA0OCxcbiAgICAgIDEyOSxcbiAgICAgIDIxOSxcbiAgICAgIDU4LFxuICAgICAgMjE3LFxuICAgICAgMjAwLFxuICAgICAgMTU2LFxuICAgICAgNDAsXG4gICAgICA5NCxcbiAgICAgIDcyLFxuICAgICAgNTQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWU05FWVdCWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxNzgyNjI2OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi776M44SW5Y2E5YegIOWxseS4qOWMmtKcIDVcIixcbiAgICBcImxpZFwiOiBcIjI1OTQ4OTU3NjAwNTg3Nzo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU2c1YU1IRU42TTA3a0dHQ1FnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhUdHQrRmZyWjFnUU1xVkRMa094d0lxRmlJdjd5d3ZoTThPVFh6K2dkMTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieFZFbmt0b09pbDhqa09PVTEwNStCdml6K2dScE54Wmw2aGRaZzM3cGJxeWQxekM3M0tPeDJuRnYyUndWREcySVhhY1RucHVDYnVoS0dXQm10TXY0Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiKzZEdWhjN3BTNVdIUG14Q1FKTHpKRWZhZENLSS9MZ084d0JOUXpRNHNWSnJidDNPMm1obW5jQ3NSV1VSMlhucHFQN1BtaEdINXZObnZPY2dOd2pqZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxNzgyNjI2OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTUxMTkwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJRc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlFzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaFhEK1JrZTIvUDNtSnlpdWJBc1RtaDFBRDNOWkxmUlpjUEpxaFhVVzRxND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTU0MTA3Mzk2LFwiY3VycmVudEluZGV4XCI6MjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
