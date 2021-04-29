export const matchMediaDown = (breakpoint) => {
	if (window.matchMedia(`only screen and (max-width: ${breakpoint}px)`).matches) {
		return true;
	}
	return false;
}