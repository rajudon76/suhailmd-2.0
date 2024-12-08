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


global.devs = "923052355287" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923310469548";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923052355287";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_53_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODUsXG4gICAgICAgIDM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjg1WkxNWlNzZEFFTUs5Vk9tQnYvcU5pbzNWWHREWkpoZSt4NzNjREFiWmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFJejVZLVctUlUtVlNiYUhTcW5GR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmZhYmQyY2EtYzRlNS00NzExLWI3NDItNDM1NDA0M2E5ODI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjMzLFxuICAgICAgODksXG4gICAgICAxMTQsXG4gICAgICAxMTIsXG4gICAgICA0NyxcbiAgICAgIDcxLFxuICAgICAgNzQsXG4gICAgICAyMDYsXG4gICAgICA5MyxcbiAgICAgIDExMyxcbiAgICAgIDEyMSxcbiAgICAgIDIwNixcbiAgICAgIDUzLFxuICAgICAgMTk3LFxuICAgICAgMjUwLFxuICAgICAgNTksXG4gICAgICAxNDQsXG4gICAgICA5NSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyOSxcbiAgICAgIDY5LFxuICAgICAgMTIwLFxuICAgICAgMTU2LFxuICAgICAgMjMzLFxuICAgICAgMTEwLFxuICAgICAgMjAxLFxuICAgICAgMTMyLFxuICAgICAgNDAsXG4gICAgICAzMCxcbiAgICAgIDE5NixcbiAgICAgIDE1LFxuICAgICAgMTUzLFxuICAgICAgMTk5LFxuICAgICAgMjgsXG4gICAgICAxMzEsXG4gICAgICAyNTMsXG4gICAgICA1NSxcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDSDhFMlg5Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDUyMzU1Mjg3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyMjk3NDA0MDUzMTEzNDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zOWh0Z0NFS3JaMWJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRncySGYyV2pEZFhCYlB1NEpZcHZDbHArK1pzUURvV0RPdWxNZnhGYWNuZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2bUxRUWJXMmNCQ1pGTm5CREVwUDVwR2U2ZThUTXkwL2srMTdHZHJJbFNydjZTVGtqRXFnL2NGQkFXOFpBeFlydGhUNElibG14NDRzMDBFdHVjSEVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxbmNGOVk3NkxTay9BbEppWURSUVNzc0xQdVd5MEVrSGVSR1RxNTA4dVFXcHVkeDd6VVhxRnRYMlNmdlkvU3ZmbGxBZm9WQXRNUGJuSUxEWkMzdFhDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNTIzNTUyODc6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY1MTYzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZtZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRm1nLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUmx1Q2xpQ080NUtZWGRxV0JnNndBZ3pmM1dUZjJTRDAzSE93ZWluRUtOVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjE1MzQ3MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzY1MTYzMTU4MVwifSIKfQ=="  // PUT your SESSION_ID 


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
