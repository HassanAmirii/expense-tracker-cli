const fs = require("fs");
const path = require("path");
const taskFilePath = path.join(__dirname, "expenses.json");
let dataObject;
const minimist = require("minimist");
//define option model
const options = {
  string: ["description"],

  number: ["amount"],

  default: {
    description: "N/A",
    amount: 0,
  },

  alias: {
    description: "d",
    amount: "a",
  },
};
const args = minimist(process.argv.slice(2), options);
const transactionDescription = args.description;
const transactionAmount = args.amount;
const command = args._[0];

switch (command) {
  case "add":
    handleAdd(args);
    break;
  case "view":
    handleView(args);
    break;
  case "summary":
    handleSummary(args);
    break;
  case "update":
    handleUpdate(args);
    break;
  case "list":
    handleList(args);
    break;
  case "delete":
    handleDelete(args);
    break;
  case "help":
  case undefined:
    console.log("Usage: node expensecli <command> [options]");
    console.log("Commands: add, view");
    break;
  default:
    console.log(`unknown command: ${command}`);
}

function handleView() {
  try {
    const dataString = fs.readFileSync(taskFilePath, "utf8").trim();
    if (getData === "") {
    }
  } catch (error) {
    console.error(error.message);
  }
}
