import axios from '../../src/index'

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['asd', 'asd']
    }
}).then(res => {
  console.log(res)
})
