--- 
title: "projects"
date: "2020-12-12"
draft: true
---

This is a select collection of projects that I've enjoyed working on. Each section is sorted by reverse chronological order.

---
## Machine Learning
 
### ResNet-18 Dog Breed Classifier
Placed 1st out of 205 students @ University of Michigan's FA18 Intro to Machine Learning (EECS 445) Final Project Competition  
We were assigned to design, implement, and train a deep neural network of our design to classify dog breeds. I played around with many many different designs before settling on some data augmentation (label-preserving transformations) to create more data, `TorchVision.model's` ResNet18 model for transferring weights, and Adam optimization.
- Will upload source code soon.

![img](/projects/project-2-graph.png)

### ASSISTments Longitudinal Data Mining Competition
Placed 3rd out of 74 teams  
"In this competition, participants attempted to predict whether students would choose a career in a STEM field or not, making this prediction using a click-stream dataset from middle school students working on math assignments inside ASSISTments, an online tutoring platform."  
- [Competition Site](https://sites.google.com/view/assistmentsdatamining/home?authuser=0)
- [A summary of how we arrived at our final submission.](/projects/assistments-report.pdf)  
- Invited to present at Educational Data Mining 2018.  
- Ultimate findings from the competition are published [here in the Journal of Educational Data Mining](https://jedm.educationaldatamining.org/index.php/JEDM/article/view/486).  
- Will upload source code soon.

Teammates: [Sam Tenka](https://bohrium.github.io/) and the [Michigan Data Science Team](http://mdst.club/)

---
## Software

### [wesleytian.com](/)  
Built the current site that you're on using React, JavaScript, Google Firebase Realtime Database, Next.js, and remark. I don't usually care for the choice of web technologies or programming languages used, but these libraries allow for quicker rendering and more customizability versus Hugo or WordPress.
- 13,000 views	
- [GitHub Repo](https://github.com/wesleytian/nextjs)

### White Cane
MHacks 11 Submission  
Why use a white can when you can use your phone? We pulled two all-nighters in a row to successfully build a mobile app that helps the visually impaired navigate their surroundings by announcing what is around them and their relative positions to the user in real-time. We used Google Cloud Functions, Google Cloud Vision API, Firebase ML Kit, and Firebase Cloud Storage to build the app.  
- [DevPost](https://devpost.com/software/unblind)

Teammates: [Ben Botvinick](https://benbotvinick.com/), [Anish Mahendran](https://www.linkedin.com/in/anish-mahendran-88432a149/), and [Letao Chen](https://lokto.me/#/)  


### Fashion Filtr

Most Creative Use of Indico API @ HampHack 2017  
Shopping for clothes online is hard. So, we leveraged Indico's deep transfer learning API to learn what your clothing preferences are and filter clothes based on them. We used Bootstrap for the front end, jQuery and Express to scrape websites, and Node.js for our server.  
- Awarded $6000 in API credits
- [DevPost](https://devpost.com/software/fashion-filtr)

Teammates: [Nischal Tamang](https://www.linkedin.com/in/nischal-tamang/) and [Phillip Michalowski](https://www.linkedin.com/in/phillip-michalowski/)  

![img](/projects/fashion-filtr-homepage.png)

### Digital Interview Experience
Place 1st out of 12 Teams @ Fidelity Investments Merrimack Hackathon  
Helped build an Angular app that allows interview scheduling between multiple interviewers and multiple interviewees. Was integrated with Fidelity Investments' Microsoft Outlook client.    
- Presented to 3 Fidelity Investments' SVPs ([Mary Prindle](https://www.linkedin.com/in/marymprindle/), [Srini Purohit](https://www.linkedin.com/in/srini-purohit-a6265316/), and [Chris Melia](https://www.linkedin.com/in/christophermelia/))

![img](/projects/merrimack-hackathon.jpeg)

Teammates: [Mike Super](https://www.linkedin.com/in/mikesuper/), [Akhil Yerra](https://www.linkedin.com/in/akhil-yerra/), and other members of Team Digital Interview Experience 


### RoShamBo God
Humans are notoriously bad at generating random sequences. Due to this known observation, I used Bayesian inference to devise a rock, paper, scissors AI that can predict your moves given a long enough play history. I used Java because that was my go-to programming language at the time.
- [GitHub Repo](https://github.com/wesleytian/roshambo-god)

![img](/projects/bayes.png)

---
## Hardware

### Programmable Window AC Thermostat
I was tired of not being able to set my window AC to a certain temperature (its only settings were low, medium, and high). So, I built a programmable thermostat that attaches and can control any window AC. I used C for the firmware, Blynk IoT platform, Ionic, for the mobile app, and EAGLE for the circuit board design. Thanks to [Associate Professor Rui (Ray) Wang](https://people.cs.umass.edu/~ruiwang/) for his support, lab space, and hardware tools.
- [Blog Post](/posts/ac_hack)
- GitHub Repos for the [firmware](https://github.com/wesleytian/thermostat-pro),
[circuit board](https://github.com/wesleytian/programmable-thermostat-hw),
[mobile app](https://github.com/wesleytian/thermostat-pro-ionic), and
[component libraries](https://github.com/wesleytian/thermostat-pro-library).

![img](/posts/remote-thermostat-v1.0.jpeg)


### Objective2 Headphone Amp
Being obsessed with sound quality at the time, I wanted to obtain a high-quality headphone amp at a low cost. I did some research and used a DIY kit to build the Objective2 headphone amp myself, saving a few hundred dollars.
- [Blog Post](/posts/amp)

![img](/posts/soldering-o2-headphone-amp.jpg)

---
## Other

### The Perfect Pill Bottle
Placed 1st out of 36 teams @ University of Michigan's FA 19 Succeeding at Failing (SI 360) Pitch Competition  
4 min pitch on "The Perfect Pill Bottle" as a low-tech solution for helping curb the opioid crisis. I used a powerful anecdote from my summer living in Manchester, New Hampshire, and seeing the opioid crisis problem firsthand.

![img](/projects/pill-bottle.png)
Presenters: Me and [Ben Welleck](https://www.linkedin.com/in/benwellek/)  
Slides: [Ashley Sin](https://www.linkedin.com/in/ashley-sin/) and [Tiana Colovos](https://www.linkedin.com/in/tiana-colovos/)


### From Human-Level Artificial Intelligence to Superintelligent Artificial Intelligence:​ Scenarios,​ Paths,​ and Counter Arguments
- Philosophy Paper  
- Word Count: 5,987  
- [PDF](/projects/ai-paper.pdf)
>	"The paper as it stands now is a sensible appreciation of the
	singularity issues, that avoids the enthusiasm you often see in this
	area.  It shows extensive reading on the topic, as well as good
	thinking.  Probably it would be a  better paper if the excursions into programming languages and algorithmic complexity were pruned.    
	Computer science can use at least a few people who can
	appreciate and form opinions on the broader issues, you're well on
	your way to being one of those." - [Professor Rich Thomason](https://web.eecs.umich.edu/~rthomaso/), Advisor