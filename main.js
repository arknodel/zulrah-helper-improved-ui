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