---
layout: default
title: Maps
nav_order: 4
has_children: false
---

# The maps
The Probable Futures maps are climate model data displayed as Mapbox tilesets. To learn more about climate models and the specific models Probable Futures uses, please see [About the data](https://probable-futures.github.io/docs/about-the-data/) and [the science page](https://probablefutures.org/science/) on probablefutures.org.

## All maps
Below is a list of all maps currently published on probablefutures.org/maps.


|                    Map name                   |        Category       |          Unit          |        Tileset ID West        |        Tileset ID East        |
|:---------------------------------------------:|:---------------------:|:----------------------:|:-----------------------------:|:-----------------------------:|
| Average temperature                           | Increasing heat       | Quantity (°C)          | probablefutures.40101-west-v1 | probablefutures.40101-east-v1 |
| Average daytime temperature                   | Increasing heat       | Quantity (°C)          | probablefutures.40102-west-v1 | probablefutures.40102-east-v1 |
| 10 hottest days                               | Increasing heat       | Quantity (°C)          | probablefutures.40103-west-v1 | probablefutures.40103-east-v1 |
| Days above 32°C (90°F)                        | Increasing heat       | Count (days)           | probablefutures.40104-west-v1 | probablefutures.40104-east-v1 |
| Days above 35°C (95°F)                        | Increasing heat       | Count (days)           | probablefutures.40105-west-v1 | probablefutures.40105-east-v1 |
| Days above 38°C (100°F)                       | Increasing heat       | Count (days)           | probablefutures.40106-west-v1 | probablefutures.40106-east-v1 |
| Average nighttime temperature                 | Decreasing cold       | Quantity (°C)          | probablefutures.40201-west-v1 | probablefutures.40201-east-v1 |
| Frost nights                                  | Decreasing cold       | Count (days)           | probablefutures.40202-west-v1 | probablefutures.40202-east-v1 |
| Nights above 20°C (68°F)                      | Decreasing cold       | Count (days)           | probablefutures.40203-west-v1 | probablefutures.40203-east-v1 |
| Nights above 25°C (77°F)                      | Decreasing cold       | Count (days)           | probablefutures.40204-west-v1 | probablefutures.40204-east-v1 |
| Freezing days                                 | Decreasing cold       | Count (days)           | probablefutures.40205-west-v1 | probablefutures.40205-east-v1 |
| Days above 26°C (78°F) wet-bulb               | Heat and humidity     | Count (days)           | probablefutures.40301-west-v1 | probablefutures.40301-east-v1 |
| Days above 28°C (82°F) wet-bulb               | Heat and humidity     | Count (days)           | probablefutures.40302-west-v1 | probablefutures.40302-east-v1 |
| Days above 30°C (86°F) wet-bulb               | Heat and humidity     | Count (days)           | probablefutures.40303-west-v1 | probablefutures.40303-east-v1 |
| Days above 32°C (90°F) wet-bulb               | Heat and humidity     | Count (days)           | probablefutures.40304-west-v1 | probablefutures.40304-east-v1 |
| 10 hottest wet-bulb days                      | Heat and humidity     | Quantity (°C)          | probablefutures.40305-west-v1 | probablefutures.40305-east-v1 |
| Change in total annual precipitation          | Maps of precipitation | Quantity (mm)          | probablefutures.40601-west-v1 | probablefutures.40601-east-v1 |
| Change in dry hot days                        | Maps of precipitation | Count (days)           | probablefutures.40607-west-v1 | probablefutures.40607-east-v1 |
| Change in frequency of "1-in-100 year" storm  | Maps of precipitation | Return period (1-in-X) | probablefutures.40612-west-v1 | probablefutures.40612-east-v1 |
| Change in precipitation "1-in-100 year" storm | Maps of precipitation | Quantity (mm)          | probablefutures.40613-west-v1 | probablefutures.40613-east-v1 |
| Change in snowy days                          | Maps of precipitation | Count (days)           | probablefutures.40614-west-v1 | probablefutures.40614-east-v1 |
| Change in wettest 90 days                     | Maps of precipitation | Quantity (mm)          | probablefutures.40616-west-v1 | probablefutures.40616-east-v1 |
| Likelihood of year-plus extreme drought       | Maps of dryness       | %                      | probablefutures.40701-west-v1 | probablefutures.40701-east-v1 |
| Likelihood of year-plus drought               | Maps of dryness       | %                      | probablefutures.40702-west-v1 | probablefutures.40702-east-v1 |
| Change in water balance                       | Maps of dryness       | z-score                | probablefutures.40703-west-v1 | probablefutures.40703-east-v1 |
| Change in wildfire danger days                | Maps of dryness       | days                   | probablefutures.40704-west-v1 | probablefutures.40704-east-v1 |
| Climate zones                                 | Other                 | class                  | probablefutures.40901-west-v1 | probablefutures.40901-east-v1 |

Note: Tilesets are split between west and east due to Mapbox Tiling Service size constraints but are designed to be rendered together seamlessly, as seen in the [public maps application](https://probablefutures.org/maps).

## Why these maps?
Our process for creating maps involves considering particular phenomena and thresholds that matter to people and civilization. For example, nights above 20°C (68°F) are not comfortable for sleeping without air conditioning. All wet-bulb temperatures below carry some risk to human health for anyone working or playing outdoors. Loss of frost and freezing allow spread of pathogens. Increased precipitation and more severe and frequent storms require more infrastructure to hold and manage rainwater to prevent flooding. Now we welcome you to think of other examples and create tools using these maps. Tools using these maps can help others imagine adaptations needed for unavoidable futures, and demonstrate the importance of changes to avoid unmanageable ones. We also welcome feedback about these maps and ideas for others.

## Tilesets
The tileset IDs above can be used to create maps in your own application. To learn more about Mapbox tilesets, please see [Mapbox's Mapbox Tiling Service page](https://www.mapbox.com/mts).

## Tileset feature attributes
Tileset feature attributes represent data in a Mapbox Tiling Service map. Probable Futures maps use feature attributes to represent a range of three expected values for each warming scenario, resulting in a total of 18 values per grid cell. These values can be seen by inspecting a tileset in Mapbox studio. To expose them in an application for users, they can be queried and displayed in a pop-up on a map as you can see by clicking on any square with data on any map on probablefutures.org/maps. 

| Warming scenario | Tileset feature name |
|------------------|----------------------|
|       0.5°C      | data_baseline_high   |
|                  | data_baseline_low    |
|                  | data_baseline_mid    |
|        1°C       | data_1c_high         |
|                  | data_1c_low          |
|                  | data_1c_mid          |
|       1.5°C      | data_1_5c_high       |
|                  | data_1_5c_low        |
|                  | data_1_5c_mid        |
|        2°C       | data_2c_high         |
|                  | data_2c_low          |
|                  | data_2c_mid          |
|       2.5°C      | data_2_5c_high       |
|                  | data_2_5c_low        |
|                  | data_2_5c_mid        |
|        3°C       | data_3c_high         |
|                  | data_3c_low          |
|                  | data_3c_mid          |

### Range of expected values
Climate data predict ranges of weather that is typical for a particular place and the particular atmosphere at the time. Consider [Delhi with a climate 1.0°C above the pre-industrial climate](https://probablefutures.org/maps/?selected_map=cl59m7jcm001414o1hqf8x68l&volume=heat&warming_scenario=1#9/28.5769/77.1675). Some years will be warmer than is typical, others typical, and others cooler than typical. As you can see by clicking on Delhi in the map linked above, Delhi with a climate of 1.0°C above the pre-industrial climate typically experiences 216 days above 32°C. In a warm year, about 10% of the time, Delhi experiences about 250 or more days above 32°C while in a cool year, about 10% of the time, Delhi experiences about 175 or fewer days above 32°C.

As the warming scenario numbers increase from 1°C above pre-industrial to 1.1°C, 1.2°C and eventually 1.5°C, the range shifts warmer. If you click the 1.5°C tab, you will see the range of expected values in Delhi has shifted. Now, the low, mid and high number of days above 32°C is 197, 227, and 251. A cool year is now considerably warmer. You can think of this as a bell curve of values shifting to the right, toward the warmer side of a graph of temperatures in a place. Often the shape of the bell curve changes as it shifts.  

- `high`: higher than typical. Conditions should be expected to be this value or higher in approximately 10% of years.
- `mid`: values are typical. This is the average or median condition. (Some maps use average while others use median for this value.)
- `low`: values are lower than typical. Conditions should be expected to be this value or lower in approximately 10% of years.
