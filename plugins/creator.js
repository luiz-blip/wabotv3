let handler = function (m) {
  // this.sendContact(m.chat, '554497346216', 'Nazeda', m)
  this.sendContact(m.chat, '554497346216', 'Nazeda', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
