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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUV2OFlGYTRRMTcrWnU3My9wbkNUYmVpKzdVMW4xc1ZVS09UNlNpb3FXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYnVsaGZDSjR4TEh4Y1B2OHFBdTI4VXU4N0k0V3JoM1BLZ2s2M2RwdUhtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SSs5QkNrTHdQMkxkaVlEVkdma0FiT1k0YXBUdHNaWmpRQ09ENkVTVDFjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPeXFqeHlOUXhPY1BUcHp4QWdpekF0TEFkSGkvbVVlcXJoSzR3MEQ5a2tvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNV3k2Y1R1Tk15Z25ycFM1QzhYTERPRnF5dm9pYnMyeG9QTnZ1aFV0VXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNhQ1lYbGtVYkN6dzFNQ05ydUwraHkyYm1uTXBoS1JHRWVqRnJibzRsRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09BbEhLQlozR2JwZkxNZHRwUGI5QmtSSDdCRUQ4RERERzJENFBpcHFHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9NKzlGU0psc1N0YUFGNUdmUkJBWFlIZlRhWExHcGhLdDFCMTdKVjlpOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpXRDd4bmR1am9DQWZwaCs2d2tRcEx4UUpkLzhwUkVtZ3FsV080RndjNTdDRkVDa1FqUys3Q1JpS1RpRmhJZWxEd05HcFovZGVNeGVDYzJsSktMaURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJOaGpJV3ZPYlA0em13aDBiVStXQkVRNVhlektXdFhYdVA2NG1tbUdML3hzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU0NjIwMDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU1RDA4Rjg5MzI3QjJDRjlERUI0NjBBOEVDODE3MEFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk4Nzk2NjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU0NjIwMDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY0NUI2RkEwRTE3N0QyQzgxNjU0Mzc0QkEwNzBBRDA4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk4Nzk2NjJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU0NjIwMDc5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE1MUQ3NDIwRjIwMDZBRjRCM0FBRERGQkNEQTVBQkI0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDk4Nzk2NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjhBOGNodGl2U3NDaXJWejVyWmZhelEiLCJwaG9uZUlkIjoiNGNmNzgxN2EtYTQwYS00YTEzLTk0ZWEtMjBlZWNkNzcyZThhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkszK2YyeW01QUNTdlZhNWV4UTgxUC9jdXFGYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDFZdWkwZVNLdVhHZ3FKZVBHaW9Hem9SMlhjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1A2dWNFQ0VPbVd0TUlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmhXbCs0aitRZW8xRDlhMVpVRzBXR3VFSHdGK3IvbnRtWHRWMGxzd0MzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoickMyMU5idFV2M25zdXJRb1VQOE5IZ3VUY0tQZVZ4MUljZnpTa0RCMjhYR3lFa3cyTGRMRUVhRGFqU2F2NEwyK1pDMFY5U2lib3hRTy9RUmZrOUVyQWc9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9KL21DTWcvcjcrMWszbmJQbDdzL000WGkxN0hNTnVqL3cvaE9uSUVCVzh0YVQzaXNkSjVxZHdJSVpLL3dQY3hiQXVjZm5pYXRzeE1yaEd6N1JURkR3PT0ifSwibWUiOnsiaWQiOiI5NDc1NDYyMDA3OToxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE3MDU1MzQ5NDQwNzIyOjFAbGlkIiwibmFtZSI6IkttcyBab25lIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0NjIwMDc5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU1lWcGZ1SS9rSHFOUS9XdFdWQnRGaHJoQjhCZnEvNTdabDdWZEpiTUF0LyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ5ODc5NjYwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzNOIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94754620079",
  PASSWORD: 
    process.env.PASSWORD || "Menuka123#@#",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94741321391", "94768504703","94755616554", "94762862143","94729224013","94771273552","94787437303","94761731783","94762695098"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
