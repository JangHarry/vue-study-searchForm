<template>
	<div class="container-search">
		<div class="sub_tit">
			<strong>구인 현황</strong>
			<div class="wrap_search">
				<div class="bundle_inp">
					<input type="text" @input="inputHandler" />
					<button type="button"><span class="ir_pm">검색</span></button>
				</div>
			</div>
			<p>
				검색 결과 <em>{{ listCount }}</em
				>건
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Search',
	props: {
		listCount: Number,
	},
	methods: {
		inputHandler(e) {
			this.$emit('setSearch', e.target.value);
		},
	},
};
</script>
