const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const express = require('express')
const port = ['3038']
const { host, app } = require('sodaz.js');
let client = new Discord.Client();

host.connect('connect', () => 
app.ping('interval', '3000');
app.sendStatus(200);
});

host.disconnect('disconnect', () => {
app.shutdown().catch(console.error);
});

host.reconnect('reconnect', () => {
app.reconnect();
app.sendStatus('200');
}); // Reconnects App

