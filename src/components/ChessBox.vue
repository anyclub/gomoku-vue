<template>
  <div id="chess-box"
    flex="dir:top box:mean">
    <div flex="box:mean"
      v-for="row in 15"
      :key="row">
      <div class="cell"
        v-for="column in 15"
        :class="computedClass(row, column)"
        :key="column">
        <div class="chess"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'chessBox',
  data () {
    return {
      rows: 15,
      columns: 15
    }
  },
  methods: {
    computedClass (row, column) {
      let className = ''
      if (row === 1) {
        className += 'top '
      } else if (row === this.rows) {
        className += 'bottom '
      }
      if (column === 1) {
        className += 'left'
      } else if (column === this.columns) {
        className += 'right'
      }
      return className
    }
  }
}
</script>

<style scoped lang="less">
#chess-box {
  width: 80vh;
  height: 80vh;
  overflow: hidden;
  border: 1px solid #0776a6;
  background: #194d6d;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  border-radius: 6px;
}
.cell {
  background: url("~@/assets/img/bg-square.png") center center no-repeat;

  &.left {
    background-image: url("~@/assets/img/bg-square-l.png");
  }

  &.right {
    background-image: url("~@/assets/img/bg-square-r.png");
  }

  &.top {
    background-image: url("~@/assets/img/bg-square-t.png");

    &.left {
      background-image: url("~@/assets/img/bg-square-tl.png");
    }

    &.right {
      background-image: url("~@/assets/img/bg-square-tr.png");
    }
  }
  &.bottom {
    background-image: url("~@/assets/img/bg-square-b.png");

    &.left {
      background-image: url("~@/assets/img/bg-square-bl.png");
    }

    &.right {
      background-image: url("~@/assets/img/bg-square-br.png");
    }
  }
}

.chess {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-position: center center;
  background-size: cover;
  &:hover {
    background-image: url("~@/assets/img/chess-w.png");
  }
  &.white {
    background-image: url("~@/assets/img/chess-w.png");
  }
  &.black {
    background-image: url("~@/assets/img/chess-b.png");
  }
}
</style>
