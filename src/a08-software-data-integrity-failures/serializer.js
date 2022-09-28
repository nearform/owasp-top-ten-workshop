import serialize from 'node-serialize'

const fakeCookie = {
  id: 1,
  username: function () {
    throw new Error('server error')
  }
}

console.log(serialize.serialize(fakeCookie))
