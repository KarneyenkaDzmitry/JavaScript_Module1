# todo_app_advanced

The application helps to make a todo list with notes.<br>
A note includes title and a body with description of the note.<br>
Every note has created date. Advanced version has some new features that doesn't have before.

## Implementation

### Dependencies

The application needs to have the following dependencies:
1. npm --version 6.1.0
2. node --version 8.11.3

### Deploy

#### $ npm install

Before start the program is supposed to run the command [npm install].<br> 
It downloads needed modules and prepars the programm for start.<br>
There is a list of modules and their versions:
* yargs      version  ^11.0.0
* xlsx       version   0.13.1
* excel4node version  ^1.3.6

## Usage

#### Available commands:
- [Help](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/tree/master/#help-message-with-hints-about-usage-the-programm)
- [Add a new note](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#add-a-new-note)
- [Read a selected note](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#read-a-selected-note)
- [Remove a selected note](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#remove-a-selected-note)
- [Sort notes](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#sort-notes)
- [Import notes from an Excel file](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#import-notes-from-an-excel-file)
- [Export notes to an Excel file](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#export-notes-to-an-excel-file)
- [Update note](https://github.com/KarneyenkaDzmitry/JavaScript_Module1/edit/master/README.md#update-note)

### help message with hints about usage the programm

#### $ node index.js --help

### add a new note

#### $ node index.js add --title 'Title of note' --body 'Body of note'

Command [add] creates new note with title [Title of note] and a body [Body of note].<br>
Also the programm add current(created) date and time as a property date to each note.

### remove a note

#### $ node index.js remove --title 'Title of note'

Command [remove] removes a note with title [Title of note] if it es on the list and write on console about success of operation.<br>
If there isn't a note with title [Title of note] the program write a message on console about that. 

### read a note

#### $ node index.js read --title 'Title of note'

Command [read] shows a note with title [Title of note]. In other words show all note with body and created date.<br>

### show list of all notes

#### $ node index.js list

Command [list] shows all notes on console.<br>


### clear list of notes

#### $ node index.js clear

Command [clear] delete all notes. The list becomes empty.<br>

### update a note by title

#### $ node index.js update --title 'Title of a note' --body 'Body of a note'

Command [update] body of existed note with title [Title of a note].<br>
If there isn't a note with title [Title of a note] the programm shows a message on console.<br>

### sort list of notes

#### $ node index.js sort --kind 'note length' --options 'ascending'

Command [sort] allowes to sort all notes by `kind of sort` with ascending or descending direction of the sort.<br>
##### kind (requirement)
- note lenth, title length, title alphabet, date.<br>
##### options (can omit because default is [descending])
- ascending, descending.

## Advanced usage

### write all notes to excel file 

#### $ node index.js writeExcel --file 'Path to result file'

Write excel.xlsx file with all notes from todo_app_advanced list.

### read notes from excel file and add them into todo_app's list

#### $ node index.js readExcel --file 'Path to result file'

Read all notes from excel file and add them into todo_app_advanced list.<br>
If there is a note with the same title in the list, the application ignores it.


