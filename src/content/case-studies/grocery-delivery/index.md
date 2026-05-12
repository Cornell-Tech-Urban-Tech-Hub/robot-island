---
title: "Grocery Delivery Circuit — Autonomous Door-to-Door System"
place: "Main Street"
concept: "Grocery Delivery"
description: "A neighborhood grocery delivery system using autonomous vehicles with temperature-controlled storage."
author: "Clayton Lin"
type: "freight"
geojson: "boundary.geojson"
media:
  - file: "hero-image.jpg"
    caption: "Resident waiting beside the autonomous grocery delivery vehicle to collect groceries from the assigned locker"
    featured: true
  - file: "street-view.jpg"
    caption: "Street-level view of the autonomous grocery delivery vehicle operating on Main Street"
  - file: "side-view.jpg"
    caption: "Side view of the six-locker autonomous grocery delivery vehicle design"
  - file: "product-callout-diagram.jpg"
    caption: "Annotated product rendering showing the vehicle’s main components and functions"
slug: "grocery-delivery"
---

## Summary

This project explores a grocery delivery system using autonomous vehicles in a residential neighborhood along Main Street. Instead of residents traveling to grocery stores themselves, small electric AVs deliver groceries directly to apartment buildings and residential entrances.

Residents place grocery orders through a mobile app, and the system combines nearby orders into shared delivery routes. The goal is to make grocery access easier in everyday life, especially for elderly residents and people with limited mobility, while also reducing the number of delivery vehicles on the street.

The project focuses on neighborhood-scale delivery instead of large citywide logistics. By using smaller low-speed vehicles and coordinated delivery routes, the system creates a more efficient and pedestrian-friendly approach to urban grocery delivery.

---

## AV Use Case

### What AVs are involved?

The system uses a fleet of 3–5 small, low-speed Level 4 autonomous delivery vehicles designed for neighborhood grocery transportation. Each vehicle includes:

- Refrigerated and ambient temperature-controlled storage  
- Secure locker compartments unlocked through a mobile verification system  
- Different locker sizes for different grocery orders  
- Real-time tracking and coordinated routing systems  
- Exterior display screens for user notifications and pickup information  

The vehicles travel at around 20–25 km/h and operate daily between 8 AM and 9 PM. Each vehicle serves a short residential delivery loop along Main Street and nearby apartment buildings.

The vehicle is designed around a six-locker multi-user storage system instead of one large shared storage space. Smaller lockers (01, 02, 05, and 06) are designed for smaller grocery orders such as drinks, vegetables, milk, snacks, or frozen items, while larger lockers (03 and 04) are designed for larger household grocery orders and dry goods. Refrigerated and ambient storage zones are separated to support different food temperatures during delivery.

All grocery pickup activity happens on the right side of the vehicle, facing the sidewalk and curbside pickup zone instead of the traffic lane. This allows residents to always stand in a safe street-side position while collecting groceries. When the vehicle arrives, residents receive a mobile notification with a verification code. After verification, only the assigned locker door opens, allowing users to safely collect their groceries while protecting the privacy and security of other residents’ orders.

---

### What are they doing?

Residents order groceries through an app and select a delivery time window. The system groups nearby orders together and sends them through one shared delivery route instead of separate point-to-point trips.

The vehicles stop briefly near apartment entrances or designated curbside delivery zones. Residents receive a notification when the vehicle arrives and can go downstairs to collect their groceries from the assigned locker compartment. They can also choose a contactless pickup option.

Unlike services such as Uber Eats, this system does not use one vehicle for each order. One vehicle trip can serve multiple households at the same time, making the system more efficient and reducing unnecessary traffic in residential areas.

Vehicles complete neighborhood delivery loops approximately every 15–20 minutes depending on order demand and traffic conditions.

---

### Why here?

Main Street is a good location for this system because it is mainly a residential area with many apartment buildings located close together. This makes it possible for one vehicle to serve many residents within a short distance.

The area also includes local grocery stores and convenience stores that can directly connect to the delivery network. This supports fast and reliable grocery delivery without depending completely on large outside logistics systems.

In addition, the streets are relatively simple, traffic volumes are lower compared to major roads, and travel distances are short. These conditions make the area suitable for testing low-speed autonomous delivery vehicles safely and efficiently.

The neighborhood also has many elderly residents and people who rely on walking or public transportation for daily activities, making grocery accessibility an important community need.

---

## Stakeholders

### Who participates?

Local grocery stores prepare and supply grocery orders. The autonomous vehicle company manages the vehicle fleet, routing systems, and remote monitoring operations. The local island authority (RIOC) manages curb space, signage, and delivery infrastructure. Residents use the system through a mobile app.

Technology providers support vehicle software, routing systems, and mobile verification systems used for locker access.

---

### Who is impacted?

Residents benefit from easier grocery access, especially elderly people and residents with limited mobility. Local grocery stores may receive more customers because delivery becomes more convenient and accessible.

At the same time, some traditional delivery jobs may be affected as the system becomes more automated. However, new jobs related to fleet monitoring, logistics coordination, and maintenance may also be created.

The project also affects pedestrians, cyclists, and drivers because the system changes how curb space and residential streets are used.

---

### How does the solution use their capabilities?

Local stores provide grocery inventory and prepare orders for delivery. The AV operator manages vehicle routing, movement, charging, and remote monitoring. Technology providers support routing software and locker verification systems.

