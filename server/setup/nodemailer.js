

console.log(process.env.NODEMAILER_EMAIL);
console.log(process.env.NODEMAILER_PASSWORD);

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 465,
 tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2"
},
 auth: {
  user: process.env.NODEMAILER_EMAIL,
  pass: process.env.NODEMAILER_PASSWORD,
 }
});

/**
 * 
 * @param {Object} params 
 * @param {String} params.candidateName 
 * @param {String} params.question
 * @param {Number} params.countOfActiveRequests
 * @param {Date} params.requestedDate
 */
const sendMailToUniversity = async (params) => {
 const { candidateName, countOfActiveRequests, question, requestedDate } = params;
 /**
  * @type {nodemailer.SendMailOptions}
  */
 const mailOptions = {
  from: process.env.NODEMAILER_EMAIL,
  subject: `[new-request] Candidate ${candidateName} for date ${requestedDate.toLocaleDateString()}`,
  text: `This candidate has ${countOfActiveRequests} active requests. Current request contains next question:\n> "${question}"`,
  to: process.env.NODEMAILER_UNIVERSITY_EMAIL,
 };
 await transporter.sendMail(mailOptions);
};

/**
 * 
 * @param {Object} params 
 * @param {String} params.candidateEmail 
 * @param {Number} params.countOfActiveRequests
 */
const sendMailToCandidate = async (params) => {
 const { countOfActiveRequests, candidateEmail } = params;
 /**
  * @type {nodemailer.SendMailOptions}
  */
 const mailOptions = {
  from: process.env.NODEMAILER_EMAIL,
  subject: `University.We are received your request`,
  text: `This is friendly message, that we are received your request. Currently you have ${countOfActiveRequests} active request. We will connect with you a soon as possible`,
  to: candidateEmail,
 };
 await transporter.sendMail(mailOptions);
};

/**
 * 
 * @param {Object} params 
 * @param {String} params.candidateName 
 * @param {String} params.question
 * @param {Number} params.countOfActiveRequests
 * @param {Date} params.requestedDate
 * @param {String} params.candidateEmail 
 */
const sendEmail = async (params) => {
 await sendMailToUniversity(params);
 await sendMailToCandidate(params);
};

module.exports = { sendEmail }


