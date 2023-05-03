
export default async function handler(request, res) {


    const progressBars=[
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "black",
        "barColorRight": "blue",
        "counterStartTime": 6,
        "counterEndTime": 1, 
        "counterLabel": "10",  
        "barWidth": "10%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "black",
        "barColorRight": "orange",
        "counterStartTime": 5,
        "counterEndTime": 10, 
        "counterLabel": "10",  
        "barWidth": "97.8%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": 0,
        "counterEndTime": 100,
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": 0,
        "counterEndTime": 109, 
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
  
    ];


    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(progressBars);
  }
  