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
            f: 'Available commands are: help, login, about, contact, clear, exit'
            +'\nUse the command "help <command>" to get more information about a specific command.',
            about: 'about - Provides information about the system.',
            clear: 'clear - Clears the terminal screen.',
            exit: 'exit - Exits the terminal.'
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
}, 
{ 
    greetings: $top +'EquilibrumOS 2.5 - Personal assitant'
    +' use the command "help f" to know more\n\n'
    +'Welcome, Monarque!\n'
    +'You have 3 new messages\n'
    +'You have 1 new notification\n',
    prompt: $currentprompt    
}); 
