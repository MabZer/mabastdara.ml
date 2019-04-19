var sunScene = new TimelineMax({
	repeat: -1
});

var stars = document.querySelectorAll("#stars use");
var clouds = document.querySelectorAll("#clouds path");

var random = function(min, max){
	return Math.random() * (max - min) + min;
}


sunScene.to("#sunRotation", 24, {
	rotation: 360,
	transformOrigin: "50% 50%",
	ease: Linear.easeNone
})
.add("midnight", 0)
.add("twighlightM", 4.5)
.add("sunrise", 7) 	
.add("morning", 8)
.add("noon", 12)
.add("evening", 17)
.add("sunset", 18.5)
.add("twighlightN", 20)

.to("#min", 24,{rotation: 64800, transformOrigin: "100% 100%", ease: Linear.easeNone}, "midnight")
.to("#hour", 24,{rotation: 8640, transformOrigin: "100% 100%", ease: Linear.easeNone}, "midnight")

.to("#horizon", 4, {opacity: 0.4}, "twighlightM")
.to("#horizon", 2.5, {opacity: 0.1}, "sunset")

.to("#moon, #stars", 1, {opacity: 0}, "twighlightM")
.to("#moon, #stars", 3, {opacity: 1}, "sunset")

.to("#clouds", 8, {opacity: 0.6}, "twighlightM")
.to("#clouds", 3, {opacity: 0.1}, "sunset")


.to("#sun", 8, {scale: 0.75,}, "sunrise")
.to("#sun", 5, {fill: "#FBF7A1"}, "sunrise")
.to("#sun", 8, {scale: 1, fill: "#F6CC59"}, "noon")


.to("body", 3, {backgroundColor: "#2A3F58"}, "midnight")
.to("body", 2.5, {backgroundColor: "#F1BA7B"}, "twighlightM")
.to("body", 1, {backgroundColor: "#7DC8E6"}, "sunrise")
.to("body", 4, {backgroundColor: "#D3ECF9"}, "morning")
.to("body", 4, {backgroundColor: "#7DC8E6"}, "noon")
.to("body", 1, {backgroundColor: "#D87A7A"}, "evening")
.to("body", 3, {backgroundColor: "#2A3F58"}, "sunset")

.staggerTo(clouds, 5, {
	x:"-1250",
	repeat: 3
}, random(0.5,2.5), "midnight");




stars.forEach(function(star){
	TweenMax.to(star, random(0.5,3), {
		opacity: "-=0.5",
		yoyo: true,
		repeat: -1
	})
});
// TweenMax.staggerTo(clouds, 5, {
// 	x:"-1250",
// 	repeat: -1
// }, random(0.25,1));

sunScene.timeScale(0.5);

TweenLite.to(sunScene, 24, {timeScale: 2, ease: SlowMo.ease.config(0.7, 0.7, false)})