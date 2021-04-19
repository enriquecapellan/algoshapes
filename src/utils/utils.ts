function chunkArray(values: any[], chunkSize: number) {
	const chunks = []
	while (values.length > 2) {
		const chunk = values.slice(0, chunkSize)
		chunks.push(chunk)
		values = values.slice(chunkSize)
	}
	return chunks
}

function getSquareArea(hight: number, width: number): number {
	return hight * width
}

function getSquarePerimeter(values: number[]): number {
	let result: number = 0
	values.forEach((value) => {
		result += value
	})
	return result
}

function getUniqueValues(values: number[]): number[] {
	const results: number[] = []
	values.forEach((value) => {
		if (!results.includes(value)) {
			results.push(value)
		}
	})
	return results
}

function bubbleSort(values: number[]) {
	var n, i, k, aux
	n = values.length
	for (k = 1; k < n; k++) {
		for (i = 0; i < n - k; i++) {
			if (values[i] > values[i + 1]) {
				aux = values[i]
				values[i] = values[i + 1]
				values[i + 1] = aux
			}
		}
	}

	return values
}

function getMedian(values: number[]) {
	if (values.length === 0) return 0

	values.sort(function (a, b) {
		return a - b
	})

	var half = Math.floor(values.length / 2)

	if (values.length % 2) return values[half]

	return (values[half - 1] + values[half]) / 2.0
}

export {
	chunkArray,
	getSquareArea,
	getSquarePerimeter,
	getUniqueValues,
	bubbleSort,
	getMedian
}
