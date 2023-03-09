import { ref } from "vue";

export function useTimer(createTodoTime, expirationTodoTime) {
  let timerId = 0;
  const progress = ref(0);

  return {
    progress,
    startTimer: () => {
      timerId = setInterval(() => {
        const currentTime = Date.now();

        progress.value =
          (currentTime - createTodoTime) /
          (expirationTodoTime - createTodoTime);
      }, 1000);
    },
    stopTimer: () => {
      clearInterval(timerId);
      timerId = 0;
    },
  };
}
