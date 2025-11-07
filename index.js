const fs = require("fs");
const path = require("path");
const taskFilePath = path.join(__dirname, "expenses.json");

const minimist = require("minimist");
const args = minimist(process.argv.slice(2));

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
