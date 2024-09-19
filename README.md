# Electron client for ANANSI 

## What is ANANSI

ANANSI is a hexapod designed for search and rescue operations powered by the ST-Discovery-L475E-IOT01A designed and presented for [AICTE Inventor's Challenge](https://community.arm.com/the-inventors-challenge-2024).

## What is this code?

It is the Electron client used to control the robot and view sensor readings.
It interfaces with the [ANANSI REST API](https://github.com/ShanTen/ANANSI-REST-API) to obtain sensor readings from the sensor cache and POSTs movements to the movement queue. 


The code also contains an embedded UDP server for LiDAR position information which reads the incoming UDP stream from the (raspberry pi zero)[https://github.com/ShanTen/ANANSI-PI-code].

Made with React + TypeScript + Vite + Tailwind CSS

## Networking 

+ Polling /GET SENSOR-DATA from [ANANSI REST API](https://github.com/ShanTen/ANANSI-REST-API)
+ /POST-ing movement data to [ANANSI REST API](https://github.com/ShanTen/ANANSI-REST-API) (if any)
+ dgram UDP server for LiDAR data.
+ mpeg stream for video feed

## Screenshot from application

![](/images/ApplicationScreenshot01.jpg )

> Bro literally nobody is going to read this what's the point dawg 😭
