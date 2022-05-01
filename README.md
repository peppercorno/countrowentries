## Microservice to count employees
### Simple microservice created for Luis Gonzalez by Dawn Toh 

What the microservice does:
- Reads a .csv file called __sampledata.csv__ in the directory root. 
- Counts the number of rows that belong to each employee ID under EMPLOYEE_WHO_CAUSED_ISSUE.
- Outputs a .csv file in the directory root. The file contains data sorted into two columns, __EMPLOYEE_WHO_CAUSED_ISSUE__ and __COUNT__.

** Before running the microservice, please make sure [Node.js](https://nodejs.dev/) is installed on your machine.

To use:
1. Download the files from Github to your project directory, unzip.
2. In the console, navigate to this directory. Run ```npm install``` to install the required packages. You only need to do this once.
3. Make sure __sampledata.csv__ is in the directory root. The .csv file must have a column called __EMPLOYEE_WHO_CAUSED_ISSUE__.
4. To write the new .csv file, run ```node service.js```. __employeecount.csv__ will be created.
