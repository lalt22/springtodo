# springtodo

## Progress
### 17/02/2024
#### Configuration
System works on both Mac and Windows. Need to find a way to use environment variables to hide my database details and make the applicationresources file more flexible between systems instead of overwriting when switching between the two.

#### Functionality
Two functions complete:
- POST: /tasks: creates a new task with a description and a due date provided by user. Completion status and creation date are set by the server
- GET: /tasks: gets all tasks currently in the database.
