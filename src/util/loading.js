const client = require('../core/client');

function startLoading(channel) {
  return client.startTyping(channel);
}

function stopLoading(channel) {
  return client.stopTyping(channel);
}

module.exports = {
  startLoading,
  stopLoading,
};
