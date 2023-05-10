const { Router } = require('express');
const { Candidates } = require('../models/candidates');
const { sendEmail } = require('../setup/nodemailer');

const router = Router();

router.post('/requests', async (req, res) => {
 const {
  email,
  name,
  phoneNumber,
  questions,
 } = req.body;

 let { requestedDate } = req.body;
 requestedDate = new Date(requestedDate);

 if (!email) {
  return res.status(400).send({ message: 'Parameter email was not provided' });
 }

 const candidate = await Candidates.findOne({ email });
 if (!candidate) {

  const newCandidate = await new Candidates({
   email,
   name,
   phoneNumber,
   requests: [
    { requestedDate, questions }
   ]
  });

  await newCandidate.save();
  await sendEmail({
   candidateEmail: email,
   requestedDate,
   candidateName: name || phoneNumber || email,
   question: questions,
   countOfActiveRequests: 1,
  });
  return res.status(200).send({ message: 'New candidate was created' });
 }

 const updatedDoc = await Candidates.findOneAndUpdate(
  { email },
  { $push: { requests: { requestedDate, questions } } },
  { new: true }
 );
 await sendEmail({
  candidateEmail: email,
  requestedDate,
  candidateName: name || phoneNumber || email,
  question: questions,
  countOfActiveRequests: updatedDoc.requests.length,
 });
 return res.status(200).send({ message: 'Save request in existing candidate' });
});


module.exports = { router };