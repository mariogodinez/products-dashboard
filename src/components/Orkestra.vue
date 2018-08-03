<script>
export default {
  name: 'Orkestra',
  data () {
    return {
      view: 'dia'
    }
  },
  methods: {
  	changeView(value){
  		this.view = value
  	}
  }
}
</script>

<template>
	<section class="padding10 my-container">

		<article class=" width100 flex">
			<div style="border-right:1px solid #ddd; border-radius:3px; border-bottom:2px solid #ddd;" class="width100 margin10 pointer back-lightgray color-orange padding10" @click="changeView('dia')" :class="{ 'activeView' : view == 'dia'}">
				<h2 class=" text-center text-uppercase font1em">Día</h2>
			</div>

			<div style="border-right:1px solid #ddd; border-radius:3px; border-bottom:2px solid #ddd;" class="width100 margin10 pointer back-lightgray color-orange padding10" @click="changeView('sem')" :class="{ 'activeView' : view == 'sem'}">
				<h2 class=" text-center text-uppercase font1em">Sem</h2>
			</div>

			<div style="border-right:1px solid #ddd; border-radius:3px; border-bottom:2px solid #ddd;" class="width100 margin10 pointer back-lightgray color-orange padding10" @click="changeView('men')" :class="{ 'activeView' : view == 'men'}">
				<h2 class=" text-center text-uppercase font1em">Men</h2>
			</div>

			<div style="border-right:1px solid #ddd; border-radius:3px; border-bottom:2px solid #ddd;" class="width100 margin10 pointer back-lightgray color-orange padding10" @click="changeView('tri')" :class="{ 'activeView' : view == 'tri'}">
				<h2 class=" text-center text-uppercase font1em">Tri</h2>
			</div>
			
		</article>
		<article class="padding20" style="background:#2D3E4F;">
		<h1 class="text-center color-white font2em">Orkestra</h1>
		</article>
	</section>
</template>
