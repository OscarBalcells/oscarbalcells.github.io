var AnimateSDK = function($main) {
    this.svgContainer = $main.find("#products-icon-svg");

    if (this.svgContainer.length === 0) {
        return;
    }

    this.bolt = this.svgContainer.find('#bolt');
    this.key = this.svgContainer.find('#key');

    this.bolt.css('transform-origin', '33px 82px 0');
    this.key.css('transform-origin', '43px 70px');

    this.timeLine = new TimelineMax({
        yoyo: true,
        paused: true,
        onComplete: function() {
            this.restart();
        }
    })
    .to(this.key, 0.7, {
        x: -11,
        y: 11
    })
    .to([this.key, this.bolt], 0.6, {
        rotation: 20,
        ease: RoughEase.ease.config({
            strength: 3.6,
            points: 4,
            template: Bounce.easeOut,
            randomize: false,
            taper: "out",
            clamp: true
        })
    })
    .to([this.key, this.bolt], 0.4, {
        rotation: 0
    })
    .to(this.key, 0.7, {
        x: 0,
        y: 0
    });

    this.svgContainer.off('runAnimation').on('runAnimation', function() {
        this.timeLine.play();
    }.bind(this));
};


function setSkillAnimation($main) {
    new AnimateSDK($main);
    $main.find("#products-icon-svg").trigger('runAnimation');
}

setSkillAnimation($('body'));
