---
layout: default
title: Access the data
nav_order: 3
---

# Data Background

Climate models are created and maintained by scientific institutions around the world which make their models available for download. Although these models have technically been publicly available for a long time, downloading and using them requires so much specialized climate science knowledge that they have remained only available for scientists. Probable Futures makes climate models available to anyone, anywhere. If you'd like to learn more about the models we use, visit the [science section on probablefutures.org](https://probablefutures.org/science).

Our climate science partner, Woodwell Climate Research Center, downloads and prepares the data in a format commonly used for cliamte data called NetCDF. Because NetCDF files are not web-ready, we built a parser to read these files, process and format the data inside, and feed the datasets into our database. After that we create GeoJSON files which we use to create tilesets and styles using the Mapbox tiling service.

-   **Tilesets**

    A tileset is a collection of raster or vector data broken up into a uniform grid of square tiles at up to 22 preset zoom levels.
    In our system, the data for each map is distributed among two tileset: east and west. Each tileset is composed of multiple layers, which we refer to as regions. Each region is created within a specified bounding box defined by its coordinates. For example, the region with id `region_as_oc_7`, is located in the east tileset and has a bounding box, `bbox = [65.2, -25.8, 180, -10.58]`.

    {: .note } We split our tilesets into east and west, and each of those into many regions, because Mapbox has size limitations on both tilesets and layers. Climate models are larger than data typically displayed in tilesets. Each of our maps has approximately 500,000 data points.

-   **Map styles**

    After creating the tileset, we create a map style which is compatible with Mapbox and can be displayed in the browser. This Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties. This specification defines and describes these properties. For example, in one part of this JSON object, you can specify the bins and colors to use based on the data that exists in the tileset. You can specify an attribute, such as `data_1c_mean`, and then specify what colors to use at different values of this attribute. This can be done using Mapbox expressions like this:

    ```[
    "step",
    ["get", "data_1c_mean"],
    "#515866",
    1,
    "#0ED5A3",
    8,
    "#0099E4",
    31,
    "#8BE1FF",
    91,
    "#FF45D0",
    181,
    "#D70066"
    ]
    ```

    In the above example, any values of `data_1c_mean` that are less than 1 will be colored with `#515866`, values between 1 and 8 will be colored with `#0ED5A3`, and so on.

    When creating map styles you can also include some of the default layers provided by Mapbox like place labels and geopolitical boundaries.

# Ways to access our data

Our data is designed to be accessed and used in many ways, such as:

1.  **Using the API**

    By using our API you can receive climate model data for any place in the world. Follow the instructions in [API access](./api-access.md) for information on how to get access to the API. More instructions about how to use the API can be found in [calling the API](./calling-the-api.md).

2.  **Using the map style JSON files**

    If you want to use Mapbox Studio or Mapbox APIs to create your own maps, you can try this method. Visit [our public docs repo on Github](https://github.com/Probable-Futures/docs/tree/main/mapStyles) to find JSON files containing the styles for each map. These files can be imported into your Mapbox account allowing you to customize the maps by adding or removing layers according to your requirements. Here are the steps:

    -   Sign up or sign in to your Mapbox account
    -   Go to the styles page in [Mapbox studio](https://studio.mapbox.com/)
    -   Click the "New style" button, and a modal will appear
    -   Click the "Upload Style" button at the top of the modal
    -   Click "Select a file" to select one of the JSON files you downloaded from the documentation repository
    -   Finally click the "Customize" button to view and edit the map

3.  **Getting the data as CSV files**

    By signing in to [Probable Futures Pro](https://probablefutures.org/pro/), you gain access to advanced features including the ability to download datasets for all maps as CSV files. You can either download the complete data for a specific map or choose to download data for a particular country. Follow the steps:

    -   [Request access to Probable Futures Pro](https://airtable.com/shrOMfMgh7EoHajKN)
    -   After siging in, go to the [datasets page](https://pro.probablefutures.org/dashboard/datasets)
    -   Scroll down to find a list of all the Probable Futures maps
    -   Click the "Download" button next to the dataset you want to download
    -   By default, all data is selected and you can click "Download" to begin downloading the full map dataset. If you would like to download data for a specific country, select the country in the dropdown. You can also select the columns to include in the CSV file.

4.  **Request access to the NetCDF files**

    Originally, the data is in NetCDF format. Please [contact us](https://probablefutures.org/contact/) if you'd like the data in this format.
