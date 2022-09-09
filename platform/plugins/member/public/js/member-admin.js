/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ./platform/plugins/member/resources/assets/js/member-admin.js ***!
  \*********************************************************************/
$(document).ready(function () {
  $(document).on('click', '#is_change_password', function (event) {
    if ($(event.currentTarget).is(':checked')) {
      $('input[type=password]').closest('.form-group').removeClass('hidden').fadeIn();
    } else {
      $('input[type=password]').closest('.form-group').addClass('hidden').fadeOut();
    }
  });
});
/******/ })()
;