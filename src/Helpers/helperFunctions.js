export const toDate = dateStr => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	var parts = dateStr.split("-");
	const dateArray = new Date(parts[2], parts[1] - 1, parts[0])
		.toLocaleDateString(undefined, options)
		.split(" ");
	const date = `${dateArray[2].split(",")[0]} ${dateArray[1]}, ${dateArray[3]}`;
	return date;
};

export const formatToValue = value => {
	return value.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
};
