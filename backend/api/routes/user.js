const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');

router.get('/test', userController.test)

router.get('/', userController.tampilUser);
router.post('/', userController.tambahUser);
router.get('/:id', userController.cariUser);

router.get('/cariNama/:nama', userController.cariNamaUser);
router.get('/cariEmail/:email', userController.cariEmailUser);
router.get('/cariNoHp/:hp', userController.cariNoHpUser);
router.get('/cariAlamat/:alamat', userController.cariAlamatUser);

router.put("/:id/update", userController.updateUser);
router.delete("/:id/delete", userController.deleteUser);

module.exports = router;