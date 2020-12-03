const router = require("express").Router();
const auth = require("./auth");
const userInfo = require("./infoModel");

//routes infoModel onto the database, WIP

router.post("/", auth, async (req, res) => {
    try{
        const { creditCard, shippingAddress } = req.body;

        const newUserInfo = new userInfo({
            creditCard,
            shippingAddress,
            userId: req.user,
        });
        const saveduserInfo = await newUserInfo.save();
        res.json(saveduserInfo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/all", auth, async (req, res) =>{
    const info = await userInfo.find({userId: req.user});
    res.json(info);
});



module.exports = router;
