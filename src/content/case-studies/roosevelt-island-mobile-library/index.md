---
title: "Roosevelt Island Mobile Library — Autonomous Study & Resource Unit"
place: "Cornell Tech Campus"
concept: "Self-Driving Library"
description: "An autonomous service vehicle providing 24/7 book access and soundproof study spaces for the Cornell Tech community."
author: "Shuyi Chen"
type: "service"
geojson: "boundary.geojson"
media:
  - file: "hero-library.jpg"
    caption: "Hero view of the Roosevelt Island Mobile Library showing the MUJI-inspired glass and wood design."
    featured: true
  - file: "site-integration.jpg"
    caption: "A street-level rendering showing the library unit at the Bloomberg Center entrance with its dedicated blue pickup zone."
  - file: "campus-interaction.mp4"
    caption: "A short sequence showing the autonomous library arriving at a virtual stop for book retrieval."
slug: "roosevelt-island-mobile-library"
---

## Summary

The Roosevelt Island Mobile Library is a 24/7 autonomous service deployed at Cornell Tech because there are currently no physical libraries on the campus. The initiative uses two Level 4 low-speed electric cars equipped with automated book lockers and noiseless study pods, making it possible for students to access scholarly materials and study spaces wherever they may be located on the premises. Users can access the service via a smartphone application where they can receive materials from the units or reserve study pods.

## AV Use Case

### What AVs are involved?

A fleet of two Level 4 autonomous electric services units are used. Each unit is equipped with external automated book lockers as well as four noise-cancelling study pods on the inside. These low-speed (maximum speed 25 km per hour) vehicles have high-definition LiDAR sensors, 360-degree cameras, and V2X connectivity systems to ensure safe navigation through the campus pedestrian zones. 

### What are they doing?

These units circulate continuously along the main walking path that links the Bloomberg Center, the Tata Innovation Center, and The House (student housing). Headways are set at 12 minutes during peak hours (8:00 am – 11:00 pm) and move to 25 minutes at night time. There is an application which updates on real time the occupancy level of the units as well as the available books at each unit enabling students to book a study pod prior to their visit or choose a certain stop where they can pick up their books. Furthermore, students who already have a study pod can pick or change the drop-off stop using the app or through the in-pod controls.

### Why here?

The Cornell Tech campus serves as an important center where many students and scholars continuously need academic material. The campus design, which includes a broad linear pedestrian alley with unobstructed line-of-sight capability, is perfect for slow autonomous vehicles. The restricted pedestrian streets of the campus form a geofenced environment with minimal traffic challenges. Moreover, there is currently no physical library in the existing academic buildings, making the idea of an on-demand library vehicle highly attractive.


## Stakeholders

### Who participates?

Cornell Tech is the main sponsor and provider of the necessary infrastructure for this project, namely campus access, electric power supply to the chargers, and the necessary localized learning materials for the fleet. The New York Public Library (NYPL) is the content partner who provides the necessary physical copies of the books, as well as the APIs needed for digital lending and borrowing. The fleet of vehicles and their operation will be done by the private AV operating company like May Mobility and Beep. The remote operation center will be responsible for overseeing the entire operation around the clock. In addition to that, the Roosevelt Island Operating Corporation (RIOC) will be in charge of coordinating the project's operations and ensuring its compliance with the island's safety standards.

### Who is impacted?

Both students and teachers have 24/7 access to sound-proofed study facilities and academic resources. In order to enhance equity, the project makes use of the slow-speed method for people who are physically challenged. Such an approach eliminates the physical barriers associated with conventional static facilities by bringing educational materials and silent study rooms directly to the doorstep of the person. Nevertheless, the project also affects the current library logistics workforce that may lose jobs due to automation. Campus facilities management and security would have to adjust their night activities based on the fleet’s movements and schedule.

### How does the solution use their capabilities?

