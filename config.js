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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_54_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODMsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg1LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI2LFxuICAgICAgICA3LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTczLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLbHRuWXdsTXVqVjMwOUs1cEcveVB3d01sVXVzSTRhVzZoZlE4aU92ZEZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MzE1NzYwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjNCQTQ2QjE4MUVCNEM2QzJFQzg3MjRCNUIwRTYxQjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MzYwODg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQzMTU3NjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QTBGMjIzNDNFNUZGMEMyQjYxNUU4RUNFRUY5MTFBNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzQzNjA4ODZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMzLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMzLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiejFHZWF3aFlRdC1CUXBsdmFpRG55UVwiLFxuICBcInBob25lSWRcIjogXCIwYmQyYTE3Ny05YmEwLTRlMmMtYjM5MS1kNDgyNzBhOTRkZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAxNDksXG4gICAgICAxNzUsXG4gICAgICA1MixcbiAgICAgIDM4LFxuICAgICAgMjMwLFxuICAgICAgMTkxLFxuICAgICAgMjI3LFxuICAgICAgMTAzLFxuICAgICAgMTM0LFxuICAgICAgMjQ4LFxuICAgICAgNTIsXG4gICAgICAyMDcsXG4gICAgICAyMSxcbiAgICAgIDE1OCxcbiAgICAgIDgwLFxuICAgICAgMTQsXG4gICAgICAxNSxcbiAgICAgIDI1NSxcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDE3OSxcbiAgICAgIDk3LFxuICAgICAgMTk2LFxuICAgICAgMTc4LFxuICAgICAgMCxcbiAgICAgIDE1OCxcbiAgICAgIDEwNyxcbiAgICAgIDE5MCxcbiAgICAgIDc5LFxuICAgICAgNzQsXG4gICAgICAyMCxcbiAgICAgIDgyLFxuICAgICAgMTE2LFxuICAgICAgMTgxLFxuICAgICAgMjU1LFxuICAgICAgMTUxLFxuICAgICAgNzQsXG4gICAgICAxMDYsXG4gICAgICA4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHTEg0QTU1TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQzMTU3NjA1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjE2NDA1ODA5MTU0Nzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tmWjJQc0ZFSzMrZ0xzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRUJlS1FiM3d0QWpwQkkySUJnUURmTVFkOTJoNHZyM0tSLzFjTnNsWjdsaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOWEkrM2lPRlBCNnZTakFZNTI2eEpVSGxtZ1NBclpVZWlySGYyV0FUbDVtcmRCRm56c3Z1S05mNTFyZERXbk1jdzk3blpEV0xqaHhjNjBrTkthd1dDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoS1Q2K3J0eVRsTHBHS0cwYzZwU3VCZzg0NkhCOERTWGMyK0dpZmpacEUwdE5GU3IrcXFnODBTNzB2U1JBRXJxUktkSGIxbkJ1UkU5cW5jYzBveGRBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDMxNTc2MDU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MzYwODgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTkhzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOSHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2emYxSHRrcEI2UlNoaE1qQ1Y0VnRUZkFGUFZISkU4MU9DQVE3RkdPZjZBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MDE1ODAxOTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDM2MDg4NjMwN1wifSIKfQ=="  // PUT your SESSION_ID 


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
