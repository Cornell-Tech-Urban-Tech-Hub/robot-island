---
title: "Renwick Ruin — Autonomous Emergency Response Staging Base"
place: "Renwick Smallpox Hospital Ruins"
concept: "First-Response Pods"
description: "A fleet of Level 4 autonomous medical response pods staged at the Renwick Smallpox Hospital ruins dispatches island-wide within 90 seconds of a 911 call, transforming a site of historic suffering into a 24/7 life-saving infrastructure node."
author: "Sosai Sho"
type: "service"
geojson: "boundary.geojson"
media:
  - file: "hero-image.jpg"
    caption: "Night rendering: autonomous response pod staged at the illuminated Renwick ruins, awaiting dispatch"
    featured: true
  - file: "dispatch-aerial.jpg"
    caption: "Aerial diagram showing pod coverage radii from the ruins staging base to all residential clusters"
  - file: "site-plan.jpg"
    caption: "Site plan of the Southpoint staging base showing charging bays, supply restocking dock, and esplanade access corridor"
  - file: "ruins-daytime.jpg"
    caption: "Daytime rendering of the co-existence of historic ruin and modern response infrastructure"
  - file: "response-video.mp4"
    caption: "Animation of pod dispatch from ruins base: 911 call received, pod departs, arrives at residential tower entrance"
slug: "renwick-emergency-response"
---

## Summary

The Renwick Smallpox Hospital, a ruin of smallpox hospital on Roosevelt Island's southern end where thousands died without adequate care in the 19th century, becomes the staging base for a fleet of six Level 4 autonomous emergency response pods that cover the entire island within 90 seconds of a 911 call. Each pod carries an AED, portable oxygen, a trauma kit, and a telehealth tablet that connects a bystander to a remote FDNY paramedic while a human ambulance is still crossing the Queensboro Bridge. A site once defined by unreachable care becomes the island's fastest and most reliable lifeline, transforming a landmark of medical failure into a symbol of what urban emergency response can become.

## AV Use Case

### What AVs are involved?

The deployment uses a fleet of six Level 4 autonomous emergency response pods, each roughly the size and form factor of an EasyMile EZ10; a low-speed, fully enclosed electric vehicle with no steering wheel and no safety driver. Each pod is purpose-built for emergency first response: the cargo bay carries a fully stocked AED kit, a portable oxygen unit, a basic trauma and hemorrhage-control kit, and a ruggedized telehealth tablet with a 4G/LTE uplink to FDNY EMS dispatch. Pods are equipped with LiDAR arrays, forward and side-facing cameras, acoustic pedestrian detection, and V2X communication for intersection coordination. The fleet operates in two shifts of three: three pods staged and powered at the Southpoint charging base at all times, three rotating through restocking and deep charging cycles. Total fleet autonomy is 24/7 with no gaps in coverage.

### What are they doing?

When a 911 call is placed anywhere on Roosevelt Island, the FDNY Computer-Aided Dispatch (CAD) system simultaneously alerts both the nearest human EMS unit and triggers an automatic pod dispatch from Southpoint. The pod selects the fastest route between Main Street at a maximum road speed of 25 km/h, and the esplanade pedestrian path at a maximum of 8 km/h with audible alert tones, and arrives at the caller's building entrance within 90 seconds for most island addresses. On arrival, the pod opens its cargo bay and its onboard tablet initiates an automatic video call to the FDNY EMS dispatcher, who guides any bystander through CPR, bleeding control, or oxygen administration until the human ambulance unit arrives. The pod remains on scene until human EMS takes over, then autonomously returns to base for restocking.

### Why here?

The Renwick ruins sit at the geographic near-centroid of Roosevelt Island's residential population, making them close to equidistant from the major residential clusters: Rivercross and Westview to the north, Island House and Manhattan Park in the middle, and the Octagon and Coler Hospital at the far north end. The flat, wide esplanade surrounding the ruins provides the clear sightlines and obstacle-free surfaces that Level 4 autonomous systems require at launch and on approach. The existing path network connecting Southpoint to Main Street gives pods unobstructed access to every building entrance without requiring any new road infrastructure. Crucially, the site sits outside the Main Street vehicle corridor entirely, so the staging base generates no conflict with existing pedestrian or vehicle traffic. And the ruins are already a recognized landmark, meaning the visible presence of the charging base transforms a dark, underused park corner into an active, purposeful civic node.

