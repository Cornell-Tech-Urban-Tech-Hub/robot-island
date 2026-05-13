---
title: "Main Street AV road planning"
place: "Roosevelt Island main street, Motorgate Garage"
concept: "Shared AV and Pedestrian Street"
description: "Expanding public footpath for a shared space for pedestrians using AV."
author: "Zihan Dong"
type: "passenger"
geojson: "boundary.geojson"

media:
  - file: "MainStreet_PassengerAV_View.png"
    caption: "Street view of Shared Footpath with Passenger AV in action."
    featured: true

  - file: "PassengerAV.png"
    caption: "A top, side and front/rear view of the Passenger AV."

  - file: "Freight_AV_chassis.png"
    caption: "A top, side and front view of the Freight AV chassis."

  - file: "ParcelLocker_AV.png"
    caption: "Parcel Locker AV consist of two locker cabinet mounted on top of the Freight AV chassis."

  - file: "MainStreet_ParcelLockerAV_View.png"
    caption: "Street view of residents collecting parcels from Parcel Locker AV."

  - file: "Motorgate_FreightAV_View.png"
    caption: "A Motorgate view of the Freight AV chassis in action."
slug: "shared-road"
---

## Summary

Roosevelt Island is currently facing severe traffic issues, such as insufficient bus services and double parking on Main Street. This case study aims to use AVs to substitute Red Buses and trucks to free up the Main Street of Roosevelt Island. In this case study, curbs of roads shall be removed, and pedestrians and AVs will share the same road. Private cars and trucks shall not be allowed to enter Roosevelt Island's interior but must park or dock inside the Motorgate Garage.

## AV Use Case

### What AVs are involved? 

This case study uses a mixed fleet of passenger and freight AVs. All vehicles feature Level 4 autonomous driving capabilities and are strictly geofenced within Roosevelt Island. The passenger AVs can carry 8 to 12 people, while the freight AVs are roughly the size of a Ford Transit Connect. The freight vehicles can be modularly swapped into two forms: a parcel delivery unit with lockers that drives around apartment buildings for package collection, and a standard cargo unit designed to carry large items like furniture and grocery supplies. 

The passenger fleet consists of 20 vehicles running on continuous loops and on-call, while the freight fleet operates with 25 vehicles. Additional business-specific vehicles can be requested on demand; for example, USPS can request their own delivery vehicle. The AVs operate under dynamic speed limits. While traveling on standard separated roads, the AVs operate at up to 25 km/h. On the curbless shared footpaths or apartment courtyards, the system strictly caps the speed at 10 km/h. 

### What are they doing?

Private car owners park their vehicles inside the Motorgate Garage and proceed to the ground floor to transfer to waiting passenger AVs. Passengers can assign their destination via a phone app or an in-cab interface. During transit, the system dynamically assigns en-route pickups for ride-sharing if applicable. Passenger AVs operate 24/7, primarily responding to on-demand calls. For maximum accessibility, passengers without the AV app can stand in designated digital parking bays—marked along the street using reflective markers—and wave at an incoming AV to halt the vehicle. Once the passenger AVs exit the shared footpath region, the speed limit raises to 25 km/h on curbed roads.

For logistics, external delivery trucks bypass the ground level entirely. They enter directly from the bridge to unload their cargo at Motorgate's 3rd floor docking hub directly onto freight AVs. Logistics companies drop parcels into either apartment-specific mobile locker AVs or their own business AVs. Local restaurants and grocery stores can also book freight AVs for delivery services. When not active, all AVs will return to their respective levels in the Motorgate Garage to idle or recharge.

### Why here?

The locations chosen for this intervention are the Motorgate Garage and the section of Main Street spanning from the Tramway to the Roosevelt Island Fire Department. This specific section of Main Street features the highest density of residents and the highest concentration of complaints regarding street congestion.

This case study leverages Motorgate's vertical layout to achieve absolute spatial segregation. By dedicating the 3rd-floor bridge-level to freight cross-docking and the 1st floor to passenger transit, the hub cleanly separates logistics from human traffic. This aims to resolve the double parking of delivery trucks and private cars along the roadside by reducing the dwell time of freight AVs on the road and focusing on short-term, targeted parking instead. The passenger AV fleet utilizes high-frequency services transporting smaller volumes of passengers to reduce the last-mile commute problem.

## Stakeholders

1. Government and Public Authorities
The Roosevelt Island Operating Corporation (RIOC), as the governing body, is responsible for the infrastructure transition. This includes repurposing the Motorgate Garage and executing the street redesign.

This plan also requires the New York City Department of Transportation's (NYC DOT) approval for modifying street geometries and altering the legal speed limits to 10 km/h on shared footpaths, ensuring the intervention complies with city-wide safety guidelines.

2. Private Sector and Academic Partners
Cornell Tech can act as the applied technology integrator to develop and manage the Vehicle-to-Infrastructure (V2I) communication network. In addition to managing the on-call dispatch system, Cornell Tech can research and implement a computer vision-based hailing and dynamic docking system for the passenger AVs.

Private mobility companies, such as Zoox, supply the Level 4 hardware. Their passenger shuttle designs are suitable for high-frequency, accessible transit. Simultaneously, companies like Udelv supply the modular autonomous chassis required for the island's freight operations.

