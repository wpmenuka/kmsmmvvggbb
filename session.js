//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUk2Y3NsWFJ5OXhYM0xlOWQ5NllWa3pEdFZWbUFqOXoyZzk2WWZoUytGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1hYcGZVMkxwRVNFQkRlenFja2NjcWJITFJ5UDNPUjJvLytXRXJhY25STT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQXFkNjg0aXBuSUN5UHlJNzdaaGVMWnd2eUN5YlhYUEdnUmlPWmtPNFhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTTFPN2crbHB5bksxMjltZm05YUZ4VHJXUzFQaG9wSWtDcDYwbmMyUzEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFENFpYSXJrb2dWaEU5UFJBZCtlUlRwOHRXc1doODZCc214bjVCUU0za3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhKT2orUFM1V29ZNmo5eHlHenZkcTJlQnNsZHJiVHVpbFN1ZVJmRFBla1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZpNHUwYWZvMmpoOGgzVUs2d002emRDY0pMalBMbVNDR2dBYnJjTUQxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2JaZ2lMWmpCMEloOEtZdnJDS2Jkc0lzWmRvUTZhdG9TaEVZaHlNSkZ4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVyUW11TWxWaFc4L3pwT0kvRElqeUM3ckZzdmRZdUlESDNBbGp3UWpaVFRpbWZsWS9iemJEVGpKcTFqQnZ2cm03VHdNaWFNdGtGTnBKLy9vcXBFZWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiI4MHNpOGR4ME1xbGR1NGo5Nmw3ditXRzdSdzV3V1Noc1E5TjY2aTN3MG53PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRZGZ0azRZdlJYLWF0QnZMc3pGYXZ3IiwicGhvbmVJZCI6ImQ5NjQxN2IyLTRiNDEtNDg5NC04ZWFhLTEwZGIxZTE2NTcwYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2U2JLN3N3MFJ6bEVQbjlSaUZDd0JQUWs5bFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY090eVZlb3ZFd3UxckczMDczWmxZYnJCSnUwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTTFRFTDJGIiwibWUiOnsiaWQiOiI5NDc2ODUwNDcwMzo4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImttcyBtb3ZpZSIsImxpZCI6IjExMzU4NTE5MTY1MzQ1Njo4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnpDajdnRkVNV3hwc0lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVFV1WmNscEQwQ3RxbFQ5YXE1dFpCd3A3Y1ZkY0phdW5BVmkrQktOUStpWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ29rTTdycmtZZGZ0YWFTUG5XaUtDNis3Znh5ZmMrZnNLQkZNRGQwTVhiN04yYVRWV0ovYS9HNkRHZ3FXNWtyMG9YU1dNQXhLQm9PNngxME1qNHpoQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNYN1NQbXE5bjB1bTA3SzBBTlFWZDdpR2hJTWoyRW9DbytSREpGOXFKeDJRbzRHQ3JaanlEd21NR3Z6SUp3WVp5VTlSelc0WHRkUFBaTEJDdXdtWWp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3Njg1MDQ3MDM6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVMUxtWEphUTlBcmFwVS9XcXViV1FjS2UzRlhYQ1dycHdGWXZnU2pVUG9tIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDk2NTM3MTQsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUEphIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94768504703",
  PASSWORD: 
    process.env.PASSWORD || "Menuka123#@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94741321391", "94768504703","94755616554", "94762862143","94729224013","94771273552","94787437303","94761731783","94762695098"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
