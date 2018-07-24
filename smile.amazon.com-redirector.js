function redirector(details) {
	var smileUrl = details.url.replace(/(www\.)?amazon\.com/, 'smile.amazon.com');
	return {
		redirectUrl: smileUrl
	};
}

browser.webRequest.onBeforeRequest.addListener(
	redirector,
	{
		urls: ['*://www.amazon.com/*', '*://amazon.com/*'],
		types: ['main_frame', 'sub_frame']
	},
	['blocking']
);
