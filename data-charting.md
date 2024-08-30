---
layout: default
title: Data charting
nav_order: 3
parent: API
---

## Data charting

Please read [Calling the API page](/calling-the-api) before going through this page.

Assuming you have obtained the API credentials and you were able to get the data of a specific location. Now it is time to put this data in use. As described in the [Calling the API page](/calling-the-api), the variable `x` that you receive from the API contains 101 variables corresponds to the precentiles from 0 to 100. Below you will find more information on how to use this variable to draw plots.

Let start with an example:

- Call the API to retreive data about Arizona.
- From this data we receive, let's take "Day above 32°C" at 3°C of warming
- The `x` array contains the 101 percentiles and its value is

```js
const x = [46,47,52,54,57,57,58,58,61,61,62,63,63,63,64,64,64,64,65,66,66,67,67,68,68,68,68,70,70,71,72,72,72,72,72,73,73,73,74,74,74,74,74,74,74,75,75,76,77,77,78,80,80,80,82,83,83,84,84,85,86,87,87,88,89,89,90,90,91,92,92,93,94,94,96,97,97,98,100,101,101,102,102,104,106,107,107,108,109,110,112,113,116,118,120,120,125,125,128,134,141];
```

This array will be used to draw the x Axis of the plot

- On the y Axis we will have the likelihood data which will be `const y = [0, 1, 2, 3 ..., 100]`
- How to read this data? Since now we have two arrays `x` and `y`. This means that experiencing less than x[i] days above 32°C has a chance of y[i]%. Experiencing more than x[i] days has a chance of (100 - y[i])%

Example related to the above data:

At Arizona, experiencing up to 90 days above 32°C has a chance of 67%. Experiencing more than 90 days has a chance of 33% (100 - 67)

- The final chart of this data will look like this. (Each line corresponds to one warming scenario, the one highlighed is at 3°C which is similar to our example above)

![alt Arizon days above 32](../assets/Arizona-days-above-32-chart.png "Arizon days above 32")

You may have noticed that some values inside the `x` array are repeated, eg. `57` at indexes 4 and 5. What you can do in this case is to re-create the `x` and `y` in a way that if one x value has multiple likelihood values, select only one point(x, y) such that y is the max likelihood for x.

You can use this code that we already use in the [Factbook](https://factbook.probablefutures.org).

```js
const selectMaxYForX = (stat => {
    const map = new Map<number, number>();
    // const y = Array.from({ length: 101 }, (_, i) => i);
    stat.y.forEach((y, index) => {
      const x = stat!.x[index];
      if (!map.has(x) || y > map.get(x)!) {
        map.set(x, y);
      }
    });

    return Array.from(map, ([x, y]) => ({ x, y }));
};
```
