const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { captcha } = JSON.parse(event.body);
  const secretKey = '6LcO6gArAAAAANzBMFphItdfJJxIrd2DB_hO_On4'; // Replace this with your Secret Key

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
    { method: 'POST' }
  );
  const data = await response.json();

  if (data.success) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: 'CAPTCHA verification failed' }),
    };
  }
};