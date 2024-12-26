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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923243157605";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_56_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTksXG4gICAgICAgIDkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg1LFxuICAgICAgICA0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSk5va0FnMlhvSTNXbUx6MFh3MW44WHV6Yk42ZHRjeHp2dnE4WDlBLzMxUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSjJFZm5hV2RUSE9Ka2w4eWFxUkFrZ1wiLFxuICBcInBob25lSWRcIjogXCJmMTcwMzZhYy1iZDBkLTRmNTAtYjIzMC05ZGRkZDcyODA5ZTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICA4OSxcbiAgICAgIDE1MixcbiAgICAgIDMsXG4gICAgICA1NyxcbiAgICAgIDE0MixcbiAgICAgIDQ3LFxuICAgICAgMTczLFxuICAgICAgMTg4LFxuICAgICAgMTkwLFxuICAgICAgMjQzLFxuICAgICAgNixcbiAgICAgIDIyMixcbiAgICAgIDEyNixcbiAgICAgIDEzLFxuICAgICAgMzMsXG4gICAgICA4NCxcbiAgICAgIDE3NSxcbiAgICAgIDE3NCxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxMzMsXG4gICAgICA5NSxcbiAgICAgIDIxMixcbiAgICAgIDEyOSxcbiAgICAgIDE5MixcbiAgICAgIDQ0LFxuICAgICAgMTExLFxuICAgICAgMjQyLFxuICAgICAgMjQzLFxuICAgICAgNDMsXG4gICAgICA2MSxcbiAgICAgIDIyMixcbiAgICAgIDIxOCxcbiAgICAgIDEwOCxcbiAgICAgIDI0LFxuICAgICAgOTgsXG4gICAgICAyMjIsXG4gICAgICAyMDEsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVJTWTFOMzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCKzY3Njc2NzY3Njc2FzYXNheG3vuG3vuGthCDigorMtuG3pOKCicy2zaXigoLMtuG3nuKCg8y2zaTigoLMtuG3oeKChMy2za3igoDMtsy24aqz4oKIzLbht5zigoDMts2l4oKGzLbht57igoLMtuG3nuKCgcy2zaTigoDMtuG3ouKBtOKBuOKBtVwiLFxuICAgIFwibGlkXCI6IFwiMTk3MjQyNTE0MzM3OTkxOjk3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00ya3Yvb0RFTWVuczdzR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVGhqWmVQTlZHSXhIQnY4WE9wZCt4bFBMeHdESmRweUZPMThNV3k0bEJSUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrelpCalJrMG1tN3g5WlNROFJiNEJ0SE9OanFaaldMa2JrVEUralhnN0NFQnlQcERUUkpRZjJHODVHQXpTWXpmUmw2a2h1aXYraXVRN2c1cnNGeXVDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPWXJEbThxSnpBR2d5SXg0MlJHc3FkelRMRzRjcDZFRTAxUFBmT3NPOWZEMURhcWVKQTU2WnNyS0ljNU9RVVlsS0ZDeWRsbE5TVTl2ci91dmk1bmRoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDA4MDYyMTA6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUxODUzNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJZWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUllai5qc29uIjogIntcImtleURhdGFcIjpcInFKSitYM3ZQOWhFZXNaNUdXU3Jqc0ZRR3RzcFpZNzJjWVhPSkhDaStpMnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA2MjE5NTc4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM1MTgzNTUzOTUxXCJ9Igp9"  // PUT your SESSION_ID 


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
