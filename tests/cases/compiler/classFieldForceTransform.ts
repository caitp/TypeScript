// @target: esnext
// @emitLegacyClassFields: true
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
