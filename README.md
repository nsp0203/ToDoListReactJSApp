# To Do List Application
A modern To Do List Application built using React JS that consumes a .NET Web API backend to manage tasks efficiently. <br/>
Users can create, update, delete, search, and categorize their todos with priority levels through a clean and responsive user interface.

## Features
**1. To Do Management:** <br/>
   Create new tasks <br/>
   View all tasks <br/>
   Edit existing tasks <br/>
   Delete tasks <br/>
**2. Searching To Do Task with its name** <br/>
**3. Priority Levels** <br/>
   Each task can be categorized based on its priority Level : <br/>
   a. High <br/>
   b. Medium <br/>
   c. Low <br/>
**4. Categories :** Work and Personal <br/>
**5. API Integration :** Connects to C# .NET Web API 

## Consume it by using following process: 
**1. Clone Repository :**
   ```bash
   git clone [<your-react-repo-url>](https://github.com/nsp0203/ToDoListReactJSApp.git)
   cd ToDoListReactJSApp
   ```
**2. Install Dependencies:**
   ```bash
   npm install
   ```
**3. Configure API Base URL:** <br/>
   Update your API base URL in ..\ToDoListReactJSApp\src\API\AxiosInstance.js File. <br/>
   Make sure your .NET Web API is running before starting React. <br/>
**4. For Starting the React Application:** 
   ```bash
   npm start
   ```

## Backend Repository:
This frontend consumes APIs from below Repository: 
https://github.com/nsp0203/ToDoListWebAPI.git
   
