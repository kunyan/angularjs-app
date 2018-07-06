export default {
    template: require('./caseDetails.pug')(),
    bindings: {
      kase: '<'
    },
    controller: function($routeParams) {
      this.id = $routeParams.id;
    }
  };
  