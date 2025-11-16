# **ExpenseCLI 💰: Command-Line Expense Tracker**

## Overview

ExpenseCLI is a lightweight and efficient command-line interface (CLI) application built with Node.js, designed to help users track their daily expenses directly from the terminal. It provides intuitive commands for adding, listing, summarizing, updating, and deleting expense records, storing all data in a local JSON file.

## Features

- **Add Expenses**: Quickly record new expenses with a description and amount.
- **List All Expenses**: View a comprehensive list of all recorded expenses.
- **Summarize Expenses**: Get a total sum of all expenses.
- **Update Expenses**: Modify the description or amount of existing expense entries.
- **Delete Expenses**: Remove specific expense records by their unique ID.
- **Local Data Storage**: Persists expense data in a simple JSON file for easy management.

## Usage

ExpenseCLI is designed for straightforward command-line interaction. Navigate to the project directory and use `node index.js` followed by the desired command and options.

### Commands

#### `add`

Adds a new expense record.

```bash
node index.js add --description "Lunch with John" --amount 25
```

Or using aliases:

```bash
node index.js add -d "Groceries" -a 75.50
```

#### `list`

Displays all recorded expenses.

```bash
node index.js list
```

#### `summary`

Calculates and displays the total amount of all expenses.

```bash
node index.js summary
```

#### `update`

Modifies an existing expense. You must provide the expense's ID. You can update either the description or the amount, or both.

Update description:

```bash
node index.js update --id 1 --description "Team Lunch"
```

Update amount:

```bash
node index.js update --id 1 --amount 30
```

Update both:

```bash
node index.js update --id 1 -d "Coffee Break" -a 5
```

#### `delete`

Removes an expense record by its ID.

```bash
node index.js delete --id 2
```

#### `help`

Displays the usage instructions and available commands.

```bash
node index.js help
```

Or simply:

```bash
node index.js
```

## Technologies Used

| Technology | Description                                     |
| :--------- | :---------------------------------------------- |
| Node.js    | Runtime environment for JavaScript execution    |
| Minimist   | Argument parsing library for command-line input |

[project file](https://roadmap.sh/projects/expense-tracker)
