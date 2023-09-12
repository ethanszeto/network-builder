# network-builder
<p>Network Builder Project! This project was designed to teach new members of NU Sci basic web development.</p>
<hr/>

# Authors / Contributors
Ethan Szeto
<hr/>

# Features
- Login
- Sign Up
- Follow
- View Profile
- Logout
<hr/>

# Screenshots
<img width="1728" alt="Screenshot 2023-09-11 at 11 29 36 PM" src="https://github.com/ethanszeto/network-builder/assets/41793762/508164eb-b000-4f3a-8ee1-222e93319e1c">
<hr/>
<img width="1728" alt="Screenshot 2023-09-11 at 11 30 42 PM" src="https://github.com/ethanszeto/network-builder/assets/41793762/c78467d8-1787-4193-8e00-04496a73aa6d">
<hr/>
<img width="1728" alt="Screenshot 2023-09-11 at 11 30 07 PM" src="https://github.com/ethanszeto/network-builder/assets/41793762/98349188-a458-47fe-9a62-8e2e9acf8135">
<hr/>
<img width="1728" alt="Screenshot 2023-09-11 at 11 29 56 PM" src="https://github.com/ethanszeto/network-builder/assets/41793762/e59065d1-acfb-4cb5-b361-fd69f70acba6">
<hr/>

# Topics
Cookies, Routers, Controllers, Models, Views, Environment Variables, Containerization, Authentication, Authorization, Error Handling, Localhost, Database Accessors
<hr/>

# Softwares and Programs
NPM, JWT, MongoDB, Mongoose, Express, Nodemon, EJS, HTML, CSS, JS, JSON, Git, Github Desktop, Docker, VS Code
<hr/>

# Lesson Plan
Lesson 1:
- Welcome to the team! In this lesson we will go over who we are, our role in the larger club, and some things for you to get started. We will set up your github account, install Github Desktop, VS Code, Docker Desktop, and NPM. These are tools we will need to continue through the rest of the lessons.

Lesson 2:
- In Lesson 2, we will look at how web projects are made in the industry, and begin to create our own profile manager website from scratch! By the end of this lesson we will have built a simple Docker containerized web application, created a seamless local development environment with NPM, and explored concepts such as committing, pushing, local hosting, servers, and routing.

Lesson 3:
- In Lesson 3, we will learn how to organize our code and connect to a remote database! By the end of this lesson we will have separated our controller files, database accessor, and db connection files, while understanding how these files work together to get data from the database, and return it to the end user.

Lesson 4:
- Now that by lesson 3, we have code that can request and respond with data from the database, we need to find a way to display this data nicer than a raw JSON. We will dive into EJS and CSS to design pages that appeal to the end user. Our profile manager will now have a page where we can see all the users on the website, a page to login, sign up, and view a profile, albeit with a lack of functionality.

Lesson 5:
- In this lesson we will now add functionality to the login, and sign up page, while protecting the profile page from people who are not logged in. We will learn how to send data to a database, how to elicit a response, verify and send data using JWT, send and store web cookies, stay logged in, and use models to verify post data. 
<hr/>

# Teaching Philosophy
Oftentimes, I find that students lack the confidence to contribute to an existing project because there are simply too many files, too many lines of code, and too many patterns at play at once. As one of these students myself, I used to become overwhelmed just by looking at a project directory. When assigned a task, I would not know where to begin, and more specifically, I would not know what was considered “right” in a sense. Therefore, I designed this project in order to take anyone with no experience, to someone who can code with intention. Students should feel confident in their ability to recognize patterns, and extend them to analogous projects. 

This project is intended to teach the full stack: from database accessors to frontend design. However, I take a different approach than most tutorials in teaching the stack. I designed this project to dive right into the full stack, rather than teach frontend, middleware, and backend as separate, distinct ideas. Without this clear cut division between the parts of web development, students can better understand how the ideas tie together at the onset, rather than having to piece together disparate ideas after the learning process. Only after learning the whole picture, can we begin to define and separate concepts in web development. I believe that learning continuity is extremely important when teaching concepts that can be particularly complex. Therefore, each lesson builds upon the previous in an intuitive fashion, calling for more and more sophisticated design patterns that do not feel more sophisticated, but rather feel necessary and meaningful to utilize. 

I also designed this project with beginner friendly languages (HTML, JS, CSS, EJS), while maintaining the essence of industry standard code by using libraries like NPM, Express, Dotenv, and JWT. Therefore, this project will be extremely helpful for those looking for pre-coop experience to bolster their resume. The design choices are all modeled after an industry-level website.

I encourage students to think about the extensibility and adaptability of this code. Although we will have built a network builder application by the end of this project, we can consider how patterns like (router → authentication → controller → accessor) are used in other types of web applications. We begin to see these patterns everywhere in the web, and especially in the NU Sci Magazine website. 
