const Discord = require('discord.js');
const sparkclient = new Discord.Client();
//const ddiff = require('return-deep-diff');
const chalk = require('chalk');
//server info
var serverName = 'RecoilPvP';
var prefix = '+';
var website = 'https://www.recoilpvp.net/';
var store = 'https://store.recoilpvp.net/';
var ip = 'play.recoilpvp.net';
var twitter = 'Coming Soon!';
//channels
var welcomeChannel = '451844698089324546';
var logChannel = '458445116718448650';
var announcementChannel = '451841113448382465';
var ruleChannel = '459606687146573834'
//roles
var ownerRole = '';
//bot info
var creator = 'SaltySpark#1719';
var creationDate = 'unknown';
var botName = 'SkyMine Bot#5967';
const token = 'NDY2MzM2Njc5OTc2NzYzMzkz.DiasOQ.nZjMumcROERqyKga7K3d5lNRYgw';
//var primaryColor = ''


sparkclient.on('ready', () => {
    console.log(serverName+' Bot is now running')
})
// require('./sparkutil/eventLoader')(sparkclient);

// sparkclient.on('guildMemberUpdate', (oldMember, newMember) => {
//     console.log(ddiff(oldMember, newMember));
// });

sparkclient.on('guildBanAdd', (guild, user) => {
    sparkclient.channels.get('458445116718448650').send(`${user.username} was just banned from `+serverName)
});  

sparkclient.on('guildBanRemove', (guild, user) => {
    sparkclient.channels.get('458445116718448650').send(`${user.username} was just unbanned from `+serverName)
});  


sparkclient.on('guildMemberAdd', member => {
    sparkclient.channels.get(welcomeChannel).send(
        {embed: {
            title: '✦ Welcome! ✦',
            color: 4259801,
            description:`
            *${serverName} Bot*
            ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
            Welcome to **${member.guild.name}**, **${member}**
            ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
            ● Website » ${website}
            ● Store » ${store}
            ● IP » ${ip}
            ● Twitter » ${twitter}

            Type \`+help\` for additional information `,
            timestamp: new Date(),
            footer: {
                icon_url: sparkclient.user.avatarURL,
                text: serverName+` Bot • Created by ${creator}`
            }
        }});    
    

    member.addRole('454078889665495051')
    if(member.user.id == '427530949505581056') {
        member.addRole('454082932005404697')
    }

});

