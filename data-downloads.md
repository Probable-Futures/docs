---
layout: default
title: Data downloads
nav_order: 4
parent: Data
---
# Data downloads

Probable Futures climate data is available for download. 

To download the data, first [sign up for Probable Futures Pro](https://probablefutures.org/pro). Then, go to the ["Datasets" tab in Probable Futures Pro](https://pro.probablefutures.org/dashboard/climate-data) to browse downloadable data for all maps. The data is available to download in CSV, GeoJSON, and NetCDF formats.

## Explanation of Fields in Downloaded Data Files

By default, the downloaded file will include all locations in the world. Each location includes the latitude and longitude coorindates for the center of each grid cell, the grid cell perimeter coordinates, and the three values (low, mid, high) for each of the six warming scenarios.

Each of these individual data fields are described below.

| Column                   | Description |  Example data (days above 32°C map) |
|--------------------------|-------------|-------------------------------------|
| **longitude**           | The longitude coordinate at the center of the grid cell. | -111.82° |
| **latitude**            | The latitude coordinate at the center of the grid cell. | 33.21° |
| **cell**                | The grid cell coordinates, corresponding to a 0.2° latitude by 0.2° longitude square section of the Earth's surface. | [[-111.9,33.3],[-111.9,33.1],[-111.7,33.1],[-111.7,33.3],[-111.9,33.3]] |
| **low_value_0_5c**      | The 5th percentile value for the 0.5°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 98 days |
| **mid_value_0_5c**      | The median or mean value for the 0.5°C warming scenario, representing median or average expected conditions in this warming scenario. | 138 days |
| **high_value_0_5c**     | The 95th percentile value for the 0.5°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 171 days |
| **low_value_1c**        | The 5th percentile value for the 1.0°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 118 days |
| **mid_value_1c**        | The median or mean value for the 1.0°C warming scenario, representing median or average expected conditions in this warming scenario. | 149 days |
| **high_value_1c**       | The 95th percentile value for the 1.0°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 182 days|
| **low_value_1_5c**      | The 5th percentile value for the 1.5°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 128 days |
| **mid_value_1_5c**      | The median or mean value for the 1.5°C warming scenario, representing median or average expected conditions in this warming scenario. | 158 days |
| **high_value_1_5c**     | The 95th percentile value for the 1.5°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 191 days|
| **low_value_2c**        | The 5th percentile value for the 2.0°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 132 days |
| **mid_value_2c**        | The median or mean value for the 2.0°C warming scenario, representing median or average expected conditions in this warming scenario. | 164 days |
| **high_value_2c**       | The 95th percentile value for the 2.0°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 196 days |
| **low_value_2_5c**      | The 5th percentile value for the 2.5°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 143 days |
| **mid_value_2_5c**      | The median or mean value for the 2.5°C warming scenario, representing median or average expected conditions in this warming scenario. | 172 days |
| **high_value_2_5c**     | The 95th percentile value for the 2.5°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 205 days |
| **low_value_3c**        | The 5th percentile value for the 3.0°C warming scenario, representing conditions expected about 5% of the time on the lower end of the distribution of probable outcomes in this warming scenario. | 149 days |
| **mid_value_3c**        | The median or mean value for the 3.0°C warming scenario, representing median or average expected conditions in this warming scenario. | 178 days |
| **high_value_3c**       | The 95th percentile value for the 3.0°C warming scenario, representing conditions expected about 5% of the time on the higher end of the distribution of probable outcomes in this warming scenario. | 214 days |
