const Tour = require('../Models/tourModel');

exports.getAllTours = async (req, res, next) => {
  const tours = await Tour.find();
  res.json({ status: 'success', tours });
};

exports.createTour = async (req, res, next) => {
  const newTour = await Tour.create(req.body);
  res.json({ status: 'success', newTour });
};

exports.updateTour = async (req, res, next) => {
  const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ status: 'success', updatedTour });
};

exports.deleteTour = async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  res.json({ status: 'success', data: null });
};

exports.getTour = async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  res.json({ status: 'success', tour });
};
