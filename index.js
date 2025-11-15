const fs = require("fs");
const path = require("path");
const taskFilePath = path.join(__dirname, "expenses.json");
let dataObject = null;
const minimist = require("minimist");
const { json } = require("stream/consumers");
//define option model

const options = {
  string: ["description"],
  string: ["id"],
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

// handle date format :
const today = new Date();

// Get the year (e.g., 2024)
const year = today.getFullYear();

// Get the month (0-11, so add 1 for 1-12) and pad with '0'
const month = String(today.getMonth() + 1).padStart(2, "0");

// Get the day of the month and pad with '0'
const day = String(today.getDate()).padStart(2, "0");

// Combine the parts
const formattedDate = `${year}-${month}-${day}`;
const args = minimist(process.argv.slice(2), options);
const transactionDescription = args.description;
const transactionAmount = args.amount;
const transactionID = args.id;
const command = args._[0];

switch (command) {
  case "add":
    handleAdd(args);
    break;
  case "summary":
    handleSummary(args);
    break;
  case "update":
    handleUpdate(args);
    break;
  case "list":
    handleView(args);
    break;
  case "delete":
    handleDelete(args);
    break;
  case "help":
  case undefined:
    console.log(
      "Usage: node expensecli <command> [options]: eg> add --description 'Lunch' --amount 20"
    );
    console.log("Commands: add, view, delete, list, update, summary, help ");
    break;
  default:
    console.log(`unknown command: ${command}`);
    console.log(
      "Usage: node expensecli <command> [options]: eg> add --description 'Lunch' --amount 20"
    );
    console.log("Commands: add, view, delete, list, update, summary, help ");
}

function handleView() {
  try {
    const dataString = fs.readFileSync(taskFilePath, "utf8").trim();
    if (dataString !== "") {
      dataObject = JSON.parse(dataString);
      console.log(dataObject);
      return dataObject;
    }
    const emptyJson = "[]";
    fs.writeFileSync(taskFilePath, emptyJson);
    return [];
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("could not find the task file path, \n create a new one");
      const emptyJson = "[]";
      fs.writeFileSync(taskFilePath, emptyJson);
      return [];
    } else if (error.name === "SyntaxError") {
      console.error(`bad syntax in json: ${error.message}`);
    } else {
      console.error(error);
    }
  }
}

function handleAdd() {
  try {
    const expenses = handleView();
    const idnum = expenses.length + 1;
    console.log(idnum);
    const newExpense = {
      ID: idnum,
      Date: formattedDate,
      Description: transactionDescription,
      Amount: transactionAmount,
    };

    expenses.push(newExpense);
    fs.writeFileSync(taskFilePath, JSON.stringify(expenses, null, 2));
    console.log("succesfully created a new expense");
    console.log(newExpense);
    return newExpense;
  } catch (error) {
    console.error(error);
  }
}

function handleSummary() {
  try {
    const expenses = handleView();
    const totalAmount = expenses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.Amount;
    }, 0);
    console.log(`total expenses: ${totalAmount}`);
  } catch (error) {
    console.error(error);
  }
}

function handleDelete() {
  try {
    const expenses = handleView();
    const idToRemove = transactionID;
    const newExpense = expenses.filter((item) => item.ID !== idToRemove);
    fs.writeFileSync(taskFilePath, JSON.stringify(newExpense, null, 2));
    console.log("succesfully deleted expense");
    console.log(newExpense);
    return newExpense;
  } catch (error) {
    console.error(error);
  }
}
