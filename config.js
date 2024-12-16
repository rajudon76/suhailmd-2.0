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


global.devs = "923290505302" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923290505302";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_23_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY1LFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDQsXG4gICAgICAgIDYwLFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMjE1LFxuICAgICAgICA4NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYUtrZEZWNkk2S2s0em5Kc2pMRFBnOFlXZUloWHhrc3BjaHFTbWxLMFFjND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTA1MDUzMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEQTU0NTk1MDk0OEM1MUFBOEU4NTMwNTREMDBEOThFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDM1NTQwOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MDUwNTMwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODg1REM1NzZFQTYwMERERUY2Q0U0QUQ3OTQwNUU4MTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MzU1NDA5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJiRXgzcFpTUjF1SGV2bWJQRGVUOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmNlMGEyYTMtNzE2MC00ZmZjLTk3OTMtMjM4ZjNmOGQzMTZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMTExLFxuICAgICAgMTI3LFxuICAgICAgMTEsXG4gICAgICAxMzcsXG4gICAgICAzNixcbiAgICAgIDgyLFxuICAgICAgMjUxLFxuICAgICAgMTYxLFxuICAgICAgMTA0LFxuICAgICAgMTcwLFxuICAgICAgMyxcbiAgICAgIDIxLFxuICAgICAgNjYsXG4gICAgICAxNjUsXG4gICAgICAxMTksXG4gICAgICA3NCxcbiAgICAgIDE5MyxcbiAgICAgIDU1LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOSxcbiAgICAgIDIwMCxcbiAgICAgIDE2NixcbiAgICAgIDE0NixcbiAgICAgIDExMixcbiAgICAgIDE5MyxcbiAgICAgIDIyNSxcbiAgICAgIDEzNCxcbiAgICAgIDE4OSxcbiAgICAgIDU2LFxuICAgICAgMjQ5LFxuICAgICAgMjQ1LFxuICAgICAgMjQsXG4gICAgICA2MixcbiAgICAgIDIyNyxcbiAgICAgIDEyLFxuICAgICAgMjI4LFxuICAgICAgMTk1LFxuICAgICAgODEsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVpXUVJGRzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5MDUwNTMwMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ4NzE5MTA0OTg1MjA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSaWF6IEFobWVkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEdidkljRkVNalRnTHNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHdjFXOVA5bjhua2V2MXNBSnVnTVRlc3VNejVLdGdWVjE3cm9IV1k2eERjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRGNjNUSHlRZTUxMzFTMnF5UnY1Y3ZVSlNUQ0pSWTZwR0tXNjQ0NWFIaFk5K1E0b0UrV2I2TlN5dys1NGJVamozdjZnWHY5azREM0wwT0t4OU96MEFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9jR21uRVl2VHBWNFZvL0d6KzRkUFNzc0NEcHRnZzgvMWZQVEE4c1hDOGRqMWoybTl2MXVYbHhXWkVmQkdkdXMrajVYYndpN1UwSkJyVHNRWFNCc2d3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5MDUwNTMwMjozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzNTU0MDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCczhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJzOC5qc29uIjogIntcImtleURhdGFcIjpcIlVSNjhJbDNuQTNXcE1KSUtRd1FUUEx2anBieWhBYkNWU2ErQ3RYdWVwbTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1Nzg0Mzg4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0MzU1NDA5MzkwXCJ9Igp9"  // PUT your SESSION_ID 


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
