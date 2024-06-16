Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'cyberredcn',
            lang: 'cn',
            dir: 'compendium'
        });
    }
});