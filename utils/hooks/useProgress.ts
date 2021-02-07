import { Dispatch, SetStateAction, useState } from "react";

interface ProgressReturn {
  loading: boolean;
  success: boolean;
  error: string | null;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
  startLoad: () => void;
  reset: () => void;
}

const useProgress = (): ProgressReturn => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setSuccess(false);
    setError(null);
  };

  const startLoad = () => {
    reset();
    setLoading(true);
  };

  return {
    loading,
    success,
    error,
    setLoading,
    setSuccess,
    setError,
    startLoad,
    reset
  };
};

export default useProgress;