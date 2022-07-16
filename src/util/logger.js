
const messageTitlePrefix = 'anna'

const emojis = ['💩', '👯‍', '😸', '🏄', '🚀', '🔥', '🎉', '😄', '🦁']

const dataUrlOf = async (imageUrl) => {
  const blob = await fetch(imageUrl).then(r => r.blob())

  const dataUrl = await new Promise(resolve => {
    const reader = new FileReader()

    reader.onload = () => resolve(reader.result)

    reader.readAsDataURL(blob)
  })

  return dataUrl
}

export const Gifs = {
  LightningCat: 'https://i.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.webp',
  LongHairCow: 'https://media.giphy.com/media/11lE4F9K9UlqRa/giphy.gif',
}

const style = (backgroundImage) => [
  `background: url("${backgroundImage}")`,
  'background-size: cover',
  'color: red',
  'padding: 45px 45px',
  'line-height: 150px',
  ''
].join(';')

const feelingLucky = () => {
  const random = Math.floor(Math.random() * emojis.length)
  return emojis[random]
}

export const Emoji = {
  CaCa: emojis.indexOf('💩'),
  Chat: emojis.indexOf('😸'),
  Rocket: emojis.indexOf('🚀'),
  Fire: emojis.indexOf('🔥'),
  Celebrate: emojis.indexOf('🎉'),
  Smile: emojis.indexOf('😄')
}

export const logWithEmoji = (obj, title, emoji) =>
  console.log(`${emoji && emojis[emoji]} ${messageTitlePrefix}: ${title}`.trim(), obj)

export const logGif = (message, title, gif) =>
  dataUrlOf(gif).then((dataUrl) =>
    console.log(`${'%c'}${messageTitlePrefix}: ${title}: ${message}`.trim(), `${gif ? style(dataUrl) : 'color:black'}`)
  )

export const logObjGif = (obj, title, gif) => {
  console.log(`${'%c'}${messageTitlePrefix}: ${title} %o`.trim(), `${gif ? style(gif) : 'color:black'}`, obj)
}

export const ColourOf = {
  Success: 'Green',
  Info: 'DodgerBlue',
  Error: 'Red',
  Warning: 'Orange',
  Default: 'Black'
}

export const colorLog = (message, type, obj) =>
  obj ? console.log(`%c${messageTitlePrefix}: ${message}%o`, `color:${type || ColourOf.Default}`, obj) :
    console.log(`%c${messageTitlePrefix}: ${message}`, `color:${type || ColourOf.Default}`)
