---
title: "AquaPod: Autonomous Micro-Logistics Across the West Channel"
place: "In between Andrew Haswell Green Park and Roosevelt Island"
concept: "Maritime Micro-Logistics"
description: "A fleet of autonomous cargo pods transporting goods across the West Channel between Andrew Haswell Green Park and Roosevelt Island"
author: "Vivien Chang"
type: "freight"
geojson: "boundary.geojson"
media:
  - file: "docking_video.mp4"
    caption: "Eye-level view of park maintenance worker loading equipment onto an autonomous water pod at a floating dock."
  - file: "cargo-pod.png"
    caption: "High-angle wide view of multiple autonomous cargo pods navigating short routes across the West Channel."
  - file: "cargo-loaded.jpg"
    caption: "Close-up low-angle view of a fully loaded autonomous cargo pod transporting specialized materials across the water."
    featured: true
slug: "maritime-micro-logistics"
---

## Summary

AquaPod is a fleet of autonomous amphibious cargo pods operating across the West Channel between Andrew Haswell Green Park and Roosevelt Island. It enables park maintenance teams and service workers to move equipment, deliveries, and waste between the two sites. The system replaces a 10–15 minute land detour with a direct 120–180 meter crossing completed in under two minutes, creating a site-specific logistics network designed for a constrained waterfront and ongoing maintenance needs.

## AV Use Case

### What AVs are involved?

The system uses a fleet of 10 electric autonomous cargo pods operating at Level 4 autonomy within a defined corridor across the West Channel. Each pod moves at a steady 5 mph, allowing safe, low-wake travel in a narrow waterfront area. They run continuously in a loop and recharge through inductive charging built into the docks, so they don’t need manual recharging. Each pod is about 1.5 by 1 meter and can carry up to 150 kilograms. They navigate using a mix of LiDAR, radar, RTK GPS, and computer vision to stay accurately positioned and avoid obstacles. Safety is supported through automatic collision avoidance and the option for remote operator control when needed.

### What are they doing?

The pods run on a fixed shuttle route across the West Channel, covering about 150 meters in roughly 2-3 minutes. They operate daily from 6:00 AM to 10:00 PM, matching park hours. Each pod docks at Andrew Haswell Green Park, carries items across the channel, and docks again on Roosevelt Island before returning. This creates a fast, simple system that replaces manual hauling and avoids longer detours.

### Why here?

The system operates across the West Channel between Andrew Haswell Green Park and Roosevelt Island, a location that works well for three main reasons. First, the two sites are very close but not directly connected, so materials currently need a long detour using the bridge or tram. Second, the West Channel is a narrow, low-traffic waterway, which makes it safe for controlled autonomous vehicles. Third, Andrew Haswell Green Park needs frequent maintenance, so tools, soil, and waste are often moved by hand, which is slow and inefficient. Instead of being a general system, this is designed specifically to solve this local transportation gap.

## Stakeholders

### Who participates?

The system involves coordinated public, academic, and private stakeholders shaping regulation, funding, research, and operations. The NYC Department of Transportation (DOT) regulates safety, geofenced navigation, and waterfront access. The NYC Economic Development Corporation (EDC) supports funding, infrastructure development, and long-term waterfront economic strategy. Cornell Tech conducts applied research on system performance, safety, and human impact, informing iterative design improvements. Autonomous marine technology companies develop and maintain the pod hardware, navigation systems, and charging infrastructure. Fleet operators manage daily logistics including routing, docking coordination, maintenance, and system reliability.

### Who is impacted?

Park maintenance workers experience reduced physical hauling and injury risk, shifting labor from manual logistics to oversight and coordination. This introduces a potential job restructuring and partial displacement risk, depending on whether roles are retrained or reduced. Service and delivery workers benefit from faster cross-water logistics but may face route reconfiguration and labor centralization, as automated infrastructure reshapes delivery networks. Roosevelt Island residents and waterfront users gain improved park maintenance and reduced surface traffic, but may experience reduced informal waterway access due to geofenced operational corridors.

### How does the solution use their capabilities?

The system assigns clear roles based on each stakeholder’s strengths. Park maintenance workers use their on-the-ground knowledge while the pods handle repetitive hauling, allowing workers to focus more on skilled maintenance tasks. NYC DOT and NYC EDC provide oversight, funding, and infrastructure planning to ensure the system is safe, legal, and fairly implemented. Cornell Tech studies system data and real-world use to evaluate performance and improve design over time. Autonomous marine companies build the pods and navigation systems, while fleet operators manage daily routing, maintenance, and operations.

