<template>
  <div>
      <hero />
      <mission />
      <results :items=results.items />
      <feature />
      <business />
      <member />
      <update />
      <recruit />
      <company />
  </div>
</template>


<script>
import Hero from '~/components/top/Hero.vue'
import Mission from '~/components/top/Mission.vue'
import Results from '~/components/top/Results.vue'
import Feature from '~/components/top/Feature.vue'
import Business from '~/components/top/Business.vue'
import Member from '~/components/top/Member.vue'
import Update from '~/components/top/Update.vue'
import Recruit from '~/components/top/Recruit.vue'
import Company from '~/components/top/Company.vue'

export default {
  components: {
    Hero,
    Mission,
    Results,
    Feature,
    Business,
    Member,
    Update,
    Recruit,
    Company,
  },
  data() {
    return {
      results: {
        items: [
          {
            url: 'https://www.kikagaku.co.jp',
            img_url: require('~/assets/img/front/portfolio/image1.jpg'),
            img_alt: 'Preferred Networks社提供のChainerチュートリアル制作に協力',
            title: 'Preferred Networks社提供の<span class="br__pc"></span>Chainerチュートリアル制作に協力'
          },
          {
            url: '#',
            img_url: require('~/assets/img/front/portfolio/image3.jpg'),
            img_alt: 'ABEJA社とアセスメント人材育成コースを共同制作',
            title: 'ABEJA社とアセスメント人材育成<span class="br__pc"></span>コースを共同制作'
          },
          {
            url: '#',
            img_url: require('~/assets/img/front/portfolio/image2.jpg'),
            img_alt: 'メルカリ社の経営層向けAI研修の実施',
            title: 'メルカリ社の経営層向けAI研修の<span class="br__pc"></span>実施'
          }

        ]
      }
    }
  }
}
</script>