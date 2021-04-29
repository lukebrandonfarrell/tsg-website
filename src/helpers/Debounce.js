export const debounce = (func, interval) => {
	let timeout;
	return function() {
		const _this = this;
		const args = arguments;
		const later = function() {
			timeout = null;
			func.apply(_this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, interval || 100);
	};
}