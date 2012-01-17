var clients = {};

var renderReport = function () {
  var reportElement = document.getElementById('report');
  reportElement.innerHTML = '';

  for (var id in clients) {
    reportElement.innerHTML += '<p>' + id + ': ' + Math.round(clients[id].beta) + ',' + Math.round(clients[id].gamma) + '</p>';
  }
}

channel.bind('client-tilt', function (data) {
  clients[data.socket_id] = {
    beta: data.beta,
    gamma: data.gamma,
  };

  renderReport();
})
