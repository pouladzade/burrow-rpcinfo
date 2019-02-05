# burrow-rpcinfo

This is a JavaScript API for getting information from  [Hyperledger Burrow](https://github.com/hyperledger/burrow) node.


Example :
```js


var Promise = require('promise')
var RpcInfo = require('burrow-rpcinfo')
var rpcInfo = new RpcInfo("tcp://127.0.0.1:26658")

  getBalance(address) {
    return new Promise(function (resolve, reject) {
      rpcInfo.getAccount(address, (error, data) => {
        if (data) {
          resolve(data.Account.Balance)
        } else {
          reject(error)
        }
      })
    })
  }

  getPermissions(address) {
    return new Promise(function (resolve, reject) {
      rpcInfo.getAccount(address, (error, data) => {
        if (data) {
          resolve(data.Account.Permissions)
        } else {
          reject(error)
        }
      })
    })
  }

```

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