This solution utilizes the campus of Cornell Tech as a “living lab” in order to conduct real-time data collection that is then analyzed in order to create the most efficient roaming paths for the library based on varying levels of student traffic at different times throughout the year due to academic schedules. The private AV service provider provides a sophisticated remote monitoring system as well as expertise needed for a seamless autonomous driving experience in a crowded pedestrian setting. Moreover, the New York Public Library incorporates their vast circulation system and digital library API into the mobile application, thus facilitating the accurate management and delivery of research documents to the users of the network.

### How does it address their concerns?

To guarantee pedestrian safety, the system ensures that there is the “pedestrian-first” principle in place regarding how the car interacts with other things in the shared space, where the vehicles will give way to any movement and ensure that the speed does not exceed 5km/h. Issues of accessibility and equity have been addressed in the system through the use of the low floor structure of the vehicle as well as automated ramps, which will ensure that disabled students are able to board the cars on their own. In order to address issues of job losses due to automation, a proper retraining program has been put in place, whereby former library logistics workers will be trained to become fleet supervisors and digital resource managers. Lastly, the issue of privacy has been addressed through the banning of facial recognition cameras in the vehicle.

## Relevant Blueprints for Autonomous Urbanism

The following urban design strategies are drawn from the [NACTO Blueprint for Autonomous Urbanism, 2nd Edition](https://www.nacto.org/wp-content/uploads/NACTO_Blueprint_2nd_Edition_Part1.pdf).

### Slow Zones and Shared Space Design:

The proposed project utilizes the principles outlined in the NACTO Blueprint for “Slow Zones and Shared Space Design” in respect of the central spine of the Cornell Tech campus to provide a safe coexistence of students and the autonomous units. The design involves converting the current campus alley into a leveled surface by removing all curbs to create an environment where the autonomous units will move at a maximum speed of 5 km/h following a “pedestrian-first” model. For safety navigation in absence of hard boundaries, the shared space includes certain textures on the ground surface and lighting in the environment.

### Dedicated AV Pickup and Drop-off Zones:

Following the "Dedicated AV Pickup and Drop-off Zones" guideline, the strategy sets up dedicated virtual library stops at the main entrance of the Bloomberg Center and Tata Innovation Center. The loading docks have been defined through a clear demarcation using blue-tinted permeable concrete, which provides high visual contrasts not only for the vehicle sensors but also for the campus community. As part of an effective and safe method for accessing books, each station comes equipped with flush boarding docks with bollards and signage directing the way to automated lockers.

## Methods

### Step 1

- **Tool:** Gemini 3 Flash (Nano Banana 2)
- **Transformation:** Developed the project's visual identity by prompting the AI: "A photorealistic, minimalist autonomous mobile library unit with a MUJI-inspired aesthetic, featuring large glass panels and light wood accents. The vehicle is navigating the modern Cornell Tech campus main alley on Roosevelt Island during a clear morning. Include students interacting with external digital screens and others visible in soundproof study pods inside. --ar 16:9"
- **Result:** A Hero view of the Roosevelt Island Mobile Library showing the glass and wood design.

### Step 2

- **Tool:** Gemini 3 Flash (Nano Banana 2)
- **Transformation:** To ground the proposed design concept in a specific context, an "image-to-image" technique has been used. I provided a real photo of the Bloomberg Center and requested the AI to composite the previously designed mobile library into the scene, maintaining consistent lighting and perspective.
- **Result:** A street-level rendering showing the library unit at the Bloomberg Center entrance.

### Step 3

- **Tool:** Gemini 3 Flash (Veo)
- **Transformation:** Uploaded the composite image as a keyframe and used a text-to-video prompt: "The camera pans slowly alongside the mobile library as it glides quietly down the alley; the vehicle stops smoothly at a blue-marked zone, and a student taps the side screen to retrieve a book."
- **Result:** A short video showing the mobile library stops at the pick-up location and a student is waiting next to it with his item, demonstrating the service's interaction flow.
