

export default async function handler(request, res) {

    const classlist=[
      {
        "title": "my will to live",
        "counterStartTime": "0",
        "counterEndTime": "100",  
        "counterLabel": "1",  
        "barWidth": "100%",
        "barColorLeft": "red",
        "barColorRight": "green",
        "backgroundColor": "grey"
      },
      {
        "title": "my will to live",
        "counterTime": "100",  
        "counterLabel": "1",  
        "barWidth": "97%",
        "barColorLeft": "red",
        "barColorRight": "green",
        "backgroundColor": "grey"
      },
      {
        "title": "my will to live",
        "counterTime": "100",  
        "counterLabel": "1",  
        "barWidth": "97%",
        "barColorLeft": "red",
        "barColorRight": "green",
        "backgroundColor": "grey"
      },
      {
        "title": "my will to live",
        "counterTime": "100",  
        "counterLabel": "1",  
        "barWidth": "97%",
        "barColorLeft": "red",
        "barColorRight": "green",
        "backgroundColor": "grey"
      }
  
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(classlist);
  }
  