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


global.devs = "923222097630" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923310469548";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923222097630";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_59_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDYxLFxuICAgICAgICA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NixcbiAgICAgICAgMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjVqNzdaTThxb2ovVm9PN2hQdVd2azVoTm9sZSt2VFlwLy8rVmoxTnpDbEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjIyMDk3NjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3N0MyRDk4NUVBRTZGRTBFREFFMTk2OTc2RTIwM0RGM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2NDgzNjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMjIwOTc2MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU5RUU3QjQzRkMzQjExMkM0QThCMTIzMzFCQkYzMUFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY0ODM2NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0WEVicTFSaVJ2eVRydzVZRkVuenlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE2YzkzMzBlLTFlYjItNDQxYS05MGZkLWNlZGEzZmQ0Njc2Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAzMyxcbiAgICAgIDMxLFxuICAgICAgMTI2LFxuICAgICAgMjI5LFxuICAgICAgMTQ5LFxuICAgICAgNCxcbiAgICAgIDE2NixcbiAgICAgIDE5NyxcbiAgICAgIDE3OCxcbiAgICAgIDIwLFxuICAgICAgOTEsXG4gICAgICA2NCxcbiAgICAgIDE5NyxcbiAgICAgIDIzOSxcbiAgICAgIDUxLFxuICAgICAgNjgsXG4gICAgICAzMCxcbiAgICAgIDIyOCxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDEzMCxcbiAgICAgIDEyNSxcbiAgICAgIDkyLFxuICAgICAgNTksXG4gICAgICAxMjQsXG4gICAgICAxMjUsXG4gICAgICA4OSxcbiAgICAgIDEwNCxcbiAgICAgIDI0MyxcbiAgICAgIDE0MCxcbiAgICAgIDI0OSxcbiAgICAgIDQ3LFxuICAgICAgMjQxLFxuICAgICAgMjM1LFxuICAgICAgMjEyLFxuICAgICAgMTY3LFxuICAgICAgMjI5LFxuICAgICAgMjIyLFxuICAgICAgNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEpWMzFKMUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzIyMjA5NzYzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUmVtb3ZlIFlvdVwiLFxuICAgIFwibGlkXCI6IFwiMjc1ODMyMDI3MjU4ODgwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5HdTRBSEVPYS8xYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVNXU0eTg2TjVHNEFadzgzRVdlRXhrcXE3cUlzd1dzSjAwUXFVQ0dGZ1FnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZmeVhmbHFGL013bno5N1o1bkY3TkRHcDRyWkZmU3h5a0N4dVlWL2wrWmxLOXNhUzd2ekxqQndIVno4aDJOdDVaaU5EY2VFTmI3RVFhUTg5d3luSEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVFdU5ncmNwU0dKc3o0ZTZ1VTZvZjA5ZjNpblQ4S1ptWHVwR3NwY1l1cEQ5VGcxK3FycjRvcE9RN0N1L3B3Zm0rZjZ3SElRV1ZIRThlNCtxS2dJQmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzIyMjA5NzYzMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2NDgzNjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMQmxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxCbC5qc29uIjogIntcImtleURhdGFcIjpcImFyaHVTZHV2bjF0ODVnSmtXd3RTN0NrMkdZeG1SbzZLaFoyVFRma3Nyakk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4MDAyMzgxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjQ4MzYxODE5XCJ9Igp9"  // PUT your SESSION_ID 


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
