# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To resolve this issue, you may generate a migration to add a new column by using the command: 'rails g migration add_foreign_key_column'. Next, open the generated migration file and use the code to add the column: 'add_column :students, :cohort_id, :integer'. The foreign key will be named 'cohort_id', as it links the primary key from the 'cohort' table to the 'student' table. It is important to note that the new column should be an integer data type and should be placed in the 'student' model, as this is where the additional column is required.

Researched answer: After what seemed like hours of research I learned about another method called add reference, which would be used like so: add_reference :students :cohort which will add a column entitled cohort_id to the students table.

2. Which RESTful routes must always be passed params? Why? 

Your answer: The RESTful routes for this application are 'index', 'show', 'new', 'create', 'edit', 'update', and 'destroy'. The 'index' route returns all instances of the model and generally does not require any parameters. The 'show' route requires specific parameters, such as an ID, to identify and display a particular instance. The 'new' route displays a form for the user to enter data, it does not require any parameters. The 'create' route updates and saves the data entered in the form from the 'new' route, and must be provided with necessary parameters in order to pass the data to the database. The 'edit' route, similar to 'new', does not require parameters, while the 'update' route, similar to 'create', requires them. The 'destroy' route does not require any parameters as it simply removes the entire instance from the database.

Researched answer: To summarize, the CREATE, UPDATE, and DELETE routes should always be passed params, as they require additional information to perform their respective actions. The READ route may or may not be passed params, depending on the specific needs of the API and the functionality being implemented. 

3. Name three rails generator commands. What is created by each?

Your answer: "The rails generate command can create various components for a Rails app, such as a model (template for a table with columns), migration (file to make changes to the model structure), and controller (file with app methods and routes/views folders). Another option is resource, which generates a model, controller, and routes. You can also use rspec:install to add dependencies for testing."

Researched answer: Command generates a model and its associated files, including a migration file to create a corresponding table in the database.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
action: “GET” location: /students
- This action would use the index controller method, showing all items in the Student model.
action: “POST” location: /students
- This action would use the create controller method, adding a new entry to the database.
action: “GET” location: /students/new
- This action would use the new controller method, displaying a form for the user to enter data which can be submit as a new entry in the database.
action: “GET” location: /students/2
- This action would use the show controller method, displaying the Student entry with a primary key of 2.
action: “GET” location: /students/2/edit
- This action would use the edit controller method, displaying a form for the user to update the entry with a primary key of 2 in the database.
action: “PATCH” location: /students/2
- This action would use the update controller method, updating data in the entry with a primary key of 2 in the database.
action: “DELETE” location: /students/2
- This action would use the destroy controller method, removing the entry with a primary key of 2 from the database.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
