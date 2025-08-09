// Health check endpoint for Vercel
module.exports = (req, res) => {
  res.json({
    status: "OK",
    message: "PrepCampus Backend is running on Vercel!",
    timestamp: new Date().toISOString(),
    environment: "production"
  });
};
