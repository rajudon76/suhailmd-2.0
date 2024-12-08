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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_09_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgNSxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInk5eUk4b0NzOXdzZXdsanRXc0w0Y09vTi96QnRvWDdha3d4Z2ExNzlOZFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzEwNDY5NTQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMjFDQkYyREQzNkNEQjg4OEUwOUE0NkYyNTA0MkMwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2MjM3NDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFNnY3pDMDFSbE9FNmJQLXNDRGpWQVwiLFxuICBcInBob25lSWRcIjogXCIwZmNhODRhZi1iM2JmLTQ4YmItYmNhOS0xYmI0YzkxNDllYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMjA1LFxuICAgICAgMTk4LFxuICAgICAgMTMxLFxuICAgICAgMTk2LFxuICAgICAgMTcxLFxuICAgICAgMTI1LFxuICAgICAgNTIsXG4gICAgICAyMzcsXG4gICAgICAyNCxcbiAgICAgIDE0MSxcbiAgICAgIDE0OCxcbiAgICAgIDE1NSxcbiAgICAgIDIxMyxcbiAgICAgIDYsXG4gICAgICAyMTAsXG4gICAgICAyNyxcbiAgICAgIDEwLFxuICAgICAgMTk5LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDUyLFxuICAgICAgMTg4LFxuICAgICAgMTc3LFxuICAgICAgOTQsXG4gICAgICAxMDYsXG4gICAgICA3NSxcbiAgICAgIDE2NCxcbiAgICAgIDQxLFxuICAgICAgMTMxLFxuICAgICAgMTcyLFxuICAgICAgMTU2LFxuICAgICAgNzIsXG4gICAgICA5OCxcbiAgICAgIDE5MixcbiAgICAgIDE2LFxuICAgICAgOTUsXG4gICAgICAyNTUsXG4gICAgICAyNixcbiAgICAgIDExOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDS0RISFJFNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzEwNDY5NTQ4OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzI5NTAyODAwMDM1ODc6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpwK3FzQ0VMbi8wN29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2Tyt3dVhxVnJmRk1pMmZoT1NDVlVtOE41VlBIUlp3T1JMRWlsV2hqb3pVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjNBdFJ3bENJYS9CT0pBUGZSdkJScEdlZHVaL0ZhbVViUUEyZnFiVU5nU3ZxeGRVZFcrU2l0SWQweWltTmYwT1pIK21Ia2hLREVneElsS0lRWURhcERRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInI3enlRSUJDWjlUczRBQm1haUpRTHNVKy95eER0MHZyRFM2dDVLVWZRY2xVNWpIRDA2OWp6THJkZUNVbUV2N0gxenloUTZhNXhSczVRYnJUVDhmeEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxMDQ2OTU0ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzYyMzc0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdYTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1hOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUmZIdGJmMmJtWW9POFdLblQ2U3UvbFh4ZHQvdVFnRkJCMzJ6WDExNXhzZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjkwNjA3NDQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYyMzc0NTUzMVwifSIKfQ=="  // PUT your SESSION_ID 


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