sparkclient.on('message', message => {
    

    
    if(message.author.bot) return;
    if(message.content.startsWith(prefix)){
//Everyone Commands
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const sparkcommand = args.shift().toLowerCase();
        
        if(sparkcommand == 'ping'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot Bot - PING ✦`,
                color: 4259801,
                description:`Pong! \`${Date.now() - message.createdTimestamp} ms\` `,
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }    
        else if(sparkcommand == 'forum' || sparkcommand == 'forums' || sparkcommand == 'website'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - Forums ✦`,
                color: 4259801,
                description:`Website » ${website}`,
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }
        else if(sparkcommand == 'twitter'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - Twitter ✦`,
                color: 4259801,
                description:`Twitter » ${twitter}`,
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }
        else if(sparkcommand == 'ip'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - ip ✦`,
                color: 4259801,
                description:`IP » ${ip}`,
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }
        else if(sparkcommand == 'rules'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - Rules ✦`,
                color: 4259801,
                description: 'You can find the rules in #459606687146573834, make sure to follow them all!',
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }
        else if(sparkcommand == 'help' || sparkcommand == 'commands') {
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - Help ✦`,
                color: 4259801,
                description:`Hey! I\'m ${serverName}\'s custom bot. Here is everything in what I can help you with:`,
                fields: [{
                    name: "Commands for Everyone!!!",
                    value: '`+help`\n`+twitter`\n`+ip`\n`+forum`\n`+ping`\n`+rules`\n`+membercount`'
                  },
                  {
                    name: 'Adminstrator commands',
                    value: '`+status (status)`,\n`+roleadd (Role Name) (Role Color)`,\n`+announce (message)`'
                  }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }
        else if(sparkcommand == 'membercount'){
            message.channel.send({embed: {
                title: `✦ ${serverName} Bot - Member Count ✦`,
                color: 4259801,
                description: message.guild.memberCount,
                timestamp: new Date(),
                footer: {
                    icon_url: sparkclient.user.avatarURL,
                    text: `${serverName} Bot • Created by ${creator}`
                }
            }});
        }

//Admin Commands 
        else if(sparkcommand == 'roleadd'){
            var roleName = args[0];
            var roleColor = args[1];
            if(roleName == null || roleColor == null){
                message.channel.send('Please use the command in the correct format: \`+roleadd (Role Name) (Role Color)\`')
            }
            else if(message.member.hasPermission('ADMINISTRATOR') == false){
                message.channel.send('You do not have permission to do this command.')
            }
            else{
                message.guild.createRole({name: roleName, color: roleColor})
                message.channel.send(roleName + 'was created with the color' + roleColor);
            }
        }    
        else if(sparkcommand == 'announce'){
            if(args[0] == null){
                message.channel.send('Please use the command in the correct format: \`+announce (message)\`');
            }
            else if(message.member.hasPermission('ADMINISTRATOR') == false && !message.member.id == '434518162138988545'){
                message.channel.send('You do not have permission to use this command');
            }
            else{
                argoutput = args.join(' ');
                sparkclient.channels.get('451841113448382465').sendMessage({embed: {
                    title: `✦ ${serverName} Bot - Announcement ✦`,
                    color: 4259801,
                    description: argoutput,
                    timestamp: new Date(),
                    footer: {
                        icon_url: sparkclient.user.avatarURL,
                        text: `${serverName} Bot • Created by ${creator}`
                    }
                }});
                message.channel.send(argout + 'has been sent in your announcement channel.')
            }
        }   
        else if(sparkcommand == 'kick'){
            var reason = args.join(' ');
            var kickedUser = args[0];
            if(reason == null){
                message.channel.send('Please enter a valid reason')
            }
            else if(message.member.hasPermission('ADMINISTRATOR') == false){
                message.channel.send('You do not have permission to use this command.')
            }
            else{
                message.member.kick(reason)
                message.channel.send('')
            }
        }
//Only SaltySpark Commands
        else if(sparkcommand == 'status'){
            if(message.member.id == '434518162138988545' || message.member.id == '171327722977492992' || message.member.id == '286974750448943104' || message.member.id == '281559692361203713' || message.member.id == '306663889817567235'){
                argoutput = args.join(' ');
                sparkclient.user.setActivity(argoutput);
                message.channel.send({embed: {
                    title: `✦ ${serverName} Bot - Game Status ✦`,
                    color: 4259801,
                    description: 'Status is now \"Playing **' + argoutput + '**\"',
                    timestamp: new Date(),
                    footer: {
                        icon_url: sparkclient.user.avatarURL,
                        text:`${serverName} Bot • Created by ${creator}`
                    }
                }});
            }   
            else{
                message.channel.send('Your not SaltySpark :expressionless: This command is only meant for the owner of the bot, if you think this is an error please contact SaltySpark#1719')
            }
        }
//Errors        
        else if(message.content.startsWith(prefix)) {
            message.channel.sendMessage('**ERROR:** I cannot do this function yet');
        }
    }
    else{
        return;
    }



});

// sparkclient.on('channelCreate', (channel) => {
//     if(channel.type === 'text') {
//         console.log(`A text channel by the name of ${channel.name} and was created ${channel.createdAt} with the ID of ${channel.id}`)
//         channel.send(`You were successful in creating this channel`);
//     }
//     else{
//         sparkclient.channels.get('456560247298064404').send(`A voice channel by the name of ${channel.name} and was created ${channel.createdAt} with the ID of ${channel.id}`)
//     }
// });

// sparkclient.on('disconnect', () => {
//     console.log(`You have been disconnected at ${new Date()}`);
// });

// var nToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g; 
//     console.log(chalk.cyan(debugString.replace(nToken, 'that was redacted')));
// });
// sparkclient.on('error', errorString =>{
//     console.log(chalk.red(errorString.replace(nToken, 'that was redacted')));
// });
// sparkclient.on('warn', warnString =>{
//     console.log(chalk.yellow(warnString.replace(nToken, 'that was redacted')));
// });

sparkclient.login(token);