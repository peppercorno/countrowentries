// Microservice to count rows with unique values in a particular column
// Written by Dawn Toh. For CS 361, May 2022
//----------------------------------------------------------------------

// To use:
// npm install
// node service -h

// Return Codes:
// 0 = Success
// 1 = Error: Invalid input file
// 2 = Error: Invalid output file
// 3 = Error: Invalid column name
// 4 = Error: Unknown error

// Node modules
const fs = require("fs-extra")
const program = require("commander")
const papa = require("papaparse")

// Defaults
const DEFAULTS = {
	input: "./sampledata.csv",
	output: "./employeecount.csv",
	column: "EMPLOYEE_WHO_CAUSED_ISSUE"
}

// Run
run()
async function run() {
	try {
		// Setting up CLI options
		program
			.option("-i, --inputfilename [value]", `Path to input file (Default: ${DEFAULTS.input})`)
			.option("-o, --outputfilename [value]", `Path to output file (Default: ${DEFAULTS.output})`)
			.option("-c, --columnname [value]", `Name of the column to count (Default: ${DEFAULTS.column})`)
			.option("-v, --verbose [value]", "Enable verbose output")
			.parse(process.argv)

		// CLI options into an object
		const programOptions = program.opts()

		// Get values from CLI, use defaults if undefined
		let input = programOptions.inputfilename
		if (input === undefined) input = DEFAULTS.input
		let output = programOptions.outputfilename
		if (output === undefined) output = DEFAULTS.output
		let column = programOptions.columnname
		if (column === undefined) column = DEFAULTS.column
		let verbose = programOptions.verbose
		if (verbose === undefined) verbose = false

		// Read file into string
		let fileData
		try {
			if (verbose) console.log(`Reading file, ${input}`)
			fileData = await fs.readFile(input, "utf8")
			if (verbose) console.log(`Finished reading file, ${input}`)
		} catch (e) {
			throw new Error("1")
		}

		// Parse input file
		let csv = papa.parse(fileData)

		// Find column
		let columnIndex = csv.data[0].findIndex(name => name === column)
		if (columnIndex === -1) throw new Error("3")

		// Count rows
		let data = {}
		for (let i = 1; i < csv.data.length; i++) {
			let value = csv.data[i][columnIndex]
			data[value] = data[value] ? data[value] + 1 : 1
		}
		if (verbose) console.log(`Rows counted for each unique entry in ${column}.`)

		// Create output data for .csv
		let outputData = `"${column}","COUNT"\n`
		for (let key in data) {
			outputData += `"${key}","${data[key]}"\n`
		}

		// Write output file
		try {
			await fs.writeFile(output, outputData)
		} catch (e) {
			throw new Error("2")
		}

		// Success
		if (verbose) console.log(`Output file, ${output}, successfully written.`)
		console.log("0")
	} catch (error) {
		if (error.message === "1") console.log(error.message)
		else if (error.message === "2") console.log(error.message)
		else if (error.message === "3") console.log(error.message)
		else console.log("4")
	}
}

// To run CLI from node: https://stackabuse.com/executing-shell-commands-with-node-js/
