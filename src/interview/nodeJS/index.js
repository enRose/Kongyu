




const today = new Date()

const aussieTime = today.toLocaleTimeString('en-AU', { 
  timeStyle: 'medium', timeZone: 'Australia/Sydney'})

const NZTime = today.toLocaleString()

console.log(NZTime)

