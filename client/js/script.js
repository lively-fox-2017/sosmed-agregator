// document ready, incompatible with ie8 and older
document.addEventListener("DOMContentLoaded", function() {
  // on hashtag click event
  const hashtagClick = function() {
    const keyword = $(this).html().slice(2);
    axios.get('http://localhost:3000/search/' + encodeURIComponent(keyword))
    .then(function (response) {
      $('#tw-right-panel').empty();
      const tweets = response.data;
      tweets.forEach(tweet => {
        const component = tweetCards(tweet);
        $('#tw-right-panel').append(component);
      });
    })
    .catch(function (error) {
      $('#tw-right-panel').append(`<p style="color: hsl(348, 100%, 61%);">${error}</p>`);
    });
  }
  $('#tw-right-panel').on('click', '.tw-hashtag', hashtagClick);


	// fetch timeline on load
	axios.get('http://localhost:3000/timeline')
  .then(function (response) {
    const tweets = response.data;
    tweets.forEach(tweet => {
    	const component = tweetCards(tweet);
    	$('#tw-right-panel').append(component);
    });
  })
  .catch(function (error) {
    console.log(error);
  });


  // on click event when user push search button
  $('#tw-search-btn').click(function(e) {
  	e.preventDefault();

  	// kosongin dulu broh
  	$('#tw-right-panel').empty();

  	const keyword = $('#tw-search-input').val();
  	if (keyword.length === 0) {
  		$('#tw-right-panel').append(
  			`<p style="color: hsl(348, 100%, 61%);">Search failed: Please input a keyword! Nanti papa marah :)</p>`
  			);
  	} else {
			axios.get('http://localhost:3000/search/' + encodeURIComponent(keyword))
		  .then(function (response) {
		    const tweets = response.data;
		    tweets.forEach(tweet => {
		    	const component = tweetCards(tweet);
		    	$('#tw-right-panel').append(component);
		    });
		  })
		  .catch(function (error) {
		    $('#tw-right-panel').append(`<p style="color: hsl(348, 100%, 61%);">${error}</p>`);
		  });
  	}
  });

  // on keyup event when user push keyboard
  $('#tweet-box').keyup(function(e) {
  	e.preventDefault();

  	let letterCount = $(this).val().trim().length;
  	if(letterCount > 0) {
  		$('#letter-count').css('visibility', 'visible');
  		$('#letter-count span').text(letterCount);
  	} else {
  		$('#letter-count').css('visibility', 'hidden');
  	}

  	if (letterCount > 140) {
  		$('#letter-count span').css('color', 'hsl(348, 100%, 61%)');
  	} else {
  		$('#letter-count span').css('color', '#fafafa');
  	}
  });

  // on click event when user push tweet button
  $('#tw-tweet-btn').click(function(e) {
  	e.preventDefault();

  	const tweet = $('#tweet-box').val().trim();

  	$('#tw-right-panel').empty();

  	if (tweet.length > 140) {
  		$('#tw-right-panel').append(`<p style="color: hsl(348, 100%, 61%);"> Tweeting failed: You can't tweet more than 140 characters! Nanti mama marah :)</p>`);
  	} else {
  		axios.post('http://localhost:3000/tweet', {
		    status: tweet,
		  })
		  .then(function (response) {
  			location.reload(); // reload everything!
		  })
		  .catch(function (error) {
		    $('#tw-right-panel').append(`<p style="color: hsl(348, 100%, 61%);">${error}</p>`);
		  });
  		
  	}
  });
});