import { useState } from 'react';

export default function useToggle(initVal) {
	const [show, setshow] = useState(initVal);

	function toggle() {
		setshow(!show);
	}
	
	return { show, toggle };
}
