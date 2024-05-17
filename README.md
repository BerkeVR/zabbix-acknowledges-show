# zabbix-acknowledges-show
Zabbix Acknowledges Reporting Software

git clone https://github.com/BerkeVR/zabbix-acknowledges-show.git

cd zabbix-acknowledges-show

sudo yum install nodejs or apt-get install nodejs example yum install nodejs && npm install express

Open the app.js file with the Nano editor and customize the necessary sections of MYSQL according to your own preferences (PORT, HOST, USER, PASSWORD, DATABASE)

NOTE: The use of the dot (.) symbol in the password is not recommended (MYSQL CANNOT DECODE IT INTERNALLY).

And you can start running with node app.js.

You can go to the web url and get the screen with the machine ip: port, example: http://192.168.52.70:4000/

There are a total of 3 buttons, 2 listboxes and 1 textbox on the homepage. The first button goes to the second page, (2) when the submit button is pressed, it reveals any query in the textbox in the form of a table at the bottom. When the auto-run query button is pressed (it performs a query from the event to the severity of the acknowledgments). As for the template, the template above contains the templates available in your Zabbix; If there is an alarm in it, the second template indicates which host it came from. Just click; You will see the output in the bottom area.

Usage(2): You will see a listbox on the screen. Listbox lists users on Zabbix. After selecting the user you want, you can find the log of his/her most recent acknowledges entry. A log process takes place, including the time of the last alarm and what it entered. After pressing the "Export to Excel" button, you can transfer it to Excel after taking the printout of whichever user you choose for the transaction and you will have a document record. 😊

Result: As a result, the visual interface of the reporting output appears on the screen. (1) Represents the first page. (2) /user.html represents the second page. Good Work 😊 You can use node app.js to start it by typing
