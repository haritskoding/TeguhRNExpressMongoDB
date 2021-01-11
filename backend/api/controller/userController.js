const Users = require('../models/userModel');

exports.test = (req, res) => {
    res.send("Ini udah bener komunikasi antara model dan route")
}

exports.tambahUser = async (req, res, next) => {
    let user = new Users({
        nama: req.body.nama,
        email: req.body.email,
        hp: req.body.hp,
        alamat: req.body.alamat,
    });
    try {
        await user.save((err) => {
            if (err) {
                return next(err)
            }
            res.status(200).json(user);
        })
    } catch (error) {
        console.log(error.message)
        return res.status(422).send("gmail sudah terdaftar coba email lain oke")
    }


}

exports.tampilUser = (req, res, next) => {
    Users.find({}, (err, users) => {
        if (err) {
            return next(err);
        }
        res.send(users)
    })
}

exports.cariUser = (req, res, next) => {
    Users.findById(req.params.id, (err, users) => {
        if (err) {
            return next(err);
        }

        res.send(users);
    })
}

/*****
 * searchinf data user By 
 * 
 */
exports.cariNamaUser = (req, res, next) => {
    // res.send('pencarian nama user' + req.body)
    let regex = new RegExp(req.params.nama, 'i')
    Users.find({ nama: regex }).then((data) => {
        res.status(200).json(data)
    })
}

exports.cariEmailUser = (req, res, next) => {
    // res.send('pencarian nama user' + req.body)
    let regex = new RegExp(req.params.email, 'i')
    Users.find({ email: regex }).then((data) => {
        res.status(200).json(data)
    })
}

exports.cariAlamatUser = (req, res, next) => {
    // res.send('pencarian nama user' + req.body)
    let regex = new RegExp(req.params.alamat, 'i')
    Users.find({ alamat: regex }).then((data) => {
        res.status(200).json(data)
    })
}

exports.cariNoHpUser = (req, res, next) => {
    // res.send('pencarian nama user' + req.body)
    let regex = new RegExp(req.params.hp, 'i')
    Users.find({ hp: regex }).then((data) => {
        res.status(200).json(data)
    })
}

exports.updateUser = (req, res, next) => {
    Users.findByIdAndUpdate(req.params.id,
        { $set: req.body }, (err, todos) => {
            if (err) {
                return next(err)
            }
            res.send("Update berhasil")
        })
}

/*****
 * searchinf data user By 
 */

exports.deleteUser = (req, res, next) => {
    Users.findByIdAndRemove(req.params.id, { $set: req.body }, (err, todos) => {
        if (err) {
            return next(err)
        }
        res.send("User berhasil di hapus")
    })
}
