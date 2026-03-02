---
title: "Tram Plaza — Last-Mile Autonomous Shuttle Hub"
description: "An autonomous shuttle hub at Roosevelt Island's Tram Plaza connects aerial tramway passengers to island destinations via a continuous low-speed pod loop."
author: "Robot Island Studio"
geojson: "geo/tram-plaza.geojson"
media:
  - file: "media/tram-plaza-aerial.jpg"
    caption: "Aerial view of Tram Plaza showing proposed shuttle loop and passenger loading zones"
    featured: true
  - file: "media/tram-plaza-street-level.jpg"
    caption: "Street-level rendering of autonomous shuttle at the passenger loading zone"
  - file: "media/tram-plaza-sequence.mp4"
    caption: "Animation showing shuttle arrival, passenger boarding, and departure sequence"
---

## Summary

Tram Plaza is the primary gateway to Roosevelt Island for thousands of daily commuters arriving via the aerial tramway from Manhattan. This case study proposes transforming the plaza into a multimodal autonomous shuttle hub, where a fleet of low-speed electric pods provides continuous last-mile service from the tram station to destinations across the island. The intervention reimagines the plaza as a seamless transfer point — step off the tram, step onto a shuttle — eliminating wait times and reducing dependence on personal vehicles and the aging Red Bus service.

## AV Use Case

### What AVs are involved?

The deployment uses a fleet of eight Level 4 autonomous electric shuttle pods, each seating six passengers with space for two standees and a wheelchair position. The vehicles are low-speed (max 25 km/h), geofenced to Roosevelt Island's road network, and equipped with LiDAR, camera arrays, and V2X communication for intersection coordination. They operate without a safety driver but are monitored remotely by a central operations center.

### What are they doing?

The shuttles run a continuous loop from Tram Plaza south along Main Street to Cornell Tech, and north to the Octagon, with stops at major residential complexes and community facilities. Service runs from 6 AM to midnight, with 3-minute headways during peak commute hours and 8-minute headways off-peak. Passengers board at designated curbside loading zones with level platforms for accessibility. A companion app shows real-time pod locations, but no reservation is needed — the service operates like a horizontal elevator.

### Why here?

Tram Plaza is the single highest-volume pedestrian transfer point on Roosevelt Island, handling over 8,000 daily tram passengers. The plaza's geometry — a wide, flat open space with clear sightlines — is ideal for autonomous vehicle operations. The controlled street network radiating from the plaza has low traffic speeds and volumes, creating a natural geofenced operating domain. The existing Red Bus service is infrequent and unreliable, making the case for replacement compelling.

## Stakeholders

### Who participates?

The Roosevelt Island Operating Corporation (RIOC) serves as the project sponsor and infrastructure owner. The MTA provides integration with the tram and subway systems. Cornell Tech contributes research support and campus access for the southern terminus. A private AV operator (e.g., May Mobility or Beep) provides the vehicle fleet and remote monitoring. NYC DOT issues permits and oversees street modifications.

### Who is impacted?

Daily tram commuters (8,000+) gain reliable last-mile connections. Elderly and mobility-impaired residents of Rivercross, Westview, and Island House — who currently struggle with the walk from the tram — benefit from accessible, on-demand service. Cornell Tech students and staff get a direct campus link. Local businesses along Main Street see increased foot traffic from better-connected visitors. Red Bus drivers face job displacement, requiring transition planning.

### How does the solution use their capabilities?

RIOC contributes its authority over island roads and infrastructure, enabling street modifications without NYC DOT jurisdictional complexity. Cornell Tech provides a living lab for data collection and service optimization research. The MTA integrates fare payment via OMNY, making the shuttle a seamless extension of the transit system. The AV operator brings fleet management expertise and remote monitoring infrastructure.

### How does it address their concerns?

Pedestrian safety is addressed through dedicated AV lanes with physical separation at the plaza and low operating speeds throughout. Accessibility is built into the vehicle design (level boarding, wheelchair positions) and stop infrastructure (tactile paving, audio announcements). Job displacement for Red Bus operators is mitigated through retraining for remote monitoring and fleet maintenance roles. Privacy concerns are addressed by limiting onboard cameras to safety functions only, with no facial recognition and a 48-hour data retention policy.

## Blueprints

### Dedicated AV Pickup and Drop-off Zones

The NACTO Blueprint for Autonomous Urbanism recommends creating clearly delineated zones for AV passenger loading that are separated from pedestrian circulation and other vehicle traffic. At Tram Plaza, this is implemented through a curving curbside lane along the plaza's eastern edge, with two flush-level boarding platforms protected by bollards. The lane is surfaced in blue-tinted permeable concrete to visually distinguish it from pedestrian areas. Wayfinding signage and ground-level lighting guide tram passengers directly to the loading zone. The design ensures zero conflict between shuttle operations and the heavy pedestrian flows exiting the tram station.

### Slow Zones and Shared Space Design

The Blueprint recommends designating low-speed shared zones where AVs operate at walking speed among pedestrians. The central portion of Tram Plaza is redesigned as a shared space where shuttles travel at 5 km/h maximum, yielding to all pedestrian movement. The shared zone uses continuous level surfaces (no curbs), tactile ground patterns, and subtle bollard placement to guide shuttle paths without creating barriers. This approach transforms what is currently an underused asphalt area into an active public space where people and autonomous vehicles coexist safely.

## Methods

### Step 1

- **Tool:** Midjourney v6
- **Transformation:** Generated concept imagery using the prompt: "aerial view of a small urban plaza with autonomous electric shuttle pods, loading zones with blue pavement markings, pedestrians walking, modern minimalist architecture, Roosevelt Island New York, golden hour lighting, urban planning visualization --ar 16:9 --v 6." Iterated three times, adjusting the prompt to reduce vehicle scale and increase pedestrian density for a more human-centered composition.
- **Result:** Produced a high-resolution aerial concept image showing the plaza layout with shuttle loop, used as the featured hero image for the case study.

### Step 2

- **Tool:** Adobe Photoshop + Google Earth Studio
- **Transformation:** Exported a Google Earth Studio flyover frame of the actual Tram Plaza site, then composited the Midjourney shuttle renderings onto the real aerial photography. Matched lighting direction, added shadows, and color-graded to integrate the fictional elements with the real site context. Used layer masking to preserve existing trees and street furniture.
- **Result:** Created a photorealistic street-level composite showing autonomous shuttles operating at the real Tram Plaza location, grounding the speculative design in recognizable geography.

### Step 3

- **Tool:** Runway Gen-3 Alpha
- **Transformation:** Used the Photoshop composite as the first frame and prompted Runway to animate the scene: "camera slowly pans right, autonomous shuttle glides forward to loading zone, doors open, passengers step aboard, shuttle departs smoothly." Generated four 4-second clips and selected the best for continuity. Extended to 16 seconds by chaining clips with matched end/start frames.
- **Result:** Produced a 16-second animation showing the full shuttle arrival and boarding sequence, demonstrating the passenger experience at the redesigned Tram Plaza.
