import { useEffect, useState } from 'react';

export function useVisibleStep() {
  const [visibleStep, setVisibleStep] = useState<number | null>(null);

  const handleInView = (inView: boolean, id: number) => {
    if (inView) {
      setVisibleStep(id);
    }
  };

  return { visibleStep, handleInView };
}
