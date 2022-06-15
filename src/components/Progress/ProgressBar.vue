<template lang="pug">
  div
    svg(width='118' height='12' viewbox='0 0 118 12' fill='none' xmlns='http://www.w3.org/2000/svg')
      rect(width='4' height='12' rx='2' :fill='rectArray[0]')
      rect(x='6' width='4' height='12' rx='2' :fill='rectArray[1]')
      rect(x='12' width='4' height='12' rx='2' :fill='rectArray[2]')
      rect(x='18' width='4' height='12' rx='2' :fill='rectArray[3]')
      rect(x='24' width='4' height='12' rx='2' :fill='rectArray[4]')
      rect(x='30' width='4' height='12' rx='2' :fill='rectArray[5]')
      rect(x='36' width='4' height='12' rx='2' :fill='rectArray[6]')
      rect(x='42' width='4' height='12' rx='2' :fill='rectArray[7]')
      rect(x='48' width='4' height='12' rx='2' :fill='rectArray[8]')
      rect(x='54' width='4' height='12' rx='2' :fill='rectArray[9]')
      rect(x='60' width='4' height='12' rx='2' :fill='rectArray[10]')
      rect(x='66' width='4' height='12' rx='2' :fill='rectArray[11]')
      rect(x='72' width='4' height='12' rx='2' :fill='rectArray[12]')
      rect(x='78' width='4' height='12' rx='2' :fill='rectArray[13]')
      rect(x='84' width='4' height='12' rx='2' :fill='rectArray[14]')
      rect(x='90' width='4' height='12' rx='2' :fill='rectArray[15]')
      rect(x='96' width='4' height='12' rx='2' :fill='rectArray[16]')
      rect(x='102' width='4' height='12' rx='2' :fill='rectArray[17]')
      rect(x='108' width='4' height='12' rx='2' :fill='rectArray[18]')
      rect(x='114' width='4' height='12' rx='2' :fill='rectArray[19]')
</template>

<script>
export default {
  props: ['title'],
  name: 'ProgressBar',
  data() {
    return {
      rectArray: [],
      rectCount: 19,
    }
  },
  mounted() {
    let countActive = Math.floor(this.title.percent / 5) - 1
    console.log(countActive)
    for (let i = 0; i < this.rectCount; i++) {
      if (countActive !== 0) {
        countActive--
        this.rectArray.push(this.title.color)
      } else {
        this.rectArray.push('#413A70')
      }
    }
  },
}
</script>

<style scoped lang="scss"></style>
