<template>
  <div v-if="displayCountDown">
    <h2 v-if="isLive">Election started</h2>
    
    <div v-else>
      <h2>Election starts in:</h2>
      
      <section>
        <section class="timer">
          <div>
            <section>
              <p>{{ days }}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ hours }}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ minutes }}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ seconds }}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
	 
	<script>
export default {
  name: "CountDownTimer",
  created() {
    this.startTimer();
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isLive: false,
      displayCountDown: false,
    };
  },
  methods: {
    async startTimer() {

      const d= await this.$axios.get('http://localhost:8083/election/E1')
      console.log(d.data[0].stime)

      const countdownDate = d.data[0].stime-19800000;
     // new Date("January 11, 2022 7:59:00").getTime();
      console.log(countdownDate)
      let self = this;
      let interval = setInterval(() => {
  
        const d1=new Date();
       // console.log(d1.getHours())
        const distance = countdownDate - d1.getTime();

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance <= 0) {
          self.isLive = true;
          clearInterval(interval);
        } else {
          self.days = days;
          self.hours = hours;
          self.minutes = minutes;
          self.seconds = seconds;
        }
        self.displayCountDown = true;
      }, 1000);
    },
   
  },
};
</script>
	 
	<style scoped>
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer div:first-child {
  border: 1px solid white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 1em;
  padding: 1em 1em 0 1em;
}

section p:first-child,
.timer div:last-child span {
  display: contents;
}

@media screen and (max-width: 480px) {
  .timer div:last-child {
    margin-left: 2em;
    margin-right: 2em;
  }
}

.text-animation {
  animation: color-change 5s infinite;
  font-weight: 400;
}

@keyframes color-change {
  0% {
    color: #00ffa3;
  }
  25% {
    color: yellow;
  }
  50% {
    color: #dc1fff;
  }
  75% {
    color: #f1a945;
  }
  100% {
    color: #00ffa3;
  }
}
</style>