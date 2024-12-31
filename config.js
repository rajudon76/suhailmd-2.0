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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_12_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDUwLFxuICAgICAgICA4MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3bVlyS29FL2d6bUZJNHAzMDZjVTAwR1dQVnBjT2VQME83ZDdITzNCZWdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5MDUwNTMwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzBFMjQ2QkE4OTJGQzcwMDIzMzg2NjhFQTQzMkUxNjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NjQzNTI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjkwNTA1MzAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENTFCMDQ1OEM5NzZBNTY2RTNCN0YyNEFFMDJFNEU1RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzU2NDM1MjRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWXZnVlpYNlVRU21DdzFoaXdxSS10Z1wiLFxuICBcInBob25lSWRcIjogXCI0YzhjZmMxZi02ODk4LTQyMDItYjg5My0wYTBiYjFiMTQ3NjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTAsXG4gICAgICAyMyxcbiAgICAgIDU5LFxuICAgICAgMTUzLFxuICAgICAgNTgsXG4gICAgICAyMTQsXG4gICAgICAxNTgsXG4gICAgICA2NSxcbiAgICAgIDc1LFxuICAgICAgMjQzLFxuICAgICAgMTM0LFxuICAgICAgMTE4LFxuICAgICAgOTAsXG4gICAgICA0OSxcbiAgICAgIDE2NCxcbiAgICAgIDEzOCxcbiAgICAgIDE3NixcbiAgICAgIDI0NSxcbiAgICAgIDE2MSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICAyMzksXG4gICAgICA3MSxcbiAgICAgIDM1LFxuICAgICAgMTUwLFxuICAgICAgODAsXG4gICAgICAxNTAsXG4gICAgICAxMTIsXG4gICAgICAyMDMsXG4gICAgICAyMzUsXG4gICAgICAyNTEsXG4gICAgICAxOTQsXG4gICAgICA1MixcbiAgICAgIDI1MCxcbiAgICAgIDEyNCxcbiAgICAgIDE2MyxcbiAgICAgIDE5OSxcbiAgICAgIDIzNCxcbiAgICAgIDE5NSxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWFozVFc0MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjkwNTA1MzAyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDg3MTkxMDQ5ODUyMDo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJpYXogQWhtZWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0xrNTBIRVA2aXo3c0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitDeGt0UmVQbkg1eGFqNDF2cm1tQTZxRlF3MGUzL3lZNkl4V0NNeFErMjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZzJuSmF6cFI2dTcrMnZYa1FVUkp2ZlNRQ0w3ejNSc3JicnFoL1kvbDF1a3FJTWpvMlJ4OTBTcXl3bisyKzM5di93WVo3amlJZ3M4ZCt0VVpZeG9PREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWVxNnZVNzFJUFJUL3grYitRTWJJTDU0R3VSL1pSSjd1M0pJeFd0empnTXlseWVMemFzdXVYTTh0OGROVEowcTdCVTJSWmJwNjI3VEI3ZXlSVThDRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjkwNTA1MzAyOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTY0MzUyMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZUN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlQ3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibjlVSUpPSmlGcFR1THdUUzNIYUt0cEViSlBHYkxyWEJ3eGJHanI0VTdUMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQwMTc4MzM2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU2NDM1MjI2ODNcIn0iCn0="  // PUT your SESSION_ID 


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
