---
title: "Coler Campus — Accessible Autonomous Mobility for Long-Term Care"
place: "Coler Specialty Hospital and Nursing Facility"
concept: "Mobility as Medicine"
description: "A wheelchair-secured autonomous pod loop linking Coler's long-term-care residents to Lighthouse Park, the Octagon, and the Tram, treating mobility as a clinical and civic intervention rather than a convenience."
author: "Sara Frazer"
type: "service"
geojson: "boundary.geojson"
media:
  - file: "hero-image.png"
    caption: "Aerial view of the Coler campus showing the proposed pod loop along West Road and the three boarding islands"
    featured: true
  - file: "street-view.png"
    caption: "A wheelchair-accessible pod docked at Coler's main entrance, with a staff attendant assisting boarding from a flush level platform"
  - file: "pod-interior.png"
    caption: "Inside an accessible pod: two wheelchair securement positions, fold-down companion seats, an emergency call button, and a power outlet for medical equipment"
  - file: "boarding-sequence.mp4"
    caption: "Eight-second animation of a Coler resident boarding a pod at the main entrance and the pod departing toward Lighthouse Park"
slug: "coler-wheelchair-loop"
---

## Summary

Coler Specialty Hospital, operated by NYC Health + Hospitals at the north tip of Roosevelt Island, houses about 500 long-term-care residents living with spinal cord injuries, traumatic brain injury, advanced MS, and ventilator dependence. Many haven't left the campus in years — not because they can't, but because Access-A-Ride pickup windows and a crowded Red Bus make a casual outing nearly impossible. This case study proposes six wheelchair-secured self-driving pods running a 1.4-mile loop between Coler, Lighthouse Park, the Octagon, and the Tram Plaza, treating mobility as part of a resident's care plan rather than a convenience.

## AV Use Case

### What AVs are involved?

Six small electric self-driving pods, each about six meters long. Every pod fits two power-wheelchair users in secured positions and four fold-down seats for companions or staff. The pod floor sits flush with the boarding platform, so a wheelchair rolls straight on — no ramp, no tilt, no transfer.

Pods are speed-limited to 25 km/h on West Road and walking speed near Lighthouse Park. They carry LiDAR, cameras, and a hardwired call button to Coler's nursing station. Onboard outlets support a portable ventilator or suction pump for trips up to 90 minutes. There's no in-cabin safety driver, but a Certified Nursing Assistant from Coler rides along during the first six months.

### What are they doing?

Pods run a continuous loop: south from Coler along West Road past the Octagon and Manhattan Park to the Tram Plaza, returning north along East Road. Service runs every 12 minutes from 8 AM to 8 PM, with on-call service in the evening.

Residents can summon a pod from a smartphone app, a bedside tablet linked to Coler's call-bell system, or a kiosk at each boarding island. Two trip types run side by side: scheduled trips for medical appointments and recreation, and "popout" trips a resident can start themselves for a sunshine break or coffee at the Manhattan Park pavilion. An "outing prescription" entered in the resident's chart unlocks priority booking — a small rule change that frames an outing as part of treatment, not a special request.

### Why here?

Roosevelt Island is uniquely suited to this kind of service. The island is flat, has no signalized intersections in the residential portion, and has almost no through-traffic. Most importantly, the road network sits inside a single jurisdiction: the Roosevelt Island Operating Corporation (RIOC), a New York State public benefit corporation that holds a 99-year lease on the island and controls its streets, sidewalks, and curbs. RIOC can install a level-loading platform or paint a slow zone without going through NYC DOT. That regulatory shortcut doesn't exist on the mainland.

The island also concentrates the population this service is designed for. Coler's ~500 long-term-care residents are the most concentrated population in NYC who can't easily use fixed-route transit. A second concentration of older adults at the Octagon and Manhattan Park gains the same benefit. Cornell Tech sits a mile to the south and provides a built-in research partner.

## Stakeholders

### Who participates?

- **NYC Health + Hospitals** operates Coler and is the clinical sponsor. Coler's medical director writes the protocol that integrates pod use into care plans.
- **RIOC** owns the streets and funds the boarding-island infrastructure out of its capital budget. It contracts a private AV operator (May Mobility, Beep, or similar) on a 5-year service agreement.
- **The MTA** integrates pods into OMNY paratransit so paratransit-eligible riders ride free, and reroutes Access-A-Ride requests on the island to pods when feasible.
- **Cornell Tech**, through the Jacobs Institute, runs the outcomes evaluation: quality-of-life surveys, ER-visit data, and missed-appointment rates before and after deployment.

### Who is impacted?

