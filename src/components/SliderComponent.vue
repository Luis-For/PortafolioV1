<template>
  <div class="slider">
    <div class="items-group">
      <div
        class="item"
        v-for="(n, index) in 4"
        :key="n"
        :class="{ active: index === activeIndex }"
        >
        <div class="block">
          <span class="circleLight"></span>
          <div class="text">
            <h2>Hi</h2>
            <p>I'm a cool card</p>
          </div>
        </div>
      </div>
    </div>

    <div class="navigations">
      <ul class="dots">
        <li v-for="n in 4" :key="'dot'+n"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
    data() {
    return {
      activeIndex: 0
    };
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % 4;
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.slider {
  width: 100%;
  height: 100vh;

  .items-group {
    width: 100%;
    height: 100%;
    position: relative;

    .item {
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
      transition: 0.5s;
      visibility: hidden;
      position: absolute;
      padding: 50px 20px;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;

      &:hover {
        .bg {
          opacity: 0.2;
        }

        .block {
          box-shadow: 0px 0px 50px #333;
        }
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }

      .bg,
      .blur {
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        position: absolute;
        transform: scale(1.03);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      }

      .blur {
        filter: blur(5px);
      }

      .block {
        width: 100%;
        height: 100%;
        padding: 20px;
        color: #ffffff;
        transition: box-shadow 0.5s;
        max-width: 300px;
        max-height: 450px;
        border-radius: 10px;
        overflow: hidden;
        transform: scale(1.03);
        box-sizing: border-box;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        box-shadow: none;
        position: relative;

        .circleLight {
          top: 0;
          left: 0;
          opacity: 0;
          content: '';
          width: 100%;
          height: 100%;
          display: block;
          transition: 0.5s;
          position: absolute;
          border-radius: 10px;
          background: radial-gradient(circle at 80px 40px, #fff, transparent);
        }

        .text {
          width: 100%;
          height: 100%;
          display: flex;
          text-align: center;
          flex-direction: column;
          justify-content: center;
          background-position: center;
          background-attachment: fixed;
        }

        h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 130px;
          margin-bottom: 0;
        }

        p {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
        }

        &:hover {
          box-shadow: 0px 0px 70px #111;

          .circleLight {
            opacity: 0.4;
          }
        }
      }
    }
  }

  .navigations {
    bottom: 0;
    width: 100%;
    position: absolute;

    .dots {
      height: 20px;
      padding: 10px 0;
      text-align: center;

      li {
        width: 10px;
        height: 10px;
        cursor: pointer;
        transition: 0.3s;
        background: #fff;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;

        & + li {
          margin-left: 10px;
        }

        &:hover {
          filter: blur(2px);
        }

        &.active {
          width: 15px;
          height: 15px;

          &:hover {
            filter: blur(0px);
          }
        }
      }
    }
  }
}
</style>
