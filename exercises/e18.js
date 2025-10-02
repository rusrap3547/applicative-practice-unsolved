/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
	if (!data.asteroids || data.asteroids.length === 0) return undefined;

	const yearCounts = data.asteroids.reduce((acc, asteroid) => {
		const year = asteroid.discoveryYear;
		acc[year] = (acc[year] || 0) + 1;
		return acc;
	}, {});

	let maxYear = null;
	let maxCount = 0;

	for (const year in yearCounts) {
		if (yearCounts[year] > maxCount) {
			maxCount = yearCounts[year];
			maxYear = Number(year);
		}
	}

	return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
