---
title: Hacking an Inadequate Air Conditioner – Part 1
date: "2016-09-08"
---

GitHub Repository: https://github.com/wesleytian/thermostat-pro

It was scorching hot this summer in Amherst, Massachusetts. Especially because my room was on the second floor, the room temperature would often rise to over 100° F during midday. The house I stayed in didn't have a central HVAC (heat-ventilation-air-conditioning) system built into the house so we opted for a window AC that could be inserted into the frame of the window and be plugged into the wall outlet for power. The problem with this AC was that not only did it not have a specific temperature setting, but also that once turned on, you could not turn it off with having to manually turn the dial on the AC. During the day this was not a problem as I could just turn around from my desk and turn the dial. At night, however, there was a problem.

No one enjoys waking up in the middle of the night. What is less enjoyable is being woken up in the middle of the night from the sweating from the heat or shivering from the cold. Suddenly, I realized that a simple solution would be to create a device that could not only sense the temperature but also automate the turning on and off of the air conditioner. Since the air conditioner was plugged into the wall outlet, all I had to do was find a way to control that switch.

As it turns out Etekcity, as well as a handful of other sellers on Amazon, sell a product called a remote outlet switch. ![img](/posts/remote-control-outlet.jpg) This product includes a remote with on and off buttons and a few of the remote outlet switches. The remote's function is being able to control the current that runs through the outlet switch by either closing the current or releasing it. This was the exact thing I needed to make this hack work.

Next, I had to design the device. The device would need to be able to sense the temperature, allow the user to set the temperature, and mimic the remote's signal to control the remote outlet switch. Using Arduino libraries and hardware and a DHT II sensor I was able to create my first prototype. Additionally, it included a WiFi chip, a 433MhZ transmitter, and receiver, and an LCD screen that could display the current temperature, humidity, set temperature etc.

![img](/posts/thermostat-pro-prototype.png)
And to add the programmable part, I used Blynk to add certain widgets that connect to the device through WiFi. ![img](/posts/blynk-screenshot.png) I am now able to see my current room temperature from anywhere using my phone and control the temperature from anywhere as well. The Blynk app additionally includes a graph that shows the change of my room temperature.

Currently, I am working on my own application that will support this device. Using it, you will be able to set different time intervals and control a myriad of other settings such as short cycle duration, being able to use the heat index instead of temperature, and the hysteresis range. If you work from 9-5 Mon-Fri, then you will be able to set a specific temperature or turn off your AC for those times. The app allows you set an infinite number of intervals making it superior to its competitors.

![img](/posts/ionic-screenshot.png)
![img](/posts/ionic-screenshot-2.PNG)

This is a very useful device for managing your room/house temperature and can even extend to an unlimited range of uses. It can be used to control a humidifier, fans, heaters, or other types of temperature regulating appliances that can be powered by a wall outlet. This device can save your electricity bills, protect foods from perishing, keep rooms from becoming moldy, or just making sure that you get a good night's rest. After all, one-third of our lives is spent sleeping.

Unlike current products that share a similar function with this gadget, my device is separate from the outlet. This is crucial to providing an accurate recording of the room temperature. Many thermostats, even the more advanced ones sense the temperature close to the area where the AC is placed. Therefore, the temperature sensed will always be lower and different from the actual room temperature that you feel. Having the switch and the device separate solves this problem.

The AC:

![img](/posts/ac.jpg)

A few weeks after I created this, Rui found a few other similar gadgets that people made to try and regulate their room temperature. One of them decided to use a breadboard and flimsy wires to control the surge. (Very dangerous!) [Arduino Replaces Bad AC Thermostat, Hacker Stays Cool](http://hackaday.com/2016/08/05/arduino-replaces-bad-ac-thermostat-hacker-stays-cool/) which also bears resemblance to this [Arduino Controlled Air Conditioner](http://hackaday.com/2015/06/11/arduino-controlled-air-conditioner). Both of which requires the person to set the desired temperature by walking up to the AC and turning a knob. I also would not recommend tampering with the AC itself because 120v can kill you! All in all, I think that the best solutions to some things require a well-balanced incorporation of both hardware and software. Stay tuned for newer versions of the WiFi Remote Outlet Thermostat!

[See part 2 here](/posts/ac_hack_2/)