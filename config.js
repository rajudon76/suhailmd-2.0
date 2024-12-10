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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_59_12_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA0MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg2LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDk3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NixcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAzMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDI0LFxuICAgICAgICAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXk2YWE5cTBYZUsvUDM0MEpaazNGaXp2NnR5MmJhTmZFSzQ5a2loZDdKcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDMxNTc2MDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE3QkZEMDRDQzM1NDVEMzM3MzM4RTIzRjQ3MzIxRjVCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzgzNTU5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MzE1NzYwNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTJFMDg1NDVDREE1OUMzQzFENDRFOTA5NUI1OEU5RjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzODM1NTkyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNUc1ZIcVU2UkpPa3llZkV2QVNmaUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjg1NzlkNjEtNGVlNy00Y2YwLTkxZmQtY2ZkOGMyYjBhM2YzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDU5LFxuICAgICAgMTUyLFxuICAgICAgMjAwLFxuICAgICAgNzMsXG4gICAgICAyMTQsXG4gICAgICAxODgsXG4gICAgICAxNDksXG4gICAgICA2MyxcbiAgICAgIDIwMixcbiAgICAgIDUsXG4gICAgICAxMTIsXG4gICAgICA3NCxcbiAgICAgIDEzMCxcbiAgICAgIDI0OSxcbiAgICAgIDEyOCxcbiAgICAgIDE3NixcbiAgICAgIDU5LFxuICAgICAgOTUsXG4gICAgICAyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA5MCxcbiAgICAgIDg1LFxuICAgICAgOTMsXG4gICAgICAyNDAsXG4gICAgICAxMTEsXG4gICAgICAyMzMsXG4gICAgICA0NCxcbiAgICAgIDIzMyxcbiAgICAgIDEyNixcbiAgICAgIDIzNyxcbiAgICAgIDIwMCxcbiAgICAgIDI0OSxcbiAgICAgIDE2NixcbiAgICAgIDE3NSxcbiAgICAgIDIyOCxcbiAgICAgIDE4NSxcbiAgICAgIDEzOSxcbiAgICAgIDIxMixcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTk1HMUY1V0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MzE1NzYwNTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzIxNjQwNTgwOTE1NDc6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQ0KbGp86JUM6bIO+4u+KVpsy1zLXMv+KVpOKUgCDSiX7igKJcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYloyUHNGRU1QMjRMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVCZUtRYjN3dEFqcEJJMklCZ1FEZk1RZDkyaDR2cjNLUi8xY05zbFo3bGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia2MrN2J3RVZEUkNQeUVzTXYvZi9ZWlhNZ1R0K2l4WXdEWGxZc1RnZXB5V29UcE16WmpyVDFtUkkyU2crV1RwR0JaQkpBOGl2dEsxdWcrREtKYUxzQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieXliM3hQYW1Mc01xclpEdVVCL2FuMzIwMEtpcGdkS0hOMUlzczNySGc2VXFyQTh3K3dqUTFpQW00L29NK1hBbWNSdGtSUEhOaVJQY256R0lVbUFRQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQzMTU3NjA1OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzgzNTU5MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpLR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSktHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiazJXVkdoYWM1SUtjMEZGVlIySy9ST1NmYm5NT0ZuWjRGcUFybjFhMW16UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjAxNTgwMTk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM3NTI5MTQxNzBcIn0iCn0="  // PUT your SESSION_ID 


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
