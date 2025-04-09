# Pre-drawn_Manager
The project's purpose is to guarantee easier access to pre-drawn characters.
When you visit the website, you land on a page where all the character sheets are presented. Select one of them, and you will land on another page, where the pre-drawn character is proposed. Set the desired level using the side selector and finally click on "Select."
You will then have access to your pre-drawn character, and you can click on "Download" to download the preset in PDF format.
And enjoy playing with a clear and readable sheet!

# Install and Launch the Project:
First, download the repository and unzip it.
Then, enter the following commands in the terminal from within the project folder:
 - npm install // to install all required modules
 - npm start // to launch the program
 - http://localhost:3000 // the port and adress where the project is runing

# Add an create pre-draw and caracter sheet :
First things first, character sheets are located in views/character_sheet in Pug format.
You can easily create one by using an AI.
Note: Be careful! All boxes you want to fill with the character's information need to be properly named.

Now that you have added a new character sheet, let's see how to add pre-drawn data:
First things first, add a new folder in the data directory named after your character sheet. 
For example, if the character sheet is named hale&dice.pug, the folder should be named hale&dice.

Then, create pre-drawn data files with the .csv extension inside this folder.
See on google how works csv files i'm not gona give you a leson in this README XD.
A column name in the CSV file represents a box name to fill in the character sheet.

Each row in the file represents a level of your character. This is why you only add what is needed for the character each time it levels up: characteristics, abilities, etc.

All text values are concatenated (added together) line by line, while numerical values are summed as the character levels up.
For example, if the character has a "competence" column, at the first level, it might include a "fight ability" along with its subtext. At the next level, when a "stealth ability" is unlocked, it will be added to the previous text.

(See an example using the test.pug sheet and its corresponding pre-drawn data file.)