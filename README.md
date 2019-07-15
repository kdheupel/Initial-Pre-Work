# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Based on the literature provided, the simple answer to what happens when one hits https://www.techtonic.com is that his/her computer starts to travel into the internet looking for the server that hosts the web site domain known to us as techtonic.com.  The domain name though is really an IP address, which is a bunch of numbers, to designate the server hosting the website.  Once found, the host server will publish the web site we are trying to reach and then a “communication” between our computer and the server will begin; whether it’s just gathering information from the web site, buying a product, registering for an event, posting photos, etc.

## From start to finish, how does data reach you to be rendered in the browser?

Data is held on the domain server whose sole purpose is to deliver content.  In order to do so, computers connected on the Internet communicate in different languages called protocols, which allow them to exchange emails, files, monetary transaction, etc.  One of the most common protocols is HTTP and it’s how computers share information via web pages with each other. The computers transfer this information with binary numbers so to make it understandable to the user, web pages are coded in HTML.  HTML makes data from a server’s web site understandable to the user.

## What code is rendered in the browser?

The primary code rendered in the browser is HTML, but browsers also use CSS, JavaScript, and ES6.

## What is the server-side code’s main function?

The server-side code’s main function is to present data in an understandable and user-friendly format.

## What is the client-side code’s main function?

The client-side code’s main function is get the relevant information from the server in a secure format.

## What is runtime?

My first thought was that “runtime” is how fast the web site loads onto the client’s screen; however, I searched the Internet and learned that “runtime” describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?
I’m going to guess one since a web site looks the same regardless of the browser being used.  If I go to Amazon on firefox, chrome or explorer, the look and function will be the same to me.  I tried to find this on the Internet, but really didn’t understand the discussion.  I thought this link was the closest and the diagram could potentially support my answer given that the client side remains the same regardless of static versus dynamic sites: https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction 

## How many instances of the server-side code are available at any given time?

Again, I need to guess, but I would say several because requests and responses can vary between users visiting the site.  The same link I posed in question seven would seem to support this answer given the “anatomy of a dynamic request”.

## How many instances of the databases connected to the server application are created?

I would guess the number would be infinite, but that seems hard to program.  I looked at Wikipedia and it seems the number of instances will depend on the number of operations to be performed from the database.  See https://en.wikipedia.org/wiki/Database_connection.  However, being new to this terminology, I cannot be 100% sure the article even applies to this question. Logically however, and based on my pre-coding homework, that would seem to make sense.  
