const WhatsAlexa = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'taurus', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: 'Im fine'  }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Im not ok'  }, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'Sorry bro, i cant tell you that'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' *ʜᴇʏ*\n\n         ᪥ *𝖨𝖭𝖥𝖮* ᪥\n\n☘︎ ɴᴀᴍᴇ  : ᴛᴀᴜʀᴜs     \n☘︎ sᴛᴀᴛᴇs : ᴘᴜʙʟɪᴄ\n☘︎ ᴛɪᴍᴇ   : ```' + plk_say + '```\n☘︎ ᴅᴀᴛᴇ : ```' + plk_here + '```\n☘︎ ᴘᴇʀғɪx : [ . ]\n\n         ᪥ *𝖢𝖱𝖤𝖠𝖳𝖮𝖱* ᪥\n\n☘︎ ᴍᴜʜᴀᴍᴍᴇᴅ\n\n          ᪥ *𝖳𝖧𝖠𝖭𝖪𝖲 𝖳𝖮* ᪥\n\nᴍᴜʜᴀᴍᴍᴇᴅ\n\n© 2021 ᴍᴜʜᴀᴍᴍᴇᴅ\n\nᴀʟʟ ʀɪɢʜᴛ ʀᴇsᴇʀᴠᴇᴅ\n',
          footerText: 'ʜᴏᴡ ᴀʀᴇ ʏᴏᴜ ʙʀᴏ_?',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
