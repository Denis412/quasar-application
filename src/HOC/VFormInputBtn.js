import { defineComponent } from "vue";

export const VFormInputBtn = (VForm) => {
  const Foo = defineComponent({
    name: "Foo",
    props: {
      title: String,
    },
    methods: {
      addFoo() {},
    },
  });

  console.log(Foo);
  // return {
  //   functional: true,
  //   name: "VFormInputBtn",
  //   render(h, context) {
  //     return h(
  //       VForm,
  //       {
  //         ...context.data,
  //         props: {},
  //       },
  //       context.children
  //     );
  //   },
  // };
};
