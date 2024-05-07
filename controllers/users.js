import mongoose from 'mongoose';
import { User } from '../models/users.js';

export const insertUsers = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: 'id not found' });
  }

  try {
    await User.findByIdAndDelete(_id);

    res.status(200).json({ message: 'user deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: _id } = req.params;
  const data = { ...req.body };

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).json({ message: 'id not found' });
  }

  try {
    const user = await User.findByIdAndUpdate(_id, data, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
