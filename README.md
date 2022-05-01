## Microservice to count employees
__CS 361: Simple microservice created for Luis Gonzalez by Dawn Toh__

#### What the microservice does:
- Reads a .csv file called _sampledata.csv_ in the directory root. 
- Counts the number of rows that belong to each employee ID under EMPLOYEE_WHO_CAUSED_ISSUE.
- Outputs a .csv file in the directory root. The file contains data sorted into two columns, _EMPLOYEE_WHO_CAUSED_ISSUE_ and _COUNT_.

** Before running the microservice, please make sure [Node.js](https://nodejs.dev/) is installed on your machine.

#### To use:
1. Download the files from Github to your project directory, unzip.
2. In the console, navigate to this directory. Run ```npm install``` to install the required packages. You only need to do this once.
3. Make sure _sampledata.csv_ is in the directory root. The .csv file should have a column called _EMPLOYEE_WHO_CAUSED_ISSUE_.
4. To run the microservice, enter ```node service.js```. _employeecount.csv_ will be created. You can do this as many times as you require. Existing versions of the file will be overwritten.

Example of successful run:\
![console](https://user-images.githubusercontent.com/18608603/166141596-f99df47c-c58c-4457-81a5-b335292880a6.PNG)

The created .csv file looks like this:\
![csv](https://user-images.githubusercontent.com/18608603/166141598-b923b8ff-b078-4e61-83fd-eab531fe846b.PNG)
