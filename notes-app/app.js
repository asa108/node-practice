const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Title: " + argv.title + "Body: " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// remove
yargs.command({
  command: "remove",
  describe: "Delete...",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// list
yargs.command({
  command: "list",
  describe: "Listing notes",
  handler(argv) {
    notes.listNotes(argv.title, argv.body);
  },
});

// read
yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

// add, remove, read, list

yargs.parse();
