const bcrypt = require('bcryptjs');
const User = require('../models/adminModel');
const jwt = require('jsonwebtoken');

exports.signupAdmin = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, password } = req.body;

  if (!email || !firstName || !lastName || !phoneNumber || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    let admin = await User.findOne({ email });
    if (admin) return res.status(400).json({ msg: 'Admin already exists' });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    admin = new User({
      email,
      firstName,
      lastName,
      phoneNumber,
      passwordHash,
    });

    await admin.save();

    res.status(201).json({ msg: 'Admin created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await User.findOne({ email });
    if (!admin) return res.status(401).json({ msg: 'Invalid credentials' });

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ user: { email: admin.email }, token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
