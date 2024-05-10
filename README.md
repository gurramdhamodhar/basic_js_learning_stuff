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

<h2>what is context? how many types in js?</h2>
<p>there are two contexts in js they are :</p>
<ol>
    <li>global execution context : scans all the code</li>
    <li>execution context: contain three types
        <ol>
            <li><b>variable and object :</b>
                <p><b>
                    <ul>
                        <li>functions are execute when function call done before function but</li>
                        <li>In case of variables, when we call variable before initate it shows <i>"undefined"</i></li>
                    </ul>
                </b></p>
                <p><b>example:</b></p>
                <p>
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
                </p>
            </li>
            <li><b>scope chaining :</b>
                <ul>
                    <li>SuperBig : this cannot access low level info like <b>"Big, small"</b></li>
                    <li>Big : can access info from <b>"SuperBig"</b> but cannot access from <b>"small"</b></li>
                    <li>small : can access info from all higher levels like <b>"SuperBig, Big"</b></li>
                </ul>
                <p><b>example:1</b></p>
                <p>
                   <code>
                    function sayName(){
                        var name = dhamodhar;
                        console.log(name);
                       }
                       sayName();
                   </code>
                   <p><b>
                    here output is dhamodhar because this cannot access from low level
                   </b></p>
                  <code>
                    function saybrothername(){
                        var name = "raju";
                        console.log(name);
                        function littlebrothername(){
                            console.log(name);
                        }
                       }
                  </code>
                   <p><b>
                    <p>sayName : dhamodhar</p>
                    <p>saybrothername : raju</p>
                    <p>littlebrothername : raju</p>
                    <p>here output is raju for saybrothername function.</p>
                    <p>and also same output is raju for littlebrothername function. because lowlevel can access big var info.</p>
                   </b></p>
                </p>
                <br>
                <p><b>example:2</b></p>
                <p>
                   function sayName(){
                    var name = dhamodhar;
                    console.log(name);
                   }
                   sayName();
                   <p><b>
                    here output is dhamodhar because this cannot access from low level
                   </b></p>
                   <code>
                    function saybrothername(){
                        console.log(name);
                        function littlebrothername(){
                            console.log(name);
                        }
                       }
                   </code>
                   <p><b>
                    <p>sayName : dhamodhar</p>
                    <p>saybrothername : dhamodhar (access from top)</p>
                    <p>littlebrothername : dhamodhar (access from top)</p>
                   </b></p>
                   
            </li>
            <li><b>This :</b>
                <ul>
                    <li>In node js in local terminal, we cannot get any window action files by using "this"</li>
                    <li>In web, we get files about window.</li>
                    <li><b>ex: console.log(this)</b></li>
                </ul>
            </li>
        </ol>
    </li>
</ol>
