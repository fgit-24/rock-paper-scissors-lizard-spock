# Rock Paper Scissors Lizard Spock
Enhanced with the powerful Lizard and the wise Spock, my game offers a delightful twist on the classic 'Rock, Paper, Scissors' game.

It brings added depth and excitement compared to the original version!

![Responsice Mockup](documentation/01-mockup-image.png)
source: [amiresponsive](https://ui.dev/amiresponsive?url=https://fgit-24.github.io/rock-paper-scissors-lizard-spock)


## UX
I endeavored to maintain a clean and minimalist design for my page, yet I was equally committed to ensuring it remained visually appealing and responsive. 

After crafting my wireframe, I diligently brought it to life.

![Color Scheme](documentation/02-color-scheme.png)

Blue is a modern and neutral color that perfectly complements my vision of this classic and expresses it visually.

- 'ffffff' used for primary text.
- '000000' used for secondary text.
- '1681d9' used for button.
- '66abff' used for radient background.
- '376af7' used for radient background.
- '073487' used for headlines.


## Root-Variables
I've used CSS `:root` variables to easily update the global colour scheme by changing only one value, instead of everywhere in the CSS file.

    :root {
        --bg-color: white;
        --ft-color: rgb(7, 52, 135);
        font-size: 1rem;
    }


## Typography
I've used Google Fonts and 'Poppins' in most parts, and 'Oswald' for h1.

### Poppins
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

### Oswald
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

### Icon
[Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer.


## Wireframe
To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Figma](https://www.figma.com/) to design my site wireframes.

### Mobile
 - ![screenshot](documentation\03-wireframe-mobile.png)

### Tablet
 - ![screenshot](documentation\04-wireframe-tablet.png)

### Desktop
 - ![screenshot](documentation\05-wireframe-notebook.png)


# Features
My project is split into three different sections.


## About
Describes what my game is about.
![screenshot](documentation/06-about.png)


## Rules
My 'Rules' section uses a table to provide an easy overview of the rules.
![screenshot](documentation/07-rules.png)


### Game
In the third section I've built the actual game.
![screenshot](documentation/08-game.png)


## Future
Depending on the games success, I might build a mobile app for it in the future.


## Tools & Technologies Used
- [![Markdown Builder](https://img.shields.io/badge/Markdown_Builder-grey?logo=markdown&logoColor=000000)](https://tim.2bn.dev/markdown-builder) used to generate README and TESTING templates.
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![GitHub](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.
- [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) used for hosting the deployed front-end site.
- [![Figma](https://img.shields.io/badge/Figma-grey?logo=figma&logoColor=F24E1E)](https://www.figma.com) used for creating wireframes.
- [![Leaflet](https://img.shields.io/badge/Leaflet-grey?logo=leaflet&logoColor=199900)](https://leafletjs.com) used as a free open-source interactive map on my site.
- [![Font Awesome](https://img.shields.io/badge/Font_Awesome-grey?logo=fontawesome&logoColor=528DD7)](https://fontawesome.com) used for the icons.
- [![ChatGPT](https://img.shields.io/badge/ChatGPT-grey?logo=chromatic&logoColor=75A99C)](https://chat.openai.com) used to help debug, troubleshoot, and explain things.


## Testing
I have tested my deployed website on desktop browsers (Google Chrome and Microsoft Edge) as well as on mobile devices.

Additionally, I have reviewed the HTML, CSS, and JavaScript, and conducted Lighthouse tests for both desktop and mobile.

### Desktop Google Chrome
![Google Chrome](documentation/09-chrome-website.png)

### Desktop Microsoft Edge
![Microsoft Edge](documentation/10-edge-website.png)

### Mobile 
![Mobile](documentation/11-mobile-website.png)

### Lighthouse Desktop
![Lighthouse Desktop](documentation/12-lighthouse-desktop.png)

### Lighthouse Mobile
![Lighthouse Mobile](documentation/13-lighthouse-mobile.png)

### HTML-Validation
![HTML-Validation](documentation/14-html-validation.png)
[HTML-Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffgit-24.github.io%2Frock-paper-scissors-lizard-spock%2F) 

### CSS-Validation
![CSS-Validation](documentation\15-css-validation.png)
[CSS-Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffgit-24.github.io%2Frock-paper-scissors-lizard-spock%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) 

### Javascript-Validation
![JavaScript-Validation](documentation/16-javascript-validation.png)
[JavaScript - Validation](https://jshint.com/)


## Bugs

I can improve my commitments.


## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/fgit-24/rock-paper-scissors-lizard-spock), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://fgit-24.github.io/rock-paper-scissors-lizard-spock)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/fgit-24/rock-paper-scissors-lizard-spock) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/fgit-24/rock-paper-scissors-lizard-spock.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fgit-24/rock-paper-scissors-lizard-spock)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/fgit-24/rock-paper-scissors-lizard-spock)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!


## Credits

For help with my JavaScript, I've watched a video von Youtube from [BroCode](https://www.youtube.com/watch?v=3uKdQx-SZ5A), but my version is much more advanced and complex.


## Content

| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files ||
| [Font Aweseme](https://fontawesome.com/) | Source for my icon | site for icons and fonts ||
| [Google Fonts](https://fonts.google.com/) | Source for my fonts | site for icons and fonts ||
| [Youtube](https://youtube.com) | Inspiration | platform for videos ||
| [BigBangTheory-Fanpage](https://bigbangtheory.fandom.com) | Images | information site about the famous TV series ||
| [HTML-Validator](https://validator.w3.org/) | Validation | tool for HTML-Validation ||
| [CSS-Validator](https://jigsaw.w3.org/css-validator/validator.html.en) | Validation | tool for CSS-Validation ||
| [Javascript-Validator](https://jshint.com/) | Validation | tool for JavaScript-Validation ||


## Media

Source for my Pictures:
[BigBangTheory.fandom.com](https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock)


## Acknowledgements

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for his support throughout the development of this project.