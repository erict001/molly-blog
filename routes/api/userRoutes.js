const router = require("express").Router();
const { User } = require("../../models");

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      return res.status(400).json({msg:"wrong login credentials"})
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({msg:"wrong login credentials"})
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    alert(err);
  }
});

// Logout
router.get('/logout', function(req, res) {
  req.session.destroy(function(err){
     if(err){
        console.log(err);
     }else{
         res.redirect('/login');
     }
  });
});

module.exports = router;
