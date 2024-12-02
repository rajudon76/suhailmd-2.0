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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_22_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDExLFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxMzksXG4gICAgICAgIDIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY5LFxuICAgICAgICA2MixcbiAgICAgICAgMjI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI4LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicENBdXQ3R2tRMTNiT0NrU2NFdlorQzZYT0tWSUZPbytQb2JCMlBVSjBNND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzIzZnR0MWdUYWVzY2NuUHA2QnRDZ1wiLFxuICBcInBob25lSWRcIjogXCI3MDBkNDM0Mi04ZWI0LTRlZDEtYWE3ZC0wYzY5ZGRjMmNjNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY1LFxuICAgICAgNCxcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICAxMzAsXG4gICAgICA2MCxcbiAgICAgIDkxLFxuICAgICAgNjcsXG4gICAgICAxMjEsXG4gICAgICAyMSxcbiAgICAgIDIyOSxcbiAgICAgIDgwLFxuICAgICAgMjU1LFxuICAgICAgMyxcbiAgICAgIDE2MyxcbiAgICAgIDIzLFxuICAgICAgMTE3LFxuICAgICAgMjMsXG4gICAgICAyMDQsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDQwLFxuICAgICAgMzEsXG4gICAgICA1NSxcbiAgICAgIDEzLFxuICAgICAgMTczLFxuICAgICAgNDAsXG4gICAgICAyMzgsXG4gICAgICAxOTMsXG4gICAgICAxOTYsXG4gICAgICAxOTEsXG4gICAgICAxNjYsXG4gICAgICAyNTEsXG4gICAgICA3NyxcbiAgICAgIDY0LFxuICAgICAgMjIwLFxuICAgICAgMTIwLFxuICAgICAgMjcsXG4gICAgICAyMjgsXG4gICAgICAyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKWjdBSzIxUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZjvCdkIrNjc2NzY3Njc2NzYXNhc2F4be+4be+4a2EIOKCisy24bek4oKJzLbNpeKCgsy24bee4oKDzLbNpOKCgsy24beh4oKEzLbNreKCgMy2zLbhqrPigojMtuG3nOKCgMy2zaXigobMtuG3nuKCgsy24bee4oKBzLbNpOKCgMy24bei4oG04oG44oG1XCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6ODZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTdVMG9JSEVQM290cm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNcTM3SjczNXFnNTJUVi9QWURKYms1SGc0ZHBsKzA5ZmpUbEZERTIyU3l3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJjbW4zZEZDZ1RwdThOTXF5dG9yWDFvL1NWamZHTnJuNmxzMklmbUFSTmVNUXA4dDduaWJwZnM2bWhKQ0piS3JFUGFMTXNWOGd5ckQzTHJNSFA0NEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdNNU9teG5WOWNVQStoYlF4VkxieUdmbjRmN1RwdHRmeUF0NXJ5bzdUVkRQR2c5WllJeXNneDVTYk1scVpqc0I0VTYrdWordDNidFVtRDhSMStDL0JnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMTQ1NzMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGZUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZlQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiVWRwdFNJaEZZdDl2VmVjazdFbUhRWm1DeFR3bjBDTi8rcStENk5rRWZzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4ODQ1OTY3NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
