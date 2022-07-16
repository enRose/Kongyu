import React, { useEffect, useState } from 'react'
import { useTime } from '../../hook/useTime'
import { logGif, Gifs } from '../../util/logger'
import '../../util/memeLogger.js'
import { getFeatureState } from './featureFlag'

export const SummaryPage = () => {
  const [flag, setFlag] = useState()

  useEffect(() => {
    getFeatureState("extended-summ")
      .then(function (isEnabled) {
        setFlag(isEnabled)

        console.log(isEnabled)
        if (isEnabled) {
          //showExtendedSummary();
        } else {
          //showBriefSummary()
        }
      })
  }, [])

  return (
    <>
      <div>{flag ? 'enabled': 'disabled'}</div>
    </>
  )
}