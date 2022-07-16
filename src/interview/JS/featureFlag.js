export const fetchAllFeatures = () => {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise(resolve => {
    const sampleFeatures = {
      "extended-summary": true,
      "feedback-dialog": false,
      "multi-values-feature": 'part-enabled',
    }

    setTimeout(resolve, 100, sampleFeatures)
  })
}

export const getFeatureState = async (featureName, defaultFlag) => {
  const featureFlags = await fetchAllFeatures()

  const betterFlags = { ...featureFlags, default: defaultFlag }

  return betterFlags[featureName] ?? betterFlags['default'] ?? false
}