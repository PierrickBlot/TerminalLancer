const $top = `
 _______   ________  ___  ___  ___  ___       ___  ________  ________  ___  ___  _____ ______       ________  ________      
|\\  ___ \\ |\\   __  \\|\\  \\|\\  \\|\\  \\|\\  \\     |\\  \\|\\   __  \\|\\   __  \\|\\  \\|\\  \\|\\   _ \\  _   \\    |\\   __  \\|\\   ____\\     
\\ \\   __/|\\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\    \\ \\  \\ \\  \\|\\ /\\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\\\\\__\\ \\  \\   \\ \\  \\|\\  \\ \\  \\___|_    
 \\ \\  \\_|/_\\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\    \\ \\  \\ \\   __  \\ \\   _  _\\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\   \\ \\  \\\\\\  \\ \\_____  \\   
  \\ \\  \\_|\\ \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\____\\ \\  \\ \\  \\|\\  \\ \\  \\\\  \\\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ __\\ \\  \\\\\\  \\|____|\\  \\  
   \\ \\_______\\ \\_____  \\ \\_______\\ \\__\\ \\_______\\ \\__\\ \\_______\\ \\__\\\\ _\\\\ \\_______\\ \\__\\    \\ \\__\\\\__\\ \\_______\\____\\_\\  \\ 
    \\|_______|\\|___| \\__\\|_______|\\|__|\\|_______|\\|__|\\|_______|\\|__|\\|__|\\|_______|\\|__|     \\|__\\|__|\\|_______|\\_________\\
                    \\|__|                                                                                       \\|_________|
`;
let $currentprompt = 'Monarque> ';
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$('body').terminal({  
    help: function(command) {
        const commands = {
            f: 'Available commands are: help, show_message, exec, about, clear, exit'
            +'\nUse the command "help <command>" to get more information about a specific command.',
            about: 'about - Provides information about the system.',
            clear: 'clear - Clears the terminal screen.',
            exit: 'exit - Exits the terminal.',
            show_message: 'show_message <message_number> - Displays a specific message. Use "show_message all" to see all messages.',
            exec: 'exec <command> - Executes a specific command available'
        };
        if (commands[command]) {
            this.echo(commands[command]);
        } else {
            this.echo('No information available for command: ' + command);
        }
    },
    about: function() {
        this.echo('EquilibrumOS 2.5 - Personal assistant - No updates available');
    },
    clear: function() {
        this.clear();
    },
    exit: function() {
        this.echo('Exiting EquilibrumOS 2.5 - Personal assistant...');
        sleep(2000).then(()=>{
            location.href = 'index.html';});
    },
    show_notification: function() {
        this.echo('Notification 1: You have a meeting at 10:00 AM tomorrow');
    },
    show_message: function(message) {
        if (message === 1) {
            this.echo(
                '\nObjet: Votre réunion a été reportée à demain 10 heures.\n'
                +'From : Magistère Joshua Sanctus Aslan\n'
                +'Date: Aujourd\'hui 10:05\n\n'
                +'Bonjour Monarque,\n'
                +'Notre réunion sur votre évaluation a été reportée à demain 10 heures.\n'
                +'Merci de votre compréhension.\n'
                +'Que le Monolithe vous guide,\n'
                +'Magistère Joshua Sanctus Aslan\n');
        } else if (message === 2) {
            this.echo('\nObjet: Avec mes remerciements\n'
                +'From : Hierophant Maxon Part\n'
                +'Date: Aujourd\'hui 14:00\n\n'
                +'Bonjour Monarque,\n'
                +'Je vous remercie pour votre aide précieuse lors des dernières batailles Monarque.\n'
                +'Je viens d\'apprendre votre échange avec le Magistère Joshua Sanctus Aslan.\n'
                +'Je vous remercie de votre aide précieuse et qu\'importe votre décision, je vous soutiendrais.\n'
                +'Que l\'équilibre guide vos pas,\n'
                +'Hierophant Maxon Part\n');
        } else if (message === 3) {
            this.echo('Objet: votRE commAnde est vaLIdée\n'
                +'From : TYphoon software\n'
                +'Date: Aujourd\'hui 14:00\n\n'
                +'Bonjour,\n'
                +'votRE commAnde a été validée et vous avez du le recevoir. en esperant que votre Karma soit bon.\n'
                +'mERci de votre confiance.\n'
                +'typhoon software\n'
                +'PS: Cela fait longtemps\n'
            );
        }else if (message === 'all') {
            this.echo('Message 1: Votre réunion a été reportée à demain 10 heures.\n'
            +'Message 2: Avec mes remerciements \n'
            +'Message 3: votRE commAnde est vaLIdée\n');
        } else {
            this.echo('No message available for message number: ' + message);
        }
    },
    exec: function(command){
        const commands = {
            reality_breaker: 'Executing Reality Breaker...',
        };
        if (commands[command]) {
            this.echo(commands[command]);
            if(command === 'reality_breaker') {
                sleep(2000).then(()=>{
                    location.href = 'reality_breaker.html';
                });
            }
        } else {
            this.echo('No information available for command: ' + command);
        }
    }
}, 
{ 
    greetings: $top +'EquilibrumOS 2.5 - Personal assitant'
    +' use the command "help f" to know more\n\n'
    +'Welcome, Monarque!\n'
    +'You have 3 new messages\n'
    +'You have 1 new notification\n',
    prompt: $currentprompt    
}); 
