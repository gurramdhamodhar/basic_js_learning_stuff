<h3>08-05-2024: Started Learning JS</h3>
<hr>
<h4>What Is the Use of This Repository to You?</h4>
<ul>
  <li>Learn basics to advanced JS.</li>
  <li>Daily new concepts.</li>
  <li>Daily uploading real-time task practice files.</li>
  <li>Finally, we can build applications.</li>
</ul>
<hr>
<h4>What we have to learn JS?</h4>
<ol>
  <li>Discipline</li>
  <li>Peaceful mind</li>
  <li>Motivation</li>
  <li>Daily practice</li>
  <li>Self-confidence</li>
</ol>
<hr>

<h4>Daily Tasks</h4>

<h2>Task 1</h2>

<p>Create a form using variables.</p>

<h2>Task 2</h2>

<p>Create to display discount using simple basic operators.</p>

<h2>Task 3</h2>

<p>Create to display is user signed in on google, Facebook, Instagram using conditions.</p>

<h2>Task 4</h2>

<p>Show sign out button if he logged in, otherwise show login button.</p>

<h2>Task 5</h2>

<p>Create a switch case to vote for a leader in AP election. Please enter the correct ballot number to choose your leader.</p>

<h2>Task 6</h2>

<p>Using functions, perform to show the role of a user using function call by name role.</p>
<br>
<h3>09-05-2024: Day2 of js learning</h3>
<hr>

#### What is context? How many types in JavaScript?

There are two contexts in JavaScript:

1. Global execution context: scans all the code.
2. Execution context: contain three types

   - **Variable and Object:**
   
     - Functions are executed when called before the function declaration.
     - In the case of variables, when we call a variable before initializing it, it shows "undefined".

     **Example:**
     ```javascript
     console.log(name);
     var name = "dhamodhar"; 
     
     sayHi("dhamodhar")
     function sayHi(){
         console.log(name);
     }

     var hello = sayHi();
     console.log(name); 
     ```

   - **Scope chaining:**
   
     - SuperBig: This cannot access lower-level info like "Big, small".
     - Big: Can access info from "SuperBig" but cannot access from "small".
     - Small: Can access info from all higher levels like "SuperBig, Big".

     **Example 1:**
     ```javascript
     function sayName(){
         var name = dhamodhar;
         console.log(name);
     }
     sayName();
     ```
     Here output is "dhamodhar" because this cannot access from low level.

     ```javascript
     function sayBrotherName(){
         var name = "raju";
         console.log(name);
         function littleBrotherName(){
             console.log(name);
         }
     }
     ```
     - sayName: dhamodhar
     - sayBrotherName: raju
     - littleBrotherName: raju
     
     Here output is "raju" for sayBrotherName function. And also the same output is "raju" for littleBrotherName function because low levels can access higher variable information.

   - **This:**
   
     - In Node.js in the local terminal, we cannot get any window-related actions by using "this".
     - In the web, we get files about the window.
     - Example: console.log(this)

--- 
