module.exports.config = {
 name: "hot40",
 version: "1.0.0",
 hasPermssion: 2,
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "islamic video",
 commandCategory: "admin",
 usages: "random video",
 cooldowns: 5,
 dependencies: {
 request: '',
 "fs-extra": '',
 axios: ''
 }
};

module.exports.run = async function({ api, event }) {
 const request = global.nodemodule["request"];
 const fs = global.nodemodule["fs-extra"];
var videoLinks = [
"https://i.imgur.com/kJ0qwYs.mp4",
"https://i.imgur.com/NPg1jod.mp4",
"https://i.imgur.com/VNiG7dI.mp4",
"https://i.imgur.com/fLHm01a.mp4",
"https://i.imgur.com/Ylxpcr8.mp4",
"https://i.imgur.com/Ojf7mm7.mp4",
"https://i.imgur.com/JA0BDyA.mp4",
"https://i.imgur.com/qSTPBSr.mp4",
"https://i.imgur.com/SH48X4S.mp4",
"https://i.imgur.com/rO3Xwzt.mp4",
"https://i.imgur.com/lTEXa8l.mp4",
"https://i.imgur.com/FzDdMqu.mp4",
"https://i.imgur.com/WFqAnuJ.mp4",
"https://i.imgur.com/3P5ULGU.mp4",
"https://i.imgur.com/aVPyuxE.mp4",
"https://i.imgur.com/qMgiqPp.mp4",
"https://i.imgur.com/yhSBK28.mp4",
"https://i.imgur.com/5aq6vO5.mp4",
"https://i.imgur.com/XwCuV00.mp4",
"https://i.imgur.com/3ThVtxz.mp4",
"https://i.imgur.com/Dw0A0GJ.mp4",
"https://i.imgur.com/RyF41jy.mp4",
"https://i.imgur.com/UL1j76Y.mp4",
"https://i.imgur.com/ymjFPo0.mp4",
"https://i.imgur.com/YThafke.mp4",
"https://i.imgur.com/GkT5rkJ.mp4",
"https://i.imgur.com/sP5Izpb.mp4",
"https://i.imgur.com/UL1j76Y.mp4"
 ];
 var callback = () => api.sendMessage({body:`🌻আচ্ছা একটা কথা বলো পাখি \nতোমার কি বউ নাই গার্লফ্রেন্ড ও নাই\n এসব ভিডিও কেন দেখো। \n\nজাহ দুষ্টু❤️‍🩹`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"));
 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
 };
