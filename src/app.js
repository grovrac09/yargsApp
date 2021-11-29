const yargs = require("yargs");

const {Music, musicArr} = require("./utils");

const app = (args) => {
    switch (process.argv[2]){
        case "add":
            const music = new Music(args.band, args.vocals, args.guitar, args.secondGuitar, args.bass, args.drums, args.genre);
            music.add();
            console.log(musicArr);
            break;
        case "add multi":
            const music1 = new Music(args.band1, args.vocals1, args.guitar1, args.secondGuitar1, args.bass1, args.drums1, args.genre1);
            const music2 = new Music(args.band2, args.vocals2, args.guitar2, args.secondGuitar2, args.bass2, args.drums2, args.genre2);
            music1.add();
            music2.add();
            console.log(musicArr);
            break;
        default:
            console.log("Incorrect command");
            break;
    } 
};

app(yargs.argv); 