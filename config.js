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


global.devs = "923295112243" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923295112243";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923295112243";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_26_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICAzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJZQ2xaeUMyN2tDcUF3SFgzN2dIOFhRbW01M0ZZalpjUmJlK043QTlKcUlNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrSXFuX25ERlJKS1VKLS12RlE2Z1dnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5MzRmYTNhLTYzNjEtNGQ5MS05MTkzLTYzYTFjMzgzOTdjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDYsXG4gICAgICA2MixcbiAgICAgIDE5MixcbiAgICAgIDQzLFxuICAgICAgNzYsXG4gICAgICAxNTksXG4gICAgICAxNDIsXG4gICAgICAxODAsXG4gICAgICAxNzQsXG4gICAgICA1MixcbiAgICAgIDE3MSxcbiAgICAgIDI0MixcbiAgICAgIDE5NCxcbiAgICAgIDIzMyxcbiAgICAgIDIwNCxcbiAgICAgIDE1MyxcbiAgICAgIDI1NSxcbiAgICAgIDE1OSxcbiAgICAgIDUzLFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDE3OCxcbiAgICAgIDE5NCxcbiAgICAgIDg2LFxuICAgICAgNTYsXG4gICAgICAxNTEsXG4gICAgICAzLFxuICAgICAgMjE0LFxuICAgICAgMTk4LFxuICAgICAgNzIsXG4gICAgICAzOCxcbiAgICAgIDIyMSxcbiAgICAgIDI1NCxcbiAgICAgIDg2LFxuICAgICAgMTg0LFxuICAgICAgMjQ4LFxuICAgICAgMjQwLFxuICAgICAgOTQsXG4gICAgICAyMzksXG4gICAgICAxNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzRKOUtETTZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI5NTExMjI0Mzo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUNCmxqfOiVDOmyAzXCIsXG4gICAgXCJsaWRcIjogXCIxODU4MDU4MjE3ODkxNTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lIT2lyd0ZFUDZuMnJzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlFWam5HZ0VkZlpabkZpSit0RzdNQUhTelVqbXlkMkliUFNBTEovMjlIND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsN2JQajBTNGtjVDNJWWRQZ3pMaSsvTVBlWHYvNjA0UktocnM2d1ZVSGM4SmRGNHVmUkJGN0FBTXp2WXZVUnJuK2pwV2ZaQklLcE96MGF6eXM2LzZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDLzhnV1lTS2hrbDBmemdJV1A5QXdUUWhvaisxcWxSQVpEbVZ4RkFyRUVHZ05wcFFVUHZaTXVaeEsrTVh5Y2wrTVZhaVlVWU45ZmRjZkZaQ1EyOHpqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyOTUxMTIyNDM6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgyNDM4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlaNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVo0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiQnRJQ245Tzc2eC8yS3AzODZoMGo2elZjSWd5Z3BxbmdrdC84cEwvbmxrcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDY4MTgwMjI1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUyMTU5NzQzMTVcIn0iCn0="  // PUT your SESSION_ID 


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
