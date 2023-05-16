const Review = require('../Models/reviewModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find();
  res.status(200).json({ status: 'success', size: reviews.length, reviews });
});

exports.createReview = catchAsync(async (req, res, next) => {
  req.body.tour = req.params.tourId;
  req.body.user = req.user.id;
  const newReview = await Review.create(req.body);
  res.status(201).json({ status: 'success', review: newReview });
});