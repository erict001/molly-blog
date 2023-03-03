const router = require("express").Router();
const { User } = require("../../models");

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.json("There is nothing")
      return alert("Incorrect username or passowrd");
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return alert("Incorrect username or passowrd");
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.get('/logout', function(req, res) {
  req.session.destroy(function(err){
     if(err){
        console.log(err);
     }else{
         console.log(req.session);
         res.redirect('/login');
     }
  });
});

module.exports = router;
