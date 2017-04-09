// @flow

import React from 'react'
import HelloButton from './container/hello-button'
import HelloAsyncButton from './container/hello-async-button'
import Message from './container/message'
import MessageAsync from './container/message-async'
import { APP_NAME } from '../shared/config'

const App = () =>
<div>
  <h1>Hai React and the nu hotness</h1>
  muffin revolution
  <p>
    <b>hot reloading.  omfg -- like not <i>necessarily in a good way ;)</i></b>
  </p>
  <h3>YMMV!</h3>
  change change change

  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>
</div>


export default App
