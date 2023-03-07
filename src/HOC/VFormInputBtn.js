export const VFormInputBtn = (VForm) => {
  return {
    functional: true,
    name: "VFormInputBtn",
    render(h, context) {
      return h(
        VForm,
        {
          ...context.data,
          props: {},
        },
        context.children
      );
    },
  };
};
