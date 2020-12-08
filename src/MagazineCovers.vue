<template>
  <div class="wrapper">
    <header>
      <h3>{{ header }}</h3>
    </header>
    
    <section 
      class="covers"
      :style="coverSectionHeight"
    >
      <div class="latest-issue">
        <img :src="latestIssue.imgAssetURL">
      </div>

      <div class="previous-issues">
        <div
          v-for="cover in previousIssues"
          :key="cover.publishDate"
          :class="`cover-${previousIssues.length}`"
        >
          <img :src="cover.imgAssetURL">
        </div>
      </div>
    </section>    

    <h3>{{ latestIssue.issueTitle }}</h3>

    <footer> 
      <div 
        v-for="( button, i ) in buttons"
        :key="`button-${i}`"  
        class="button"
        @click="navigate(button.url)"
      >
        {{ button.text }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'magazine-covers',
  props: {
    header: {
      type: String,
      required: true,
    },
    magazineCovers: {
      type: Array,
      required: true,
    },
    buttons: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    latestIssue() {
      return this.magazineCovers[0]
    },
    previousIssues() {
      if (this.magazineCovers.length > 12) {
        return this.magazineCovers.slice(1, 13)
      }
      return this.magazineCovers.slice(1, 7)
    },
    coverSectionHeight() {
      return `height: ${this.previousIssues.length === 6 ? '640' : '675'}px;`
    }
  },
  methods: {
    navigate(url) {
      console.log(`navigate to ${url}`);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Roboto', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

header {
  width: 100%;
  background: black;
  color: white;
}

header > h3 {
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 300;
}

h3 {
  margin: 8px 0;
}

.covers {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
}

.covers > .latest-issue {
  width: 42%;
}

img {
  height: 100%;
}

.covers > .previous-issues {
  width: 58%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.previous-issues > .cover-12 {
  margin-bottom: 16px;
  margin-left: 16px;
  width: calc(25% - 16px);
  height: calc((100% - 32px)/3);
}

.previous-issues > .cover-6 {
  margin-left: 16px;
  margin-bottom: 32px;
  width: calc((100% - 48px)/3);
  height: calc(50% - 16px);
}

.cover-12,
.cover-6 {
  display: flex;
  flex-direction: row-reverse;
}

footer {
  display: flex;
}

footer > .button {
  border-radius: 4px;
  background: steelblue;
  color: whitesmoke;
  cursor: pointer;
  padding: 8px;
  margin: 8px 8px 8px 0
}

footer > .button:hover {
  opacity: 0.8;
}
</style>