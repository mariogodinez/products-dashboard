<script type="text/javascript">
export default {
  name: 'HeaderCom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showMenu: false
    }
  },
  methods: {
		toggleShowMenu() {
			this.showMenu = !this.showMenu
		},
		go(route, bell) {
			this.$router.push(route)
			this.toggleShowMenu()
		}
	}
}
</script>

<template>
	<section class="my-header">
		<article class=" back-white" style="box-shadow:0 0 10px #666;">
	        <header class="flex  transition30 relative">
	           <div class="back-orange padding10-20 pointer" @click="toggleShowMenu">
	        		<p>
	        			<span class="ion-navicon-round color-white" style="font-size:2em;"></span>
	        		</p>
	           </div>

	           <div class="flex flex-middle flex-center margin-left20">
	               <div class="" style="width:130px;">
		              <img src="http://unexpect.mx/img/logo.png" alt="Unexpect logo" style="width:100%">
	            	</div>
		        </div>
	        </header>
        </article>


        <article class="my-header-menu" :class="{left0 : showMenu}" style="background:#ebeef0; overflow-y:auto;">
			<ul  class="padding20-0 margin0">
				
				<li  class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('/hannah')">
					<p class="padding10-20 margin-left10">Hannah</p>
				</li>

				<li  class="flex flex-middle margin0 padding-left20 font20 pointer" style="border-bottom: 1px solid #bfbcbc" @click="go('/orkestra')">
					<p class="padding10-20 margin-left10">Orkestra</p>
				</li>
			</ul>
		</article>
	</section>
</template>
