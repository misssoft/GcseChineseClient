﻿//app-assessments.js

(function () {

    "use strict";

    var app =  angular.module("app-assessments", ["xeditable"]);

    app.run(function (editableOptions) {
        editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
    });

    $('#add').hide();

    $('#create').click (function() {
        $('#add').toggle();
        });

})();