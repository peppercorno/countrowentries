const fs = require("fs")
const program = require("commander")
const csvParser = require("csv-parser")
const { writeToPath } = require("@fast-csv/format")

// Setting up CLI options
program
	.option("-i, --inputfilename [value]", "path to input file")
	.option("-o, --outputfilename [value]", "path to output file")
	.option("-c, --columnname [value]", "name of the column to count")
	.parse(process.argv)

// Putting options into an object
const programOptions = program.opts()

// Get values from CLI, use defaults if undefined
let input = programOptions.inputfilename
if (input === undefined)
	input = "./sampledata.csv"

let output = programOptions.outputfilename
if (output === undefined)
	output = "./employeecount.csv"

let column = programOptions.columnname
if (column === undefined)
	column = "EMPLOYEE_WHO_CAUSED_ISSUE"

const rowObjs = []

fs
	.createReadStream(input)
	.pipe(csvParser())
	.on("data", data => {
		// Push read data row-by-row to array
		rowObjs.push(data)
	})
	.on("end", () => {
		console.log(`${input} read.`)

		// Array of all instances of that column entry
		const entries = rowObjs.map(row => row[column])
		if (entries[0] === undefined) throw `Error: ${column} column is missing from the .csv file!`
		console.log(`Counting rows of ${column}...`)

		// Count frequency of entries, store in an object
		// Eg. Looks like... { '174': 3, '201': 2, '233': 3, '638': 5 }
		const countsObj = {}
		for (const entry of entries) countsObj[entry] = countsObj[entry] ? countsObj[entry] + 1 : 1

		// Format as an array of objects
		// Eg. Looks like... [ { EMPLOYEE_WHO_CAUSED_ISSUE: 174, COUNT: 3 }, { EMPLOYEE_WHO_CAUSED_ISSUE: 201, COUNT: 2 } ]
		let dataToWrite = []
		for (const prop in countsObj) {
			let obj = {}
			obj[column] = prop
			obj["COUNT"] = countsObj[prop]
			dataToWrite.push(obj)
		}

		// Use fast-csv to write to employeecount.csv
		const options = { headers: true, quoteColumns: true }
		writeToPath(output, dataToWrite, options)
			.on("error", err => console.error(err))
			.on("finish", () => console.log(`${output} file successfully created!`))
	})
