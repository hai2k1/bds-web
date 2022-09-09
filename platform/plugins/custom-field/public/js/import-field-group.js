/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************************************************************!*\
  !*** ./platform/plugins/custom-field/resources/assets/js/import-field-group.js ***!
  \*********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helpers": () => (/* binding */ Helpers)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Helpers = /*#__PURE__*/function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, null, [{
    key: "jsonDecode",
    value: function jsonDecode(jsonString, defaultValue) {
      if (typeof jsonString === 'string') {
        var result;

        try {
          result = $.parseJSON(jsonString);
        } catch (err) {
          result = defaultValue;
        }

        return result;
      }

      return null;
    }
  }]);

  return Helpers;
}();

(function ($) {
  var $body = $('body');
  $body.on('click', 'form.import-field-group button.btn.btn-secondary.action-item:nth-child(2)', function (event) {
    event.preventDefault();
    event.stopPropagation();
    var $form = $(event.currentTarget).closest('form');
    $form.find('input[type=file]').val('').trigger('click');
  });
  $body.on('change', 'form.import-field-group input[type=file]', function (event) {
    var $form = $(event.currentTarget).closest('form');
    var file = event.currentTarget.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsText(file);

      reader.onload = function (e) {
        var json = Helpers.jsonDecode(e.target.result);
        $.ajax({
          url: $form.attr('action'),
          type: 'POST',
          data: {
            json_data: json
          },
          dataType: 'json',
          beforeSend: function beforeSend() {
            Botble.blockUI();
          },
          success: function success(res) {
            Botble.showNotice(res.error ? 'error' : 'success', res.messages);

            if (!res.error) {
              if (window.LaravelDataTables['table-custom-fields']) {
                window.LaravelDataTables['table-custom-fields'].draw();
              }
            }

            Botble.unblockUI();
          },
          complete: function complete() {
            Botble.unblockUI();
          },
          error: function error() {
            Botble.showError('Some error occurred');
          }
        });
      };
    }
  });
})(jQuery);
/******/ })()
;