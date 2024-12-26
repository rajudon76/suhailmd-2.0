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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_17_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc5LFxuICAgICAgICAxODEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNPdk9hcWd2U0JmYjB1Ymc0TjFlaDFBZ0w3RWVWamdJQW5lSmRYanRyU2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjk1MTEyMjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4MkJBN0MxN0ZCMkJBQTQ2NUY1NDhDMDY5QzQ4MDRCMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyMTU0NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyOTUxMTIyNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk0ODlGODdBN0E5QjI3RUZCMUVEMEMxQjdDMjdGMkM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTIxNTQ1M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJReWN2ZlZ2QVNyRzRtanM5SE5GakJnXCIsXG4gIFwicGhvbmVJZFwiOiBcImViMDAxNWU3LTZiNmYtNGZkZi04NTg1LTFlZDQ1YjdkMmE5ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDE3OCxcbiAgICAgIDkyLFxuICAgICAgMTk4LFxuICAgICAgMjM2LFxuICAgICAgNTcsXG4gICAgICAxMDQsXG4gICAgICAxNjksXG4gICAgICAyMyxcbiAgICAgIDE5NSxcbiAgICAgIDEyMCxcbiAgICAgIDExMixcbiAgICAgIDEzLFxuICAgICAgMjQ5LFxuICAgICAgMTUsXG4gICAgICAzOSxcbiAgICAgIDE1OCxcbiAgICAgIDIxMSxcbiAgICAgIDkyLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICAyNTQsXG4gICAgICAyNixcbiAgICAgIDExMSxcbiAgICAgIDU0LFxuICAgICAgMTk3LFxuICAgICAgMTQyLFxuICAgICAgNjUsXG4gICAgICAxNzYsXG4gICAgICA4MCxcbiAgICAgIDQzLFxuICAgICAgMTMxLFxuICAgICAgMTQ1LFxuICAgICAgMzMsXG4gICAgICAyMzUsXG4gICAgICAxNTAsXG4gICAgICAxMSxcbiAgICAgIDIwMSxcbiAgICAgIDEwMCxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RDZFOVFKR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjk1MTEyMjQzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJQ0KbGp86JUM6bIDNcIixcbiAgICBcImxpZFwiOiBcIjE4NTgwNTgyMTc4OTE1OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUhPaXJ3RkVOV1N0YnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmUVZqbkdnRWRmWlpuRmlKK3RHN01BSFN6VWpteWQySWJQU0FMSi8yOUg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhuZjRwbzJydWs3YlptS1R5YzdrUjJWMGpVQmtTK2c5N0JnWlVPbWNVUmJyVi9pVmExcUo5K1VpSlVYM3p0MzhEak9YZEwrSTE2YjBNajRydU5EL0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRFRDVOeHlZVk5uV3pHMVdXckRZNy83TjNCcVRsWG93eWhrN3BHRnN0N2VlTERhcTRrNkdKL3gyd2F2MlJ1dk5KV1RnK1hicTY4NENGc0VTRDczUUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NTExMjI0MzozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1MjE1NDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSVozXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJWjMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4ZnV6cEZzY0RUOEFQMUNoWDllZnJBVjdrdHlxd0RDbThmc3lhbklwZHZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NjgxODAyMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNTIxNTQ1MzU4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