## Stakeholders

### Who participates?

The Roosevelt Island Operating Corporation (RIOC) serves as the site owner, road authority, and primary project sponsor. RIOC controls island streets and infrastructure without the jurisdictional complexity of NYC DOT, which significantly streamlines permitting. The Fire Department of New York (FDNY), Bureau of EMS, integrates pod dispatch into the existing 911 CAD workflow and provides the remote paramedic staffing for telehealth triage. A private AV operator, likely a purpose-built emergency response startup such as Steer Health or a contracted fleet from a general-purpose operator like Nuro, provides the vehicles, remote fleet monitoring, and maintenance. Cornell Tech contributes as a research partner, hosting data collection and dispatch-optimization research under IRB approval. NYS Office of Parks, Recreation and Historic Preservation reviews and approves all physical interventions at the landmarked ruin site.

### Who is impacted?

Roosevelt Island's elderly population is the primary beneficiary. Roughly 35% of island residents are over 65, and cardiac events, falls, and respiratory emergencies are the leading causes of 911 calls on the island. For these residents, the gap between a 911 call and EMS arrival, currently averaging 8 to 12 minutes due to the Queensboro Bridge bottleneck, can be the difference between survival and death. Coler Rehabilitation and Nursing Care, the long-term care hospital at the island's north end, sees particular benefit: patients who suffer medical events off-campus during outdoor time gain a first-response resource that did not previously exist. Residents of Rivercross, Westview, Island House, and Manhattan Park gain peace of mind and measurable safety improvements. Current FDNY EMS units serving the island face a change in workflow but not a reduction in role. Pods are a complement to human paramedics, not a replacement.

### How does the solution use their capabilities?

RIOC's jurisdictional authority over the island's road network allows pod operating permits to be issued without navigating NYC DOT's standard multi-year approval process. Cornell Tech's presence provides a legitimate IRB framework for outcome data collection (response times, bystander compliance rates, clinical outcomes) and a pipeline of graduate research on dispatch algorithm optimization. FDNY EMS contributes its existing CAD infrastructure as the dispatch trigger, requiring only a software API integration rather than new hardware. The historic preservation office's review process, while adding lead time, ensures the staging base is designed as a reversible installation. All charging infrastructure sits on existing concrete esplanade, with no ground penetration or structural modification to the ruins.

### How does it address their concerns?

Historic preservation advocates' concerns are addressed by design: the charging base uses a modular, ground-mounted canopy system with no attachment to the ruins structure, all cabling is surface-routed and removable, and the visual design of the base is intentionally minimal so that the ruins remain the dominant visual element. Pedestrian safety concerns are addressed through the pod's multi-sensor approach detection, mandatory 8 km/h speed cap on pedestrian paths, and audible approach tones tuned to be audible without being alarming. Privacy concerns are addressed by limiting onboard cameras to navigation and safety functions only, with no facial recognition capability, a 24-hour data retention cap, and an explicit policy that footage from pod cameras is not accessible to RIOC or law enforcement without a court order. Residents Committee concerns about nighttime lighting are addressed by keeping the charging base's ambient lighting at low lux levels, with only the embedded esplanade path corridor lights activating during active dispatch.

## Relevant Blueprints for Autonomous Urbanism

