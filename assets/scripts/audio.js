class AudioControl{
    constructor(){
        this.sound;
        this.charge = document.getElementById('charge');
        this.flap1 = document.getElementById('flap1');
        this.flap2 = document.getElementById('flap2');
        this.flap3 = document.getElementById('flap3');
        this.flap4 = document.getElementById('flap4');
        this.flap5 = document.getElementById('flap5');
        this.win = document.getElementById('win');
        this.lose = document.getElementById('lose');
        this.flapSounds = [this.flap1,this.flap2,this.flap3,this.flap4,this.flap5];
    }

    // play(sound){
    //     sound.currentTime = 0;
    //     sound.play();
    // }
    play(sound) {
        if (sound) { // Check if sound is not null or undefined
            sound.currentTime = 0;
            sound.play().catch(error => {
                console.error("Error playing sound:", error);
            });
        } else {
            console.error("Sound element is null or undefined.");
        }
    }
    
}