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


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314927710";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_31_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICA2OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3LFxuICAgICAgICAzNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTksXG4gICAgICAgIDkxLFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICA1MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAzNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9QL05HbjVwM3FESlhqUVpsQU4rT2RzYmExQ1N5UkwxcFJFWFZ2TnF1alU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklrZ2FrMzFUVHRLZWVYSnBlZDl4QmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWJjZmU5M2QtMzY1Yy00NDM1LWEyNTMtMmU2YTgzZjkzOWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMTg4LFxuICAgICAgNzUsXG4gICAgICAxNTQsXG4gICAgICAxMDAsXG4gICAgICA1LFxuICAgICAgMTYsXG4gICAgICAxMjgsXG4gICAgICAxMTQsXG4gICAgICAyMzIsXG4gICAgICA5NCxcbiAgICAgIDE4NSxcbiAgICAgIDU3LFxuICAgICAgNzMsXG4gICAgICAxOCxcbiAgICAgIDE4LFxuICAgICAgMTMxLFxuICAgICAgMTE5LFxuICAgICAgMzMsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMzEsXG4gICAgICAyOCxcbiAgICAgIDIxNixcbiAgICAgIDY5LFxuICAgICAgMjQsXG4gICAgICAyNyxcbiAgICAgIDk3LFxuICAgICAgMzAsXG4gICAgICAxODksXG4gICAgICAxMDUsXG4gICAgICAxMjQsXG4gICAgICAxMDcsXG4gICAgICAxMzQsXG4gICAgICAxODgsXG4gICAgICA2NyxcbiAgICAgIDIwMixcbiAgICAgIDYxLFxuICAgICAgMTc2LFxuICAgICAgMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNUYyRVNDMjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo4N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCKzY3Njc2NzY3Njc2FzYXNheG3vuG3vuGthCDigorMtuG3pOKCicy2zaXigoLMtuG3nuKCg8y2zaTigoLMtuG3oeKChMy2za3igoDMtsy24aqz4oKIzLbht5zigoDMts2l4oKGzLbht57igoLMtuG3nuKCgcy2zaTigoDMtuG3ouKBtOKBuOKBtVwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003UHY4TUZFS0dYd2JvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlBwdmdpQmM4QW51Uk5UWTU5bUpkVXBpVlVyZ1BINnEvMU9tZys1WDAyOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBWGp0NUR6K1hmai93K3oxS1pLallNYlIyRFZTSzlvdWVEYVZFY0E2d1dha2NmVjd2V0lPOFZRdmFpVVNzN28rZkJmV0NzdCszRnRPM3NMVDRTQlBEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtTnNCZmh2VndkNHpMckdzL2FCSGNCYW0yd3hHQzZrdDI3NjNYZ01NOTF0WXkvMmh5bW9ENkJHdVNkUUVKbjVrS2Z4UWM5U1NGcTJsaDdTOGpncXhqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzMTU0OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTE1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlMTS5qc29uIjogIntcImtleURhdGFcIjpcIjI3QldFdFVvb2xLcisxbkNhOGhUdHpSemFqZU9hQU5rZXRxbFZEVFFZZzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ4MzcyODg0NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzMzE1NDk0NTQzXCJ9Igp9"  // PUT your SESSION_ID 


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
