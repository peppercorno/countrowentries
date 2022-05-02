## Microservice to count employees
__CS 361: Simple microservice created for Luis Gonzalez by Dawn Toh__

#### What the microservice does:
- Reads a .csv file (default input filename: _sampledata.csv_ in the directory root). 
- Counts the number of rows that corresponds to each unique value in a particular column (default column: _EMPLOYEE_WHO_CAUSED_ISSUE_).
- Outputs a .csv file (default output filename: _employeecount.csv_ in the directory root). The file contains data sorted into two columns. The first is named after the counted column, the second is named _COUNT_.

** Before running the microservice, please make sure [Node.js](https://nodejs.dev/) is installed on your machine.

#### To use:
1. Download the files from Github to your project directory, unzip.
2. In the console, navigate to the project directory. Run ```npm install``` to install the required packages. You only need to do this once.
3. Make sure the input file is available, for example, _sampledata.csv_ in the directory root, and contains the column you wish to count rows for.
4a. To run the microservice with the default input filename, output filename, and column name, enter ```node service```. _employeecount.csv_ will then be created. You can do this as many times as you require. Existing versions of the file will be overwritten.

Example of running service with default values:\

4b. To run the microservice with custom values, you can use ```node service -i [custom input filename]```, ```node service -o [custom output filename]```, ```node service -c [custom column name]```, or combinations of two or three values. Enter ```node service -h``` to view help:\ 

Example of running service with custom column name:\

The created .csv file looks like this (for column named _EMPLOYEE_WHO_CAUSED_ISSUE):\
![csv](https://user-images.githubusercontent.com/18608603/166141598-b923b8ff-b078-4e61-83fd-eab531fe846b.PNG)
