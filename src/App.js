import React, { useState, Suspense } from 'react'
import { usePuzzle, puzzles } from './hook/usePuzzle'
import { InfinityRender } from './interview/infinityRender'
import './App.css'
import { Avatar, Card, Col, Row } from 'antd'
import 'antd/dist/antd.css'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
const { Meta } = Card


const style = {
  background: '#0092ff',
  padding: '8px 0',
}

const Cardz = ({ imgSrc, title, description }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={title}
      description={description}
    />
  </Card>
)


const App = () => {
  const [interviewMode, setInterviewMode] = useState(false)
  const { goTo, remove, puzzle } = usePuzzle()
  const [hint, setHint] = useState(false)

  const Puzzle = puzzle?.puzzle
  const Hint = puzzle?.hint

  return (
    interviewMode ?
      <div key='app-interview' className="App">
        <button className='mode-switch' key='fun-button' onClick={() => setInterviewMode(false)}>Back to fun mode</button>
        <InfinityRender />
      </div> :

      <div key='app-puzzle' className="App">
        <div>
          <button key='interview-button' onClick={() => setInterviewMode(true)}>Interview mode</button>
        </div>

        {puzzle ?
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <button key='remove-button' onClick={remove}>Go back</button>
            </div>
            <button key='hint-button' onClick={() => setHint(!hint)}>{hint ? 'Reset' : 'Show hint'}</button>
            {hint ? <Hint /> : <Puzzle />}
          </Suspense> :

          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {Object.keys(puzzles).map(key =>
              <Col className="gutter-row">
                <div style={style}>{Cardz('', puzzles[key].name, puzzles[key].name)}</div>
              </Col>
            )}

          </Row>
        }
      </div>
  )
}

export default App