### How does it address their concerns?

The system addresses concerns through safety and control measures. Geofenced routes, remote override, and defined docking zones help meet DOT regulations and limit disruption to the waterfront. For maintenance workers, it reduces physical strain while keeping them in control of their work. For residents and waterfront users, quiet electric operation and limited waterway use help preserve recreation and pedestrian space. For operators, fixed routes and standardized systems make maintenance and operations more reliable. From an equity perspective, the system reduces physically demanding labor for lower-wage workers, but its fairness depends on whether jobs are redesigned and upgraded or gradually reduced over time.

## Blueprints

### Dedicated Micro-Docking Stations

The system includes two docking stations at Andrew Haswell Green Park and Roosevelt Island, functioning as dedicated freight interfaces across the West Channel. Each station uses a stabilized floating platform approximately 12m by 4m, anchored with flexible gangways to accommodate tidal changes and extend the usable waterfront edge. Each dock is divided into three zones: a loading lane for pod alignment and cargo transfer, a buffer zone with railings and safety markings, and an elevated pedestrian path to prevent conflicts. Non-slip decking, high-visibility striping, and LED docking guides structure movement and improve safety. This directly applies the NACTO Blueprint for Autonomous Urbanism concept of the “Flex Zone.” Instead of treating the waterfront edge as a fixed curb, it becomes a flexible space that can change based on different needs—like loading, movement, or public use. This matches NACTO’s recommendation to design streets as dynamic, shared spaces rather than static ones.

### Controlled Low-Traffic Waterway Navigation Corridor

The West Channel is designated as a geofenced autonomous freight corridor between the two docking stations. Autonomous pods operate at low, fixed speeds (3–5 knots) within a clearly bounded navigation lane defined by buoys, digital geofencing, and marked surface controls. This applies the NACTO Blueprint for Autonomous Urbanism principle of “Transit Priority and Dedicated AV Lanes.” The pods are kept within a fixed, low-speed path using geofencing, so they only move in a specific area and at controlled speeds, reducing the chance of conflicts with people walking or using other forms of mobility. This approach also applies to NACTO’s “Stitch” and “Link” street types, where autonomous movement is carefully managed and separated from human activity. The geofencing and clear markings act like a “transit lane” on water. They make the pods’ movement predictable, controlled, and always secondary to safety, preventing random or uncontrolled autonomous movement.

## Methods

### Step 1

- **Tool:** GeoJSON + Google Maps
- **Transformation:** Used Google Maps in combination with GeoJSON boundary overlays to systematically evaluate waterfront conditions between Manhattan and Roosevelt Island. Analysis focused on shoreline accessibility, crossing distance, existing land use, and navigational constraints to determine viable deployment zones for the AquaPod system. Candidate sites were compared based on feasibility for docking infrastructure and autonomous vessel movement.
- **Result:** Selected the West Channel corridor between Andrew Haswell Green Park and Roosevelt Island as the optimal deployment site due to its short crossing distance, low marine traffic congestion, and presence of supportive waterfront edges suitable for lightweight docking infrastructure.

### Step 2

- **Tool:** ChatGPT
- **Transformation:** Used ChatGPT to develop structured Gemini prompts based on the formula Liam taught us in class: subject + visual style + composition + lighting + color palette + technical details. I refined each prompt to define the autonomous cargo pod system in a NYC waterfront context, specify camera framing, set lighting conditions, maintain a cohesive urban color palette, and include clear technical constraints for scale, materiality, and operational realism.
- **Result:** Produced standardized, reusable prompt structures that ensured consistency across generated outputs and improved visual coherence of the AquaPod system across scenes.

### Step 3

- **Tool:** Gemini
- **Transformation:** Used structured prompts generated in Step 2 to produce visual and video outputs of the AquaPod system operating within the selected West Channel environment. Inputs specified autonomous vessel behavior, docking interactions, and waterfront integration within a realistic urban context.
- **Result:** Generated cohesive visual representations of the AquaPod system, accurately depicting autonomous pods, docking stations, and operational logistics embedded in a real-world Manhattan–Roosevelt Island waterfront setting.