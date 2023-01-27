const socket = io();

document.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'KeyP' || event.code === 'Escape') {
        switch (event.code) {
            case 'Enter':
                socket.emit('special', '0');
                updateCurrentScene('Started')
                updateNextActionTooltip('Q')
                break;
            case 'KeyP':
                socket.emit('special', '1');
                updateCurrentScene('Party')
                updateNextActionTooltip('Esc')
                break;
            case 'Escape':
                socket.emit('special', '2');
                updateCurrentScene('Initialised')
                updateNextActionTooltip('Enter')
                break;
        }
    }
    if (event.code === 'KeyQ' || event.code === 'KeyA' || event.code === 'KeyZ') {
        switch (event.code) {
            case 'KeyQ':
                socket.emit('sceneOne', '0');
                updateCurrentScene('Scene 1.0')
                updateNextActionTooltip('A')
                break;
            case 'KeyA':
                socket.emit('sceneOne', '1');
                updateCurrentScene('Scene 1.1')
                updateNextActionTooltip('Y')
                break;
            case 'KeyZ':
                socket.emit('sceneOne', '2');
                updateCurrentScene('Scene 1.2')
                updateNextActionTooltip('W')
                break;
        }
    } else if (event.code === 'KeyW' || event.code === 'KeyS' || event.code === 'KeyX') {
        switch (event.code) {
            case 'KeyW':
                socket.emit('sceneTwo', '0');
                updateCurrentScene('Scene 2.0')
                updateNextActionTooltip('S')
                break;
            case 'KeyS':
                socket.emit('sceneTwo', '1');
                updateCurrentScene('Scene 2.1')
                updateNextActionTooltip('X')
                break;
            case 'KeyX':
                socket.emit('sceneTwo', '2');
                updateCurrentScene('Scene 2.2')
                updateNextActionTooltip('E')
                break;
        }
    } else if (event.code === 'KeyE' || event.code === 'KeyD' || event.code === 'KeyC') {
        switch (event.code) {
            case 'KeyE':
                socket.emit('sceneThree', '0');
                updateCurrentScene('Scene 3.0')
                updateNextActionTooltip('D')
                break;
            case 'KeyD':
                socket.emit('sceneThree', '1');
                updateCurrentScene('Scene 3.1')
                updateNextActionTooltip('C')
                break;
            case 'KeyC':
                socket.emit('sceneThree', '2');
                updateCurrentScene('Scene 3.2')
                updateNextActionTooltip('R')
                break;
        }
    } else if (event.code === 'KeyR' || event.code === 'KeyF' || event.code === 'KeyV') {
        switch (event.code) {
            case 'KeyR':
                socket.emit('sceneFour', '0');
                updateCurrentScene('Scene 4.0')
                updateNextActionTooltip('F')
                break;
            case 'KeyF':
                socket.emit('sceneFour', '1');
                updateCurrentScene('Scene 4.1')
                updateNextActionTooltip('V')
                break;
            case 'KeyV':
                socket.emit('sceneFour', '2');
                updateCurrentScene('Scene 4.2')
                updateNextActionTooltip('T')
                break;
        }
    } else if (event.code === 'KeyT' || event.code === 'KeyG' || event.code === 'KeyB') {
        switch (event.code) {
            case 'KeyT':
                socket.emit('sceneFive', '0');
                updateCurrentScene('Scene 5.0')
                updateNextActionTooltip('G')
                break;
            case 'KeyG':
                socket.emit('sceneFive', '1');
                updateCurrentScene('Scene 5.1')
                updateNextActionTooltip('B')
                break;
            case 'KeyB':
                socket.emit('sceneFive', '2');
                updateCurrentScene('Scene 5.2')
                updateNextActionTooltip('P')
                break;
        }
    }
});

function updateCurrentScene(updatedScene) {
    document.getElementById('currentStatusText').innerHTML = updatedScene;
}

function updateNextActionTooltip(updatedTooltip) {
    document.getElementById('nextActionTooltip').innerHTML = updatedTooltip;
}