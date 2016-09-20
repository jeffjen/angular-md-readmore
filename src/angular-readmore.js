"use strict"

const angular = require("angular");

// Load angular other modules/stuff
const dev = [
    require("angular-material")
];

const template = `
<div class="readmore content" ng-class="{'expand': $ctrl.mdExpand}">{{ $ctrl.mdText }}</div>
<div layout="row" layout-align="end none" class="readmore toggle">
  <a ng-click="$ctrl.mdExpand = !$ctrl.mdExpand">繼續閱讀</a>
</div>
`;

angular.module("mdReadmore", []).
    component("mdReadmore", {
        template: template,
        bindings: {
            mdText: "<",
            mdExpand: "<"
        }
    });

module.exports = "mdReadmore";
