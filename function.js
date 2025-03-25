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


$('body').terminal({  
    login: function (username, password) {
        if (username === 'Monarque' && password === 'password123') {
            this.echo('Login successful. Welcome, ' + username + '!');
        } else {
            this.echo('Login failed. Invalid username or password.');
        }
    },
    help: function(command) {
        const commands = {
            f: 'Available commands are: help, login, about, contact, clear, exit'
            +'\nUse the command "help <command>" to get more information about a specific command.',
            login: 'login <username> <password> - Logs in with the specified username and password.',
            about: 'about - Provides information about the system.',
            contact: 'contact - Provides contact information.',
            clear: 'clear - Clears the terminal screen.',
            exit: 'exit - Exits the terminal.'
        };
    
        if (commands[command]) {
            this.echo(commands[command]);
        } else {
            this.echo('No information available for command: ' + command);
        }
    }
    
}, { 
    greetings: $top +'EquilibrumOS 2.5 - Personal assitant'
    +' use the command help to know more',
    prompt: 'EquilibrumOS> ',
    
}); 
