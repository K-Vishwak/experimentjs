// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. 
// Enum is defined using enum keyword.
// Numeric Enums.
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 1. Numeric is not initialized hence starts from 0 and Left becomes 2.
console.log(Direction.Left); // 2
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// 2. Numeric is not initialized with 1 hence starts from 1 and Left becomes 3.
console.log(Direction1.Left); // 3
// 3. Duplicate Identified is not allower in Enum.
// 4. Using an enum:
// i. Access any member as the property of enum itself.
console.log(Direction1.Up);
// ii. Declare types using the name of the enum.
(function myFunc(word, direction) {
    console.log(word + ' ' + direction);
})('word', Direction.Down);
// 5. Enum without initializers need to be first.
function getConstantValue() {
    return 1;
}
var Direction2;
(function (Direction2) {
    Direction2[Direction2["B"] = 0] = "B";
    Direction2[Direction2["A"] = getConstantValue()] = "A";
})(Direction2 || (Direction2 = {}));
// A & B shoudn't be upside down.
console.log(Direction2.A);
// 6. Enums without initializers may come after initialized enums with numeric constants or other enum constants.
var Direction3;
(function (Direction3) {
    Direction3[Direction3["A"] = 2] = "A";
    Direction3[Direction3["B"] = 2] = "B";
    Direction3[Direction3["C"] = 3] = "C";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.C);
// But not like below.
// enum Direction4 {
//     A = 2,
//     B = getConstantValue(), 
//     C
// }
// String Enums: Each has to be constant-initialized with a string literal
var StringEnum;
(function (StringEnum) {
    StringEnum["A"] = "a";
    StringEnum["B"] = "b";
    StringEnum["C"] = "c";
    StringEnum["D"] = "d";
})(StringEnum || (StringEnum = {}));
// Heterogeneous enums: Mix of numeric and string enums.
var HeterogeneousEnum;
(function (HeterogeneousEnum) {
    HeterogeneousEnum["No"] = "0";
    HeterogeneousEnum["Yes"] = "YES";
})(HeterogeneousEnum || (HeterogeneousEnum = {}));
// Each enum member has a value associated with it which can be either constant or computed.
var constNComputeEnum;
(function (constNComputeEnum) {
    constNComputeEnum[constNComputeEnum["first"] = 1] = "first";
    constNComputeEnum[constNComputeEnum["second"] = 1] = "second";
    constNComputeEnum[constNComputeEnum["third"] = 3] = "third";
    constNComputeEnum[constNComputeEnum["fourth"] = +true] = "fourth";
    constNComputeEnum[constNComputeEnum["fifth"] = 0] = "fifth"; // binary operator applied.
})(constNComputeEnum || (constNComputeEnum = {}));
// 4. Computed values are not permitted in an enum with string valued members.
// enum constNComputeEnum {
//     first = 1,
//     second = 'second',
//     third = constNComputeEnum.first,
// }
// It is a compile time error for constant enum expressions to be evaluated to NaN or Infinity.
var NaNNInfinity;
(function (NaNNInfinity) {
    NaNNInfinity[NaNNInfinity["first"] = NaN] = "first";
    NaNNInfinity[NaNNInfinity["second"] = Infinity] = "second";
    NaNNInfinity[NaNNInfinity["third"] = NaN] = "third";
    NaNNInfinity[NaNNInfinity["fourth"] = Infinity] = "fourth";
})(NaNNInfinity || (NaNNInfinity = {}));
console.log(NaNNInfinity.first);
// In All other cases enum memeber considered computed.
// Enums at runtime
// Enums are real objects that exist at runtime.
// Enums at compile time.
// Reverse Mapping
// Numeric enum members can get a reverse mapping from enum values to enum names.
var reverseMappingEnum;
(function (reverseMappingEnum) {
    reverseMappingEnum[reverseMappingEnum["A"] = 0] = "A";
})(reverseMappingEnum || (reverseMappingEnum = {}));
var a = reverseMappingEnum.A;
console.log(reverseMappingEnum[a]); // A
// Ambient Enums
// Ambient enums are used to describe the shape of already existing enum types.
// Regular Enums: Member that doesn't have initializer will be considered const if its preceding enum member considered const. 
// Ambient Enums: Member that doesn't have initializer will be considered as computed.
var AmbientEnum;
(function (AmbientEnum) {
    AmbientEnum[AmbientEnum["A"] = 1] = "A";
    AmbientEnum[AmbientEnum["B"] = 2] = "B";
    AmbientEnum[AmbientEnum["C"] = 2] = "C";
})(AmbientEnum || (AmbientEnum = {}));
console.log(AmbientEnum.B);
var ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
// Union Enums and enum member types.
// the special subset of const enum members that aren't calculated are literal enum members.
// A literal enum member is a constant enum member with no initialized value, or with values that are initialized to
// any string literal (e.g. "foo", "bar, "baz")
// any numeric literal (e.g. 1, 100)
// a unary minus applied to any numeric literal (e.g. -1, -100)
// The first is that enum members also become types as well!
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Square,
    //   Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
    radius: 100,
};
// The other change is that enum types themselves effectively become a union of each enum member. 
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
function f(x) {
    if (x !== E.Foo || x !== E.Bar) {
        //   This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
        //
    }
}
//# sourceMappingURL=arrow.js.map