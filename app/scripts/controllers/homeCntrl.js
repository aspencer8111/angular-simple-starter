(function() {
    function HomeCtrl() {
        this.message = 'Find me in the home controller'
    }

    angular
        .module('app')
        .controller('HomeCtrl', [HomeCtrl]);
})();
