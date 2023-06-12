Cheers Quiz

![Logo](documentation/logo-zen-zone.png)

## About
Cheers Quiz is a website that allows users to learn or polish their language skills. This quiz will be targeted to anyone who wants to be able to have a toast with 10 different nationalities by saying "Cheers".

The site can be accessed by this [link](https://bianca9901.github.io/spanish-quiz/)

![Different screens](documentation/different-screen-devices.png)

---

## User Stories

### **First-Time Visitor Goals:**

 **As a first-time visitor my goal is to find out what this website is about so that I can learn more.**

**As a first time visitor my goal is to know what my current score is so that I know my level. Therefore I take this quiz.**


### **Returning Visitor Goals:**

**As a returning visitor my goal is to repeat the phrases so that I can see if I can get a better score**

**As a returning visitor my goal is to find the Cheers-Quiz’ social media so that I can follow and interact with them.**

**As a returning visitor my goal is to contact the quiz authors so that I can ask further questions or suggest an improvement.**

### **Frequent Visitor Goals:**

**As a frequent visitor my goal is to get a full score so that I know that I memorised all the phrases.**


## Existing features

### Home page general
#### The landing page displays
The logo, 
A description about the quiz.
The quiz
The footer

![Home page](documentation/landing-page.png)

### The logo
Bild

### A description about the Quiz
Bild


#### The Quiz
The quiz section displays a button with the text ‘’start’’ that when pressed will display the first question.
When the first question is displayed, the start question gets removed and the user will be presented with question 1 and 4 alternative answers where only on is correct. After the user has chosen their answer a colour of green will be displayed if tit was guessed correctly, and a colour of red will be displayed if guessed wrong. They will then have the option to click the button ‘’next’’. After they had clicked next, question number 2 and following 4 alternative will be displayed. This time the user will have two options, to select ‘’next’’ button or ‘’restart’’ button. 
If the visitor Finnish all questions their score will be displayed. The visitor gets 1 point for every correct answer with the maximum score of 10.
*
![Class selection section](documentation/class-selection-section.png)


#### The Footer
Has social media icons that when pressed will open up in a new tab. It also has a general email for the quiz authors.![Footer](documentation/the-footer.png)


---

## Features Left to Implement

* A favicon

* A custom 404 page

---

## Technologies used

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
was used for structuring the website.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
was used to style the website.
[Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) was used to get the layout and to get the site responsive on different devices.
[Grid] (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) was used to get the layout and to get the site responsive on different devices.
* [Balsamiq](https://balsamiq.com/)
was used to make the wireframe.
* [Github](https://github.com/)
was used to host the code on the website.
* [Git](https://git-scm.com/)
was used for version control.
* [Visual studio code](https://code.visualstudio.com/)
was used to write the code.
* [JavaScript] (https://developer.mozilla.org/en-US/docs/Web/JavaScript) was used to make the quiz.

---

## Design

* The website has a simplistic modern feel with the main colors Purple, White, Pink and Grey. 

![Color Black](documentation/color-black.png)
![Color White](documentation/color-white.png)
![Color Green](documentation/color-green.png)


### Typography 

I used [Google Fonts](https://fonts.google.com/)  for all text. For the headlines, I used Bebas Neue Regular 400. For paragraphs, I used Raleway Light 300.
#### Bebas Neue
![Bebas Neue](documentation/bebas-neue.png)
#### Raleway
![Raleway](documentation/raleway.png)

### Wireframes

#### I used [Balsamiq Wireframes](https://balsamiq.com/wireframes/) to make a mockup sketch of the layout before starting to code.
![Wireframe](documentation/balsamiq.png)

---

## Testing

### Validator testing

#### No errors were returned when passing through the official [W3C validator](https://validator.w3.org/) for the html. No errors were found when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/validator.html.en) validator for css.

#### HTML
* Homepage 
![Home page Html checker](documentation/homepage-html-checker.png)

* Contact-us page
![Contact page Html checker](documentation/contact-html-checker.png)

* Response page
![Response Html checker](documentation/response-html-checker.png)

#### CSS
![Css error checker](documentation/css-checker.png)

---

## Accessibility and performance scores
I used [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) to get approval that the site is performing well and that it is accessible.

* Home page
![Home page](documentation/home-page.png)

* Contact us page ![Contact-us page](documentation/contact-us-score-page.png)

* Response page ![Respons page](documentation/response-page-scores.png)

---

### Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Navbar | | | | | |
| Home | Click on the "Home" link | The user is redirected to the main page | Yes | Yes | - |
| Schedule | Click on the "Schedule" link | The user is redirected to the schedule section | Yes | Yes | - |
| Membership | Click on the "Membership" link | The user is redirected to the membership section | Yes | Yes | - |
| Contact | Click on the "Contact" link | The user is redirected to the contact page | Yes | Yes | - |
| Footer | | | | | |
| Instagram icon in the footer | Click on the Instagram icon | The user is redirected to the Instagram page | Yes | Yes | - |
| Facebook icon in the footer | Click on the Facebook icon | The user is redirected to the Facebook page | Yes | Yes | - |
| YouTube icon in the footer | Click on the YouTube icon | The user is redirected to the YouTube page | Yes | Yes | - |
| Contact us page | | | | | |
| First name input | Enter the first name | The first name is entered | Yes | Yes | If the user doesn't enter the first name, the error message appears |
| Last name input | Enter the last name | The last name is entered | Yes | Yes | If the user doesn't enter the last name, the error message appears |
| Email input | Enter the email | The email is entered | Yes | Yes | If the user doesn't enter the email, the error message appears. If the user enters not valid email, the error message appears |
| "Send" button in contact form | Click on the "Send" button | The user is redirected to the Response page | Yes | Yes | - |
| Response page | | | | | |
| Response message | The user will be automatically redirected to the home page after 10 seconds | The user is redirected to the home page | Yes | Yes | - |

---

## Bugs

### Solved bugs


### Unsolved bugs

### Mistakes


--- 

## Deployment

I cloned my ongoing codeanywhere repository that was deployed on GitHub. Meaning I copied the GitHub URL link and used these command’s,
```
cd ~/Desktop     -  redirect you to your desktop
cd ciprojects     - redirect you to your folder with the projects
git clone https://github.com/bianca9901/zen-zone.git     - clone your repository
open -a "Visual Studio Code" zen-zone     - open your project in vs code
```

The site was deployed to GitHub pages.
* The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Main Branch

* Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## Local deployment
How to make a local clone of this project.

1. Copy this url https://github.com/bianca9901/zen-zone.git
2. Open terminal.
3. Type ```git clone``` and paste the url.
4. Press enter to create your local clone.

---

## Future improvements

* I did not write my commit messengers correctly in the beggining of the project. However, I fixed my errors when I realized my wrongs. In the future I will improve the overall quality.

---

## Credits

### Content
The icons in the footer and logo were taken from [Font Awesome](https://fontawesome.com/)

To make the code for the box-shadow I used [Css Matic](https://www.cssmatic.com/box-shadow)

I used information and code about Flexbox from [W3schools](https://www.w3schools.com/css/css3_flexbox.asp)

Grid?

I used [Digital Colour Meter](https://support.apple.com/sv-se/guide/digital-color-meter/welcome/mac) for the screenshot of the colors in my website that I demonstrated in this README.md 

---