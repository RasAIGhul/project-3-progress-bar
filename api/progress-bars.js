export default async function handler(request, res) {

    const progressBars=[
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": "0",
        "counterEndTime": "100", 
        "duration": "2.5",
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": "0",
        "counterEndTime": "100", 
        "duration": "2.5",
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": "0",
        "counterEndTime": "100", 
        "duration": "2.5",
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
      {
        "title": "my will to live",
        "backgroundColor": "grey",
        "barColorLeft": "red",
        "barColorRight": "green",
        "counterStartTime": "0",
        "counterEndTime": "100", 
        "duration": "2.5",
        "counterLabel": "1",  
        "barWidth": "97.8%",
      },
  
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(classlist);
  }
  