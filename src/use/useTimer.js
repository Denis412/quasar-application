import { ref } from "vue";

export function useTimer(createTodoTime, expirationTodoTime) {
  const timerId = ref(0);
  const progress = ref(0);

  return {
    progress,
    startTimer: () => {
      timerId.value = setInterval(() => {
        const currentTime = Date.now();

        progress.value =
          (currentTime - createTodoTime) /
          (expirationTodoTime - createTodoTime);
      }, 1000);
    },
    stopTimer: () => {
      clearInterval(timerId.value);
      timerId.value = 0;
    },
  };
}
