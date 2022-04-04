<template>
	<main class="doc-main">
		<section class="inner-main">
			<h2 class="screen_out">채용 데모 페이지 본문</h2>
			<div class="main-content">
				<article id="mainContent" class="content-article">
					<h3 class="screen_out">채용 목록</h3>
					<ul class="list_job">
						<li
							v-for="(list, index) in lists"
							:class="{ new: newChk(list.createdAt) }"
							:key="index"
						>
							<div class="title_job">
								<a href="#none" class="link_title">
									<strong>{{ list.title }}<em>FT팀</em></strong>
								</a>
								<span class="bundle_badge">
									<a
										v-for="(keywords, index) in list.keywords"
										:key="index"
										href="#none"
										>{{ keywords }}</a
									>
								</span>
							</div>
							<div class="desc_job">
								<span class="badge_type">{{ list.job }}</span>
								<div class="wrap_txt">
									<span class="txt_day">{{ list.createdAt | yyyyMMdd }}</span>
									<span class="txt_location">{{ list.location }}</span>
								</div>
							</div>
						</li>
					</ul>
				</article>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	props: {
		lists: [],
	},

	methods: {
		newChk(value) {
			const js_date = new Date(value);
			const today = new Date();

			const moment = require('moment');
			const dateB = moment(today);
			const dateC = moment(js_date);

			if (dateB.diff(dateC, 'days') < 3) {
				return true;
			} else {
				return false;
			}
		},
	},

	filters: {
		yyyyMMdd(value) {
			const js_date = new Date(value);
			const today = new Date();

			const moment = require('moment');
			const dateB = moment(today);
			const dateC = moment(js_date);

			let year = js_date.getFullYear();
			let month = js_date.getMonth() + 1;
			let day = js_date.getDate();

			if (month < 10) {
				month = '0' + month;
			}

			if (day < 10) {
				day = '0' + day;
			}

			if (dateB.diff(dateC, 'days') === 0) {
				return 'Today';
			} else if (dateB.diff(dateC, 'days') < 3) {
				return dateB.diff(dateC, 'days') + 'days ago';
			} else {
				return year + '.' + month + '.' + day;
			}
		},
	},
};
</script>
