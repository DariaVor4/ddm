import { useEffect, useRef, useState } from 'react';
import { isDate } from 'lodash';

/**
 * Запуск таймера на основе даты окончания.
 * Например, удобен для информирования об истечении времени для повторного использования:
 * <CircularProgress variant='determinate' value={progress} />
 */
const useDateProgress = () => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const killProgress = () => {
    clearInterval(timerRef.current);
    setProgress(0);
  };

  const startProgress = (dateEnd: Date | number) => {
    setProgress(100);
    clearInterval(timerRef.current);
    const startTimestamp = Date.now();
    const endTimestamp = isDate(dateEnd) ? dateEnd.getTime() : dateEnd;
    timerRef.current = setInterval(() => {
      const total = endTimestamp - startTimestamp;
      const elapsed = Date.now() - startTimestamp;
      setProgress(100 - (elapsed / total) * 100);
      if (elapsed >= total) killProgress();
    }, 1000);
  };

  /**
   * Очистка таймера на onUnmount.
   */
  useEffect(() => killProgress, []);

  return {
    progress,
    startProgress,
    killProgress,
  };
};

export default useDateProgress;