The following urban design strategies are drawn from the [NACTO Blueprint for Autonomous Urbanism, 2nd Edition](https://www.nacto.org/wp-content/uploads/NACTO_Blueprint_2nd_Edition_Part1.pdf).

### Dedicated AV Emergency Access Corridor

The NACTO Blueprint for Autonomous Urbanism recommends establishing clearly defined AV priority corridors that remain unobstructed to enable time-sensitive operations. At Southpoint, the esplanade path running north from the ruins to the Main Street intersection is designated a 10-foot AV emergency access corridor. The corridor is marked with flush-mounted embedded LED strip lights set into the existing paving, which activate only when a pod is actively dispatched; at all other times the path looks and functions identically to a standard pedestrian esplanade. At the Main Street intersection, low retractable bollards rise to clear the pod's path automatically upon dispatch and return to their default position afterward, using the same V2X signal that the pod sends to the traffic management system. The corridor uses continuous flush paving transitions throughout with no raised curbs or speed humps, allowing pods to maintain maximum speed during emergency response without creating trip hazards or obstacles for pedestrians with mobility devices.

### Slow Zones and Shared Space Design

The NACTO Blueprint recommends designating low-speed shared zones at pedestrian-dense locations where AVs operate at walking speed and yield unconditionally to pedestrian movement. This is applied at every residential building entrance on the island. Rather than installing permanent infrastructure at each of the island's 20+ building drop-off points, the system uses the pod itself as the shared space signal: as the pod enters a 100-foot radius of its destination building entrance, its speed automatically drops to 5 km/h, its approach tone shifts to a softer chime, and its external display switches from a navigation mode indicator to a green "arriving" status light visible to building staff. The building entrance zone is surfaced with a continuous level plane with no raised threshold or curb cut required, so that the pod can pull flush to the building entrance and open its cargo bay at the same level as the lobby floor. Tactile ground paving running from the building entrance to the esplanade path indicates the AV approach corridor to visually impaired pedestrians.

## Methods

### Step 1

- **Tool:** DALL-E 3 via ChatGPT
- **Transformation:** Generated the hero image using the prompt: *"Night scene at the Renwick Smallpox Hospital ruins on Roosevelt Island, New York. Gothic stone arched ruins dramatically lit by warm amber floodlights. In the foreground, a small sleek white autonomous medical response pod with a glowing red cross and soft blue LED undercarriage is staged on a smooth dark esplanade path, ready for dispatch. Manhattan skyline glows in the background across the East River. Cinematic photography, golden and cool contrast, 16:9 aspect ratio, photorealistic."* Iterated twice, adjusting the prompt to reduce the pod size relative to the ruins and increase the drama of the skyline backdrop.
- **Result:** Produced the featured hero image establishing the core visual identity of the proposal, capturing the juxtaposition of 19th-century Gothic stone and 21st-century autonomous emergency infrastructure.

### Step 2

- **Tool:** DALL-E 3 via ChatGPT
- **Transformation:** Generated the site plan and aerial coverage diagram using separate prompts focused on diagrammatic clarity. For the aerial: *"Clean urban planning diagram, bird's eye aerial view of Roosevelt Island New York. A thin elongated island between Manhattan and Queens. Small white autonomous pods with red cross symbols radiate outward from a staging point at the southern tip ruins, dotted lines showing coverage routes to residential towers along Main Street and the Octagon at the north end. Minimalist graphic style, muted colors with red accent lines, white background, labeled diagram."* For the site plan: *"Architectural site plan drawing of a small emergency response staging base at a historic Gothic stone ruin. Top-down view showing three autonomous pod charging bays in a semicircle facing an esplanade path, a supply restocking module, bollard-lined access corridor leading north toward a street. Clean architectural line drawing style, light gray fills, red accent for AV zones, scale bar."*
- **Result:** Produced two supporting diagrams that communicate the spatial logic of the proposal, including island-wide coverage radius and the physical layout of the Southpoint staging base, advancing the narrative beyond what the text alone conveys.

### Step 3

- **Tool:** Pika Labs
- **Transformation:** Used the hero image as a reference frame and prompted Pika to animate the dispatch sequence: *"camera holds steady, red alert light pulses on white medical pod, pod slowly accelerates forward along esplanade path toward city skyline, camera gradually zooms out, blue undercarriage light glows on wet pavement, night scene, cinematic."* Set duration to 10 seconds, widescreen aspect ratio. Iterated once to improve the smoothness of the pod's acceleration from rest.
- **Result:** Produced a 10-second animation showing the full dispatch sequence from 911 trigger to pod departure, giving the proposal a temporal dimension that static images cannot convey.
