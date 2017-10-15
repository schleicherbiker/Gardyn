const args = ["run build"];
const opts = { stdio: "inherit", cwd: "nyt-react-search", shell: true };
require("child_process").spawn("npm", args, opts);