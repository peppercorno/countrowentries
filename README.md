## Microservice to count rows
__CS 361: Simple microservice created for Luis Gonzalez by Dawn Toh__

#### What the microservice does:
- Reads a .csv file (default input file: _sampledata.csv_ in the directory root). 
- Counts the number of rows that corresponds to each unique value in a particular column (default column: _EMPLOYEE_WHO_CAUSED_ISSUE_).
- Outputs a .csv file (default output file: _employeecount.csv_ in the directory root). The file contains data sorted into two columns. The first is named after the counted column, the second is named _COUNT_.
- You can run the service as many times as you require. Existing copies of an output file will be overwritten.

** Please ensure [Node.js](https://nodejs.dev/) is already installed on your machine.

#### To use:
1. Download the files from Github to your project directory.
2. In the console, navigate to the project directory. Run ```npm install``` to install the required packages. You only need to do this once.
3. To run the service using default values, just enter ```node service```. _employeecount.csv_ will then be created and you will see a return code of 0 for a successful run.
3b. Or, enter ```node service -h``` to pull up the help section showing how to enter custom values:\
![cli_help](https://user-images.githubusercontent.com/18608603/166250912-7aae702c-772e-47ae-bd66-06945c61fdf5.PNG)

3c. When entering extra command options for custom values, you can use one to three custom values. An example with two custom values:\
![cli_twocustom](https://user-images.githubusercontent.com/18608603/166250957-77690bba-caad-41f6-8555-f852f7758614.PNG)

#### Return codes
To allow you to execute this directly from your code, we have the following return codes:
- 0 = Success
- 1 = Error: Invalid input file
- 2 = Error: Invalid output file
- 3 = Error: Invalid column name
- 4 = Error: Unknown error

To see helpful console messages when manually running the script in your console during development, use verbose output: ```node service -v```:\
![cli_verbose](https://user-images.githubusercontent.com/18608603/166251136-dea21755-37c8-446f-bb2b-37a815bcce08.PNG)
