export default {
  template: require('./caseList.pug')(),
  // bindings: {
  //   title: '='
  // },
  controller: function() {
    this.kases = [
      {
        id: '01897611',
        summary: 'Today is a good day'
      },
      {
        id: '01897612',
        summary: 'Today is a bad day'
      },
      {
        id: '01897613',
        summary: 'Today is a hot day'
      },
      {
        id: '01897614',
        summary: 'Today is a cold day'
      }
    ];
  }
};
