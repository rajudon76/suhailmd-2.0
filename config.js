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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_44_12_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTgwLFxuICAgICAgICA0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICA4MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDc1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm5QMkRCVHM5bTZRbm1iellLVE9uT3ZZZmhPam1vV2ZNUVZSVFU0VXhDZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNDA4MDYyMTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI5REFEMDkwQzhBNkY3OUI0RUE0OTZDMkY3N0JDNDQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDI0MTQ0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI2M1QxNWN0Y1RqS1NWU09ZRlc5Q2p3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVjYmUzNGYxLTRkMDYtNDQ0My04MTI5LWQ3MzA5ODU3YzllY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNSxcbiAgICAgIDE1MSxcbiAgICAgIDI0MyxcbiAgICAgIDQ3LFxuICAgICAgOCxcbiAgICAgIDIzMCxcbiAgICAgIDE1MSxcbiAgICAgIDI1NSxcbiAgICAgIDEyLFxuICAgICAgMTE3LFxuICAgICAgNzYsXG4gICAgICAyNTQsXG4gICAgICAxMzUsXG4gICAgICAxODAsXG4gICAgICAyMjksXG4gICAgICAxNjIsXG4gICAgICAyMDYsXG4gICAgICA5LFxuICAgICAgNDAsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDE0MSxcbiAgICAgIDc0LFxuICAgICAgMjQxLFxuICAgICAgMTM2LFxuICAgICAgMTI3LFxuICAgICAgMTAyLFxuICAgICAgMTcwLFxuICAgICAgMTYyLFxuICAgICAgMzAsXG4gICAgICA1NCxcbiAgICAgIDcyLFxuICAgICAgMTksXG4gICAgICA5LFxuICAgICAgNDQsXG4gICAgICAyNTEsXG4gICAgICAxMjcsXG4gICAgICA0OSxcbiAgICAgIDEwNSxcbiAgICAgIDE4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWVFJHNFIyQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQwODA2MjEwOjkyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2ZjvCdkIrNjc2NzY3Njc2NzYXNhc2F4be+4be+4a2EIOKCisy24bek4oKJzLbNpeKCgsy24bee4oKDzLbNpOKCgsy24beh4oKEzLbNreKCgMy2zLbhqrPigojMtuG3nOKCgMy2zaXigobMtuG3nuKCgsy24bee4oKBzLbNpOKCgMy24bei4oG04oG44oG1XCIsXG4gICAgXCJsaWRcIjogXCIxOTcyNDI1MTQzMzc5OTE6OTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVRYL2RFSEVKL1orYm9HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYamV5czljcDNjekE1TUxkb2l0czc4UGZzUyszb1F1SHkwemVLSDB5dHlRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNrM2w2Nk0zeHMrNk8vTld4bFVVcnBvRFhYaytka0RhMS81QW0yd0Z2V3B4SWRuT0JPMXhUTGFYb0Qxc0t0NzRwZ0JWQ3ZXRE81cDVlNTE1U1Ntd0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1NT0l5K1VuVThWbUx4WXR5TC81azByRUNoQUdENHdzUTA2cVRYbGNiOGZTYTFTdFdzTkpIeStsWXQrY0o4RHN6QUlGaEd0L2hadjd5L3Y0WHZwcENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0MDgwNjIxMDo5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MjQxNDQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSk1zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKTXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2UEpHZGYyRnFkdnlWdXpyTktPSVc0WnBjcFZWSEhxUnlkNHpZbk5adlFvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTA5NzY3MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk3MDI1NjQxNVwifSIKfQ=="  // PUT your SESSION_ID 


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
