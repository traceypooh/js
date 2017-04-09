// @flow
/* eslint-disable no-console */

import Dog from './dog'


const log = console.log.bind(console)

log('Hai whirled')

const str = 'ES6'
log(`Hai ${str}`)


const clover = new Dog('Clover')
log(clover.bark())


// uncomment to get a "can i use" (no) type eslint warning!
// navigator.serviceWorker