Coler residents are the primary beneficiaries. Many have lived at Coler for 5 to 20 years; reliable on-demand mobility reverses what social-work literature calls "horizon shrinkage" — the gradual contraction of a resident's daily geography to their unit and the dayroom. Outcomes the Cornell Tech team tracks include reductions in loneliness scores, missed off-island specialty appointments, and psychiatric ER transfers.

Older adults at the Octagon and Manhattan Park gain a free, reliable alternative to the Red Bus. Coler's clinical staff get back the hours currently spent coordinating Access-A-Ride pickups. Family members can take a parent to dinner at Manhattan Park without renting a wheelchair-accessible van. Pedestrians along West Road get a calmer street.

Red Bus operators see scope reduction on paratransit-flagged trips. RIOC commits to no layoffs, with retraining toward fleet supervisor and remote-monitoring roles.

### How does it address their concerns?

**Pedestrian safety** is built into the road, not just the vehicle. West Road is regraded as a continuous level surface with tactile paving and bollard-protected boarding islands. Pods auto-yield to pedestrians and emit an audible signature for blind and low-vision residents.

**Clinical safety** is built into the pod. Each cabin has a tablet linked to Coler's nursing station; a nurse can recall a pod if a resident's condition changes. The pod won't depart until the securement straps register engagement.

**Privacy** is the most sensitive issue here, because trip data correlates with health information. Camera footage is retained 48 hours under a HIPAA-style data-use agreement, no facial recognition is enabled, and trip metadata is pseudonymized.

**Job displacement** is mitigated through retraining and a no-layoff guarantee. **Equity**: free at point of use for Coler residents, RIOC residents 65 and over, and paratransit-eligible riders.

## Blueprints

### Streets for Safety: Slow-Speed Geofencing

The NACTO Blueprint's "Design for Safety" principle states that AVs in cities should be programmed for 25 mph or less and should detect and yield to people outside the vehicle. The "Streets for Safety" chapter pushes cities to back this up with physical street design rather than signage alone. West Road between Coler and the Octagon is redesigned to do exactly that: a continuous flush surface, tactile paving, no curbs, with planters and bollards guiding pod paths instead of walling them off. Pod speed is geofenced — not just signed — to walking speed near Lighthouse Park and 25 km/h elsewhere. Because RIOC owns the road, the corridor can be built and revised on the pilot's timescale rather than NYC DOT's.

### Distribute the Benefits Equitably: Universal Boarding Islands

The Blueprint's equity principle asks cities to consider access, safety, mobility, and affordability together rather than treating accessibility as an add-on. Coler residents are exactly the population that fixed-route, peak-hour, stair-and-ramp transit planning has historically left behind. Three boarding islands anchor the corridor — Coler entrance, Octagon, Tram Plaza — all built to one specification: a 300 mm platform flush with the pod floor, a 2.5 m turning circle for power chairs, tactile paving, large-print and audible arrival displays, and shelter seating sized for transfer at chair height. Consistency is the point. A resident learns one boarding pattern and uses it everywhere.

### Curbs for Access: Clinical Hand-offs at the Flex Zone

The Blueprint's "Curbs for Access" chapter treats the curb as a flex zone allocated to the highest-value use at any given hour, not a static parking strip. A clinical hand-off is a different problem from a taxi or rideshare pickup, and conflating them produces dangerous curbs. At Coler's main entrance, the boarding island sits upstream of the ambulance bay with a painted buffer so pods never block ambulances and vice versa. At the Tram Plaza, the boarding island shares space with the Access-A-Ride pickup zone but takes priority during tram and F-train arrival windows.

## Methods

### Step 1: Hero, street view, and interior renders

- **Tool:** Gemini 
- **Transformation:** Generated three photoreal images using natural-language prompts: an aerial of the Coler campus and West Road corridor, a street-level view of a wheelchair user boarding at the Coler main entrance, and an interior view of the pod cabin showing securement positions and equipment outlets. Iterated each prompt several times to fix pod proportions, platform height, and golden-hour lighting consistency.
- **Result:** A coherent visual set with consistent color grading and sun direction, anchored in recognizable Roosevelt Island geography.

### Step 2: Boarding-sequence animation

- **Tool:** Gemini Veo
- **Transformation:** Used the street-view render from Step 1 as the first frame and prompted Veo for an eight-second image-to-video of a wheelchair user boarding the pod at Coler's entrance, doors closing, and the pod departing smoothly toward the right of frame.
- **Result:** A short animation that shows boarding as a continuous experience, communicating the universal-design point that boarding is the moment where the system either works or does not.
