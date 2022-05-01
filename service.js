const fs = require("fs")
const csvParser = require("csv-parser")
const { writeToPath } = require("@fast-csv/format")

const rowObjs = []

fs
	.createReadStream("./sampledata.csv")
	.pipe(csvParser())
	.on("data", data => {
		// Push read data row-by-row to array
		rowObjs.push(data)
	})
	.on("end", () => {
		console.log("sampledata.csv read.")

		// Array of all instances of employees
		const employees = rowObjs.map(row => row["EMPLOYEE_WHO_CAUSED_ISSUE"])
		if (employees[0] === undefined) throw "Error: EMPLOYEE_WHO_CAUSED_ISSUE column is missing from the .csv file!"
		console.log("Counting employees...")

		// Count frequency of employees, store in an object
		// Looks like... { '174': 3, '201': 2, '233': 3, '638': 5 }
		const countsObj = {}
		for (const employee of employees) countsObj[employee] = countsObj[employee] ? countsObj[employee] + 1 : 1

		// Format as an array of objects
		// Looks like... [ { EMPLOYEE_WHO_CAUSED_ISSUE: 174, COUNT: 3 }, { EMPLOYEE_WHO_CAUSED_ISSUE: 201, COUNT: 2 } ]
		let dataToWrite = []
		for (const property in countsObj) {
			let obj = {}
			obj["EMPLOYEE_WHO_CAUSED_ISSUE"] = property
			obj["COUNT"] = countsObj[property]
			dataToWrite.push(obj)
		}

		// Use fast-csv to write to employeecount.csv
		const path = "employeecount.csv"
		const options = { headers: true, quoteColumns: true }

		writeToPath(path, dataToWrite, options)
			.on("error", err => console.error(err))
			.on("finish", () => console.log(`${path} file successfully created!`))
	})
