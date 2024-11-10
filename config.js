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


global.devs = "923310469548" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923310469548";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923310469548";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_04_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICA1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDY2LFxuICAgICAgICA4NyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiUVZRVTJzcmd3R3d2Tk1uKysrNEdsQnVaU0tKNHp2aWpLL25zQU5LdkJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoVWU2cWt5ZlFYNkxvOGpTQ1l5d0d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjY0ZTMzZjQzLTE5NWYtNDA0Ny1hYTc2LWYxODcwOTQxM2M1MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMzUsXG4gICAgICAyMTksXG4gICAgICAyMzUsXG4gICAgICA1MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3NyxcbiAgICAgIDE3MSxcbiAgICAgIDEzNSxcbiAgICAgIDExOSxcbiAgICAgIDEyMixcbiAgICAgIDE5MixcbiAgICAgIDE5MyxcbiAgICAgIDk0LFxuICAgICAgMjUyLFxuICAgICAgMzYsXG4gICAgICAxNzAsXG4gICAgICA1MixcbiAgICAgIDE1NSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICA4NixcbiAgICAgIDEzMCxcbiAgICAgIDIzOCxcbiAgICAgIDEwNixcbiAgICAgIDQwLFxuICAgICAgMjQ5LFxuICAgICAgMTE1LFxuICAgICAgMTM5LFxuICAgICAgMTIyLFxuICAgICAgMTc5LFxuICAgICAgMjEwLFxuICAgICAgMTg2LFxuICAgICAgMyxcbiAgICAgIDE5OSxcbiAgICAgIDYyLFxuICAgICAgMTU0LFxuICAgICAgOTIsXG4gICAgICA1MCxcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE4S0xOMk1ZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzMTA0Njk1NDg6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3Mjk1MDI4MDAwMzU4NzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMU014OWNHRVByNndya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRpc05tUnE1ZkJpYjNCZGthbjY3c2xIbit3bTU2V1JidXNQQlp0blZHZ0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNUlXRHJsMmNSOHJjMmErUzVWL0dpM2w1VTVld3VCajBsdldNRUhaSHBDS0xNUXBiZEU2blR4aE9KWDJDaE9FcTMwLzFsZUltS25rR2U0MzB5eTcwQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUVpVbnZra1pqelN1L0J4TUJpVjc0VlkzVzFRRmtHQ1BqTWdMMFRsVzVJVHZocmZkbm9WV0FSaXZiTUdCQUs4TzJrVGk1eGxKcmpxeHBLUzhncmRUQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzEwNDY5NTQ4OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNDc0ODZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