Commercial logistics operators like USPS, UPS, and FedEx are required to halt their trucks at the Motorgate instead of entering Main Street. Consequently, local vendors and supermarkets will need to utilize the freight AV fleets for their daily supply chains and targeted deliveries.

### Who is impacted?

The island residents will experience a shift in their daily commuting habits and delivery collection methods.

The public will have to adapt to the island-specific autonomous environment.

The logistics companies will have to transform from point-to-point delivery to hub drop-off operations. Local businesses such as restaurants and markets will have to adapt to the new delivery systems.

The Red Bus drivers will face job displacement.

### How does the solution use their capabilities?

RIOC carries out the regulatory authority to repurpose the Motorgate Garage and Main Street. Cornell Tech provides research access, the V2I communication network, and the dispatch system algorithms. AV providers such as Zoox and Udelv supply the Level 4 autonomous vehicles and the modular freight chassis.

### How does it address their concerns?

Pedestrian safety is ensured by limiting AVs to a 10 km/h limit on shared footpaths and utilizing reflective marker routing. Double parking and traffic congestion are addressed by fencing out external heavy vehicles, eliminating the need for excess street parking. The digital divide is addressed by implementing the computer vision wave-stop system, so passengers do not need a smartphone app to ride the passenger AVs. Displaced Red Bus drivers will be retrained and transitioned into roles like central dispatch operators and on-site accessibility assistants.

## Blueprints

### Low speed design for safety

NACTO's blueprint states that vehicle speed is the primary determinant of crash lethality. It recommends speeds below 25 km/h on standard curbed roads. On the Main Street shared footpath, this system strictly caps all AVs at 10 km/h. This ensures all AVs have sufficient response time and remain non-lethal if an impact occurs.

### Dynamic curbside

NACTO's blueprint envisions a dynamic curbside that allows for efficient roadside drop-offs and pick-ups. Inspired by this concept, this case study integrates the footpath and the tarmac road to expand the public space and eliminate static roadside parking. Embedded reflective markers are also used to enhance self-driving capabilities and mark out designated parking regions for the AVs.

## Methods

### Step 1

- **Tool:** Google Earth
- **Transformation:** Exported a view of the top floor of Motorgate Garage connected to the Roosevelt Island Bridge and photos of Main Street, utilizing specific angles that clearly display the existing physical curbs, the Motorgate structures, and current traffic conditions.
- **Result:** Extracted real-world photos of the street view as base photography.

### Step 2

- **Tool:** ChatGPT, Nano Banana
- **Transformation:** Generated Passenger AV and freight AV chassis using the prompts: 
- "A Level 4 autonomous passenger micro-shuttle, with 4 row seats, seating 8-12 people, the vehicle shall have the width of containing 2 to 3 passenger per row, mid two row seats facing each other, design clean and approachable with a touch of red, with large glass windows, 'no steering wheel', 'no driver seat', wheelchair accessible low floor, soft LED indicators, enlarged golf buggy like design, pure white background, studio lighting, photorealistic automotive rendering. Top, down, side view drawing."

- "A Level 4 autonomous modular freight chassis, roughly the size of a Ford Transit Connect. The flat vehicle base has a minimalist, clean industrial design, the top deck shall have holes for straps for strapping cargo. No driver cabin, pure white background, studio lighting, top down side view drawing."

- "Add two parcel locker pods placed parallel to each other on top of the previous modular freight chassis. White design with a touch of red."

- Adjustments were made to the results of these designs to ensure they met the project's purpose.

- **Result:** Rendered the designs of the Passenger AV, Modular Freight Chassis AV, and Freight AV with the Parcel Locker Pod.

### Step 3

- **Tool:** Nano Banana, ChatGPT
- **Transformation:** Used the images captured from Google Earth and the designs from Step 2 to render real-world images of the AVs in action.

- "This is a street view of Roosevelt Island Main Street, remove all the cars on road, continuous pedestrian paving stones, curbless shared plaza using large concrete tiles, flush surface. Add in reflective cateye markers in replacement of the double yellow line. Add another two lines of reflective cateye markers 3 metres each side of the central reflective marker. Add the vehicle inside passengerAV.png to the street. It should park to the right side of the road with 2 passengers entering the vehicle on the right side of the passenger AV. Add in a cyclist riding in the middle of the street, and then add in a few passengers walking on the plaza."

- "This is another view of the main street of Roosevelt Island, remove all cars on road, continuous pedestrian paving stones, curbless shared plaza using large concrete tiles, flush surface. Add in reflective cateye markers in replacement of the double yellow line. Add another two lines of reflective cateye markers 3 metres each side of the central reflective marker. Add the parcel locker AV to the left of the road, then add a woman picking up a parcel from the parcel locker AV parked beside the road."

- "This is part of the Motorgate Garage on Roosevelt Island, remove all vehicles from this image, then add in several delivery trucks with workers unloading cargo onto the delivery freight AV chassis shown in image freight AV chassis. The freight AV chassis is the size of a Ford Transit Connect, be aware of the size relation between delivery truck, worker, and freight AV chassis."

- Iterations were made to adjust AV proportions, positions, and background distortions.

- **Result:** Generated 3 different views of the designed AVs in action; these images show what the street would look like and how people would interact with the AVs.