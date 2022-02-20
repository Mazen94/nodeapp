const { nanoid } = require("nanoid");
const fs = require("fs");
const os = require("os");

const PATH_FILE = "./.env";
const TOKEN_SECRET = 'TOKEN_SECRET'

const run = async () => {
    const ENV_VARS = fs.readFileSync(PATH_FILE, "utf8").split(os.EOL);
    const RANDOM_HEX = nanoid(64)
    const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
        return line.match(new RegExp(TOKEN_SECRET));
    }));
    ENV_VARS.splice(target, 1, `${TOKEN_SECRET}=${RANDOM_HEX}`);
    fs.writeFileSync("./.env", ENV_VARS.join(os.EOL));

}

run()