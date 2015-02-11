var $feature = $('.feature'),
	  featureLength = $feature.length,
	  featureRandom = Math.floor(Math.random()*featureLength);
	  
	  $feature.hide();
	  $feature.eq(featureRandom).show();