RIOC supports the project through curbside regulations, painted loading zones, and smart curb infrastructure. Residents interact with the system by placing grocery orders, receiving notifications, and unlocking assigned locker compartments through mobile verification.

---

### How does it address their concerns?

Food quality is protected through separate refrigerated and ambient storage compartments. Privacy and theft concerns are addressed through secure locker compartments that only open for the correct user after mobile verification.

Safety is improved through low-speed vehicle operation, planned curbside stopping areas, predictable delivery behavior, and a right-side pickup system that keeps residents on the sidewalk side of the vehicle during grocery collection. Dedicated curbside delivery zones reduce double parking and improve traffic flow.

The project also reduces the number of delivery vehicles operating independently on neighborhood streets by combining multiple grocery orders into shared routes.

Possible job impacts can be reduced by shifting some delivery-related work toward logistics coordination, remote operations, and system maintenance.

---

## Blueprints

### Flexible Delivery Zones

Inspired by NACTO’s “Flex Zones” and “Curbs for Access” principles, this project treats curb space as flexible infrastructure for short-term delivery activity instead of long-term parking. Dedicated curbside delivery zones are added near residential entrances so autonomous vehicles can stop briefly without blocking traffic or interfering with pedestrians.

The delivery zones include painted curb markings, pickup signage, and smart curbside pillars with digital notification systems. These features create clear and predictable stopping behavior for AVs while supporting fast grocery pickup activity.

By treating the curb as a shared public resource, the system supports more efficient neighborhood-scale freight movement while improving the overall use of street space.

---

### Low-Speed Residential Streets

Based on NACTO’s “Streets for Safety” framework, the project prioritizes low-speed vehicle operation to create a safer and more comfortable residential street environment. Autonomous grocery vehicles travel at around 20–25 km/h and operate within the existing street layout without requiring major street reconstruction.

The slower speed improves visibility and reaction time while reducing possible conflicts between vehicles, cyclists, and pedestrians. The system also introduces clearer pickup areas and predictable stopping locations to improve pedestrian safety near apartment entrances.

Instead of prioritizing fast vehicle throughput, the street is designed around everyday residential life, accessibility, and human-scale movement.

---

### Coordinated Routing System

Inspired by NACTO’s ideas about managing future streets and human-scaled urban freight systems, the project uses coordinated neighborhood delivery routes instead of independent point-to-point delivery trips.

Nearby grocery orders are grouped together to reduce unnecessary vehicle movement and curb congestion. Real-time routing systems help vehicles adapt to traffic and street conditions while maintaining efficient circulation through residential blocks.

This approach creates a more connected and efficient freight network where fewer vehicles can serve more households while reducing traffic pressure and improving the performance of the street.

---

## Methods


### Step 1

- **Tool:** Midjourney + Google Maps + ChatGPT  
- **Transformation:** First, I used Midjourney to render the 3D design of the autonomous grocery delivery vehicle. I iterated the vehicle design more than 10 times to refine its form, proportions, locker layout, screen position, lighting, and overall visual style. After the vehicle design became more stable, I took screenshots of Main Street from Google Maps to capture the real street environment, including apartment entrances, curbside space, street width, traffic conditions, and overall neighborhood character. Then I used ChatGPT to place the vehicle into the real street-view context and described the grocery delivery interaction in detail, including refrigerated and ambient storage zones, secure locker access, different locker sizes, curbside stopping behavior, and how residents collect groceries from the vehicle.  
- **Result:** Generated a realistic hero image showing the autonomous grocery delivery vehicle stopping on Main Street while a resident interacts with the vehicle and collects groceries from a secure locker compartment.

---

### Step 2

- **Tool:** Google Maps + ChatGPT  
- **Transformation:** I took another screenshot from Google Maps to use as the base street image. Then I provided ChatGPT with written requirements describing how the vehicle should move and operate within the real Main Street environment, including driving direction, low-speed behavior, curbside stopping position, relationship to traffic, pedestrian interaction, and how the AV should fit into the existing residential street. I iterated the image more than 5 times to correct visual mistakes such as unrealistic vehicle movement, incorrect street scale, inaccurate curb positioning, and unclear delivery interactions.  
- **Result:** Produced a street-view image showing how the autonomous grocery delivery vehicle could safely travel and operate within the real neighborhood environment.

---

### Step 3

- **Tool:** ChatGPT  
- **Transformation:** I created the side-view image by writing detailed text requirements for ChatGPT. I asked ChatGPT to generate a clean side view of the same autonomous grocery delivery vehicle based on the street-view image, while keeping the six-locker layout clear and visible. I described the exact locker arrangement, including smaller lockers 01, 02, 05, and 06, and larger lockers 03 and 04 in the middle. I also refined the image to remove the user and focus only on the vehicle design from the side.  
- **Result:** Produced a side-view image that clearly shows the vehicle’s six-locker storage layout and overall form.

---

### Step 4

- **Tool:** Figma + ChatGPT  
- **Transformation:** I first used Figma to create a simple product callout diagram by placing labels and lines on top of the vehicle rendering to explain the main components and functions. These included the sensor suite, interactive display, status light bars, modular cargo doors, electric chassis, and locker system. Then I asked ChatGPT to generate a more refined version of the diagram with cleaner layout, clearer English labels, and a more polished product presentation style.  
- **Result:** Created an annotated product rendering that explains the vehicle’s main design features and system functions in a clear visual format.
