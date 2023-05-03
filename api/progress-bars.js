
export default async function handler(request, res) {


    const progressBars=[
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "black",
        "barColorRight": "blue",
        "counterStartTime": 0,
        "counterEndTime": 0, 
        "counterLabel": "0",  
        "barWidth": "10%",
        "label": "A progress bar detailing my will to live. It is currently at 0% because I am writing this code.",
        "suffixText": "% will to live"
      },
      {
        "title": "My grade in this class",
        "backgroundColor": "white",
        "barColorLeft": "black",
        "barColorRight": "orange",
        "counterStartTime": 0,
        "counterEndTime": 100, 
        "counterLabel": "97.97",  
        "barWidth": "97.8%",
      },
      {
        "title": "The amount of time it takes me to do this project",
        "backgroundColor": "blue",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": 0,
        "counterEndTime":100000000,
        "counterLabel": "100000000",  
        "barWidth": "97.8%",
        "label" : "A progress bar detailing the amount of time it takes me to do this project. It is currently at 100000000% because I am still working on it.",
        "suffixText": "s of doing the project"
      },
      {
        "title": "The amount of time it takes for Bryan to get to the point",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": 0,
        "counterEndTime":10000000, 
        "counterLabel": "10000000",  
        "barWidth": "97.8%",
        "labelForSighted": "A progress bar detailing the amount of time it takes for Bryan to get to the point. It is currently at 10000000% because he is still talking.",
        "suffixText": "s of Bryan talking",
      },
  
    ];


    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(progressBars);
  }
  