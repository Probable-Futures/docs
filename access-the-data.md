# Data Background

Initially, the datasets are in netcdf format. We have build a parser to read these files, process it, format it and feed it to our database. After that we create the geojson file and start creating the tilesets and styles using the Mapbox tiling service.

-   **Tilesets**

    A tileset is a collection of raster or vector data broken up into a uniform grid of square tiles at up to 22 preset zoom levels.
    In our system, the data for each map is distributed among 2 tileset: east and west. Each tileset is composed of multiple layers, which we refer to as regions. Each region is created within a specified bounding box defined by its coordinates. For example, the region with id `region_as_oc_7`, is located in the east tileset and has a bouding box, `bbox = [65.2, -25.8, 180, -10.58]`.

-   **MapStyles**

    After creating the tileset, we need to create a mapStyle which can be displayed in the browser. A Mapbox style is a document that defines the visual appearance of a map: what data to draw, the order to draw it in, and how to style the data when drawing it. A style document is a JSON object with specific root level and nested properties. This specification defines and describes these properties. For example, you can specify the bins/colors to use based on the data that exists in the tileset. You can specify an attribute `data_1c_mean`, and then specify what colors to use at different values of this attribute. This can be done using mapbox expressions like this:

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

    In the above example, any values of `data_1c_mean` that are less than 1 will be colored with `#515866`, values between 1 and 8 will be colored with `#0ED5A3`, and so on..
    When creating maps you can also include some of the default layers provided by mapbox like place labels and geopolitical boundaries.

# How to use our data

Our data is designed to be used in multiple ways. Below is a list of how you could use it or get access to it:

1.  **Using the API**

    By using our API you can receive the most recent data for any map. Follow the instructions in [api-access](./api-access.md) for information on how to get access to the api, and more instructions about how to use the api can be found in [calling-the-api](./calling-the-api.md).

2.  **Using the map style json files**

    If you want to experience Mapbox Studio and create your own maps, you can try this method. Visit our public docs repo on Github [docs](https://github.com/Probable-Futures/docs/tree/main/mapStyles), where you will find JSON files containing the styles for each map. These files can be imported to your mapbox account allowing you to customize the maps by adding or removing layers according to your requirements. Here are the steps:

    -   Sign up or sign in to your Mapbox account
    -   Go to the styles page in [Mapbox studio](https://studio.mapbox.com/)
    -   Click on the "New style" button, and a modal will appear
    -   Click on "Upload Style" button at the top of the modal
    -   Click on "Select a file" to select one of the JSON files you downloaded from the documentation repository
    -   Finally click the "Customize" button to view and edit the map

3.  **Getting the data as CSV files**

    By signing in to [Probable Futures Pro](https://pro.probablefutures.org/), you gain access to advanced features including the ability to download datasets for all maps as CSV files. You can either download the complete data for a specific dataset or choose to download data for a particular country. Follow the steps:

    -   Contact the PF team to request access to Probable Futures Pro
    -   After siging in, go to the [datasets page](https://pro.probablefutures.org/dashboard/datasets)
    -   You will see a list of all the Probable Futures data with the ability to download data for a specific country or all global data. You can also select the columns to include in the CSV file

4.  **Request access to the netcdf files**

    Originally, the data is in netcdf format. Please contact the PF team if you'd like to receive the data in this format.
