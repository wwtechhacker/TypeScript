/// <reference path='fourslash.ts' />

// @Filename: /a.ts
////[|export { [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}x|] };|]

verify.singleReferenceGroup("export x", test.rangesByText().get("x"));
