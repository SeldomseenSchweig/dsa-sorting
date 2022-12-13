function bubbleSort(arr) {

	for(let i = 0; i < arr.length; i++ ){
		let trade = false
		for(j = 0; j < arr.length-1; j++){
			let temp = arr[j];
			if (arr[j] > arr[j+1]){
				arr[j] = arr[j+1]
				arr[j+1] = temp
				trade = true
			}
		}
		if(!trade) break
		}

	return arr
}

module.exports = bubbleSort;