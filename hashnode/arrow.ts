// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. 
// Enum is defined using enum keyword.

// Numeric Enums.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 1. Numeric is not initialized hence starts from 0 and Left becomes 2.
console.log(Direction.Left); // 2

enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right,
}

// 2. Numeric is not initialized with 1 hence starts from 1 and Left becomes 3.
console.log(Direction1.Left); // 3

// 3. Duplicate Identified is not allower in Enum.

// 4. Using an enum:
// i. Access any member as the property of enum itself.
console.log(Direction1.Up);
// ii. Declare types using the name of the enum.
(function myFunc(word, direction: Direction) {
    console.log(word + ' ' + direction);
})('word', Direction.Down);

// 5. Enum without initializers need to be first.
function getConstantValue() {
    return 1;
}

enum Direction2 {
    B,
    A = getConstantValue(),
}
// A & B shoudn't be upside down.

console.log(Direction2.A);

// 6. Enums without initializers may come after initialized enums with numeric constants or other enum constants.
enum Direction3 {
    A = 2,
    B = A,
    C
}

console.log(Direction3.C);

// But not like below.
// enum Direction4 {
//     A = 2,
//     B = getConstantValue(), 
//     C
// }

// String Enums: Each has to be constant-initialized with a string literal
enum StringEnum {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
}

// Heterogeneous enums: Mix of numeric and string enums.
enum HeterogeneousEnum {
    No = 0,
    Yes = 'YES'
}

// Each enum member has a value associated with it which can be either constant or computed.
enum constNComputeEnum {
    first = 1,
    second = first, // reference to previously defined constant enum member.
    third = (1 + 2), // parenthesized constant enum expression,
    fourth = +true, // Unary operator applied.
    fifth = 1 & 2 // binary operator applied.
}


// 4. Computed values are not permitted in an enum with string valued members.
// enum constNComputeEnum1 {
//     first = 1,
//     second = 'second',
//     third = constNComputeEnum.first,
// }

// It is a compile time error for constant enum expressions to be evaluated to NaN or Infinity.
enum NaNNInfinity {
    first = 0 / 0,
    second = 1 / 0,
    third = NaN,
    fourth = Infinity
}

console.log(NaNNInfinity.first);

// In All other cases enum memeber considered computed.

// Enums at runtime
// Enums are real objects that exist at runtime.

// Enums at compile time.

// Reverse Mapping
// Numeric enum members can get a reverse mapping from enum values to enum names.
enum reverseMappingEnum {
    A
}

const a = reverseMappingEnum.A;
console.log(reverseMappingEnum[a]); // A

// const enums.
// To avoid paying the cost of extra generated code and additional indirection when accessing enum values, it’s possible to use const enums.
// There are completely removed after compilation.
// const enums can't have computed members.
// Do not use const enums at all.
const enum reverseMappingEnum1 {
    A
}

// Ambient Enums
// Ambient enums are used to describe the shape of already existing enum types.
// Regular Enums: Member that doesn't have initializer will be considered const if its preceding enum member considered const. 
// Ambient Enums: Member that doesn't have initializer will be considered as computed.
enum AmbientEnum {
    A = 1,
    B,
    C = 2,
}

console.log(AmbientEnum.B);

//Object vs Enums.
// Typescript Enum === Javascript object with as const.
const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }
   
  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;


// Union Enums and enum member types.
// the special subset of const enum members that aren't calculated are literal enum members.
// A literal enum member is a constant enum member with no initialized value, or with values that are initialized to
// any string literal (e.g. "foo", "bar, "baz")
// any numeric literal (e.g. 1, 100)
// a unary minus applied to any numeric literal (e.g. -1, -100)

// The first is that enum members also become types as well!

enum ShapeKind {
    Circle,
    Square,
  }
   
  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }
   
  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }
   
//   let c: Circle = {
//     kind: ShapeKind.Square,
// //   Type 'ShapeKind.Square' is not assignable to type 'ShapeKind.Circle'.
//     radius: 100,
//   };  

  // The other change is that enum types themselves effectively become a union of each enum member. 
//   enum E {
//     Foo,
//     Bar,
//   }
   
//   function f(x: E) {
//     if (x !== E.Foo || x !== E.Bar) {
// //   This condition will always return 'true' since the types 'E.Foo' and 'E.Bar' have no overlap.
//       //
//     }
//   }