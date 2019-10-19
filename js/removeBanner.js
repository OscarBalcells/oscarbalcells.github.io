window.onload = () => {
   let bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
   bannerNode.parentNode.removeChild(bannerNode);
	 bannerNode = document.querySelector('[alt="000webhost"]').parentNode.parentNode;
   bannerNode.parentNode.removeChild(bannerNode);
}
