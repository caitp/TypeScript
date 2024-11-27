//// [tests/cases/compiler/classFieldForceTransform.ts] ////

//// [classFieldForceTransform.ts]
class A extends class Expr {} {
    static publicField = 12;
    static #privateField = 13;
    publicField = 14;
    #privateField = 15;
}
class B extends Number {
    static publicField = 12;
    static #privateField = 13;
    publicField = 14;
    #privateField = 15;
}
class C extends Array {
    static publicField = 12;
    static #privateField = 13;
    publicField = 14;
    #privateField = 15;
}

class D {
    static publicField = 12;
    static #privateField = 13;
    publicField = 14;
    #privateField = 15;
}
class E extends D {
    static publicField = 12;
    static #privateField = 13;
    publicField = 14;
    #privateField = 15;
}


//// [classFieldForceTransform.js]
var _a, _A_privateField, _A_privateField_1, _b, _B_privateField, _B_privateField_1, _c, _C_privateField, _C_privateField_1, _d, _D_privateField, _D_privateField_1, _e, _E_privateField, _E_privateField_1;
class A extends class Expr {
} {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "publicField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 14
        });
        _A_privateField_1.set(this, 15);
    }
    static #privateField = 13;
    #privateField = 15;
}
_a = A, _A_privateField_1 = new WeakMap();
Object.defineProperty(A, "publicField", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 12
});
_A_privateField_1.set(A, 13);
class B extends Number {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "publicField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 14
        });
        _B_privateField_1.set(this, 15);
    }
    static #privateField = 13;
    #privateField = 15;
}
_b = B, _B_privateField_1 = new WeakMap();
Object.defineProperty(B, "publicField", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 12
});
_B_privateField_1.set(B, 13);
class C extends Array {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "publicField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 14
        });
        _C_privateField_1.set(this, 15);
    }
    static #privateField = 13;
    #privateField = 15;
}
_c = C, _C_privateField_1 = new WeakMap();
Object.defineProperty(C, "publicField", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 12
});
_C_privateField_1.set(C, 13);
class D {
    constructor() {
        Object.defineProperty(this, "publicField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 14
        });
        _D_privateField_1.set(this, 15);
    }
    static #privateField = 13;
    #privateField = 15;
}
_d = D, _D_privateField_1 = new WeakMap();
Object.defineProperty(D, "publicField", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 12
});
_D_privateField_1.set(D, 13);
class E extends D {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "publicField", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 14
        });
        _E_privateField_1.set(this, 15);
    }
    static #privateField = 13;
    #privateField = 15;
}
_e = E, _E_privateField_1 = new WeakMap();
Object.defineProperty(E, "publicField", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 12
});
_E_privateField_1.set(E, 13);
