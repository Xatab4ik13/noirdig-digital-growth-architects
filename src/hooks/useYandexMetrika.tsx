declare global {
  interface Window {
    ym?: (counterId: number, action: string, goalName: string) => void;
  }
}

const COUNTER_ID = 106047323;

export const useYandexMetrika = () => {
  const reachGoal = (goalName: string) => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(COUNTER_ID, 'reachGoal', goalName);
    }
  };

  return { reachGoal };
};

// Utility function for direct use without hook
export const ymReachGoal = (goalName: string) => {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(COUNTER_ID, 'reachGoal', goalName);
  }
};
