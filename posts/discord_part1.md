---
title: "Writing a Discord Bot Part 1: The Bot"
date: "2021-12-29"
type: "blog"
---

# Writing a Discord Bot Part 1: The Bot

## Introduction

This will be a two-part beginner's tutorial on how to set up, code, and deploy your first discord bot to your audience. By the end of this first part, you will have the fundamentals on how to make the bot respond to commands given by the user and have it live on your Discord server. In part 2 we are going to dive a little deeper into more advanced features delivering beautifully-formatted responses and adding a small API to add value to your bot.

## Tech stack and Prerequisites

- Python 3.5.3 or higher: to code the functionality.
- [discord.py](https://discordpy.readthedocs.io/en/stable/): will be our API wrapper for discord.
- pip3: to install Python dependencies.

To verify you have both Python3 and pip3 run the following commands:

```bash
python --version
or
python3 --version
```

```bash
python -m pip --version
or 
python3 -m pip --version
```

Depending on how you have set up your environments, you might need to refer to it as python3 or python. If the output of both is something like this, everything should be good!

![Screen Shot 2022-01-25 at 18.05.08.png](/images/discordBotP1/Screen_Shot_2022-01-25_at_18.05.08.png)

If you need help installing either of those, follow these instructions:

For Unix users, you can install both Python3 and pip3 via [Homebrew](https://brew.sh/index_es) with the following command:

```bash
brew install python3
```

Another option is to download Python3 from the [official page](https://www.python.org/downloads/) and then install pip using this [guide](https://pip.pypa.io/en/stable/getting-started/).

Run the commands on the top of this section to verify your installation.

## Getting started

### Create a discord application.

Head to your [discord developer portal](https://discord.com/developers/applications) and sign in with your account. Once in, you should see something like this:

![Untitled](/images/discordBotP1/Untitled.png)

Click the *New Application* button, give your app a name (don't stress too much about the name, you can always change it later), and click *Create*. 

![Untitled](/images/discordBotP1/Untitled%201.png)

Now that we have our app, we want to add a new bot. Navigate to the *bot* tab on the left-hand side menu and click *Add Bot*.

![Untitled](/images/discordBotP1/Untitled%202.png)

Once we have our bot we want to copy the token. It is very important to always keep the token to yourself since it is your access to your bot and its functionality.

![Untitled](/images/discordBotP1/Untitled%203.png)

Now that we have our bot token in our clipboard, let us jump into your favorite editor and bring it to life.

### Code the bot

I am going to use visual studio code, but you can follow along with any editor. 

1. Open a new command line
2. Navigate to the directory you want to save it.
3. Clone the starter code: [https://github.com/elrick97/discord-bot-starter/](https://github.com/elrick97/discord-bot-starter/)

If you have any trouble cloning the repository follow this [tutorial](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

![Untitled](/images/discordBotP1/Untitled%204.png)

On the project directory run the following command on your terminal to install the dependencies (in this case only discord.py).

```bash
pip install -r requirements.txt
or
pip3 install -r requirements.txt
```

If everything went well you should see something like this:

![Untitled](/images/discordBotP1/Untitled%205.png)

Yes, I will upgrade my pip version after this I swear... Anyways now that we have everything set up we can finally get to coding.

Open the folder on your favorite code editor. You will see seven files in the navigator, most of them are to facilitate things when we deploy the finished bot. For now, let us go to **bot.py** and add the following code.

![bot.py (3).png](/images/discordBotP1/bot.py_(3).png)

We will go through each point explaining it in detail.

1. The first point is just to import the libraries discord.py and datetime.
2. Here we are setting the command prefix to be the character **!** (exclamation point), you can set any command prefix you want, any time you want to call a bot command you will have to use it as a prefix. For example the command !time. We are also creating our client instance, which represents the class to interact with the Discord WebSocket API.
3. You want to paste here the bot token you previously copy from your app dashboard in the Discord developer portal. 
4. On the library we are using we can interact with events that happen on our server. Some examples are:
    1. on_ready: this function is called when the bot is ready is up and ready.
    2. on_member_join: this function is called when a user joins the server.
    3. on_typing: called when someone begins typing a message.
    
    And many more for now we are going to use only the on_ready, but feel free to play around with the others. You can find all methods in the [official documentation](https://discordpy.readthedocs.io/en/stable/api.html?highlight=event#discord.on_member_join).
    
5. Not only you can use event and utility methods provided by the API but you can create your own custom commands. Let’s dive and decompose our function for a better understanding.
    1. First we tell our client that the following function will be a command.
    2. We define our **time** function passing **ctx** (context) as the only argument. Context represents the context in which the command is being invoked, comes with a lot of metadata for example author, channel, guild, valid, etc. For further reference check out this [link](https://discordpy.readthedocs.io/en/stable/api.html?highlight=event#discord.on_member_join).
    3. Then we just get the current time with help from the datetime library and return the message in the same context with the **send** method.
6. Finally, we call the **run** method with our **token** to start the bot. It is important to have this method at the end of your code since anything below it will not be executed. 

Before we can test our bot, we need to add it to a server. To do this go back to your app dashboard in your Discord developer portal. 

1. Navigate to URL Generator from OAuth2 menu on the sidebar.
2. Select **Bot** on scopes.
3. Select **Administrator** on permissions (just to simplify the process you can change this later).
4. Scroll down and copy the link.

![Untitled](/images/discordBotP1/Untitled%206.png)

Open the link in a new tab and add the bot to the server you want to test. You have to be the owner of the server to add it, so you might as well want to create a test server.

![Untitled](/images/discordBotP1/Untitled%207.png)

After adding the bot, it should appear on your server offline:

![Screen Shot 2022-01-28 at 14.47.57.png](/images/discordBotP1/Screen_Shot_2022-01-28_at_14.47.57.png)

To bring him to life run the following command on your working directory:

```bash
python bot.py
or
python3 bot.py
```

If you got this message the bot is ready and online on your server!

![Screen Shot 2022-01-28 at 14.49.56.png](/images/discordBotP1/Screen_Shot_2022-01-28_at_14.49.56.png)

Now go test it on your server, type the command **!time** and your bot should answer you back with the current time as shown below.

![Screen Shot 2022-01-28 at 15.01.56.png](/images/discordBotP1/Screen_Shot_2022-01-28_at_15.01.56.png)

Here we conclude this first part of our tutorial. In the second part, we will dive further into commands by adding arguments, implementing an API, delivering embedded messages, and deploying your bot.