<template>
	<div id="app">
		<Header />
		<Search @setSearch="setSearch" v-bind:listCount="listCount" />
		<List v-bind:lists="lists" />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
//import Footer from '@/components/Footer.vue';
import Search from '@/components/Search.vue';
import List from '@/components/List.vue';

import { getList } from '@/api/index';

export default {
	name: 'App',
	data() {
		return {
			search: '',
			keywordData: [],
			lists: [],
			listData: [],
			searchedData: [],
			listCount: 0,
		};
	},
	components: {
		Header,
		//Footer,
		Search,
		List,
	},
	computed: {
		searchData() {
			if (this.search) {
				return this.listData.filter(oper => {
					return (
						oper.keywords.filter(keyword => keyword.includes(this.search))
							.length >= 1 || oper.location.includes(this.search)
					);
				});
			} else {
				return this.listData;
			}
		},
	},

	methods: {
		setSearch(val) {
			this.search = val;
			this.lists = this.searchData;
			this.listCount = this.lists.length;
		},
		async getList() {
			const response = await getList();
			this.lists = response.data.jobList;
			this.listData = response.data.jobList;
			this.listCount = this.listData.length;
			this.sortDate();
		},
		sortDate() {
			return this.lists.sort(
				(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
			);
		},
	},

	created() {
		this.getList();
	},
};
</script>
