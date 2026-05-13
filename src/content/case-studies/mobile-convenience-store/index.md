---
title: "Autonomous Mobile Retail Network"
place: "Roosevelt Island"
concept: "Mobile Convenience Store"
description: "A low-speed autonomous retail vehicle network operating through shared Red Bus stops on Roosevelt Island."
author: "Zifan Yang"
type: "service"
geojson: "boundary.geojson"

media:
  - file: "hero-board.jpg"
    caption: "Autonomous retail vehicle operating near Cornell Tech and Roosevelt Island Red Bus stops."
    featured: true

  - file: "route-map.png"
    caption: "AV retail circulation route and Red Bus stop network on Roosevelt Island."

  - file: "process-video.mp4"
    caption: "Animation showing autonomous retail vehicle circulation and curbside interaction."
slug: "mobile-convenience-store"
---

## Summary

The proposed solution includes an autonomous retail vehicle system traveling in the loops between Tram Plaza, Cornell Tech, Southpoint Park, and Four Freedoms Park located on Roosevelt Island. In contrast to conventional stationary services like shops or grocery stores, the proposed solution will include autonomous retail vehicles delivering snacks, groceries, beverages, and essential products to pedestrians in the area.

The proposed solution addresses the problem of service provision at Roosevelt Island. Though the area is popular among tourists and Cornell Tech students, retail services are rather sparse, particularly during the late night when dining establishments on the campus close down. Moreover, the southern area of Roosevelt Island includes low vehicle traffic, simplistic loop roads, and pedestrian-heavy environment, making this area suitable for deploying the system.

While the traditional view of autonomous technologies implies their use strictly as means of transport, the proposed idea is exploring how autonomous systems can be utilized as platforms of urban service infrastructure.

## AV Use Case

### What AVs are involved?

The solution would require Level 4 autonomous electric vehicles operating at low speed (15 mph). These vehicles will feature refrigerated storage, vending systems, digital displays for ordering purposes, and locker boxes for pick-ups.

The proposed solution will initially feature a fleet of 4-6 autonomous retail vehicles operating continuously along Roosevelt Island’s North Loop Road, West Loop Road, South Loop Road, and East Loop Road between Tram Plaza, Cornell Tech, Southpoint Park, and Four Freedoms Park. The vehicles would operate 24 hours a day, with increased nighttime frequencies near Cornell Tech after the campus dining establishments close.

The vehicles will be geofenced to Roosevelt Island's loop road system and navigate via sensors (LIDAR, cameras, radar), communication devices, and V2X technology. The autonomous retail vehicles will not have any crew members.

### What are they doing?

The vehicles will be circling between the destinations on Roosevelt Island's loop roads throughout the day and night.

The autonomous retail vehicles would stop only at existing Roosevelt Island Red Bus stops located along the loop road system.

Users will be able to communicate with the autonomous system using two different methods:

- app, where users will locate the closest vehicle, reserve goods, and select the pickup point;
- onboard vehicle display, which allows users to make purchases.

As autonomous vending machines, convenience stores, and delivery robots, the proposed solution would provide both walk-up and delivery services.

Unlike the ordinary retail vehicles, which will pull over to any street segment, autonomous retail vehicles will operate only at designated curb spaces that were previously used for Roosevelt Island Red Bus stops. In the daytime, autonomous vehicles will operate on the basis of short-term stops in order to prevent congestions and enhance pedestrian comfort. At nighttime, when the need to purchase rises, the stops would be made longer, particularly near Cornell Tech, in order to provide additional convenience in accessing goods. Average stop duration will last for 1-2 minutes during the day and up to 5 minutes at nighttime.

### Why here?

The reasons for selecting the site as an appropriate one for deploying the proposed system are as follows.

First, though there is high pedestrian activity on Roosevelt Island from tourists and Cornell Tech students, there is limited access to services that would satisfy the need of pedestrians in food and products. Cornell Tech students have no access to dining facilities after the evenings, and visitors often have to leave the area in order to get some products.

Second, since the site has lower traffic flows and more simplified circulation patterns, it is a good candidate for testing low-speed autonomous vehicles. Finally, the solution would be implemented through the transformation and enhancement of the existing island's infrastructure, particularly curb and roadway infrastructure.

## Stakeholders

### Who participates?

The list of stakeholders participating in the deployment of the proposed autonomous solution includes the following entities:

- Roosevelt Island Operating Corporation (RIOC);
- Cornell Tech;
- NYC Department of Transportation;
- operators of the platform;
- local retailers and food vendors;
- operators of logistics and ordering apps.

