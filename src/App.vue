<template>
  <div class="wrapper">
    <magazine-covers
      class="content"
      :header="magazineTitle"
      :magazine-covers="magazineCovers"
      :buttons="buttons"
      :number-of-previous-issues="12"
    />
  </div>
</template>

<script>
import MagazineCovers from "./MagazineCovers.vue";

export default {
  name: 'app',
  components: {
    MagazineCovers,
  },
  data() {
    return {
      magazineTitle: 'law enforement technology',

      //publishDate is a Unix Timestamp
      magazineCovers: [
        {
          imgAssetURL: require('./assets/oct-nov-2020.png'),
          issueTitle: 'October/November 2020',
          publishDate: 1601510400,
        },
        {
          imgAssetURL: require('./assets/aug-sep-2020.png'),
          issueTitle: 'August/September 2020',
          publishDate: 1596240000,
        },
        {
          imgAssetURL: require('./assets/jun-jul-2020.png'),
          issueTitle: 'June/July 2020',
          publishDate: 1590969600,
        },
        {
          imgAssetURL: require('./assets/apr-may-2020.png'),
          issueTitle: 'April/May 2020',
          publishDate: 1585699200,
        },
        {
          imgAssetURL: require('./assets/feb-mar-2020.png'),
          issueTitle: 'Feburary/March 2020',
          publishDate: 1580428800,
        },
        {
          imgAssetURL: require('./assets/dec-jan-2020.png'),
          issueTitle: 'December/Janurary 2020',
          publishDate: 1575158400,
        },
        {
          imgAssetURL: require('./assets/oct-nov-2019.png'),
          issueTitle: 'October/November 2019',
          publishDate: 1569888000,
        },
        {
          imgAssetURL: require('./assets/aug-sep-2019.png'),
          issueTitle: 'August/September 2019',
          publishDate: 1564617600,
        },
        {
          imgAssetURL: require('./assets/jun-jul-2019.png'),
          issueTitle: 'June/July 2019',
          publishDate: 1559347200,
        },
        {
          imgAssetURL: require('./assets/apr-may-2019.png'),
          issueTitle: 'April/May 2019',
          publishDate: 1554076800,
        },
        {
          imgAssetURL: require('./assets/feb-mar-2019.png'),
          issueTitle: 'Feburary/March 2019',
          publishDate: 1548806400,
        },
        {
          imgAssetURL: require('./assets/dec-jan-2019.png'),
          issueTitle: 'December/Janurary 2019',
          publishDate: 1543536000,
        },
        {
          imgAssetURL: require('./assets/oct-nov-2018.png'),
          issueTitle: 'October/November 2018',
          publishDate: 1538265600,
        },
      ],
      
      buttons: [
        {
          text: 'Subscribe',
          url: 'www.mysite.com/subscribe'
        },
        {
          text: 'Digital Edition',
          url: 'www.mysite.com/digital-edition'
        },
        {
          text: 'Archives',
          url: 'www.mysite.com/archives'
        },
        {
          text: 'Renewal',
          url: 'www.mysite.com/renewal'
        },
      ]
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .content {    
    max-width: 1200px;
  }
</style>