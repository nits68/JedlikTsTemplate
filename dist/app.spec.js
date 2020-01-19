"use strict";
test("hello world", function () {
    var str = "Hello, WORLD!";
    expect(typeof str).toBe("string");
    expect(str.toLocaleLowerCase()).toBe("hello, world!");
    expect(str.split(" ")[0]).toBe("Hello,");
    expect(str.split(" ")[1]).toBe("WORLD!");
});
test("fibonacci series", function () {
    var array = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    expect(array).toBeInstanceOf(Array);
    expect(array.every(function (n) { return n > 0; })).toBe(true);
    expect(array).toContain(1);
    expect(array).toContain(2);
});
//# sourceMappingURL=app.spec.js.map