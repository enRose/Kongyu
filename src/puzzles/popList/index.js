import './popList.css'

const PopList = () => {

  const bulbs = Array(6).fill(0).map((_, i) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    return <div data-avatar={`p${i}`} style={{ '--random-colour-var': `#${randomColor}` }}>{i}</div>
  })

  return (
    <div>
      <p>Mouse over to pop the bubbles</p>
      {bulbs}
    </div>
  )
}

export default PopList