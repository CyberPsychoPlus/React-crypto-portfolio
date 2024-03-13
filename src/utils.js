export function percentDifference(a, b) {
	return +(100 * Math.abs((a - b) / ((a + b) / 2))).toFixed(2)
}

export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.substr(1)
}

export function formatNumber(num) {
	if (Math.abs(num) < 999999) return num
	const suffixes = ['', 'K', 'M', 'B', 'T']
	const sign = Math.sign(num)
	const absNum = Math.abs(num)

	const suffixIndex = Math.floor(Math.log10(absNum) / 3)

	const scaledNum = absNum / Math.pow(10, suffixIndex * 3)

	return (sign * scaledNum).toFixed(1) + suffixes[suffixIndex]
}
