const {Router} = require('express');
const { getCoins, addCoin, deleteCoin, getCoin, editCoin } = require('../controllers/coins');
const verifyAuth = require('../middlewares/verifyAuth');
const verifyRole = require('../middlewares/verifyRole');
const router = Router();

router.get('/', [verifyAuth, verifyRole], getCoins);
router.get('/:id', [verifyAuth, verifyRole], getCoin);
router.put('/:id', [verifyAuth, verifyRole], editCoin);
router.post('/', [verifyAuth, verifyRole], addCoin);
router.delete('/', [verifyAuth, verifyRole], deleteCoin);

module.exports = router;