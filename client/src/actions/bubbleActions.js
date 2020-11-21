import axios from "axios";

export const renderBubbleGraph = () => {
  return async (dispatch, getState) => {
    let northCali = [];
    let southCali = [];
    const north = await axios(
      `https://disease.sh/v3/covid-19/nyt/counties/Alameda%2C%20Alpine%2C%20Amador%2C%20Butte%2C%20Calaveras%2C%20Colusa%2C%20Contra%20Costa%2C%20Del%20Norte%2C%20El%20Dorado%2C%20Fresno%2C%20Glenn%2C%20Humboldt%2C%20Inyo%2C%20Kings%2C%20Lake%2C%20Lassen%2C%20Madera%2C%20Marin%2C%20Mariposa%2C%20Mendocino%2C%20Merced%2C%20Modoc%2C%20Mono%2C%20Monterey%2C%20Napa%2C%20Nevada%2C%20Placer%2C%20Plumas%2C%20Sacramento%2C%20San%20Benito%2C%20San%20Francisco%2C%20San%20Joaquin%2C%20San%20Mateo%2C%20Santa%20Clara%2C%20Santa%20Cruz%2C%20Shasta%2C%20Sierra%2C%20Siskiyou%2C%20Solano%2C%20Sonoma%2C%20Stanislaus%2C%20Sutter%2C%20Tehama%2C%20Trinity%2C%20Tulare%2C%20Tuolumne%2C%20Yolo%2C%20Yuba?lastdays=1`
    );

    for (let x = 0; x < north.data.length; x++) {
      if (north.data[x].state === "California") {
        northCali.push({
          name: north.data[x].county,
          loc: north.data[x].deaths,
        });
      }
    }

    const south = await axios(
      `https://disease.sh/v3/covid-19/nyt/counties/imperial%2C%20kern%2C%20los%20angeles%2C%20orange%2C%20riverside%2C%20san%20bernardino%2C%20san%20diego%2C%20san%20luis%20obispo%2C%20santa%20barbara%2C%20ventura?lastdays=1`
    );

    for (let x = 0; x < south.data.length; x++) {
      if (south.data[x].state === "California") {
        southCali.push({
          name: south.data[x].county,
          loc: south.data[x].deaths,
        });
      }
    }

    console.log(northCali);
    console.log(southCali);
    console.log("hi");
    dispatch({
      type: "BUBBLE_GRAPH",
      payload: {
        name: "Califonia",
        color: "hsl(279, 70%, 50%)",
        children: [
          {
            name: "North",
            color: "hsl(100, 70%, 50%)",
            children: northCali,
          },
          {
            name: "South",
            color: "hsl(148, 70%, 50%)",
            children: southCali,
          },
        ],
      },
    });
  };
};
