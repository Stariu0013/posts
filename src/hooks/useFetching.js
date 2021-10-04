import {useState} from "react";

function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetching(...args) {
        try {
            setIsLoading(true);
            await callback(...args);
        }
        catch(err) {
            setError(err.message);
        }
        finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}

export default useFetching;