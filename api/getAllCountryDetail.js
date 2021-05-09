const express = require('express');
const router = express.Router();
const { checkAccessToken } = require('../middleware/jwt');
const { query } = require('../init');

router.post('/', checkAccessToken, async (req, res) => {
	try {
		const result = await query('SELECT * FROM country_detail');

		if (result.length == 0) return res.json({ status: false, message: 'There is no data to show' });

		return res.json({ status: true, message: 'Data retreived successfully', data: result });
	} catch (e) {
		console.log(`Error in /api/getAllCountryDetail, error: ${e.message}`, e);
		if (!res.headersSent)
			return res.json({
				status: false,
				error: e.message,
			});
	}
});

module.exports = router;
