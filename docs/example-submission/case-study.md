---
title: "Motorgate Garage — Autonomous Freight Hub"
place: "Motorgate Garage"
concept: "Autonomous Freight Hub"
description: "Converting Roosevelt Island's underutilized parking garage into a 24/7 autonomous delivery hub for last-mile logistics."
author: "Jane Student"
type: "freight"
geojson: "boundary.geojson"
media:
  - file: "hero-image.jpg"
    caption: "Aerial view of Motorgate Garage showing proposed autonomous vehicle loading bays"
    featured: true
  - file: "street-view.jpg"
    caption: "Street-level rendering of delivery robots departing from the garage"
  - file: "site-plan.jpg"
    caption: "Site plan showing circulation paths and loading zones"
---

## Summary

Motorgate Garage is a 1,000-space parking structure built in the 1970s that currently operates at less than 40% capacity due to Roosevelt Island's low car ownership rate. This case study proposes repurposing the garage's ground floor as a centralized autonomous freight hub, where delivery vans and sidewalk robots consolidate packages before distributing them across the island. The intervention transforms underutilized parking infrastructure into a modern logistics facility that reduces delivery vehicle traffic on residential streets.

## AV Use Case

### What AVs are involved?

The deployment uses a two-tier fleet: four Level 4 autonomous delivery vans (Mercedes eSprinter size) that shuttle packages from Manhattan warehouses to the garage, and twelve small sidewalk delivery robots (Starship/Serve Robotics style) that distribute packages from the garage to residential buildings. The vans operate at street speeds with geofenced routes limited to the Queensboro Bridge and Main Street. The robots operate on sidewalks and shared paths at walking speed (max 6 km/h).

### What are they doing?

Delivery vans arrive at the garage every 90 minutes during daytime hours (7 AM - 7 PM), unloading consolidated packages at a dedicated loading dock. Human workers sort packages into delivery robots, which then navigate to residential buildings using sidewalk infrastructure. Residents receive real-time notifications when robots arrive at their building entrance. The system handles mail, groceries, restaurant orders, and e-commerce parcels. Operating hours: vans 7 AM - 7 PM, robots 7 AM - 10 PM.

### Why here?

Motorgate's location at the center of the island makes it equidistant to all residential areas. The garage's existing loading infrastructure and covered space protect packages from weather. The building's low utilization makes repurposing space politically feasible. Roosevelt Island's controlled access (one bridge, one subway) and pedestrian-oriented design create an ideal environment for sidewalk robot operations with minimal street crossings.

## Stakeholders

### Who participates?

Roosevelt Island Operating Corporation (RIOC) owns Motorgate and approves the repurposing. A logistics provider (e.g., Amazon, UPS, FedEx) operates the consolidation hub and robot fleet. Cornell Tech provides research partnerships and data analysis. NYC DOT issues permits for sidewalk robot operations. Building managers coordinate access points for robot deliveries.

### Who is impacted?

All island residents (11,000+) benefit from reduced delivery vehicle traffic and consolidated package delivery. Elderly and mobility-impaired residents gain improved delivery service to their doors. Current garage parkers lose some spaces (though excess capacity exists). Building staff see reduced package room congestion. Delivery workers transition from driving personal routes to hub-based sorting roles.

### How does the solution use their capabilities?

RIOC contributes existing infrastructure (garage space, loading docks) and regulatory authority over island operations. The logistics operator brings fleet management expertise, routing algorithms, and customer service systems. Cornell Tech provides living lab research access and student projects analyzing delivery patterns. Building managers provide secure entry points and coordinate delivery schedules.

### How does it address their concerns?

Pedestrian safety is addressed through slow robot speeds, audible alerts, and human override capabilities. Sidewalk congestion is mitigated by limiting simultaneous robot deployments per route and requiring robots to yield to pedestrians. Privacy concerns are addressed with forward-facing cameras only (no resident recording) and 24-hour data deletion. Job displacement for delivery drivers is addressed through retraining for hub operations and robot maintenance roles.

## Blueprints

### Dedicated AV Loading and Unloading Zones

The NACTO Blueprint for Autonomous Urbanism recommends creating clearly marked loading zones that separate AV freight operations from pedestrian and vehicle traffic. At Motorgate, this is implemented through a dedicated ground-floor loading bay with five parallel berths for delivery vans. Each berth has level loading platforms, automated package conveyors, and overhead lighting for 24/7 operations. The loading zone is accessed via a separate entrance from Main Street with signage and pavement markings that clearly distinguish it from public parking entrances.

### Sidewalk Design for Delivery Robots

The Blueprint recommends designing sidewalks with sufficient width and smooth surfaces to accommodate delivery robots alongside pedestrian traffic. Roosevelt Island's sidewalks are widened to a minimum of 8 feet at key delivery routes, with designated passing zones at building entrances. Tactile paving and painted markings guide robots along optimal paths. Curb cuts at intersections are upgraded to ADA-compliant slopes that also support smooth robot crossing. Street furniture and bike racks are consolidated to maintain clear circulation paths.

## Methods

### Step 1

- **Tool:** Google Earth Studio
- **Transformation:** Exported an orbital camera path around Motorgate Garage, capturing the building from multiple angles at golden hour. Adjusted altitude and field of view to emphasize the garage's relationship to surrounding residential towers and Main Street. Rendered at 4K resolution for maximum detail.
- **Result:** Generated base photography showing the real site context that was used as the foundation for composite rendering in Step 2.

### Step 2

- **Tool:** Midjourney v6
- **Transformation:** Generated delivery robot and van renderings using the prompt: "autonomous delivery robot on urban sidewalk, small wheeled robot with cargo compartment, realistic lighting, photorealistic style --ar 16:9 --v 6." Created separate renders for vans using similar prompts. Iterated on scale and proportion to match real vehicle dimensions.
- **Result:** Produced isolated vehicle renders with transparent backgrounds that could be composited onto the real site photography.

### Step 3

- **Tool:** Adobe Photoshop
- **Transformation:** Composited the Midjourney vehicle renders onto the Google Earth Studio base photography. Added ground shadows using multiply blend mode, matched lighting direction to the base photograph, and color-graded all elements to create cohesive integration. Added motion blur to robot wheels to suggest movement.
- **Result:** Created the final hero image showing autonomous delivery operations at the real Motorgate Garage location, grounding the speculative design in recognizable site context.
