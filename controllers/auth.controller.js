function getSignup(req, res, next) {
  res.render("customer/auth/signup");
}

function getLogin(req, res) {}

module.exports = {
  getSignup,
  getLogin,
};
