import { cryptoAssets, cryptoData } from './data'

export function fakeFetchCrypto() {
	return new Promise((resolve, reject) => {
		const connection = true
		if (connection) {
			setTimeout(() => {
				resolve(cryptoData)
			}, 1000)
		} else {
			reject('Something went wrong(')
		}
	})
}

export function fetchAssets() {
	return new Promise((resolve, reject) => {
		const connection = true
		if (connection) {
			setTimeout(() => {
				resolve(cryptoAssets)
			}, 1000)
		} else {
			reject('Something went wrong(')
		}
	})
}
