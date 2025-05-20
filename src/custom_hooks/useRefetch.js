import { useState } from 'react';

export default function useRefetch() {
    const [refreshCount, setrefreshCount] = useState(0);

    const handleIncrement = () => setrefreshCount((prev) => prev + 1);

    return { handleIncrement, refreshCount };
}
