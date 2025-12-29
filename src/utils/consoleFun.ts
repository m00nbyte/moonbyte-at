// src/utils/consoleFun.ts

/**
 * Initializes developer console fun by logging a random welcoming message
 * with custom styling, followed by a feedback contact message after a delay.
 *
 * @returns {void} This function has no output.
 */
const initializeFun = (): void => {
    const devMessages = [
        '👋 Hello, curious developer!',
        '🔍 Found something interesting?',
        "💡 Got ideas for improvement? I'd love to hear them!",
        '🛠️ Enjoying the architecture?',
        '🚀 Thanks for visiting the console!',
        '💻 Welcome to the behind-the-scenes!',
        "👨‍💻 Hey coder! What's up?",
        '🎯 Looking for something specific?',
        '🔧 Checking out the plumbing?',
        '📊 Performance metrics looking good?',
        "🎨 How's the design holding up in dev tools?",
        '⚡ Fast enough for you?',
        '🔐 Found any security holes yet?',
        '📱 Responsive design passing inspection?',
        '🌐 Network tab looking healthy?',
        '🐞 Found any bugs I should know about?',
        '✨ Something magical happening here?',
        '🎪 Welcome to the code circus!',
        "🧩 How's the puzzle looking?",
        '🔍 Detective mode: ON',
        "💭 Thinking what I'm thinking?",
        '🎮 Game developer mode activated',
        '🏗️ Architecture review in progress',
        '🧪 Running some experiments?',
        '📚 Learning something new?',
        "🎵 Code has rhythm, doesn't it?",
        '🎨 CSS is an art form',
        '⚙️ JavaScript engine humming nicely',
        '🌊 Surfing the call stack?',
        '🚧 Construction zone - watch your step!',
        '🎭 Behind the curtain of the web',
        '🔬 Microscopic view of the DOM',
        '🕵️‍♂️ On a secret mission?',
        '🎪 Welcome to the developer carnival!',
        '🧠 Brain.exe is running',
        '🌈 Found the pot of gold?',
        '⚡ Lightning in the console',
        '🔮 I see great code in your future',
        '🎯 Bullseye! You found the console',
        '🚀 To infinity and beyond the DOM',
        '🦸‍♂️ With great console comes great responsibility',
        "🎬 Director's cut of the website",
        '🧶 Untangling the web',
        '🔋 Powered by caffeine and code',
        '🎪 Center ring of the code circus',
        '🧭 Navigating the source seas',
        '⚗️ Alchemist transforming bytes to beauty',
        '🎨 Painting with pixels',
        '🔊 Listening to the hum of HTTP requests',
        '🌌 Exploring the code galaxy',
        '🏎️ Vroom vroom! Performance tuning?',
        '🧊 Cool code detected',
        '🔥 Hot reloads only!',
        '🎹 Typing the symphony of syntax',
        '🕸️ Caught in the web (development)',
        '🎯 Debugging like a pro',
        '🧩 Solving the puzzle one console.log at a time',
        '🚁 Hovering over the codebase',
        '🎪 Welcome to the mainframe!',
        '🔍 X-ray vision enabled',
        '🎨 The console is your canvas',
        '⚡ Electrifying code detected',
        "🧭 Lost in the console? You're in good company!",
        '🎮 Level unlocked: Console Explorer',
        '🌠 Shooting for the stars in dev tools',
        '🔧 Time to tune the engine',
        '🎭 The code behind the mask',
        '🧪 Lab coat optional, curiosity required',
        '🚂 All aboard the console train!',
        '🎪 Center stage: The Browser Console',
        '🔍 Sherlock Holmes of the Heap',
        '🎵 Coding in the key of C# (or JavaScript!)',
        '🏗️ Building digital dreams',
        '🌉 Bridging the gap between idea and implementation',
        '🧠 Mind. Blown. By. Code.',
        '🚀 Launch sequence initiated',
        '🎯 Debugging darts hitting bullseyes',
        '🌈 Following the console rainbow',
        '⚙️ Gears turning, code burning',
        '🎬 Behind the scenes of the web',
        '🔮 Predicting the next bug',
        "🏆 Winner of the 'Opened Dev Tools' award!",
        '🧭 Navigating nested callbacks',
        '🎪 The greatest show in dev tools',
        '⚡ Power overwhelming! (Console edition)',
        '🔍 Searching for semicolons',
        '🎨 Pixel perfection in progress',
        '🚀 Countdown to deployment',
        '🧩 Where does this piece go?',
        "🌌 To boldly console.log where no one has console.log'd before",
        '🎮 Game over? Or just level complete?',
        '🔧 Adjusting reality with code',
        "🎭 All the web's a stage",
        '🧪 Experiment 404: Console Discovery',
        '🚂 Next stop: Optimization Station',
        '🎯 Hit me with your debugger!',
        '🌈 At the end of the console: a pot of efficient code',
        '⚙️ Well-oiled machine in progress',
        '🎬 Take 42: Action!',
        '🔮 I see console logs in your future',
        '🏆 Gold medal in Dev Tools Exploration!',
        "🧭 Lost? You're exactly where you need to be",
        '🎪 Welcome to the console circus!'
    ];

    console.log(
        `%c${devMessages[Math.floor(Math.random() * devMessages.length)]}`,
        'background: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 5px; font-family: sans-serif; font-size: 12px; margin-top: 5px;'
    );

    setTimeout(() => {
        console.log(
            '%c💌 Feedback? Contact me: office@moonbyte.at',
            'background: #2c3e50; color: #ecf0f1; padding: 10px; border-radius: 5px; font-family: sans-serif; font-size: 12px; margin-top: 5px;'
        );
    }, 2000);
};

export default initializeFun;
