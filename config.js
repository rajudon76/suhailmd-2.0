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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_05_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDczLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgODEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICA3NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgODAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICA5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZk1lL3pLU0NNOUwzcG5tTndOc0w0WDB0T05UckZKckVCbTFJUUZndTJ2RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX0stcXJSVFRTVldHMGk5YXU1RnN6QVwiLFxuICBcInBob25lSWRcIjogXCJkM2JkNzI3OS01NmVlLTRhMGQtOTUyOC1kM2FiZmIyYWJiYjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICA4MSxcbiAgICAgIDI1MyxcbiAgICAgIDI0MCxcbiAgICAgIDQzLFxuICAgICAgMTYwLFxuICAgICAgMTEwLFxuICAgICAgMTk0LFxuICAgICAgMTUzLFxuICAgICAgMTkzLFxuICAgICAgNTAsXG4gICAgICAwLFxuICAgICAgMTU1LFxuICAgICAgNDUsXG4gICAgICAyNDIsXG4gICAgICAxNixcbiAgICAgIDI1MixcbiAgICAgIDE0NixcbiAgICAgIDExOSxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA3NyxcbiAgICAgIDE0MCxcbiAgICAgIDk4LFxuICAgICAgMjAxLFxuICAgICAgMTk5LFxuICAgICAgMzYsXG4gICAgICAzMSxcbiAgICAgIDE4MSxcbiAgICAgIDE4MyxcbiAgICAgIDI0MSxcbiAgICAgIDE0NCxcbiAgICAgIDkzLFxuICAgICAgMjQ4LFxuICAgICAgMTUwLFxuICAgICAgMTIxLFxuICAgICAgMjU1LFxuICAgICAgMjM5LFxuICAgICAgMjEyLFxuICAgICAgMTg2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRaUkRBRkJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDA4MDYyMTA6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmO8J2Qis2NzY3Njc2NzY3Nhc2FzYXht77ht77hrYQg4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6LigbTigbjigbVcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTo5NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeWt2L29ERVBESW43c0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRoalplUE5WR0l4SEJ2OFhPcGQreGxQTHh3REpkcHlGTzE4TVd5NGxCUlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSG1GM1crakw1cjl1NXFtTGxkdHBSMVE5ZXdzVDl1a1FvdHNzSisrQ1dOYTlaSTV5SVJTZ1RnNVpUR2hrYVJsQ0I0cCtiL3U0Vng0blk3alpnQUtBQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK2Q1T2M2cTZVdlo2clhvcEhQUi84YkdIa2U4Q2VtRVEvN3ZGRTJCeTRxakdNb3hnbi8vUURodU9PY3ZjakR5UW14U3NkejE1eFY4UDhiQUNwZ05ZaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODYxOTQwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSU50XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJTnQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwVFkzK3YrbWxrUFA1WjB3SnJseWVUaklrVlVSZG9rTjNnS0RRamNMMDFNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNjIxOTU3ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDQ0NzI0MTcwN1wifSIKfQ=="  // PUT your SESSION_ID 


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
