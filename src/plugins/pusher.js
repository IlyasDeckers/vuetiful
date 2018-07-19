import Pusher from 'pusher-js'

/**
* VuePusher class.
*
* @param {String} apiKey
* @param {Object} options
*/
function VuePusher (apiKey, options) {
  this.pusher = new Pusher(apiKey, options)
  this.channels = []
}

/**
* Subscribe to the given channel and give a fallback to bind events to the channel.
*
* @param  {String}   channelName
* @param  {Function} callback
*/
VuePusher.prototype.subscribe = function (channelName, callback) {
  var channel = this.pusher.subscribe(channelName)

  if (!this.channels.includes(channel)) {
    this.channels.push(channelName)
  }

  callback(channel)
}

/**
* Unsubscribe from the given channel.
*
* @param  {String} channel
*/
VuePusher.prototype.unsubscribe = function (channel) {
  this.pusher.unsubscribe(channel)
}

/**
* Return all the chanels.
*
* @return {Array}
*/
VuePusher.prototype.getChannels = function () {
  return this.channels
}

export function install (Vue) {
  if (!process.env.PUSHER.ENABLED) {
    Vue.prototype.$pusher = {
      'error': 'Pusher not enabled. Set the ENABLED variable to true in your config to enable pusher.'
    }

    return
  }

  const env = process.env
  var pusher = new VuePusher(env.PUSHER.KEY, {
    cluster: env.PUSHER.CLUSTER,
    encrypted: true
  })
  Vue.prototype.$pusher = pusher.pusher
}
