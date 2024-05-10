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
<h2>What is Context? How many types are there in JavaScript?</h2>
<p>There are two contexts in JavaScript:</p>
<ol>
    <li><b>Global Execution Context:</b> Scans all the code.</li>
    <li><b>Execution Context:</b> Contains three types
        <ol>
            <li><b>Variable and Object:</b>
                <ul>
                    <li>Functions are executed when called before the function declaration.</li>
                    <li>In the case of variables, when we call a variable before initializing it, it shows "<i>undefined</i>".</li>
                </ul>
                <p><b>Example:</b></p>
                <code>
                    console.log(name);
                    var name = "dhamodhar"; 
                    
                    sayHi("dhamodhar")
                    function sayHi(){
                        console.log(name);
                    }

                    var hello = sayHi();
                    console.log(name); 
                </code>
            </li>
            <li><b>Scope Chaining:</b>
                <ul>
                    <li>SuperBig: Cannot access lower level info like <b>"Big" and "Small"</b>.</li>
                    <li>Big: Can access info from <b>"SuperBig"</b> but cannot access from <b>"Small"</b>.</li>
                    <li>Small: Can access info from all higher levels like <b>"SuperBig" and "Big"</b>.</li>
                </ul>
                <p><b>Example 1:</b></p>
                <code>
                    function sayName(){
                        var name = "dhamodhar";
                        console.log(name);
                    }
                    sayName();
                </code>
                <p><b>
                    Here the output is "dhamodhar" because "this" cannot access lower levels.
                </b></p>
                <code>
                    function sayBrotherName(){
                        var name = "raju";
                        console.log(name);
                        function littleBrotherName(){
                            console.log(name);
                        }
                    }
                </code>
                <p><b>
                    <p>sayName: dhamodhar</p>
                    <p>sayBrotherName: raju</p>
                    <p>littleBrotherName: raju</p>
                    <p>Here the output is "raju" for the sayBrotherName function.</p>
                    <p>And also the same output is "raju" for the littleBrotherName function because lower levels can access higher variable information.</p>
                </b></p>
                <p><b>Example 2:</b></p>
                <code>
                    function sayName(){
                        var name = "dhamodhar";
                        console.log(name);
                    }
                    sayName();
                </code>
                <p><b>
                    Here the output is "dhamodhar" because "this" cannot access lower levels.
                </b></p>
                <code>
                    function sayBrotherName(){
                        console.log(name);
                        function littleBrotherName(){
                            console.log(name);
                        }
                    }
                </code>
                <p><b>
                    <p>sayName: dhamodhar</p>
                    <p>sayBrotherName: dhamodhar (accessed from the top)</p>
                    <p>littleBrotherName: dhamodhar (accessed from the top)</p>
                </b></p>
            </li>
            <li><b>This:</b>
                <ul>
                    <li>In Node.js in the local terminal, we cannot get any window-related actions by using "this".</li>
                    <li>In the web, we get files about the window.</li>
                    <li><b>Example: console.log(this)</b></li>
                </ul>
            </li>
        </ol>
    </li>
</ol>

