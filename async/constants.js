exports.HOOKS = [
	`it`,
	`xit`,
	`before`,
	`beforeEach`,
	`after`,
	`afterEach`,
	`suite`,
	`test`,
];

// Commands here will have async added to them
exports.EXTRA_COMMANDS = [
	`waitUntil`,
	`map`,
];

// Store any of your getters here that need to be await'd
// e.g. for things like $$(`.foo)
// Adding them here will add await in front of the call where it needs to be
exports.AWAIT_CUSTOM_GETTERS = [];

// Exclude adding async / await to any methods in your local code
// Add to this based on the needs of your app
// Add only the method name here
// Don't need to add the class name at all.
// If there are same name methods across classes the code could be modified to take that into account but not a big deal
exports.EXCLUDE_METHODS = [];

// Exclude any custom objects to not await on
exports.EXCLUDE_OBJECTS = [
	`moment`,
	`queryString`,
	`query_string`,
	`Array`,
	`Number`,
	`String`,
	`Object`,
	`path`,
	`util`,
	`fs`,
	`require`,
	`describe`,
	`xdescribe`,
	`expect`,
	`expectChai`,
];

// Don't await on built in js functions/methods
exports.JS_BUILT_IN = [
	`Error`,
	`includes`,
	`trim`,
	`constructor`,
	`toExponential`,
	`toFixed`,
	`toLocaleString`,
	`toPrecision`,
	`toString`,
	`valueOf`,
	`toSource`,
	`toString`,
	`valueOf`,
	`charAt`,
	`charCodeAt`,
	`concat`,
	`indexOf`,
	`lastIndexOf`,
	`localeCompare`,
	`length`,
	`match`,
	`replace`,
	`search`,
	`slice`,
	`split`,
	`substr`,
	`substring`,
	`toLocaleLowerCase`,
	`toLocaleUpperCase`,
	`toLowerCase`,
	`toString`,
	`toUpperCase`,
	`valueOf`,
	`anchor`,
	`big`,
	`blink`,
	`bold`,
	`fixed`,
	`fontcolor`,
	`fontsize`,
	`italics`,
	`link`,
	`small`,
	`strike`,
	`sub`,
	`sup`,
	`concat`,
	`every`,
	`filter`,
	`forEach`,
	`indexOf`,
	`join`,
	`lastIndexOf`,
	`map`,
	`pop`,
	`push`,
	`reduce`,
	`reduceRight`,
	`reverse`,
	`shift`,
	`slice`,
	`some`,
	`toSource`,
	`sort`,
	`splice`,
	`toString`,
	`unshift`,
	`Date`,
	`getDate`,
	`getDay`,
	`getFullYear`,
	`getHours`,
	`getMilliseconds`,
	`getMinutes`,
	`getMonth`,
	`getSeconds`,
	`getTime`,
	`getTimezoneOffset`,
	`getUTCDate`,
	`getUTCDay`,
	`getUTCFullYear`,
	`getUTCHours`,
	`getUTCMilliseconds`,
	`getUTCMinutes`,
	`getUTCMonth`,
	`getUTCSeconds`,
	`getYear`,
	`setDate`,
	`setFullYear`,
	`setHours`,
	`setMilliseconds`,
	`setMinutes`,
	`setMonth`,
	`setSeconds`,
	`setTime`,
	`setUTCDate`,
	`setUTCFullYear`,
	`setUTCHours`,
	`setUTCMilliseconds`,
	`setUTCMinutes`,
	`setUTCMonth`,
	`setUTCSeconds`,
	`setYear`,
	`toDateString`,
	`toGMTString`,
	`toLocaleDateString`,
	`toLocaleFormat`,
	`toLocaleString`,
	`toLocaleTimeString`,
	`toSource`,
	`toString`,
	`toTimeString`,
	`toUTCString`,
	`valueOf`,
	`abs`,
	`acos`,
	`asin`,
	`atan`,
	`atan2`,
	`ceil`,
	`cos`,
	`exp`,
	`floor`,
	`log`,
	`max`,
	`min`,
	`pow`,
	`random`,
	`round`,
	`sin`,
	`sqrt`,
	`tan`,
	`toSource`,
	`exec`,
	`test`,
	`toSource`,
	`toString`,
	`parseInt`,
	`parseFloat`,
	`isNaN`,
];
