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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923310469548";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_04_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY3LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICA1OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDg4LFxuICAgICAgICAxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOCxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ3FvUlNrLzJBTDNDbjR4NUp5dTlGTmplQ3FVc0ViZHdhbnhycmY0R0xhTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ5NkJBNTY4Mjc5NkY3Mjk1REM1OENBQzQwMTEzREZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY2NjYzOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI0MDgwNjIxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTc3RERBRkM5QkZBNzlEOThGQTE5NkM4MzMwMzU2MThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNjY2NjM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjQwODA2MjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRjQ2QjM4QUU4REE4N0ZCNDMzNjZBODVDNDgxMTU4MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM2NjY2NDNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSURnWEM5SFhUdktqOWdaOWpVckduZ1wiLFxuICBcInBob25lSWRcIjogXCJmYWY2OTQwYS1jMmY0LTQ2N2YtYjg3OC0xY2M0M2I2MTJhNzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAxMjcsXG4gICAgICAxNzIsXG4gICAgICAyNDIsXG4gICAgICAyMTYsXG4gICAgICA4NixcbiAgICAgIDIzNSxcbiAgICAgIDk4LFxuICAgICAgMjU0LFxuICAgICAgMTI5LFxuICAgICAgOTgsXG4gICAgICAyMTksXG4gICAgICA4MSxcbiAgICAgIDE5OSxcbiAgICAgIDI0OCxcbiAgICAgIDgwLFxuICAgICAgMTEwLFxuICAgICAgODIsXG4gICAgICAyMjMsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMwLFxuICAgICAgMTA5LFxuICAgICAgMTM1LFxuICAgICAgMjU1LFxuICAgICAgMTI4LFxuICAgICAgMjI2LFxuICAgICAgMTk5LFxuICAgICAgODEsXG4gICAgICAxMzUsXG4gICAgICA5MSxcbiAgICAgIDEyOSxcbiAgICAgIDE2LFxuICAgICAgMTMsXG4gICAgICAxNzEsXG4gICAgICA2MCxcbiAgICAgIDcwLFxuICAgICAgNDYsXG4gICAgICA3MixcbiAgICAgIDE2NCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjQzRjdFVzJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmO8J2Qis2NzY3Njc2NzY3Nhc2FzYXht77ht77hrYQg4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6LigbTigbjigbVcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTo4OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUFgvZEVIRU1uTzFyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhqZXlzOWNwM2N6QTVNTGRvaXRzNzhQZnNTKzNvUXVIeTB6ZUtIMHl0eVE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYk16dzA4NFBvTXRNcVpPUy91amYwdnd4ZExVYW8yZXROcmIzVkkvaVBNL2ZQdUpVY1JXYm9valdjZDhXbVNFeVJpTDN2WWx6MzhUZlZ4Z0JaNGFOQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYTQyNkF0dlZPeUg5VjFEK09vWDIxWDd5WFc2VnpPT1BtTk1EazdSWjFVQ3JGZ2I4MWM3VWpjSEZCQy8yTk9rck10cGg1WDhXRDkxM2JLK0xsbmVlQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2NjY2MzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWUJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJZQi5qc29uIjogIntcImtleURhdGFcIjpcImRSeEVNUVQ1Q0dHa0t4K2plQWRZYkpYVENGbkxpaUZCUWpYZXYxc0FDVFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1MDk3NjcwNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNjY2NjM4OTk4XCJ9Igp9"  // PUT your SESSION_ID 


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
