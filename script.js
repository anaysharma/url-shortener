const themeBtn = document.querySelector('.color-toggle');
const root = document.querySelector(':root');

function changeTheme() {
	const colorLookup = {
		'#111': '#fff',
		'#fff': '#111',
	};
	const rs = getComputedStyle(root);
	const currentBGColor = rs.getPropertyValue('--bg-color');
	const currentFGColor = rs.getPropertyValue('--fg-color');
	root.style.setProperty('--bg-color', colorLookup[currentBGColor]);
	root.style.setProperty('--fg-color', colorLookup[currentFGColor]);
}

themeBtn.addEventListener('click', changeTheme);
