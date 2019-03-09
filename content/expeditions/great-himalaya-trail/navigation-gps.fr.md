---
draft: true
type: report
date: 2019-02-22 00:00:00 +0000
slug: navigation-gps
translationKey: navigation-gps
title: Navigation - GPS routes
description: How I created GPS routes for the entire trail.
image: "/v1550943527/Screenshot%202019-02-23%20at%2018.37.51.jpg"
keywords: []
author: dave
social_posts: false
---
ViewRanger will provide topo maps of the entire trekking area, but these would be of limited use without the route highlighted. The GHT is infrequently trekked, so there's relatively few digital resources available. For the more popular ares, the ViewRanger topo maps often include footpaths - but for much of the trek there is nothing plotted on the map.

I've tried to bring all the available GPS resources together in this section:

* Robin Boustead published a [collection of waypoints](http://www.greathimalayatrail.com/gps.php?cId=2).
* Himalayan Adventure Labs also publish [a collection of waypoints](https://www.himalayanadventurelabs.com/great-himalaya-trail/interactive-map-great-himalayan-trail/) which include some of (but not all of) Robin's.
* Seth Wolpin and Doc McKerr both recorded tracks of their thru-hikes, which Himalayan Adventure Labs merged into a [set of tracks](https://www.himalayanadventurelabs.com/great-himalaya-trail/interactive-map-great-himalayan-trail/) with excellent notes.

Seth's track is a great resource, but some sections deviate significantly from our intended route. Robin's waypoints follow our route, but aren't connected with a track. I wanted a better option covering the whole route and following the Himalaya Map House paper maps. I also wanted each day of our itinerary to be a separate route segment. Finally I wanted each segment to match up with our paper flashcards (see the [Navigation - Flashcards](/expeditions/great-himalaya-trail/navigation-flashcards/) article), so I could extract the stats and elevation profile. To create this I used [gpsies.com](https://www.gpsies.com/ "www.gpsies.com"), which is an invaluable online service. A GPX route can be created by simply drawing points onto the map. A handy time-saver is the GraphHopper feature, which automatically adds a section of route by following footpaths. Not all the footpaths found on the topo maps have routable paths, but most do. Where footpaths weren't drawn on the map I've estimated the position of the trail from the 1:150k scale Himalaya Map House paper maps.

![](https://res.cloudinary.com/wildernessprime/image/upload/w_1000,dpr_auto/v1550946659/Screenshot%202019-02-23%20at%2009.29.48.jpg)

While creating the flashcards I created 115 separate GPX files in this way, then merged them into a single GPX file containing 115 route segments. It should be noted that this route is only as accurate as the highlighted route on the paper maps, which will not be 100% perfect. However, most of it matches up almost perfectly with Seth's recorded track, so I'm optimistic that it's a good enough estimation.

I also merged and de-duplicated the waypoint databases from Robin and Himalayan Adventure Labs, and normalised the formatting of the names. I created a set of km markers for each day, which are useful for [emergency navigation](/expeditions/great-himalaya-trail/navigation-emergencies/), and assigned each waypoint to the nearest marker to generate a unique code.

You can find the final files here:

* Routes - All 115 daily routes merged into a single file in [GPX](https://www.dropbox.com/s/s5p5neji22fi0bu/routes.gpx?dl=1) or [KML](https://www.dropbox.com/s/g25xzr6rs4omm4o/routes.kml?dl=1) format. If you need the routes as 115 individual GPX files, [here's a zip](https://www.dropbox.com/s/m6giufmdi3pq9y1/routes.zip?dl=1).  
* Markers - All 1432 km markers in [GPX](https://www.dropbox.com/s/mk0kvn48uk2lva1/markers.gpx?dl=1) or [KML](https://www.dropbox.com/s/vfa60081uswczuo/markers.kml?dl=1) format.  
* Waypoints - A file containing all 475 waypoints in GPX and KML format can be found in the Himalayan Adventure Labs file repository, which is linked on their [Interactive Map page](https://www.himalayanadventurelabs.com/great-himalaya-trail/interactive-map-great-himalayan-trail/). Look for the _Dave Brophy's files_ directory, and the files are called _waypoints.gpx_ and _waypoints.kml_.  
* Tracks - A single file containing the 10 Himalayan Adventure Labs tracks in GPX and KML formats can be found in their file repository, which is linked on their [Interactive Map page](https://www.himalayanadventurelabs.com/great-himalaya-trail/interactive-map-great-himalayan-trail/). Look for the _Dave Brophy's files_ directory, and the files are called _himalayan-adventure-labs-tracks.gpx_ and _himalayan-adventure-labs-tracks.kml_.
 
If you'd like to know how I manipulated the GPX files, here's [the source code](https://github.com/dave/gpx/blob/master/main.go).
 
Here's a demo of how to load KML routes into Google Earth, which gives an excellent 3D visualisation:

<iframe class="youtube" src="https://www.youtube.com/embed/aghBgeKEsR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
