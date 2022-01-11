<template>
  <div
    class="w-full md:w-2/3 h-full bg-white shadow-2xl rounded-3xl p-10
     md:mx-10 lg:mx-20 card-animate"
    id="card"
  >
    <div class="flex flex-col justify-between align-center">
      <div class="exit-icon" @click="goBack()">
        <mdicon name="close" size="30" />
      </div>
      <strong class="title">{{ cardsDataFiltered.title[position] }}</strong>
      <pre class="text-xs sm:text-sm">
        <code>
  {{cardsDataFiltered.code[position]}}
        </code>
      </pre>
      <p class="text-center text-sm sm:text-base">
        {{ cardsDataFiltered.text[position] }}
      </p>
    </div>
  </div>
</template>

<script>
import {ref, reactive} from 'vue';

export default {
  name: 'Card',
  created() {},
  data() {
    return {};
  },
  computed: {
    cardsDataFiltered() {
      let filteredData;
      this.topic == 'vue' ? (filteredData = this.cardsData.vue) : null;
      this.topic == 'firebase' ?
       (filteredData = this.cardsData.firebase) : null;
      this.topic == 'tailwind' ?
       (filteredData = this.cardsData.tailwind) : null;
      return filteredData;
    },
  },
  watch: {
    position(value) {
      // Controla el desbordamiento de position
      if (this.topic == 'vue') {
        value >= this.titlesVue.length - 1 ?
          this.$emit('lastCard', true) :
          this.$emit('lastCard', false);
      }
      if (this.topic == 'firebase') {
        value >= this.titlesFirebase.length - 1 ?
          this.$emit('lastCard', true) :
          this.$emit('lastCard', false);
      }
      if (this.topic == 'tailwind') {
        value >= this.titlesTailwind.length - 1 ?
          this.$emit('lastCard', true) :
          this.$emit('lastCard', false);
      }
    },
  },
  props: {
    topic: {
      type: String,
      default: '',
      required: true,
    },
    position: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  setup(props, context) {
    const titlesVue = ref(['Titulo de ejemplo', '']);
    const textsVue = ref([
      'En Vue 3 la importacion global de componentes es un poco... ',
      '',
    ]);
    const codesVue = ref([`<template>
  <div class="card-container flex justify-center align-center
  flex-wrap flex-row md:flex-nowrap">
    <button
      class="btn order-2 md:order-1"
      :class="{ disabled: position == 0, prev: position != 0 }"
      :disabled="position == 0"
      @click="position--"
    >
      <mdicon name="arrow-left" class="flex justify-center" />
    </button>
    <Card
      :position="position"
      :topic="topic"
      @goBack="this.$emit('goBack')"
      @lastCard="isTheLastCard = $event"
      class="order-1 md:order-2"
    />
    <button
      class="btn order-3 md:order-3"
      :class="{ disabled: isTheLastCard, next: !isTheLastCard }"
      :disabled="isTheLastCard"
      @click="position++"
    >
      <mdicon name="arrow-right" class="flex justify-center" />
    </button>
  </div>
</template>`, '']);
    const titlesFirebase = ref([]);
    const textsFirebase = ref([]);
    const codesFirebase = ref([]);
    const titlesTailwind = ref([]);
    const textsTailwind = ref([]);
    const codesTailwind = ref([]);

    const cardsData = reactive({
      vue: {
        title: titlesVue.value,
        code: codesVue.value,
        text: textsVue.value,
      },
      firebase: {
        title: titlesFirebase.value,
        code: codesFirebase.value,
        text: textsFirebase.value,
      },
      tailwind: {
        title: titlesTailwind.value,
        code: codesTailwind.value,
        text: textsTailwind.value,
      },
    });
    // Controla el desbordamiento de position
    if (props.topic == 'vue') {
      props.position >= titlesVue.value.length - 1 ?
        context.emit('lastCard', true) :
        null;
    }
    if (props.topic == 'firebase') {
      props.position >= titlesFirebase.value.length - 1 ?
        context.emit('lastCard', true) :
        null;
    }
    if (props.topic == 'tailwind') {
      props.position >= titlesTailwind.value.length - 1 ?
        context.emit('lastCard', true) :
        null;
    }

    const goBack = () => {
      const card = document.getElementById('card');
      card.classList.add('leave-animate');
      setTimeout(() => {
        context.emit('goBack');
      }, 200);
    };
    return {
      codesVue,
      titlesFirebase,
      titlesVue,
      textsVue,
      textsFirebase,
      codesFirebase,
      titlesTailwind,
      textsTailwind,
      codesTailwind,
      goBack,
      cardsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.5em;
  @media (max-width: 639px) {
    font-size: 1.2em;
  }
}
pre {
  width: 90%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 10px 10px;
  margin: 25px 0;
  background: #fff;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre;
  color: #666666;
  border-left: 3px solid #ad1905;
  background-color: rgb(236, 236, 236);
  overflow-y: hidden;
}
.exit-icon {
  position: absolute;
  top: 25px;
  left: 25px;
}
.card-animate {
  animation: show-card 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.leave-animate {
  animation: leave-card 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes show-card {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes leave-card {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
