

function arnyalat1() {
    let granimInstance = new Granim({
        element: 'canvas-basic',
        name: 'granim',
        opacity: [1, 1],
        direction: 'top-bottom',
        stateTransitionSpeed: 1500,
        stretchMode: 'stretch',
        states : {
            "default-state": {
                gradients: [
                    ['#0f05a3', '#32fc00'],
                    ['#00b5c2', '#1a6b05']
                ]
            }
        }
     }); 
}

arnyalat1();