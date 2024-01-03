const autoReply = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "Hi 👋"
    }
    if(msg.match(/😒/gi)){
        R = "😒"
    }
    if(msg.match(/🥲/gi)){
        R = "🥲💔"
    }
    if(msg.match(/ane|අනේ|අනෙ/gi)){
        R = "🤭🤫😂"
    }
    if(msg.match(/yako|yaku|යකෝ|යකො/gi)){
        R = "😒💔"
    }
    if(msg.match(/na|නැ|නෑ/gi)){
        R = "🥲?"
    }
    if(msg.match(/ඔව්|ow /gi)){
        R = "😌"
    }
    if(msg.match(/ගියා|giya|echcharay|එච්චරයි/gi)){
        R = "😌..."
    }
    if(msg.match(/අඩෝ|ado/gi)){
        R = "😏?"
    }
    if(msg.match(/😁/gi)){
        R = "sendSticker:hii"
    }
    if(msg.match(/බල්ලො|ballo|bllo|බම්ලො/gi)){
        R = "🐶"
    }
    if(msg.match(/කව්ද|කවුද|kawd|who|kwd/gi)){
        R = "😎💀"
    }
    if(msg.match(/බය|baya/gi)){
        R = "😂"
    }
    if(msg.match(/mn|මං|ඕයි|oi/gi)){
        R = "😝"
    }
    if(msg.match(/gm|morning/gi)){
        R = `🎤morning🌸 be blessed😊🙏...😃`
    }
    if(msg.match(/😂/gi)){
        R = `😒 👀`
    }
    if(msg.match(/gn|night|නයිට්/gi)){
        R = "🌚have a blessed night👻👻"
    }if(msg.match(/nikan|නිකං|නිකම්/gi)){
        R = "🤫."
    }
    if(msg.match(/lamayo|ළමයෝ|ලමයෝ/gi)){
        R = "☺️❤️"
    }
    if(msg.match(/දෙන්න|දාන්න|dahn|dapan|dapn|දාපං|දීපං|දීපන්|dipn|dipan|dahn/gi)){
        R = "😏..."
    }
    if(msg.match(/plala|ply|පල|පලෑ/gi)){
        R = "😏"
    }
    if(msg.match(/කාලද|kalad/gi)){
        R = "🥲"
    }
    if(msg.match(/telegram|ටෙලි/gi)){
        R = "Telegram Group එකට එන්න😌\nt.me/+RMAUq3inzkphM2U9"
    }
    if(msg.match(/whatsapp|වට්සැප්|phon|‌පෝන්/gi)){
        R = "sendSticker:phonehate"
    }
    if(msg.match(/hehe|he he|හේහේ/gi)){
        R = "sendSticker:hehe"
    }
    if(msg.match(/❤️/gi)){
        R = "sendSticker:heart"
    }
    if(msg.match(/😒|hm|හ්ම්|හුම්/gi)){
        R = "sendSticker:hmm"
    }
    if(msg.match(/amo|ammo|අමෝ/gi)){
        R = "sendSticker:amo"
    }
    if(msg.match(/🤣/gi)){
        R = "sendSticker:smile"
    }
    if(msg.match(/mk/gi)){
        R = "🥲"
    }
    if(msg.match(/🙂/gi)){
        R = "🙂💔"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "sendAudio:110"
    }
    if(msg.match(/😌/gi)){
        R = "sendAudio:111"
    }
    if(msg.match(/🤣|😂😂/gi)){
        R = "sendAudio:112"
    }
    if(msg.match(/😒/gi)){
        R = "sendAudio:113"
    }
    if(msg.match(/balla|bll|pko/gi)){
        R = "sendAudio:114"
    }
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    if(msg.match(/palayan|plyn|පල/gi)){
        R = "sendAudio:116"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
