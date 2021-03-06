<template>
  <div class="wrapper">
    <header>
      <h3>{{ header }}</h3>
    </header>
    
    <section 
      class="covers"
    >
      <div
        class="latest-issue"
        :style="lastestIssueWidth"
      >
        <img :src="latestIssue.imgAssetURL">
      </div>

      <div
        class="previous-issues"
        :style="previousIssuesWidth"
      >
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
    },
  },
  computed: {
    latestIssue() {
      return this.magazineCovers[0];
    },
    previousIssues() {
      if ( this.$store.getters.previousIssueCount === 12) {
        return this.magazineCovers.slice(1, 13)
      }
      return this.magazineCovers.slice(1, 7);
    },
    lastestIssueWidth() {
      const count = this.$store.getters.previousIssueCount
      return `width: ${count === 12 ? '42' : '40'}%`;
    },
    previousIssuesWidth() {
      const count = this.$store.getters.previousIssueCount
      return `width: ${count === 12 ? '57' : '60'}%`;
    },
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
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 32px;
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
  margin: 0 0 8px 0;
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
  width: 100%;
}

.covers > .previous-issues {
  width: 57%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.previous-issues > .cover-12 {
  margin-bottom: 16px;
  margin-left: 16px;
  width: calc(25% - 16px);
  min-width: 50px;
}

.previous-issues > .cover-6 {
  margin-left: 16px;
  margin-bottom: 32px;
  width: calc((100% - 48px)/3);
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

@media only screen and (max-width: 900px) {
  .covers {
    flex-direction: column;    
    justify-content: space-between;
    width: 100%;
  }

  .previous-issues {
    width: 100% !important;
    margin-top: 16px;
  }

  .latest-issue {
    width: 100% !important;
  }

  .cover-12,
  .cover-6 {
    margin-left: 0 !important;
  }
}

@media only screen and (max-width: 750px) {
  .cover-12 {
    width: calc((100%/3) - 16px) !important;
  }
}

@media only screen and (max-width: 600px) {
  .cover-12,
  .cover-6 {
    width: calc((100%/2) - 16px) !important;
  }
}
</style>