Cornell Tech can contribute to the implementation of the solution with its assistance in conducting research studies, data analysis, and piloting autonomous technologies on campus. RIOC could also participate in developing curb space and managing roadway infrastructure.

### Who is impacted?

The proposed system will be of great use for Cornell Tech students as it will provide them with convenient food and convenience store access. Residents will get an opportunity to conveniently purchase products even without going to the north part of the island. Tourists and waterfront visitors will also be provided with the option of purchasing snacks, drinks, and other convenience goods closer to Southpoint Park and Four Freedoms Park.

The solution may affect local businesses as it will redistribute the functions of the curb infrastructure. It also raises issues related to accessibility in terms of smartphone usage for ordering.

### How does the solution address concerns?

The proposed solution avoids any conflicts between pedestrians and vehicles by operating the latter only on the streets of Roosevelt Island and excluding sidewalk circulation. Existing Red Bus stops can be repurposed and reused in order to implement a mobility-retail node concept for autonomous vehicles. The proposed solution also includes a walk-up purchasing model to minimize dependence on smartphones and ordering applications.

Moreover, the proposed solution does not involve sensitive user data in the form of facial recognition or personal tracking.

Finally, the proposal will also serve the interests of elderly residents, tourists not familiar with apps, and those lacking smartphones.

## Relevant Blueprints for Autonomous Urbanism

The following urban design strategies are drawn from the [NACTO Blueprint for Autonomous Urbanism, 2nd Edition](https://www.nacto.org/wp-content/uploads/NACTO_Blueprint_2nd_Edition_Part1.pdf).

### Shared Mobility Nodes

The proposed solution repurposes existing Red Bus stops into shared mobility-retail nodes for autonomous retail vehicles. Thus, there will be no need to construct any new infrastructure for autonomous systems.

Several key elements of existing infrastructure (curb space, bus shelter, etc.) will have to be adapted to autonomous vehicles. For instance, selected Red Bus stops would include painted curbs with pickup signage and digital wayfinding system with vehicle arrival schedules and instructions.

### Slow-Speed Shared Streets

In order to create more comfortable walking conditions, vehicles will move only on the loop roads of Roosevelt Island, moving slowly and yielding to pedestrian crosswalk activity near parks, entrance zones to Cornell Tech, and waterfront walkways. Existing roadway infrastructure remains unaltered except for the introduction of low-speed signage and markings around pedestrian-heavy areas near Cornell Tech and Southpoint Park.

### Dynamic Curb Management

During busy daytime periods, autonomous retail vehicles will implement a strategy of short-term stops at selected curb spaces. At night, vehicles will have extended stops near Cornell Tech in order to deliver food and convenience products for the students of the college.

## Broader Implications

The proposal suggests looking at retail from the perspective of a mobile and platform-based urban service. Contrary to common views implying the exclusive role of autonomous technologies in transport purposes, this proposal tries to explore how they can fit into infrastructure of urban areas.

## Methods

### Step 1

- **Tool:** Google Maps + geojson.io
- **Transformation:** The initial step of creating the project implied identification of a problem in Roosevelt Island area. The latter was located in the loop of Tram Plaza, Cornell Tech, Southpoint Park, and Four Freedoms Park. In order to deploy autonomous retail vehicles, existing loop roads and curb stops had to be mapped and analyzed.

  GeoJSON boundary was developed in order to illustrate the location of the study site with a focus on the southern part of the island, which is characterized by high pedestrian flow but limited retail infrastructure.

- **Result:** As a result, the maps illustrating route and site of the planned autonomous retail vehicles have been created.

### Step 2

- **Tool:** ChatGPT + image rendering tools
- **Transformation:** To visualize the project, AI-generated images of autonomous retail vehicles on Roosevelt Island's loop roads had to be created. Images should represent the reality of the area, thus the prompts included Roosevelt Tech students, existing Red Bus stops and facilities, curbside pickup process, and natural environment of Roosevelt Island. Several iterations of prompts had to be generated in order to create coherent images of the same vehicle at various curbside interaction types.

- **Result:** Photographical images of curbside interaction, app-based pickups, and night retail services for Cornell Tech students have been created.

### Step 3

- **Tool:** Vidu AI
- **Transformation:** In order to illustrate the process visually, a short video has been generated. In the video, an autonomous retail vehicle approaches Roosevelt Island Red Bus stop near Cornell Tech, and the vehicle stops at the stop where Cornell Tech students come closer for curbside interaction. Several iterations of prompts were used in order to create realistic videos with good urban design aesthetics.

- **Result:** An animated video of autonomous retail activity on Roosevelt Island has been generated.