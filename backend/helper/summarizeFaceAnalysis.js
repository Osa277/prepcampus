const summarizeFaceAnalysis = (analysisResults) => {
  let totalFrames = analysisResults.length;
  let framesWithFaces = 0;
  let eyeContactCount = 0;
  let confidenceSum = 0;
  let confidenceCount = 0;

  for (const result of analysisResults) {
    if (result.faces && result.faces.length > 0) {
      framesWithFaces++;
      result.faces.forEach(face => {
        if (face.faceAttributes) {
          const { gazeDirection, confidence } = face.faceAttributes;

          // Very basic gaze logic: you can expand this
          if (gazeDirection && gazeDirection === "Front") {
            eyeContactCount++;
          }

          if (typeof confidence === "number") {
            confidenceSum += confidence;
            confidenceCount++;
          }
        }
      });
    }
  }

  const presence = framesWithFaces / totalFrames >= 0.6 ? "Consistent" : "Intermittent";
  const eyeContact = eyeContactCount / totalFrames >= 0.5 ? "Frequent" : "Rare";
  const avgConfidence = confidenceCount > 0 ? confidenceSum / confidenceCount : 0;

  const confidenceLevel =
    avgConfidence > 0.8
      ? "High"
      : avgConfidence > 0.5
      ? "Moderate"
      : "Low";

  return {
    presence,
    eyeContact,
    confidence: confidenceLevel,
  };
};

module.exports = summarizeFaceAnalysis;
