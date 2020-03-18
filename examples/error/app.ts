import axios from '../../src/index'

axios({
    method: 'get',
    url: '/error/get',
    params: {
        a: 1,
        b: 2
    }
}).then(res => {
  console.log(res)
})

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 1000
}).then(res => {
console.log(res)
})

axios({
  method: 'get',
  url: '/error/timeo',
  params: {
      a: 1,
      b: 2
  },
  timeout: 1000
}).then(res => {
  console.log(res)
})
