var webRtcPlayerObj = null;
function setupWebRtcPlayer(htmlElement, config) {
	webRtcPlayerObj = new webRtcPlayer({ peerConnectionOptions: null });
	

	return webRtcPlayerObj.video;
}
