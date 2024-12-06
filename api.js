app.get('/random-string', (req, res) => {
  const randomString = Math.random().toString(36).substring(2, 10).toUpperCase();
  res.json({ randomString });
});
