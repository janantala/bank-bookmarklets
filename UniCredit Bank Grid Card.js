javascript:(

	/**** UnicreditBank Grid Card ****/

	function() {
		// fill your own values
		var gridCard = {
			'A/1': 'A1A1',
			'A/2': 'A2A2',
			'A/3': 'A3A3',
			'A/4': 'A4A4',
			'A/5': 'A5A5',
			'A/6': 'A6A6',
			'A/7': 'A7A7',
			'A/8': 'A8A8',
			'B/1': 'B1B1',
			'B/2': 'B2B2',
			'B/3': 'B3B3',
			'B/4': 'B4B4',
			'B/5': 'B5B5',
			'B/6': 'B6B6',
			'B/7': 'B7B7',
			'B/8': 'B8B8',
			'C/1': 'C1C1',
			'C/2': 'C2C2',
			'C/3': 'C3C3',
			'C/4': 'C4C4',
			'C/5': 'C5C5',
			'C/6': 'C6C6',
			'C/7': 'C7C7',
			'C/8': 'C8C8',
			'D/1': 'D1D1',
			'D/2': 'D2D2',
			'D/3': 'D3D3',
			'D/4': 'D4D4',
			'D/5': 'D5D5',
			'D/6': 'D6D6',
			'D/7': 'D7D7',
			'D/8': 'D8D8',
			'E/1': 'E1E1',
			'E/2': 'E2E2',
			'E/3': 'E3E3',
			'E/4': 'E4E4',
			'E/5': 'E5E5',
			'E/6': 'E6E6',
			'E/7': 'E7E7',
			'E/8': 'E8E8',
			'F/1': 'F1F1',
			'F/2': 'F2F2',
			'F/3': 'F3F3',
			'F/4': 'F4F4',
			'F/5': 'F5F5',
			'F/6': 'F6F6',
			'F/7': 'F7F7',
			'F/8': 'F8F8',
			'G/1': 'G1G1',
			'G/2': 'G2G2',
			'G/3': 'G3G3',
			'G/4': 'G4G4',
			'G/5': 'G5G5',
			'G/6': 'G6G6',
			'G/7': 'G7G7',
			'G/8': 'G8G8'
		};

		var el = document.getElementsByClassName('bold text_flex')[0] || document.getElementsByClassName('tFDef')[0];
		var gridLocation = el.innerHTML; var pass = gridCard[gridLocation];
		var input = document.getElementsByClassName('input_30')[0];
		input.value = pass;
		input.focus();
	}
)();
