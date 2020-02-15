$.get("https://discordapp.com/api/guilds/662287544054054928/widget.json", function(data) {
  $("#name").append(data.name);
  $("#invite").append(`<a class="ui primary button" href="${data.instant_invite}" target="_blank">공식 서버 입장</a>`)
  for (var i = 0; i < data.members.length; i++) {
    $("#members").append(`
    <div class="event">
      <div class="content">
        <img class="ui avatar image" src="${data.members[i].avatar_url}">
        <span>${data.members[i].username}</span>
        </div>
    </div>
  `);
  }
});

$('.top.menu .item').tab();