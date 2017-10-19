const tweetCards = (tweet) => {
	const user = tweet.user.name;
	const username = tweet.user.username;
	const userPhoto = tweet.user.picture;
	const content = tweet.text;
	const createdAt = tweet.createdAt;
	let hashtags = '';
	if (tweet.hashtags) {
		tweet.hashtags.forEach(hashtag => {
			hashtags += `<span class="tw-hashtag"> ${hashtag} </span>`
		});
	} else {
		hashtags = `<span class="tw-hashtag"> #nohashtag </span>`
	}

	const component = 
	`
	<div class="card tw-card">
	  <header class="card-header">
	    <p class="card-header-title">
	    	<img class="user-picture" src="${userPhoto}" alt="user photo" />
	      @${username}
	    </p>	
	  </header>
	  <div class="card-content">
	    <div class="content">
	      ${content}
	    </div>
	  </div>
	  <footer class="card-footer level">
	    <p class="card-footer-item level-left"><span class="tw-date">${createdAt}</span>${hashtags}</p>
	  </footer>
	</div>
	`

	return component;
}