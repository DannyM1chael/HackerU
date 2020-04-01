// Using `this` inside an object
// The object has functions created three different ways 
// What will be the result of the three log statements?

const circle = {
    radius: 10,
    circumference: function () {
        return (2 * Math.PI * this.radius); // 20 * PI
    },
    diameter() {
        return (this.radius * 2); // 20
    },
    area: () => {
        return (Math.PI * Math.PI * this.radius); // NaN
    }
}
console.log(circle.area()); //
console.log(circle.diameter()); // 
console.log(circle.circumference()); // 