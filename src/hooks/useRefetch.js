import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleStateIncrement } from '../features/obj/objSlice';

export default function useRefetch() {
    const dispatch = useDispatch();

    const [refreshCount, setrefreshCount] = useState(0);

    const handleIncrement = () => {
        setrefreshCount((prev) => prev + 1);
        dispatch(handleStateIncrement())
    }

    return { handleIncrement, refreshCount };
}
