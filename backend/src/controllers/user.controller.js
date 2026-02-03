exports.getProfile = async (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  req.user.name = req.body.name || req.user.name;
  await req.user.save();
  res.json(req.user);
};
