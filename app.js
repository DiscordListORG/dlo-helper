const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Started.`);
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!german') {
        if (message.member.roles.has('523970406433030170')) {
            message.member.removeRole('523970406433030170').then(() => {
                message.channel.send(`:white_check_mark: Removed role, <@!${message.author.id}>`);
            });
        } else {
            message.member.addRole('523970406433030170').then(() => {
                message.channel.send(`:white_check_mark: Assigned role, <@!${message.author.id}>`);
            });
        }
    } else if (message.content.toLowerCase() === '!announcements') {
        if (message.member.roles.has('523972203772117012')) {
            message.member.removeRole('523972203772117012').then(() => {
                message.channel.send(`:white_check_mark: Removed role, <@!${message.author.id}>`);
            });
        } else {
            message.member.addRole('523972203772117012').then(() => {
                message.channel.send(`:white_check_mark: Assigned role, <@!${message.author.id}>`);
            });
        }
    } else if (message.content.toLowerCase() === '!help') {
        message.channel.send('`!german` - Toggles your german role\n' +
                     '`!announcements` - Toggles your announcements role');
    }
});

client.login(config.token);