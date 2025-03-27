exports.handler = async (event) => {
  const { captcha } = JSON.parse(event.body);
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Should match the Site Key's pair

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`,
      { method: 'POST' }
    );
    const data = await response.json();

    if (data.success && data.score >= 0.5) { // Adjust the score threshold as needed
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, score: data.score }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: 'CAPTCHA verification failed',
          score: data.score || null,
          errors: data['error-codes'] || [],
        }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Server error during CAPTCHA verification' }),
    };
  }
};