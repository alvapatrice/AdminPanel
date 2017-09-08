
# AdminPanel
project is the admin panel with BREAD (browse, read, edit, add,delete ) generator and file manager built with Laravel framework. Below is the list of some features

1.	Users management, authentication and permissions
2.	BREAD generator with voyager package
3.	 File manager
4.	API to serve front end pages
5. 

This means you can use it to generate the admin panel of your website or application without writing any codes. Then after follow my example codes to write the API to serve your front end application through ajax request.

Installation
------------
A.Requirement

1.PHP environment with php version 7 installed in your server or computer. In case you don't know how, 
check this link to install wampserver or xamp. 

2.Composer installed in your computer(this is because this project is built on laravel, composer will help us to install project dependencies)

B.Installation steps

1. Clone or download the source code
2. open the database folder and find the .db file.
3. Populate the database in your mysql database
4. open .env file and provide your database name, username and password
5. Open your console and navigate to your project directory
6. After that type this command: composer install
7. Wait for composer to install all project dependencies, this will take some time
8. After everything has completed run this command: php artisan serve
9. Laravel Artisan will start your project on port 8000
10. Now you can use the project via http://localhost:8000 in your browser
11. Navigate on http://localhost:8000/admin to access the admin panel
12. If you have populated my db file in your database, 
    currently the username: admin@hviewtech.com password: admin

C. Getting familiar with the codes 

1. In case you have never used Laravel, this can be a little confusing to you. I would advise to read some [laravel tutorials](https://laravel.com/) and know some basics. 
3. You really don't need to write any codes in order to produce your admin panel, you can use the built in Voyager BREAD generator to build your models and produce their browse, read, edit, add and delete
4. You can go on and delete my existing models, and build yours.. go to 工具 then 数据库。
3. visit this link and know how to use [voyager BREAD generator](https://voyager.readme.io/docs/installation)
