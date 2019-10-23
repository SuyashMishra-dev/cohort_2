const CREATEPLAYER = 'CREATEPLAYER';

const createPlayer = info => {
    // console.log(info);
    return {
        type: CREATEPLAYER,
        info
    };
}

export { createPlayer };