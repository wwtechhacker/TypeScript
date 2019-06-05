/// <reference path='fourslash.ts' />

// @allowJs: true

// @Filename: /a.js
////module.exports = 0;
/////** [|@typedef {number} [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}Foo|]|] */
////const dummy = 0;

// @Filename: /b.js
/////** @type {import('./a').[|Foo|]} */
////const x = 0;

verify.singleReferenceGroup("type Foo = number", test.rangesByText().get("Foo"));
