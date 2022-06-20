const PossibleRotations = {
    NotSet: 0,
    MeleeStart: 1,
    RangeStart: 2,
    MageStart: 3,
    MeleeStartPhase4South: 4,
    MeleeStartPhase4East: 5,
}


new Vue({
    el: '#zulrah-helper',
    data: {
        PossibleRotations: PossibleRotations,
        phaseGroups: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ],
        displaySettings: false,
        rotation: PossibleRotations.NotSet,
        meleePhase2: false,
        theme: "dark",
        style: "simple",
        degrees: 0
    },
    methods: {
        selectRotation: function(rotation) {
            this.rotation = rotation;
            this.meleePhase2 = (rotation == PossibleRotations.MeleeStart || rotation == PossibleRotations.MeleeStartPhase4South || rotation == PossibleRotations.MeleeStartPhase4East);
        },
        getImage: function(phase, rotation) {
            if (phase == 1) {
                return 'images/start-' + this.style + '.png';
            } else {
                const imageIndex = phase - 1;
                switch (rotation) {
                    case PossibleRotations.MeleeStart:
                        if (phase <= 3) {
                            return 'images/one/' + imageIndex.toString() + '-' + this.style + '.png';
                        }
                        break;
                    case PossibleRotations.MeleeStartPhase4South:
                        return 'images/one/' + imageIndex.toString() + '-' + this.style + '.png';
                    case PossibleRotations.MeleeStartPhase4East:
                        return 'images/two/' + imageIndex.toString() + '-' + this.style + '.png';
                    case PossibleRotations.RangeStart:
                        return 'images/three/' + imageIndex.toString() + '-' + this.style + '.png';
                    case PossibleRotations.MageStart:
                        return 'images/four/' + imageIndex.toString() + '-' + this.style + '.png';
                }
                return 'images/placeholder-' + this.style + '.png';
            }
        },
        toggleTheme: function () {
            if (this.theme == "light") {
                this.theme = "dark";
            } else {
                this.theme = "light";
            }
        },
        toggleStyle: function () {
            if (this.style == "simple") {
                this.style = "realistic";
            } else {
                this.style = "simple";
            }
        },
        toggleSettings: function () {
            if (this.displaySettings == true) {
                this.displaySettings = false;
            } else {
                this.displaySettings = true;
            }
        },
        rotateImages: function (direction) {
            if (direction == 'left') {
                this.degrees -= 90;
            } else {
                this.degrees += 90;
            }
        }
    }
});