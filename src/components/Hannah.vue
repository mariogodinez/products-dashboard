<script>
export default {
  name: 'HelloWorld',
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

		<section  style="box-shadow:0 0 20px #666;">
			<article class="back-hannah padding20">
				<h1 class="text-center color-white font2em">Hannah</h1>
			</article>

			<div class="padding5"></div>
			<div class="padding10">
				<article class=" width100 relative flex" style="background:#f5f5f5;">
					<div class="  back-hannah" style="min-width:50px; padding:25px 20px;">
						<p class="color-white">
							<span class="font2em">$</span>
						</p>
					</div>
					<div class="margin-left20 flex flex-column flex-center">
						<p class="font1em">Monto vendido</p>
						<h2 class="font1-3em">$187,334</h2>
					</div>

					<div class="back-red padding5 flex flex-middle flex-center absolute" style="bottom:0; right:0; min-width:70px">
						<span class="font1-5em margin-right5 ion-arrow-down-c color-white"></span>

						<span class="color-white font-bold">
							15%
						</span>
					</div>
				
				</article>
			</div>

			<div class="padding10">
				<article class=" width100 relative flex" style="background:#f5f5f5;">
					<div class="  back-hannah" style="min-width:50px; padding:25px 20px;">
						<p class="color-white">
							<span class="font2em">$</span>
						</p>
					</div>
					<div class="margin-left20 flex flex-column flex-center">
						<p class="font1em">Ingresos totales</p>
						<h2 class="font1-3em">$337,334</h2>
					</div>

					<div class="back-green padding5 flex flex-middle flex-center absolute" style="bottom:0; right:0; min-width:70px">
						<span class="font1-5em margin-right5 ion-arrow-up-c color-white"></span>

						<span class="color-white font-bold">
							15%
						</span>
					</div>
				
				</article>
			</div>

			<div class="padding10">
				<article class=" width100 relative flex" style="background:#f5f5f5;">
					<div class="  back-hannah" style="min-width:50px; padding:25px 20px;">
						<p class="color-white">
							<span class="font2em">$</span>
						</p>
					</div>
					<div class="margin-left20 flex flex-column flex-center">
						<p class="font1em">No. ventas realizadas</p>
						<h2 class="font1-3em">35</h2>
					</div>

					<div class="back-red padding5 flex flex-middle flex-center absolute" style="bottom:0; right:0; min-width:70px">
						<span class="font1-5em margin-right5 ion-arrow-down-c color-white"></span>

						<span class="color-white font-bold">
							15%
						</span>
					</div>
				
				</article>
			</div>


			<div class="padding10">
				<article class=" width100 relative flex" style="background:#f5f5f5;">
					<div class="  back-hannah" style="min-width:50px; padding:25px 20px;">
						<p class="color-white">
							<span class="font2em">$</span>
						</p>
					</div>
					<div class="margin-left20 flex flex-column flex-center">
						<p class="font1em">No. de ventas pendientes</p>
						<h2 class="font1-3em">6</h2>
					</div>

					<div class="back-green padding5 flex flex-middle flex-center absolute" style="bottom:0; right:0; min-width:70px">
						<span class="font1-5em margin-right5 ion-arrow-up-c color-white"></span>

						<span class="color-white font-bold">
							15%
						</span>
					</div>
				
				</article>
			</div>

			<div class="padding10">
				<article class=" width100 relative flex" style="background:#f5f5f5;">
					<div class="  back-hannah" style="min-width:50px; padding:25px 20px;">
						<p class="color-white">
							<span class="font2em">$</span>
						</p>
					</div>
					<div class="margin-left20 flex flex-column flex-center">
						<p class="font1em">Ticket promedio</p>
						<h2 class="font1-3em">$1,302</h2>
					</div>

					<div class="back-green padding5 flex flex-middle flex-center absolute" style="bottom:0; right:0; min-width:70px">
						<span class="font1-5em margin-right5 ion-arrow-up-c color-white"></span>

						<span class="color-white font-bold">
							30%
						</span>
					</div>
				
				</article>
			</div>
			

			<div class="padding5"></div>

		</section>

		
		
	</section>

</template>
